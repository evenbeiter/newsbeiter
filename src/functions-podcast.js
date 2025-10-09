//    PODCAST
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetList(siteName,t){
  try{url=`${preStr}${encodeURIComponent('https://backend.podscribe.ai/api/series/v2/'+t+'/episodes?archivedIncludedFilter=false&count=50&cursor='+cursor+'&episodeTitle=&seriesId='+t)}`;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.next_cursor;
  for (let h of str.data){
    // var pdId;
    // if (h.episodes[0].hasTranscription===true){
    //   if (h.episodes[0].transcriptionId!==undefined){pdId=h.episodes[0].transcriptionId}
    //   else {
    //     url=`${preStr}https://backend.podscribe.ai/api/episode?id=${h.id}`;
    //     res=await fetch(url);
    //     str=await res.text();
    //     pdId=str.match(/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}","Done"/g)?.[0]?.replace('","Done"','') || '';
    //   }
    // } else {pdId='';}
    items.push([h.id,h.title,h.uploadedAt,h.duration,h.episodes[0].hasTranscription,h.episodes[0].transcriptionId])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="pdGetContent(this.id,'${h[0]}',${h[4]},'${h[5]}')">${h[1]}<br><span class="time">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p><div id="${h[0]}" class="content">
    <div class="pt-2 sepia">
      <table class="table table-auto fs11 p-0 sepia">
        <tbody id="lines-${h[0]}"></tbody>
      </table>
    </div>
    </div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    PODCAST GET CONTENT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetContent(clickedId,id,hasTranscription,transcriptionId){

  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    cEl.style.display='block';
    if (cEl.innerText.length>10) return; // already got transcription in cEl

    try{
    let res=await fetch(`${preStr}https://backend.podscribe.ai/api/episode?id=${id}`);
    let str=await res.text();
    audio.src=str.match(/https:\/\/jfe93e.s3[\s\S]*?.mp3/g)?.[0];
    if (!hasTranscription || transcriptionId==='') cEl.innerHTML=`<p>尚未提供文稿</p>`;
    if (hasTranscription && transcriptionId==='undefined') transcriptionId=str.match(/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}","Done"/g)?.[0]?.replace('","Done"','') || '';

    if (transcriptionId.length>3){
      loading.style.display='block';
      res=await fetch(`https://podscribe-transcript.s3.amazonaws.com/transcripts/${transcriptionId}.json`);
      str=await res.json();
      const ts=word2sentence(str);
      getLinesTable(ts,id);
      loading.style.display='none';
    }
    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}

  } else {
    cEl.style.display='none';
    // const e = window.event;
    // const tbody = e.target.closest('tbody');
    // if (tbody && tbody.id && tbody.id.startsWith('lines-')) return;
    // try{cEl.previousElementSibling.previousElementSibling.scrollIntoView()}catch{document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
  }

}

// 假設綁定 click 事件到整個表格或 document
// document.addEventListener('click', function(e) {
//   const tbody = e.target.closest('tbody');
//   if (tbody && tbody.id && tbody.id.startsWith('lines-')) return;
//   tbody.parentElement.parentElement.parentElement.style.display='none';
//   try{tbody.parentElement.parentElement.parentElement.previousElementSibling.scrollIntoView()}catch{document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
// });

function word2sentence(raw){
  const sentences = [];
  let currentSentence = [];
  let currentStart = null;

  for (const item of raw) {
    if (currentStart === null) currentStart = item.startTime;
    currentSentence.push(item.word);

    const word = item.word;
    // 嚴格判斷句子結尾
    const endsWithExclamationOrQuestion = /[!?]$/.test(word);
    const endsWithPeriod = /\.$/.test(word);
    // 判斷小數點情況: 如果是數字前後有數字，則不是句尾
    const isDecimal = /^\d+\.$/.test(word) && currentSentence.length > 1 && /\d$/.test(currentSentence[currentSentence.length-2]);

    if ((endsWithExclamationOrQuestion) || (endsWithPeriod && !isDecimal)) {
      sentences.push({
        startTime: currentStart,
        sentence: currentSentence.join(" ").replace(/\s([,.!?])/g, "$1")
      });
      currentSentence = [];
      currentStart = null;
    }
  }
  // 若最後一組沒有結尾符號，也當作一句
  if (currentSentence.length > 0) {
    sentences.push({
      startTime: currentStart,
      sentence: currentSentence.join(" ").replace(/\s([,.!?])/g, "$1")
    });
  }
  return sentences;
}

function getLinesTable(ss,id) {
  var k = '';
  var j = 0;
  for (let s of ss){
    k+=`<tr>
    <td class="fs07 fw-lighter text-nowrap d-none">${++j}</td>
    <td class="d-none">${s.startTime}</td>
    <td class="position-relative">${s.sentence}
      <button type="button" class="btn btn-light position-relative sepia opacity-25 position-absolute bottom-0 end-0 mb-1" onclick="getPodcastTranslate(this)">
        ${svgTranslate}
      </button>
    </td>
    </tr>`;
  }
  document.querySelector(`#lines-${id}`).innerHTML=k;
}

async function getPodcastTranslate(btn) {
  const a = btn.closest('td');
  if (a.innerText!=='' && cnTest(a.innerText)!==true)
  a.innerHTML += `<br><span class="fs09em">${await translate(a.innerHTML)}</span>`;
}


//    OPERATION
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function rw5() {
  // const audio = document.getElementById('ap');
  const btnPlay = document.getElementById('btnPlay');
  audio.currentTime = Math.max(0, audio.currentTime - 5); // 避免小於 0
  audio.play();
  btnPlay.innerHTML = svgPause;
}

function fw5() {
  // const audio = document.getElementById('ap');
  const btnPlay = document.getElementById('btnPlay');
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); // 避免超出音檔長度
  audio.play();
  btnPlay.innerHTML = svgPause;
}

function closeContent(){
  document.querySelectorAll('[id]').forEach(el=>{
    if (/^\d+$/.test(el.id)){el.style.display='none';
    document.body.scrollTop = 0;document.documentElement.scrollTop = 0;
  }
  });
}


// document.addEventListener("DOMContentLoaded", () => {

//   const autoNextSwitch = document.getElementById("autoNextSwitch");
//   let autoNext = autoNextSwitch.checked; // 根據預設是否 checked

//   autoNextSwitch.addEventListener("change", (e) => {
//     autoNext = e.target.checked;
//   });

//   // 監聽表格列點擊事件
//   document.addEventListener("click", async (e) => {
//     const row = e.target.closest("#lines tr");
//     if (!row) return;

//     // 清除所有列的樣式
//     document.querySelectorAll("#lines tr").forEach(tr => {
//       tr.style.color = "";
//       tr.style.backgroundColor = "";
//     });

//     // 標記被點擊的列
//     row.style.color = "green";
//     row.style.backgroundColor = "#E5E4E2";

//     // 取得 startTime 與 endTime
//     const startCell = row.children[1];
//     const nextRow = row.nextElementSibling;
//     const nextCell = nextRow ? nextRow.children[1] : null;

//     const playbackRate = 1;
//     const startTime = Number(startCell ? startCell.textContent : 0);
//     const endTime = Number(nextCell ? nextCell.textContent : 0);

//     await startPlay(startTime, endTime, row);
//   });

//   async function startPlay(playbackRate,startTime, endTime, activeRow) {
//     let audio = document.getElementById("ap");

//     // const vp = document.getElementById("vp");
//     // if (vp && vp.offsetParent !== null) {
//     //   audio = vp;
//     // } else {
//     //   const plyrVideo = document.querySelector(".plyr--video");
//     //   if (plyrVideo && plyrVideo.offsetParent !== null && typeof player !== "undefined") {
//     //     audio = player;
//     //   }
//     // }

//     // 確保 duration 可用
//     let dr = audio.duration;
//     while (isNaN(dr) || dr === Infinity) {
//       await new Promise(resolve => setTimeout(resolve, 200));
//       dr = audio.duration;
//     }

//     audio.playbackRate= playbackRate;
//     audio.currentTime = startTime;
//     audio.play();

//     activeRow.scrollIntoView({ behavior: "smooth", block: "center" });

//     audio.ontimeupdate = function () {
//       if (audio.currentTime > endTime) {
//         audio.pause();
//         audio.currentTime = startTime;

//         // if (autoNext) {
//         //   const nextRow = activeRow.nextElementSibling;
//         //   if (nextRow) {
//         //     nextRow.click(); // 自動觸發下一行播放
//         //   }
//         // }

//         if (autoNext) {
//           // 忽略逐句播放，直接播放整段音檔
//           if (audio.paused) {
//             audio.play();
//           }
//           return;
//         }
//       }

//       // 同步高亮
//       highlightCurrentRow(audio.currentTime);
//     };
//   }

//   function highlightCurrentRow(currentTime) {
//     const rows = document.querySelectorAll("#lines tr");
//     for (let i = 0; i < rows.length - 1; i++) {
//       const start = Number(rows[i].children[1]?.textContent || 0);
//       const end = Number(rows[i + 1].children[1]?.textContent || Infinity);
//       const row = rows[i];

//       if (currentTime >= start && currentTime < end) {
//         rows.forEach(tr => {
//           tr.style.color = "";
//           tr.style.backgroundColor = "";
//         });
//         row.style.setProperty("color", "green", "important");
//         row.style.setProperty("background-color", "#E5E4E2", "important");

//         const rect = row.getBoundingClientRect();
//         if (rect.top < 0 || rect.bottom > window.innerHeight) {
//           row.scrollIntoView({ behavior: "smooth", block: "center" });
//         }
//         break;
//       }
//     }
//   }

// });



document.addEventListener("DOMContentLoaded", () => {
  // const audio = document.getElementById("ap");
  const speedSlider = document.getElementById("speedSlider");
  const speedLabel = document.getElementById("speedLabel");
  const modeBtn = document.getElementById("modeBtn");
  // const autoNextSwitch = document.getElementById("autoNextSwitch");

  // 初始設定
  audio.playbackRate = parseFloat(speedSlider.value);
  speedLabel.textContent = audio.playbackRate.toFixed(1) + "x";

  let mode = "continuous"; // 模式: continuous / single / loop
  // let autoNext = autoNextSwitch.checked;

  // 播放速率 slider
  speedSlider.addEventListener("input", () => {
    audio.playbackRate = parseFloat(speedSlider.value);
    speedLabel.textContent = audio.playbackRate.toFixed(1) + "x";
  });

  // 切換播放模式
  modeBtn.addEventListener("click", () => {
    if (mode === "continuous") mode = "single";
    else if (mode === "single") mode = "loop";
    else mode = "continuous";

    let label = "";
    if (mode === "continuous") label = "連續播放";
    else if (mode === "single") label = "單句播放";
    else label = "單句循環";

    modeBtn.textContent = label;
  });

  // Switch 開關
  // autoNextSwitch.addEventListener("change", (e) => {
  //   autoNext = e.target.checked;
  // });

  // 監聽點擊表格列
  document.addEventListener("click", async (e) => {
    if (e.target.closest('button')) return;
    const row = e.target.closest("[id^='lines-'] tr");
    if (!row) return;

    const startCell = row.children[1];
    const nextRow = row.nextElementSibling;
    const nextCell = nextRow ? nextRow.children[1] : null;

    const startTime = Number(startCell ? startCell.textContent : 0);
    const endTime = Number(nextCell ? nextCell.textContent : audio.duration);
    console.log('start: '+startTime+'; end: '+endTime);

    // 清除舊樣式
    document.querySelectorAll("[id^='lines-'] tr").forEach(tr => {
      tr.style.setProperty("color", "", "important");
      tr.style.setProperty("background-color", "", "important");
    });

    row.style.setProperty("color", "green", "important");
    row.style.setProperty("background-color", "#E5E4E2", "important");
    row.scrollIntoView({ behavior: "smooth", block: "center" });

    // 播放邏輯
    if (mode === "continuous") {
      audio.currentTime = startTime;
      audio.play();
      audio.ontimeupdate = () => highlightCurrentRow(audio.currentTime);
    } else {
      audio.currentTime = startTime;
      audio.play();
      audio.ontimeupdate = function () {
        highlightCurrentRow(audio.currentTime);

        if (audio.currentTime >= endTime) {
          if (mode === "single") audio.pause();
          else if (mode === "loop") audio.currentTime = startTime; // 單句循環

          // if (mode === "single" && autoNext && nextRow) {
          //   nextRow.click(); // 自動跳下一行
          // }
        }
      };
    }
  });

  function highlightCurrentRow(currentTime) {
    const rows = document.querySelectorAll("#lines tr");
    for (let i = 0; i < rows.length; i++) {
      const start = Number(rows[i].children[1]?.textContent || 0);
      const end = Number(rows[i + 1]?.children[1]?.textContent || audio.duration);
      if (currentTime >= start && currentTime < end) {
        rows.forEach(tr => {
          tr.style.setProperty("color", "", "important");
          tr.style.setProperty("background-color", "", "important");
        });
        rows[i].style.setProperty("color", "green", "important");
        rows[i].style.setProperty("background-color", "#E5E4E2", "important");

        const rect = rows[i].getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          rows[i].scrollIntoView({ behavior: "smooth", block: "center" });
        }
        break;
      }
    }
  }
});


const svgTranslate=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
  <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
  <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
</svg>
`;

const svgPlay=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>
`;

const svgPause=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>
`;

const continuous=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16">
  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
`;

const single=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square" viewBox="0 0 16 16">
  <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
`;

const loop=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-repeat-1" viewBox="0 0 16 16">
  <path d="M11 4v1.466a.25.25 0 0 0 .41.192l2.36-1.966a.25.25 0 0 0 0-.384l-2.36-1.966a.25.25 0 0 0-.41.192V3H5a5 5 0 0 0-4.48 7.223.5.5 0 0 0 .896-.446A4 4 0 0 1 5 4zm4.48 1.777a.5.5 0 0 0-.896.446A4 4 0 0 1 11 12H5.001v-1.466a.25.25 0 0 0-.41-.192l-2.36 1.966a.25.25 0 0 0 0 .384l2.36 1.966a.25.25 0 0 0 .41-.192V13h6a5 5 0 0 0 4.48-7.223Z"/>
  <path d="M9 5.5a.5.5 0 0 0-.854-.354l-1.75 1.75a.5.5 0 1 0 .708.708L8 6.707V10.5a.5.5 0 0 0 1 0z"/>
</svg>
`;




