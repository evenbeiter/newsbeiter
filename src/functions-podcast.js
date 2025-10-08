//    PODCAST
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetList(siteName,t){
  try{url=`${preStr}https://backend.podscribe.ai/api/series/v2/${t}/episodes?archivedIncludedFilter=false&count=50&cursor=${cursor}&episodeTitle=&seriesId=${t}`;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.next_cursor;
  for (let h of str.data){
    var pdId;
    if (h.episodes[0].hasTranscription===true){
      if (h.episodes[0].transcriptionId!==undefined){pdId=h.episodes[0].transcriptionId}
      else {
        url=`${preStr}https://backend.podscribe.ai/api/episode?id=${h.id}`;
        res=await fetch(url);
        str=await res.text();
        pdId=str.match(/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}","Done"/g)?.[0]?.replace('","Done"','') || '';
      }
    } else {pdId='';}
    items.push([h.id,h.title,h.uploadedAt,h.duration,pdId])
  }
  for (let h of items){
    html+=`<p class="title" onclick="pdGetContent(this.id,'${h[0]}','${h[4]}')">${h[1]}<br><span class="time">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p><div id="${h[0]}" class="content" onclick="pdGetContent(this.id,'${h[0]}','${h[4]}')"></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    PODCAST GET CONTENT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetContent(clickedId,id,transcriptionId){
  toc.style.display='none';
  let res=await fetch(`${preStr}https://backend.podscribe.ai/api/episode?id=${id}`);
  let str=await res.text();
  const audioUrl=str.match(/https:\/\/jfe93e.s3[\s\S]*?.mp3/g)[0];

  res=await fetch(`https://podscribe-transcript.s3.amazonaws.com/transcripts/${transcriptionId}.json`);
  str=await res.json();
  const ts=word2sentence(str);console.log(ts);
  getLinesTable(ts);

  // var cEl=document.getElementById(id);
  // if (cEl.style.display=='none' || cEl.style.display==''){
  //   loading.style.display='block';
  //   cEl.style.display='block';
  //   var html = '';
  //   cEl.innerHTML=html;
  //   const video = document.getElementById('video-'+id);
  //   if (video.canPlayType('application/vnd.apple.mpegurl')) {
  //       video.src = m3u8Url;
  //       video.play();
  //   } else if (Hls.isSupported()) {
  //       const hls = new Hls();
  //       hls.loadSource(m3u8Url);
  //       hls.attachMedia(video);
  //       hls.on(Hls.Events.MANIFEST_PARSED, () => {
  //           video.play();
  //       });
  //   } else {
  //       console.error("HLS is not supported in this browser.");
  //   }

  //   document.getElementById('video-'+id).parentElement.previousElementSibling.firstChild.setAttribute('style', 'display: none !important;');
  //   loading.style.display='none';
  // } else {
  //     var e=window.event;
  //     if (e && e.target.tagName==='VIDEO'){return}else{
  //     cEl.style.display='none';
  //     if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
  //     try{cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
  //     cEl.previousElementSibling.previousElementSibling.scrollIntoView()}catch{document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
  //   }
  // }

}

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

function getLinesTable(ss) {
  var k = '';
  var j = 0;
  for (let s of ss){
    k+=`<tr><td class="fs07 fw-lighter">${++j}</td><td class="d-none">${s.startTime}</td><td>${s.sentence}</td></tr>`;
  }
  lines.innerHTML=k;
}


//    OPERATION
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function toggleTOC(){toc.style.display = toc.style.display === 'block' ? 'none' : 'block';}

function rw5() {
  const audio = document.getElementById('ap');
  const btnPlay = document.getElementById('btnPlay');
  audio.currentTime = Math.max(0, audio.currentTime - 5); // 避免小於 0
  audio.play();
  btnPlay.innerHTML = svgPause;
}

function fw5() {
  const audio = document.getElementById('ap');
  const btnPlay = document.getElementById('btnPlay');
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); // 避免超出音檔長度
  audio.play();
  btnPlay.innerHTML = svgPause;
}


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
