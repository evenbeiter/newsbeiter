//    EUDICT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function euGetList(siteName,t) {

  try {

  if (t===''){
    const res = await fetch('https://dict.eudic.net/home/HomePageList');
    const str = await res.json();
    for (let h of str.ting) {
      items.push([h.uuid,h.title,h.update_time])
    }
  } else {
    const res = await fetch(preStr+'https://mob2015.kekenet.com/keke/mobile/index.php', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    const contentData = data.IsDecode == 1 ? await decryptAES(data.Data) : data.Data;

    for (let h of contentData.list){
      items.push([h.id,h.title,h.updatetime,h.mp3len])
    }
  }

  for (let h of items){
    html+=`<p class="title fs12" onclick="keGetContent('${h[0]}')">${s2t(h[1])}<br><span class="time">${h[2]}
     ${h[3]
      ?`| </span><span class="fs10 fw-bold">${h[3]}`
      :''}
     </span></p><div id="${h[0]}" class="content">
    <div class="pt-2 sepia">
      <table class="table table-auto fs11 p-0 sepia">
        <tbody id="lines-${h[0]}"></tbody>
      </table>
    </div>
    </div><hr>`;
  }

  }catch{html='<p>尚無內容</p>'}

  ap.style.display='block';vp.style.display='none';ap.src='';vp.src='';

  return html;
}

async function euGetContent(id){
  contentId = id;
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    cEl.style.display='block';
    loading.style.display='block';

    if (cEl.innerText.length>10) return; // already got transcription in cEl

    try{

    const res = await fetch('https://dict.eudic.net/webting/desktopplay?id=');
    const str = await res.text();
    const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");

    const scripts = doc.querySelectorAll('script');
    const raw = Array.from(scripts).filter(s=>s.textContent.includes('translate'));

    const getVarValue = (text, varName) => {
      const regex = new RegExp(`(?:var|let|const)\\s+${varName}\\s*=\\s*([^;]+)`);
      const match = text.match(regex);
      if (!match) return null;

      let value = match[1].trim();
      // 嘗試移除引號
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      return value;
    };

    const contentData = JSON.parse(getVarValue(raw[0].innerText, "translate"));
    const rawLrc = contentData.subtitles;

    let mediaSrc = 'https://api.frdic.com/api/v3/media/mp3/'+id;
    if (doc.querySelectorAll('audio').length!==0) {
      media=ap;
      ap.src= mediaSrc;vp.src='';
      ap.style.display='block';vp.style.display='none';
    } else if (doc.querySelectorAll('video').length!==0) {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';
    }

    let ts=[];
    if (rawLrc.length>0){
      for (let s of rawLrc){
        ts.push({
          startTime: cvtMMSS2S(s.timestamps[0].slice(1,-1)),
          sentence: `${s.origintext}<br>${s2t(s.translation)}`
        });
      }
    } 

    if (contentData.phrasehints.length>0) {
      for (let s of contentData.phrasehints){
        ts.push({
          startTime: null,
          sentence: `${s.phrase}<br>${s2t(s.exp)}<br>${s.context}`
        });
      }
    }

    getLinesTable(ts,id,true);
    loading.style.display='none';

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}

  } else {
    cEl.style.display='none';
  }
}

function cvtMMSS2S(text){
  const ms = text.split(':');
  return ms[0]*60 + ms[1]*1;
}


