//    KEKENET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function keGetList(siteName,t) {
  ap.style.display='block';vp.style.display='none';yt.style.display='none';ap.src='';vp.src='';
  adSegments = [];

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

  return html;
}


async function keGetContent(id){
  contentId = id;
  adSegments = [];
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
      ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';yt.style.display='none';
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


//    LISTENING EXPRESS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function leGetList(siteName,t) {
  ap.style.display='block';vp.style.display='none';yt.style.display='none';ap.src='';vp.src='';
  adSegments = [];

  try {
  const res = await fetch(`${preStr}https://www.listeningexpress.com/${t}index${rr==1 ? '' : `-${rr}`}.htm`);
  const str = await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  const contentData=doc.querySelectorAll('li a');

  for (let h of contentData){
    items.push([h.href.replace('evenbeiter.github.io','www.listeningexpress.com').replaceAll("'","\'"),h.title])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="leGetContent('${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content">
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


async function leGetContent(id){
  contentId = CSS.escape(id);
  adSegments = [];
  const cEl=document.getElementById(id);
  const lrcUrl=id.substring(0, id.lastIndexOf("/") + 1)+id.substring(id.lastIndexOf("/") + 1).replaceAll('-',' ').replace('.html','.lrc');

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    if (cEl.innerText.length>10) return; // already got transcription in cEl


    let mediaSrc = lrcUrl.replace('.lrc','.mp3');
    if (mediaSrc == '') {cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;}
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      ap.src= mediaSrc;vp.src='';
      ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';yt.style.display='none';
    }
    media.playbackRate = 1;
    speedLabel.textContent = media.playbackRate.toFixed(1) + "x";
  
    try{
    const res = await fetch(preStr+lrcUrl);
    const str = await res.text();
    const rawLrc = str.split('\r\n');

    let ts=[];
    for (let s of rawLrc){
      if(s!==''){
        s=s.split(']');
        ts.push({
          startTime: cvtMMSS2S(s[0].slice(1)),
          sentence: s[1]
        });     
      }
    }
    getLinesTable(ts,id,true);

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}
    loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

}

function cvtMMSS2S(s){
  const a=s.split(':');
  return Number(a[0]*60)+Number(a[1]);
}


//    PODCAST
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetList(siteName,t){
  ap.style.display='block';vp.style.display='none';yt.style.display='none';ap.src='';vp.src='';
  adSegments = [];

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

  return html;
}


//    PODCAST GET CONTENT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetContent(clickedId,id,hasTranscription,transcriptionId){
  contentId = id;
  adSegments = [];
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
        str.match(/https:\/\/[^\s"]+?\.mp3"/)?.[0].slice(0,-1) ||
        str.match(/https:\/\/[^\s"]+?\.mp3\?/)?.[0].slice(0,-1) ||
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
      } else { 
        // id 和音頻不在一起
        const regex3 = /"([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})","Done"/g;
        // const match3 = str.match(regex3);
        // transcriptionId = match3?.[0] || '';
        const matches = [...str.matchAll(regex3)];
        transcriptionId = matches.at(-1)?.[1] || ''; // 取最後一個 UUID

        mediaSrc =
        str.match(/https:\/\/[^\s"]+?\.mp3"/)?.[0].slice(0,-1) ||
        str.match(/https:\/\/[^\s"]+?\.mp3\?/)?.[0].slice(0,-1) ||
        '';
      }
    }
    // 沒有文稿, 分別取 id 和音頻
    // else {console.log('split');
    //   const regex3 = /"([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})","Done"/g;
    //     // const match3 = str.match(regex3);
    //     // transcriptionId = match3?.[0] || '';
    //     const matches = [...str.matchAll(regex3)];
    //     transcriptionId = matches.at(-1)?.[1] || ''; // 取最後一個 UUID

    //   // const regex3 = /"([0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12})","Done"/g;
    //   // const match3 = str.match(regex3);
    //   // transcriptionId = match3?.[0] || '';

    //   mediaSrc =
    //     str.match(/https:\/\/[^\s"]+?\.mp3"/)?.[0].slice(0,-1) ||
    //     str.match(/https:\/\/[^\s"]+?\.mp3\?/)?.[0].slice(0,-1) ||
    //     '';        
    // }
    
    // 沒有文稿, 取出音頻
    else {
      mediaSrc =
        str.match(/https:\/\/[^\s"]+?\.mp3"/)?.[0].slice(0,-1) ||
        str.match(/https:\/\/[^\s"]+?\.mp3\?/)?.[0].slice(0,-1) ||
        '';
    }
    

    // 處理音頻
    if (mediaSrc=='') {
      cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;
    }
    
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      ap.src= mediaSrc;vp.src='';
      ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';yt.style.display='none';
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
  document.getElementById(`lines-${id}`).innerHTML=k;
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


//    YOUTUBE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function ytbGetList(siteName,t){
  ap.style.display='none';vp.style.display='none';yt.style.display='none';ap.src='';vp.src='';
  adSegments = [];

  try{
    const res=await fetch(preStr+encodeURIComponent('https://www.youtube.com/playlist?list='+t));
    //const raw=await res.text();
    const buf=await res.arrayBuffer();
    const raw=new TextDecoder('utf-8').decode(buf);
    const str=raw.replace(/\\x([0-9A-Fa-f]{2})/g, (_, p1) =>String.fromCharCode(parseInt(p1, 16)));    

    const data=JSON.parse(str.match(/var\s+ytInitialData\s*=\s*([\s\S]*?);<\/script>/)?.[1]).contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;
    for (let d of data){
      items.push([d.playlistVideoRenderer.videoId,d.playlistVideoRenderer.title.runs[0].text,d.playlistVideoRenderer.lengthText.simpleText]);
    }

    for (let h of items){
      html+=`<p class="title fs12" onclick="ytbGetContent('${h[0]}')">${h[1]} | <span class="fs10 fw-bold">${h[2]}</span></p><hr>`;
    }

  }catch{html='<p>尚無內容</p>'}

  return html;
}

async function ytbGetContent(id){
  ap.style.display='none';vp.style.display='none';yt.style.display='block';ap.src='';vp.src='';
  adSegments = [];
  media = ytPlayer;
  createYouTubePlayer(id);
}


//    VOICETUBE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function vtGetList(siteName,t){
  ap.style.display='none';vp.style.display='none';yt.style.display='none';ap.src='';vp.src='';
  adSegments = [];

  try{
  const res = await fetch('https://vtapi.voicetube.com/v2.2/videos?platform=Web&language=zh-TW', {
    method: 'POST',
    headers: {'Content-Type': 'application/json','authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZWEyNDllMGU5OWM0Yjc2Y2NhYWFiZDcxMjFjNDI5ODA5NjdlNzc3MjRmYzI1YjZkODA2N2I3Zjk2M2UzZTgzZDc3NjUxOTkyMjJkNzI1NWEiLCJpYXQiOjE3MzMzODk4ODIuMTg1NzAxLCJuYmYiOjE3MzMzODk4ODIuMTg1NzA1LCJleHAiOjE3NjQ5MjU4ODIuMTY5MDM2LCJzdWIiOiIzMjgyMzciLCJzY29wZXMiOltdfQ.o6XGBpF6VeLF21CmuW7UJYVQ7qX9khKPv7_59M-0MIX5VjBzgWJLYUqkXwRf2k67AnOW1IEtgH1phs0YQWrbcvLh86LKmngcLDGlOvwDjKUNV59t_he5en82DirCA9RiregEF6jr5xC7uIdL2GXuwf6IVaV8P_s9u_e1q8MJzfTmN_1EXsLQ8lK21HuEAaZ1Sng4GIq6HO8rc9fTVcwlgeLjlGyyDSbiQk00zMFWuxASQOdSk0pg7WSF_pAzQh39xV9ZqR9drbCMliWXANPmk9gqG89W8uk2k-SpGOhiQ1_ZTDnQNFF68181D60VQ2gLVSdad9qzt-dIdcY6mVvNQV3ftaEC2JNCw_F-B1z62tnfRSVT8NxCPPrnpgAxS-q_mpDN8DXsTfz7GYjS4jEnbwaANWlybfRUNdkfB2Nz7TpsXqfZtjfmEJkQYyRAoDySBFpsTrI5j0xe59z5LBo7iVI1npEI-QJuIbljIA41OefQsWdvnte60WSzYGeCQu1gQ0w7SEZbZY0Le13rJUGzbJuy5qRWvMoCqB1yZuZdRrFgEW5oWPfUXIf_l4maEOUZGnVKEyEj7O12GSt8YQqGEVgVsssHuDt4US0bgI0DgWcS0EzBwNJmFmGphcUN8nsU6hMPM-ugK0v-VBgxSq3P8wfGyrPNiX-VLpJmhqQnNWg'},
    body: `{"page":${rr},"perPage":30,"sortMode":"DESC",${t.endsWith('_')?`"channel":"${t.slice(0,-1)}"`:`"levels":["${t}"]`},"sortBy":"publishedAt"}`,
    });
  const str=await res.json();

  for (let h of str.data.items){
    items.push([h.id,h.title,h.cefrLevel,h.durationText,h.isTranslated,h.youtubeId])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="vtGetContent(this.id,'${h[0]}',${h[4]},'${h[5]}')">${h[1]}<br><span class="time">${h[2]} | </span><span class="fs10 fw-bold">${h[3]}</span></p><div id="${h[0]}" class="content">
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


async function vtGetContent(clickedId,id,isTranslated,youtubeId){
  ap.style.display='none';vp.style.display='none';yt.style.display='block';ap.src='';vp.src='';
  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

  createYouTubePlayer(youtubeId);

  try {
  const res=await fetch(`https://vtapi.voicetube.com/v2.1.1/zh-TW/videos/${id}?platform=Web&language=zh-TW`);
  const str=await res.json();

  cEl.innerHTML+=`${str.data.publishedAt ? `<p class="fs10">${cvt2Timezone(str.data.publishedAt)}</p>` : ''}`;

  const rawLrc = str.data.captionLines ? str.data.captionLines : [];

  if (rawLrc!==[]){
    try{
    let ts=[];
    for (let s of rawLrc){
      ts.push({
        startTime: s.startAt,
        sentence: `${s.originalText.text}${isTranslated == true ? `<br>${s.translatedText.text}` : `<button type="button" class="btn btn-light position-relative sepia opacity-25 position-absolute bottom-0 end-0 mb-1" onclick="getPodcastTranslate(this)">${svgTranslate}</button>`}`
      });     
    }
    getLinesTable(ts,id,isTranslated == true ? false : true);

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`;}

  } else {
    cEl.innerHTML+=`<p>尚未提供文稿</p>`;
  }
  } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`;}

  try{
  const res=await fetch(`https://vtapi.voicetube.com/v2.1.1/zh-TW/videos/${id}/words?platform=Web&language=zh-TW`);
  const str=await res.json();
  for (let v of str.data){
    cEl.innerHTML+=`<p><strong>${v.text}</strong> | ${v.cefrLevel}</p>`;
    for (let d of v.definitions){
      cEl.innerHTML+=`
      <p class="fs10"><span>/${d.pronunciationKk}<br>${d.pos}${d.wordPlural ? ` | ${d.wordPlural}` : ''}</span></p>
      <p>${d.englishDefinition} | ${d.chineseTraditionalDefinition}</p>
      <p>${d.englishExample}</p>
      `;
    }
    cEl.innerHTML+=`<hr>`;
  }

  } catch {cEl.innerHTML+=`<p>尚未提供單字列表</p>`;}

  loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

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

let ytPlayer = null; let ytReady = false;

// --- 建立 YouTube Player ---
function createYouTubePlayer(videoId) {
  if (ytPlayer && ytReady) {
    ytPlayer.loadVideoById(videoId);
    // mediaType = 'youtube';
    media = ytPlayer;
    media.playbackRate = 1;
    speedLabel.textContent = media.playbackRate.toFixed(1) + "x";
    return;
  }

  ytPlayer = new YT.Player('ytPlayer', {
    // height: '360',
    // width: '640',
    height: '100%',
    width: '100%',
    videoId,
    playerVars: { modestbranding: 1, rel: 0, controls: 1, showinfo: 0 },
    events: {
      onReady: () => {
        ytReady = true;
        // mediaType = 'youtube';
        media = ytPlayer;
      },
      onStateChange: (e) => {
        // 播放/暫停按鈕狀態同步
        if (e.data === YT.PlayerState.PLAYING) playBtn.innerHTML = svgPause;
        else if (e.data === YT.PlayerState.PAUSED) playBtn.innerHTML = svgPlay;
      }
    }
  });
}


// ======= ontimeupdate 跳過廣告 =======
// function skipAds(current){
//   if (isInAdSegment(current)) {console.log(adSegments);
//     const seg = adSegments.find(s => current >= s.startTime && current < s.endTime);console.log(seg);
//     media.currentTime = seg.endTime;
//     console.log(`⏭ 跳過廣告 (${seg.startTime}s → ${seg.endTime}s)`);
//     return; // 跳過後不執行其他高亮邏輯
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
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
  let userScrollTimeout = null;

  // 初始設定
  // let mediaType = 'audio'; // audio, video, or youtube
  media = ap;
  media.playbackRate = 1;
  speedLabel.textContent = media.playbackRate.toFixed(1) + "x";

  let mode = "continuous"; // 模式: continuous / single / loop

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

  function playPause(){
    if (media === ap || media === vp){
      if (media.paused) {media.play();playBtn.innerHTML = svgPause;}
      else {media.pause();playBtn.innerHTML = svgPlay;}      
    } else if (media?.playVideo) {
      const state = ytPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
      else ytPlayer.playVideo();      
    }
  }

  // --- 倒退 / 快轉 ---
  function skip(seconds) {console.log(media);
    if (media === ap || media === vp){
      media.currentTime = Math.max(0, Math.min(media.duration, media.currentTime + seconds));
    } else if (media?.playVideo) {
      const cur = ytPlayer.getCurrentTime();
      ytPlayer.seekTo(cur + seconds, true);
    }
  }

  // 控制速率變化
  const changeSpeed = (delta) => {
    let newRate = media.playbackRate + delta;
    // 限制範圍在 0.5x ~ 2.0x
    newRate = Math.max(0.5, Math.min(2.0, newRate));
    media.playbackRate = newRate;
    speedLabel.textContent = newRate.toFixed(1) + "x";
  };

  // 按鈕事件綁定
  speedDown.addEventListener("click", () => changeSpeed(-0.1));
  speedUp.addEventListener("click", () => changeSpeed(+0.1));
  playBtn.addEventListener("click", playPause);
  rwBtn.addEventListener("click", () => skip(-5));
  fwBtn.addEventListener("click", () => skip(+5));







document.addEventListener("click", (e) => {
  if (e.target.closest('button')) return;

  function getCurrentTime(media) {
    return media.playVideo ? media.getCurrentTime() : media.currentTime;
  }

  function getDuration(media) {
    return media.playVideo ? media.getDuration() : media.duration;
  }



  const table = document.getElementById(`lines-${contentId}`);
  const row = e.target.closest('tr');
  if (!row || !table.contains(row)) return;

  const nextRow = row.nextElementSibling;
  const startTime = Number(row.children[0]?.dataset.start || 0);
  // const endTime = Number(nextRow?.children[0]?.dataset.start || (media.playVideo ? media.getDuration() : media.duration));
  const endTime = Number(nextRow?.children[0]?.dataset.start || getDuration(media));


  // 清除舊高亮
  document.querySelectorAll(`#lines-${contentId} tr`).forEach(tr => {
    tr.children[0].style.color = '';
    tr.children[0].style.backgroundColor = '';
  });
  row.children[0].style.color = 'green';
  row.children[0].style.backgroundColor = '#E5E4E2';

  // 初始滾動到行
  const rect = row.getBoundingClientRect();
  const absoluteY = window.scrollY + rect.top;
  const targetY = absoluteY - window.innerHeight / 2;
  window.scrollTo({ top: targetY, behavior: 'smooth' });

  // 停用舊的 interval / ontimeupdate
  if (window.ytLoopInterval) {
    clearInterval(window.ytLoopInterval);
    window.ytLoopInterval = null;
  }
  if (media.ontimeupdate) media.ontimeupdate = null;

  let lastHighlightedRow = row; // 記錄最後高亮行，避免重複滾動

  function scrollToRow(currentRow) {
    if (currentRow && currentRow !== lastHighlightedRow) {
      const rect = currentRow.getBoundingClientRect();
      const absoluteY = window.scrollY + rect.top;
      const targetY = absoluteY - window.innerHeight / 2;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      lastHighlightedRow = currentRow;
    }
  }

  function playSegment() {
    if (media.playVideo) {
      media.seekTo(startTime, true);
      media.playVideo();
      playBtn.innerHTML = svgPause;

      window.ytLoopInterval = setInterval(() => {
        const current = getCurrentTime(media);

        // 高亮
        const currentRow = Array.from(document.querySelectorAll(`#lines-${contentId} tr`))
          .find(tr => {
            const st = Number(tr.children[0]?.dataset.start || 0);
            const next = Number(tr.nextElementSibling?.children[0]?.dataset.start || getDuration(media));
            return current >= st && current < next;
          });
        if (currentRow) {
          currentRow.children[0].style.color = 'green';
          currentRow.children[0].style.backgroundColor = '#E5E4E2';
          // 清除其他行樣式
          document.querySelectorAll(`#lines-${contentId} tr`).forEach(tr => {
            if (tr !== currentRow) {
              tr.children[0].style.color = '';
              tr.children[0].style.backgroundColor = '';
            }
          });
          scrollToRow(currentRow);
        }

        // 播放控制
        if (mode === "single" && current >= endTime) {
          media.pauseVideo();
          playBtn.innerHTML = svgPlay;
          clearInterval(window.ytLoopInterval);
          window.ytLoopInterval = null;
        } else if (mode === "loop" && current >= endTime) {
          media.seekTo(startTime, true);
        }

      }, 200);

    } else {
      media.currentTime = startTime;
      media.play();

      media.ontimeupdate = function () {
        //const current = media.currentTime;
        const current = getCurrentTime(media);

        // 高亮
        const currentRow = Array.from(document.querySelectorAll(`#lines-${contentId} tr`))
          .find(tr => {
            const st = Number(tr.children[0]?.dataset.start || 0);
            const next = Number(tr.nextElementSibling?.children[0]?.dataset.start || media.duration);
            return current >= st && current < next;
          });
        if (currentRow) {
          currentRow.children[0].style.color = 'green';
          currentRow.children[0].style.backgroundColor = '#E5E4E2';
          document.querySelectorAll(`#lines-${contentId} tr`).forEach(tr => {
            if (tr !== currentRow) {
              tr.children[0].style.color = '';
              tr.children[0].style.backgroundColor = '';
            }
          });
          scrollToRow(currentRow);
        }

        if (mode === "single" && current >= endTime) {
          media.pause();
          playBtn.innerHTML = svgPlay;
          media.ontimeupdate = null;
        } else if (mode === "loop" && current >= endTime) {
          media.currentTime = startTime;
          media.play();
        }
      };
    }
  }

  playSegment();
});










  //=========================================================================================

  // 監聽點擊表格列
  // document.addEventListener("click", async (e) => {
  //   if (e.target.closest('button')) return;
  //   const row = e.target.closest(`[id='lines-${contentId}'] tr`);
  //   if (!row) return;

  //   // const startCell = row.children[0];
  //   const nextRow = row.nextElementSibling;
  //   // const nextCell = nextRow ? nextRow.children[0] : null;

  //   const startTime = Number(row.children[0]?.dataset.start || 0);
  //   const endTime = Number(nextRow?.children[0]?.dataset.start || media.duration);
  //   console.log('start: '+startTime+'; end: '+endTime);

  //   let ytInterval = null;

  //   function startHighlightYT() {
  //     if (ytInterval) clearInterval(ytInterval);
  //     ytInterval = setInterval(() => {
  //       const currentTime = media.getCurrentTime(); // YouTube API
  //       highlightCurrentRow(currentTime);
  //     }, 200); // 每 200ms 更新一次
  //   }

  //   function stopHighlightYT() {
  //     if (ytInterval) clearInterval(ytInterval);
  //     ytInterval = null;
  //   }

  //   // 點擊表格行時
  //   media.playVideo(); // 或 seekTo(startTime)
  //   startHighlightYT();

  //   // 在暫停或結束時
  //   media.pauseVideo();
  //   stopHighlightYT();



  //   // 清除舊樣式
  //   document.querySelectorAll(`[id='lines-${contentId}'] tr`).forEach(tr => {
  //     tr.children[0].style.setProperty("color", "", "important");
  //     tr.children[0].style.setProperty("background-color", "", "important");
  //   });

  //   row.children[0].style.setProperty("color", "green", "important");
  //   row.children[0].style.setProperty("background-color", "#E5E4E2", "important");
  //   // row.scrollIntoView({ behavior: "smooth", block: "nearest" });

  //   const rect = row.getBoundingClientRect();
  //   const absoluteY = window.scrollY + rect.top;
  //   const targetY = absoluteY - (window.innerHeight * trLvl);
  //   window.scrollTo({
  //     top: targetY,
  //     behavior: 'smooth'
  //   });
    

  //   // 播放邏輯
  //   if (mode === "continuous") {
  //     media.currentTime = startTime;
  //     playMedia(media);
  //     if (media.playVideo) startHighlightYT();
  //     playBtn.innerHTML = svgPause;
  //     // media.ontimeupdate = function () {
  //     //   if (siteNameVar === 'pd'){
  //     //     const current = media.currentTime;
  //     //     if (isInAdSegment(current)) {console.log(adSegments);
  //     //       const seg = adSegments.find(s => current >= s.startTime && current < s.endTime);console.log(seg);
  //     //       media.currentTime = seg.endTime;
  //     //       console.log(`⏭ 跳過廣告 (${seg.startTime}s → ${seg.endTime}s)`);
  //     //       return; // 跳過後不執行其他高亮邏輯
  //     //     }
  //     //   }
  //     //   highlightCurrentRow(media.currentTime);
  //     // }

  //     let lastSkippedSegment = null;


  //     // 主要 ontimeupdate
  //     media.ontimeupdate = function () {
  //       if (siteNameVar === 'pd') {
  //         const current = media.currentTime;
  //         const seg = adSegments.find(s => current >= s.startTime && current < s.endTime);

  //         if (seg && seg !== lastSkippedSegment) {
  //           lastSkippedSegment = seg;
  //           media.currentTime = seg.endTime;
  //           console.log(`⏭ 跳過廣告 (${seg.startTime}s → ${seg.endTime}s)`);
  //           return;
  //         }

  //         // 如果已經離開上次跳過的區段，就重置
  //         if (lastSkippedSegment && current > lastSkippedSegment.endTime) {
  //           lastSkippedSegment = null;
  //         }
  //       }

  //       const currentTime = getCurrentTime(media);console.log(currentTime);
  //       console.log(endTime);

  //       // 更新高亮
  //       highlightCurrentRow(currentTime);

  //       // 檢查是否到結束時間
  //       if (currentTime >= endTime) {
  //         if (mode === "single") {
  //           pauseMedia(media);
  //           playBtn.innerHTML = svgPlay;
  //         } else if (mode === "loop") {
  //           seekMedia(media, startTime); // 單句循環
  //         }
  //       }
  //     };

  //     // media.ontimeupdate = function () {
  //     //   if (siteNameVar === 'pd') {
  //     //     const current = media.currentTime;
  //     //     const seg = adSegments.find(s => current >= s.startTime && current < s.endTime);

  //     //     if (seg && seg !== lastSkippedSegment) {
  //     //       lastSkippedSegment = seg;
  //     //       media.currentTime = seg.endTime;
  //     //       console.log(`⏭ 跳過廣告 (${seg.startTime}s → ${seg.endTime}s)`);
  //     //       return;
  //     //     }

  //     //     // 如果已經離開上次跳過的區段，就重置
  //     //     if (lastSkippedSegment && current > lastSkippedSegment.endTime) {
  //     //       lastSkippedSegment = null;
  //     //     }
  //     //   }

  //     //   highlightCurrentRow(media.playVideo ? media.getCurrentTime() : media.currentTime);
  //     // };


  //   } else {
  //     media.currentTime = startTime;
  //     playMedia(media);
  //     if (media.playVideo) startHighlightYT();

  //     playBtn.innerHTML = svgPause;

  //     // 主要 ontimeupdate
  //     media.ontimeupdate = function () {
  //       const currentTime = getCurrentTime(media);

  //       // 更新高亮
  //       highlightCurrentRow(currentTime);

  //       // 檢查是否到結束時間
  //       if (currentTime >= endTime) {
  //         if (mode === "single") {
  //           pauseMedia(media);
  //           playBtn.innerHTML = svgPlay;
  //         } else if (mode === "loop") {
  //           seekMedia(media, startTime); // 單句循環
  //         }
  //       }
  //     };

  //     // media.ontimeupdate = function () {
  //     //   // skipAds(media.currentTime);
  //     //   highlightCurrentRow(media.playVideo ? media.getCurrentTime() : media.currentTime);

  //     //   if (media.playVideo){
  //     //     if (media.getCurrentTime() >= endTime) {
  //     //       if (mode === "single") {pauseMedia(media);playBtn.innerHTML = svgPlay;}
  //     //       else if (mode === "loop") {media.seekTo(startTime,true);} // 單句循環
  //     //     }          

  //     //   } else {
  //     //     if (media.currentTime >= endTime) {
  //     //       if (mode === "single") {pauseMedia(media);playBtn.innerHTML = svgPlay;}
  //     //       else if (mode === "loop") {media.currentTime = startTime;} // 單句循環
  //     //     }
  //     //   }

  //     // };
  //   }



  //   function playMedia(media) {
  //     if (media === ap) media.play();
  //     else if (media === vp) media.play();
  //     else if (media?.playVideo) media.playVideo();
  //   }

  //   function pauseMedia(media) {
  //     if (media === ap) media.pause();
  //     else if (media === vp) media.pause();
  //     else if (media?.pauseVideo) media.pauseVideo();
  //   }

  //   function getCurrentTime(media) {
  //     // 回傳目前播放時間
  //     return media.playVideo ? media.getCurrentTime() : media.currentTime;
  //   }

  //   function seekMedia(media, time) {
  //     if (media.playVideo) media.seekTo(time, true);
  //     else media.currentTime = time;
  //   }


  // });


  //=========================================================================================

  // ======= 偵測使用者滾動 =======
  function handleUserScroll() {
    userScrolling = true;
    autoScrollEnabled = false;
    clearTimeout(userScrollTimeout);

    // 若使用者停止滾動 1500ms，恢復自動滾動
    userScrollTimeout = setTimeout(() => {
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

// });


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