//    KEKENET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function keGetList(siteName,t) {
  const payload = {
    Method: "web_waikan_wknewslist",
    Params: { catid: t, PageSize:20, PageIndex:rr, Sort: "inputtime desc" },
    Token: "",
    Terminal: 13,
    Version: "4.0",
    UID: "",
    AppFlag: 18,
    Sign: "",
    ApTime: Date.now(),
    ApVersionCode: 100
  };

  try {
  const res = await fetch(preStr+'https://mob2015.kekenet.com/keke/mobile/index.php', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
  });
  const data = await res.json();

  if (data.Code !== 200) throw new Error(data.Msg || "API 返回錯誤");

  const contentData = data.IsDecode == 1 ? await decryptAES(data.Data) : data.Data;

  for (let h of contentData.list){
    items.push([h.id,h.title,h.updatetime,h.mp3len])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="keGetContent('${h[0]}')">${s2t(h[1])}<br><span class="time">${h[2]} | </span><span class="fs10 fw-bold">${h[3]}</span></p><div id="${h[0]}" class="content">
    <div class="pt-2 sepia">
      <table class="table table-auto fs11 p-0 sepia">
        <tbody id="lines-${h[0]}"></tbody>
      </table>
    </div>
    </div><hr>`;
  }

  }catch{html='<p>尚無內容</p>'}

  ap.style.display='block';vp.style.display='none';ap.src='';vp.src='';

  return html;
}


async function keGetContent(id){
  contentId = id;
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    if (cEl.innerText.length>10) return; // already got transcription in cEl

    let payload = {
        Method: "web_waikan_wkgetcontent",
        Params: { id: id, version_flag: 1 },
        Token: "",
        Terminal: 13,
        Version: "4.0",
        UID: "",
        AppFlag: 18,
        Sign: "",
        ApTime: Date.now(),
        ApVersionCode: 100
    };

    try{
    const res = await fetch(preStr+'https://mob2015.kekenet.com/keke/mobile/index.php', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });
    data = await res.json();
    } catch {cEl.innerHTML+=`<p>尚未提供內容</p>`; loading.style.display='none'; return;}

    if (data.Code !== 200) throw new Error(data.Msg || "API 返回錯誤");

    const contentData = data.IsDecode == 1 ? await decryptAES(data.Data) : data.Data;
    const rawLrc = contentData.content;

    let mediaSrc = 'https://k6.kekenet.com/'+contentData.playurl;
    if (mediaSrc == '') {cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;}
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      ap.src= mediaSrc;vp.src='';
      ap.style.display='block';vp.style.display='none';
    } else {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';
    }
    media.playbackRate = 1;
    speedLabel.textContent = media.playbackRate.toFixed(1) + "x";
    
    try{
    let ts=[];
    for (let s of rawLrc){
      ts.push({
        startTime: s.millisecond/1000,
        sentence: `${s.en}<br>${s2t(s.cn)}`
      });     
    }
    getLinesTable(ts,id,false);

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}
    loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

}


function hexToBytes(hex) {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
    }
    return bytes;
}

function stringToBytes(str) {
    return new TextEncoder().encode(str);
}

async function decryptAES(hexData) {
  const keyBuffer = stringToBytes('51E881E6F2A6Y9K8');
  const ivBuffer = stringToBytes('9F0885C2D686C418');
  const dataBuffer = hexToBytes(hexData);

  // 返回一個 Promise，解密完成後得到文字
  const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyBuffer,
      { name: "AES-CBC" },
      false,
      ["decrypt"]
  );

  const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-CBC", iv: ivBuffer },
      cryptoKey,
      dataBuffer
  );
console.log(JSON.parse(new TextDecoder().decode(decryptedBuffer)));
  return JSON.parse(new TextDecoder().decode(decryptedBuffer));
}


//    PODCAST
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetList(siteName,t){
  try{url=`${preStr}${encodeURIComponent('https://backend.podscribe.ai/api/series/v2/'+t+'/episodes?archivedIncludedFilter=false&count=50&cursor='+cursor+'&episodeTitle=&seriesId='+t)}`;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.next_cursor;
  for (let h of str.data){
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

  ap.style.display='block';vp.style.display='none';ap.src='';vp.src='';

  return html;
}


//    PODCAST GET CONTENT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetContent(clickedId,id,hasTranscription,transcriptionId){
  contentId = id;
  const cEl=document.getElementById(id);
  let res, str, mediaSrc;

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    if (cEl.innerText.length>10) {loading.style.display = 'none'; return;} // already got transcription in cEl

    try{
    res=await fetch(`${preStr}https://backend.podscribe.ai/api/episode?id=${id}`);
    str=await res.text();
    } catch {cEl.innerHTML+=`<p>尚未提供內容</p>`; loading.style.display='none'; return;}

    // 有文稿且有 id, 取出音頻
    if (hasTranscription && transcriptionId && transcriptionId!=='undefined'){
      const regex2 = new RegExp(`"${transcriptionId}","(https:\\/\\/[^\\s"]+?\\.mp3)"`);
      const match = str.match(regex2);
      mediaSrc =
        match?.[1] ||
        str.match(/https:\/\/jfe93e\.s3[^\s"]+?\.mp3/)?.[0] ||
        str.match(/https:\/\/[^\s"]+?\.mp3/)?.[0] ||
        '';
    }
    // 有文稿但沒 id, 取出 id 和音頻
    else if (hasTranscription && (transcriptionId==='undefined' || !transcriptionId)) {
      // id 和音頻在一起
      const regex = /"([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})","(https:\/\/[^\s"]+?\.mp3)"/g;
      const matches = [...str.matchAll(regex)];
      const last = matches.at(-1);

      if (last) {
        const [full, uuid, url] = last;
        transcriptionId = uuid;
        mediaSrc = url;
      }
      // id 和音頻不在一起, 分別取 id 和音頻
      else {console.log('split');
        const regex3 = /"([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})","Done"/g;
        const match3 = str.match(regex3);
        transcriptionId = match3?.[0] || '';

        mediaSrc =
          str.match(/https:\/\/jfe93e\.s3[\s\S]*?\.mp3/)?.[0] ||
          str.match(/https:\/\/[\s\S]*?\.mp3/)?.[0] ||
          '';
      }
    }

    // 處理音頻
    if (mediaSrc=='') {
      cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;
    }
    
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      ap.src= mediaSrc;vp.src='';
      ap.style.display='block';vp.style.display='none';
    } else {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';
    }
    media.playbackRate = 1;
    speedLabel.textContent = media.playbackRate.toFixed(1) + "x";

    // 取文稿
    // 沒文稿
    if (!hasTranscription || transcriptionId==='') {cEl.innerHTML=`<p>尚未提供文稿</p>`; loading.style.display='none'; return;}
    // 有文稿
    if (transcriptionId && transcriptionId !== 'undefined'){
      res=await fetch(`https://podscribe-transcript.s3.amazonaws.com/transcripts/${transcriptionId}.json`);
      str=await res.json();
      const ts=word2sentence(str);

      res=await fetch(`${preStr}${encodeURIComponent(`https://backend.podscribe.ai/api/episode?id=${id}&includeAds=true&includeOriginal=false`)}`);
      str = await res.json();
      adSegments = extractAdSegments(str);
      getLinesTable(ts,id,true);
    } else {
      cEl.innerHTML+=`<p>尚未提供文稿</p>`;
    }
    loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

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

function getLinesTable(ss,id,toTS) {
  var k = '';
  if (siteNameVar==='pd') {
    for (let s of ss){
      if (isInAdSegment(s.startTime)) continue;
      k+=`<tr>
      <td class="position-relative" data-start="${s.startTime}">${s.sentence}
      ${toTS===true
        ? `<button type="button" class="btn btn-light position-relative sepia opacity-25 position-absolute bottom-0 end-0 mb-1" onclick="getPodcastTranslate(this)">${svgTranslate}</button>`
        : ''}
      </td>
      </tr>`;
    }
  }
  else {
    for (let s of ss){
      k+=`<tr>
      <td class="position-relative" data-start="${s.startTime}">${s.sentence}
      ${toTS===true
        ? `<button type="button" class="btn btn-light position-relative sepia opacity-25 position-absolute bottom-0 end-0 mb-1" onclick="getPodcastTranslate(this)">${svgTranslate}</button>`
        : ''}
      </td>
      </tr>`;
    }
  }
  document.querySelector(`#lines-${id}`).innerHTML=k;
}


async function getPodcastTranslate(btn) {
  const a = btn.closest('td');
  // if (a.innerText!=='' && cnTest(a.innerText)!==true)
  a.innerHTML += `<br><span class="fs09em">${await translate(a.innerHTML)}</span>`;
}


// ===== 取廣告 =====

function isInAdSegment(currentTime) {
  return adSegments.some(seg => currentTime >= seg.startTime && currentTime <= seg.endTime);
}

// var res=await fetch(window.location.href);
// var episodeMeta=await res.text();


// 解析 URL 中的時間，例如 "_00.06.49-00.07.23.mp3"
function parseAdTimeFromUrl(url) {
  const match = url.match(/_(\d{2}\.\d{2}\.\d{2})-(\d{2}\.\d{2}\.\d{2})\.mp3/);
  if (!match) return null;

  const [ , start, end ] = match;
  const toSeconds = t => {
    const [h, m, s] = t.split('.').map(Number);
    return h * 3600 + m * 60 + s;
  };
  return { startTime: toSeconds(start), endTime: toSeconds(end) };
}

// 遞迴找出 JSON 裡所有廣告 mp3 URL
function extractAllAdUrls(obj) {
  const urls = [];
  function walk(value) {
    if (!value) return;
    if (typeof value === 'string') {
      if (value.endsWith('.mp3') && value.includes('_00.')) {
        urls.push(value);
      }
    } else if (Array.isArray(value)) {
      value.forEach(walk);
    } else if (typeof value === 'object') {
      Object.values(value).forEach(walk);
    }
  }
  walk(obj);
  return urls;
}

// 從 episodeMeta 取出所有廣告段
function extractAdSegments(meta) {
  const mp3Urls = extractAllAdUrls(meta);
  const segments = [];

  mp3Urls.forEach(url => {
    const times = parseAdTimeFromUrl(url);
    if (times) {
      segments.push({ ...times });
    }
  });

  // 1. 先依 startTime 排序
  segments.sort((a, b) => a.startTime - b.startTime);

  // 2. 合併相鄰或重疊區間
  const merged = [];
  for (const t of segments) {
      if (!merged.length) {
          merged.push({ ...t });
      } else {
          const last = merged[merged.length - 1];
          if (t.startTime <= last.endTime + 1) { // 相鄰或重疊
              last.endTime = Math.max(last.endTime, t.endTime);
          } else {
              merged.push({ ...t });
          }
      }
  }

  console.log(merged);
  return merged;
}


//    OPERATION
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function closeContent(){
  const el = document.getElementById(contentId);
  el.style.display='none';
  el.previousElementSibling.scrollIntoView();
  // document.body.scrollTop = 0;document.documentElement.scrollTop = 0;
}

function isMobile() {return window.matchMedia("(max-width: 768px)").matches;}
const trLvl = isMobile() ? 0.4 : 0.6;
let contentId = '';

// ======= ontimeupdate 跳過廣告 =======
// function skipAds(current){
//   if (isInAdSegment(current)) {console.log(adSegments);
//     const seg = adSegments.find(s => current >= s.startTime && current < s.endTime);console.log(seg);
//     media.currentTime = seg.endTime;
//     console.log(`⏭ 跳過廣告 (${seg.startTime}s → ${seg.endTime}s)`);
//     return; // 跳過後不執行其他高亮邏輯
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  const speedDown = document.getElementById("speedDown");
  const speedUp = document.getElementById("speedUp");
  const speedLabel = document.getElementById("speedLabel");
  const modeBtn = document.getElementById("modeBtn");

  const playBtn = document.getElementById("playBtn");
  const rwBtn = document.getElementById("rwBtn");
  const fwBtn = document.getElementById("fwBtn");
  let adSegments = [];

  let autoScrollEnabled = true;
  let userScrolling = false;
  let scrollTimeout = null;

  // 初始設定
  media = ap;
  media.playbackRate = 1;
  speedLabel.textContent = media.playbackRate.toFixed(1) + "x";

  let mode = "continuous"; // 模式: continuous / single / loop

  // 控制速率變化
  const changeSpeed = (delta) => {
    let newRate = media.playbackRate + delta;
    // 限制範圍在 0.5x ~ 2.0x
    newRate = Math.max(0.5, Math.min(2.0, newRate));
    media.playbackRate = newRate;
    speedLabel.textContent = newRate.toFixed(1) + "x";
  };

  // 綁定事件
  speedDown.addEventListener("click", () => changeSpeed(-0.1));
  speedUp.addEventListener("click", () => changeSpeed(+0.1));

  // 切換播放模式
  modeBtn.addEventListener("click", () => {
    if (mode === "continuous") mode = "single";
    else if (mode === "single") mode = "loop";
    else mode = "continuous";

    let label = "";
    if (mode === "continuous") label = "連續";
    else if (mode === "single") label = "單句";
    else label = "循環";

    modeBtn.textContent = label;
  });

  // 綁定 play, rw, fw
  playBtn.addEventListener("click", () => {
    if (media.paused) {
      media.play();
      playBtn.innerHTML = svgPause;
    } else {
      media.pause();
      playBtn.innerHTML = svgPlay;
    }
  });

  // 當音頻播放結束時，自動恢復按鈕文字
  media.addEventListener("ended", () => {
    playBtn.innerHTML = svgPlay;
  });

  rwBtn.addEventListener("click", () => {
    media.currentTime = Math.max(0, media.currentTime - 5); // 避免小於 0
    media.play();
    playBtn.innerHTML = svgPause;
  });

  fwBtn.addEventListener("click", () => {
    media.currentTime = Math.min(media.duration, media.currentTime + 5); // 避免超出音檔長度
    media.play();
    playBtn.innerHTML = svgPause;
  });

  // 監聽點擊表格列
  document.addEventListener("click", async (e) => {
    if (e.target.closest('button')) return;
    const row = e.target.closest(`[id='lines-${contentId}'] tr`);
    if (!row) return;

    // const startCell = row.children[0];
    const nextRow = row.nextElementSibling;
    // const nextCell = nextRow ? nextRow.children[0] : null;

    const startTime = Number(row.children[0]?.dataset.start || 0);
    const endTime = Number(nextRow?.children[0]?.dataset.start || media.duration);
    console.log('start: '+startTime+'; end: '+endTime);

    // 清除舊樣式
    document.querySelectorAll(`[id='lines-${contentId}'] tr`).forEach(tr => {
      tr.children[0].style.setProperty("color", "", "important");
      tr.children[0].style.setProperty("background-color", "", "important");
    });

    row.children[0].style.setProperty("color", "green", "important");
    row.children[0].style.setProperty("background-color", "#E5E4E2", "important");
    // row.scrollIntoView({ behavior: "smooth", block: "nearest" });

    const rect = row.getBoundingClientRect();
    const absoluteY = window.scrollY + rect.top;
    const targetY = absoluteY - (window.innerHeight * trLvl);
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
    

    // 播放邏輯
    if (mode === "continuous") {
      media.currentTime = startTime;
      media.play();
      playBtn.innerHTML = svgPause;
      media.ontimeupdate = function () {
        const current = media.currentTime;
        if (isInAdSegment(current)) {console.log(adSegments);
          const seg = adSegments.find(s => current >= s.startTime && current < s.endTime);console.log(seg);
          media.currentTime = seg.endTime;
          console.log(`⏭ 跳過廣告 (${seg.startTime}s → ${seg.endTime}s)`);
          return; // 跳過後不執行其他高亮邏輯
        }
        highlightCurrentRow(media.currentTime);
      }
    } else {
      media.currentTime = startTime;
      media.play();
      playBtn.innerHTML = svgPause;
      media.ontimeupdate = function () {
        // skipAds(media.currentTime);
        highlightCurrentRow(media.currentTime);

        if (media.currentTime >= endTime) {
          if (mode === "single") {media.pause();playBtn.innerHTML = svgPlay;}
          else if (mode === "loop") {media.currentTime = startTime;} // 單句循環
        }

      };
    }
  });

  // ======= 偵測使用者滾動 =======
  function handleUserScroll() {
    userScrolling = true;
    autoScrollEnabled = false;
    clearTimeout(scrollTimeout);

    // 若使用者停止滾動 1500ms，恢復自動滾動
    scrollTimeout = setTimeout(() => {
      userScrolling = false;
      autoScrollEnabled = true;
    }, 1500);
  }

  // 桌面 + 手機都能偵測
  window.addEventListener('wheel', handleUserScroll, { passive: true });
  window.addEventListener('touchmove', handleUserScroll, { passive: true });
  window.addEventListener('scroll', handleUserScroll, { passive: true });

  // ======= 自動捲軸函數 =======
  function autoScrollToRow(row) {
    if (!autoScrollEnabled) return; // 若使用者在滾動，略過

    const rect = row.getBoundingClientRect();
    const absoluteY = window.scrollY + rect.top;
    const targetY = absoluteY - (window.innerHeight * trLvl);

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }

  // let lastHighlightIndex = -1;

  function highlightCurrentRow(currentTime) {
    const rows = document.querySelectorAll(`[id='lines-${contentId}'] tr`);
    for (let i = 0; i < rows.length; i++) {
      const start = Number(rows[i].children[0]?.dataset.start || 0);
      const end = Number(rows[i + 1]?.children[0]?.dataset.start || media.duration);
      if (currentTime >= start+0.25 && currentTime < end) {
        // if (lastHighlightIndex !== i) {
          rows.forEach(tr => {
            tr.children[0].style.setProperty("color", "", "important");
            tr.children[0].style.setProperty("background-color", "", "important");
          });
          rows[i].children[0].style.setProperty("color", "green", "important");
          rows[i].children[0].style.setProperty("background-color", "#E5E4E2", "important");

          autoScrollToRow(rows[i]);
          
          // const rect = rows[i].getBoundingClientRect();
          // const absoluteY = window.scrollY + rect.top;
          // const targetY = absoluteY - (window.innerHeight * trLvl);
          // window.scrollTo({
          //   top: targetY,
          //   behavior: 'smooth'
          // });
        //   lastHighlightIndex = i;
        // }
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
















