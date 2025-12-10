//    AUDIOBOOK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function adbkGetList(siteName,t) {
  hidePlayer();
  adSegments = [];

  try {
  const res=await fetch(preStr+t);
  const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  const audios = doc.querySelectorAll('audio source');

  if (audios.length !==0 ) {
    let i=1;
    for (let h of audios){
      items.push([h.src,String(i++).padStart(2,'0')])
    }

    for (let h of items){
      html+=`<p class="title fs12" onclick="adbkGetContent('${h[0]}')">${topdiv.querySelector('span').innerText}: ${h[1]}</p><hr>`;
    }

  }

  }catch{html='<p>尚無內容</p>'}

  return html;
}


async function adbkGetContent(id){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = CSS.escape(id);
  adSegments = [];

  let mediaSrc = `${backendUrl}/media?url=${encodeURIComponent(id)}`;
  media=ap;
  if (mediaSwitch==='ON'){
    media.src= mediaSrc;
    media.style.display='block';ct.style.display='block';
    setPlaybackRate(1.2);
  }

}



//    BLINKIST
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bkstGetList(siteName,t){
  hidePlayer();

  try{url=`${backendUrl}/bkst/list?rr=${rr}`;
  const res = await fetch(url);const str = await res.json();
    for (let h of str){html+=`<p class="title fs12" onclick="bkstGetContent('${h.slice(0,-4)}')">${titleCase(h.slice(0,-7).replaceAll('-',' '))}</p><div id="${h.slice(0,-4)}" class="content">
    <div class="pt-2 sepia">
      <table class="table table-auto fs11 p-0 sepia">
        <tbody id="lines-${h.slice(0,-4)}"></tbody>
      </table>
    </div>
    </div><hr>`}

  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bkstGetContent(id){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    // if (cEl.innerText.length>10) return; // already got transcription in cEl

    try{url=`${backendUrl}/bkst/read`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({path:id+'.txt'})
    });
    if (!res.ok) throw new Error('無法讀取書目');

    const rawLrc=await res.json();

    // try{
    let ts=[];
    for (let s of rawLrc.transcript.transcriptSections){
      ts.push({
        startTime: s.start,
        sentence: `<p>${`${s.transcriptComponents[0].value.html}</p>` || ''}${`${s.transcriptComponents[2].value.html}` || ''}`
      });     
    }
    getLinesTable(ts,id,true);

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}

    // <audio controls src="https://你的服務.onrender.com/audio/play?file=music/test.mp3"></audio>
    let mediaSrc = `${backendUrl}/audio/play?file=${id}.m4a`;

    media=ap;

    if (mediaSwitch==='ON'){
      fetch(mediaSrc)
       .then(res => res.blob())
       .then(blob => { media.src = URL.createObjectURL(blob); });

      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1);
    }

    // } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}
    loading.style.display='none';

  } else {
    cEl.style.display='none';
  }
  loading.style.display='none';

}


//    CAKE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cakeCards={};
let cakeSentences={};

async function cakeGetList(siteName,t){
  hidePlayer();
  adSegments = [];
  cakeCards={}; cakeSentences={};

  let res, str;

  try{
  res = await fetch(`${backendUrl}/cake?cmd=/v2/main/today/pc&lang=${t}&rr=${rr}`);
  str = await res.json();
  str = str.data;

  let playList=[];let snackList=[];
  str.forEach(item => {
    if (item.type === "updatedPlaylist" && item.data?.items) {
      playList.push(...item.data.items);
    } else if (item.type === "snack" && item.data?.items){
      snackList.push(...item.data.items);
    }
  }); 

  for (let h of snackList){
    items.push([h.snackId,h.content,'snack',h.video.uri]);
    cakeCards[h.snackId] = h.cards;
  }
  for (let h of playList){
    items.push([h.playlistId,h.playlistTitle,'playlist']);
    cakeSentences[h.playlistId] = h.sentences;
  }
  for (let h of items){
    if (h[2]==='playlist'){
      html+=`<p class="title" onclick="cakeGetContentList('${h[0]}')">${h[1]}</p><hr id="${h[0]}">`;
    } else {
      html+=`<p class="title" onclick="cakeGetCard('${h[0]}','${h[3]}')">${h[1]}</p><hr id="${h[0]}">`;
    }
  }
  }catch{html='<p>尚無內容</p>'}

  return html;
}


async function cakeGetCard(id,m3u8Url){
  hidePlayer();
  adSegments = [];

  media=vp;

  if (mediaSwitch==='ON'){
    if (vp.canPlayType('application/vnd.apple.mpegurl')) {
        vp.src = `${backendUrl}/media?url=${encodeURIComponent(m3u8Url)}`;
        // vp.play();
    } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(`${backendUrl}/media?url=${encodeURIComponent(m3u8Url)}`);
        hls.attachMedia(vp);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            // vp.play();
        });
    } else {
        console.error("HLS is not supported in this browser.");
    }

    media.style.display='block';ct.style.display='block';
    setPlaybackRate(1);
  }  

  items=[];html='';

  try{
  for (let h of cakeCards[id]){
    items.push([h.cardId,h.title,h.message])
  }
  for (let h of items){
    html+=`<p class="title fs12">${h[1]}<br><span class="time">${h[2]}</span></p><hr>`;
  }
  document.getElementById(id).insertAdjacentHTML('afterend', html);

  }catch{document.getElementById(id).insertAdjacentHTML('afterend', '<p>尚無內容</p>');}
}

async function cakeGetContentList(id){
  hidePlayer();
  adSegments = [];

  items=[];html='';

  try{
  for (let h of cakeSentences[id]){
    items.push([h.sentenceId,h.sentenceEngMl,h.sentence])
  }
  for (let h of items){
    html+=`<p class="title" onclick="cakeGetContent('${h[0]}')">${h[1]}<br><span class="time">${h[2]}</span></p><div id="${h[0]}" class="content">
    <div class="pt-2 sepia">
      <table class="table table-auto fs11 p-0 sepia">
        <tbody id="lines-${h[0]}"></tbody>
      </table>
    </div>
    </div><hr>`;
  }
  document.getElementById(id).insertAdjacentHTML('afterend', html);

  }catch{document.getElementById(id).insertAdjacentHTML('afterend', '<p>尚無內容</p>');}
}


async function cakeGetContent(id){
  hidePlayer();

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

  let res, str;
  try {
  res = await fetch(`${backendUrl}/cake?cmd=/v2/sentence/${id}/view/contents/video&lang=${rt}`);
  str = await res.json();

  youtubeId=str.data.videoId;
  media = ytPlayer;

  if (mediaSwitch==='ON'){
    createYouTubePlayer(youtubeId);
    yt.style.display='block';ct.style.display='block';
    setPlaybackRate(1);
  }   

  cEl.previousElementSibling.innerHTML+=`${str.data.publishedAt ? `<p class="fs10">${cvt2Timezone(str.data.publishedAt*1000)}</p>` : ''}`;

  const rawLrc = str.data.captions ? str.data.captions : [];

  if (rawLrc!==[]){
    try{
    let ts=[];
    for (let s of rawLrc){
      ts.push({
        startTime: s.start,
        sentence: `${s.text || ''}${s.translation ? `<br>${s.translation}` : ''}`
      });     
    }
    getLinesTable(ts,id,false);

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`;}

  } else {
    cEl.innerHTML+=`<p>尚未提供文稿</p>`;
  }
  } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`;}

  loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

}


//    KEKENET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function keGetList(siteName,t) {
  hidePlayer();
  adSegments = [];
  const sortBy= t.endsWith('_') ? 'inputtime asc' : 'inputtime desc';
  const method= t.startsWith('_') ? 'web_ting_getexcellentnewslisttwo' : 'web_waikan_wknewslist';
  t=t.replaceAll('_','');

  const payload = {
    Method: method,
    Params: { catid: t, PageSize:20, PageIndex:rr, Sort: sortBy },
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

  // if (data.Code !== 200) throw new Error(data.Msg || "API 返回錯誤");

  const contentData = data.IsDecode == 1 ? await decryptAES(data.Data) : data.Data;

  if (contentData.list.length !==0 ) {
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

  } else {
    let j= t=='3544' ? 0 : -1;
    for (let hh of contentData.doubleList){
      for (let h of hh.child_arr) {
        j++;
        items.push([h.id,`${hh.title} - ${h.title}`,h.updatetime,h.mp3len,`https://mp4.kekenet.com/${keke[t][0]}${String(j).padStart(2,'0')}.${keke[t][1]}`])
      }
    }
    for (let h of items){
      html+=`<p class="title fs12" onclick="kekeGetContent('${h[0]}','${h[4]}')">${s2t(h[1])}<br><span class="time">${h[2]} | </span><span class="fs10 fw-bold">${h[3]}</span></p><hr>`;
    }        
  }

  }catch{html='<p>尚無內容</p>'}

  return html;
}


async function keGetContent(id){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    // if (cEl.innerText.length>10) return; // already got transcription in cEl

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

    let mediaSrc = `https://k6.kekenet.com/${contentData.playurl || contentData.mp3}`;
    if (mediaSrc == '') {cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;}
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      // ap.src= mediaSrc;vp.src='';
      // ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      // vp.src= mediaSrc;ap.src='';
      // vp.style.display='block';ap.style.display='none';yt.style.display='none';
    }

    if (mediaSwitch==='ON'){
      media.src= mediaSrc;
      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1);
    }    

    try{
    let ts=[];
    for (let s of rawLrc){
      ts.push({
        startTime: s.millisecond/1000,
        sentence: `${s.en ? `${s.en}<br>` : ''}${s2t(s.cn) || ''}`
      });     
    }
    getLinesTable(ts,id,false);

    } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}
    loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

}


async function kekeGetContent(id,mediaSrc){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  // const cEl=document.getElementById(id);

  // if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    // cEl.style.display='block';

    // if (cEl.innerText.length>10) return; // already got transcription in cEl

    // if (mediaSrc == '') {cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;}
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      // ap.src= mediaSrc;vp.src='';
      // ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      // vp.src= mediaSrc;ap.src='';
      // vp.style.display='block';ap.style.display='none';yt.style.display='none';
    }
    if (mediaSwitch==='ON'){
      media.src= mediaSrc;
      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1);
    }   

    loading.style.display='none';

  // } else {
  //   cEl.style.display='none';
  // }

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
  hidePlayer();
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
  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = CSS.escape(id);
  adSegments = [];
  const cEl=document.getElementById(id);
  const lrcUrl=id.substring(0, id.lastIndexOf("/") + 1)+id.substring(id.lastIndexOf("/") + 1).replaceAll('-',' ').replace('.html','.lrc');

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    // if (cEl.innerText.length>10) return; // already got transcription in cEl


    let mediaSrc = lrcUrl.replace('.lrc','.mp3');
    if (mediaSrc == '') {cEl.innerHTML+=`<p>尚未提供音頻</p>`; loading.style.display='none'; return;}
    if (mediaSrc.endsWith('.mp3')) {
      media=ap;
      // ap.src= mediaSrc;vp.src='';
      // ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      // vp.src= mediaSrc;ap.src='';
      // vp.style.display='block';ap.style.display='none';yt.style.display='none';
    }
    if (mediaSwitch==='ON'){
      media.src= mediaSrc;
      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1);
    }   

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
  hidePlayer();
  adSegments = [];

  try{url=`${preStr}${encodeURIComponent('https://backend.podscribe.ai/api/series/v2/'+t+'/episodes?archivedIncludedFilter=false&count=50&cursor='+cursor+'&episodeTitle=&seriesId='+t)}`;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.next_cursor;
  for (let h of str.data){
    items.push([h.id,h.title,h.uploadedAt,h.duration,h.episodes[0].hasTranscription,h.episodes[0].transcriptionId])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="pdGetContent('${h[0]}',${h[4]},'${h[5]}')">${h[1]}<br><span class="time">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p><div id="${h[0]}" class="content">
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

async function pdGetContent(id,hasTranscription,transcriptionId){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);
  let res, str, mediaSrc;

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    // if (cEl.innerText.length>10) {loading.style.display = 'none'; return;} // already got transcription in cEl

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
      // ap.src= mediaSrc;vp.src='';
      // ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      // vp.src= mediaSrc;ap.src='';
      // vp.style.display='block';ap.style.display='none';yt.style.display='none';
    }
    if (mediaSwitch==='ON'){
      media.src= mediaSrc;
      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1);
    }   

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


//    SOUNDCLOUD
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// props.pageProps.playlistUrn >> soundcloud:playlists:2053138686
// props.pageProps.initialStoreState.entities.playlists.soundcloud:playlists:2053138686.data.tracks

async function scGetList(siteName,t) {
  hidePlayer();
  adSegments = [];

  try{
  const res = await fetch(preStr+encodeURIComponent('https://m.soundcloud.com/'+t));
  const str = await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");

  const raw = JSON.parse(doc.querySelector('#__NEXT_DATA__').innerText);
  const rawData = raw.props.pageProps.initialStoreState.entities.playlists[raw.props.pageProps.playlistUrn].data.tracks;
  const ids = rawData.map(item=>item.replace('soundcloud:tracks:',''));

  // // 1. 取出所有 <script>...</script>
  // const scripts = [...str.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];

  // // 2. 找到包含 window.__sc_hydration 的 script
  // for (const match of scripts) {
  //   const content = match[1];
  //   if (content.includes("window.__sc_hydration")) {
      // const raw = JSON.parse(content.trim().slice(24,-1));
  
      // // 3. 找出 hydratable === "playlist" 的物件
      // const target = raw.find(item => item.hydratable === "playlist");

      // const data = target ? target.data?.tracks : null;
      // const ids = data.map(item => item.id);

      for (let id of ids.slice((rr-1)*10,rr*10)) {
        const res = await fetch(`${preStr}${encodeURIComponent(`https://api-v2.soundcloud.com/tracks?ids=${id}&client_id=LMlJPYvzQSVyjYv7faMQl9W7OjTBCaq4`)}`);
        const json = await res.json();
        const j = json[0];
        items.push([j.permalink_url,j.title,j.duration/1000]);
      }

      for (let h of items){
        html+=`<p class="title fs12" onclick="scGetContent('${h[0]}')">${h[1]}<br><span class="fs10 fw-bold">${cvtS2HHMMSS(h[2],1)}</span></p><hr>`;
      }
    // }
    // }
    } catch{html='<p>尚無內容</p>'}

  return html;
}


async function scGetContent(id){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = CSS.escape(id);
  adSegments = [];

    const res=await fetch(`${backendUrl}/klickaud?url=${id}`);
    const str=await res.text();
    let mediaSrc = decodeBase64(str);

    if (mediaSrc.indexOf('.mp3')!==-1) {
      media=ap;
      // ap.src= mediaSrc;vp.src='';
      // ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else {
      media=vp;
      // vp.src= mediaSrc;ap.src='';
      // vp.style.display='block';ap.style.display='none';yt.style.display='none';
    }
    if (mediaSwitch==='ON'){
      media.src= mediaSrc;
      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1.2);
    }   
}



//    TED
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getTedAuth(){
  const res = await fetch(preStr+encodeURIComponent('https://www.ted.com/'));
  const str = await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  return JSON.parse(doc.querySelector('#__NEXT_DATA__').innerText);
}

let tedRaw, tedBuildId;
(async () => {
  tedRaw = await getTedAuth();
  tedBuildId = tedRaw.buildId;
})();

async function tedGetList(siteName,t){
  hidePlayer();
  adSegments = [];

  try{
    const res = await fetch('https://zenith-prod-alt.ted.com/api/search', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: `[{"indexName":"newest","params":{"attributeForDistinct":"objectID","distinct":1,"facets":["subtitle_languages","tags"],"highlightPostTag":"__/ais-highlight__","highlightPreTag":"__ais-highlight__","hitsPerPage":24,"maxValuesPerFacet":500,"page":${rr-1},"query":""}}]`,
      });
    const str=await res.json();

  for (let h of str.results[0].hits){
    items.push([h.slug,h.title,h.speakers,h.duration])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="tedGetContent('${h[0]}')">${h[1]}<br><span class="time">${h[2]} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p><div id="${h[0]}" class="content">
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


async function tedGetContent(id){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    isTranslated=true;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<p></p><div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

  let res, str;

  try {
    res=await fetch(`${preStr}https://www.ted.com/_next/data/${tedBuildId}/talks/${id}.json`);
    str=await res.json();
  // const rawLrc = str.pageProps.transcriptData.translation.paragraphs || [];
  } catch {}

  const playerData = JSON.parse(str.pageProps.videoData.playerData) || [];
  const mediaId = playerData.mediaIdentifier?.split('-')[1].slice(2) || '';
  const published = cvt2Timezone(playerData.published*1000);

  cEl.previousElementSibling.innerHTML+=`<p class="fs10">${published}</p>`;

  try {
    res=await fetch(`https://hls.ted.com/project_masters/${mediaId}/subtitles/en/full.vtt`);
    str=await res.text();

    const ts=parseVTT(str);
    if (ts.length !== 0){

  // if (rawLrc!==[]){
  //   try{
  //   let ts=[];
  //   for (let r of rawLrc){
  //     for (let s of r.cues){
  //       ts.push({
  //         startTime: s.time/1000,
  //         sentence: `${s.text}<button type="button" class="btn btn-light position-relative sepia opacity-25 position-absolute bottom-0 end-0 mb-1" onclick="getPodcastTranslate(this)">${svgTranslate}</button>`
  //       });
  //     }  
  //   }

    getLinesTable(ts,id,false);

    // } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`;}

  } else {
    cEl.innerHTML+=`<p>尚未提供文稿</p>`;
  }
  } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`;}
  
  let mediaSrc = `https://hls.ted.com/project_masters/${mediaId}/manifest.m3u8`;
  media=vp;
  // vp.src= mediaSrc;
  // ap.src='';

    if (mediaSwitch==='ON'){
      if (vp.canPlayType('application/vnd.apple.mpegurl')) {
          vp.src = mediaSrc;
          // vp.play();
      } else if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(mediaSrc);
          hls.attachMedia(vp);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
              // vp.play();
          });
      } else {
          console.error("HLS is not supported in this browser.");
      }

      media.style.display='block';ct.style.display='block';
      setPlaybackRate(1);
    }   

  loading.style.display='none';

  } else {
    cEl.style.display='none';
  }

}



// vtt
/**
 * Parse WebVTT content and return array of { startTime: Number(seconds), sentence: String }
 * @param {string} vttText - full VTT file as string
 * @returns {Array<{startTime:number, sentence:string}>}
 */
function parseVTT(vttText) {
  if (!vttText || typeof vttText !== 'string') return [];

  const lines = vttText.split(/\r?\n/);
  const results = [];

  // parse a timestamp like "00:01:23.456" or "01:23.456"
  function parseTimeToSeconds(ts) {
    ts = ts.trim().replace(',', '.');
    const parts = ts.split(':').map(p => p.trim());
    let seconds = 0;
    if (parts.length === 3) {
      // HH:MM:SS.xxx
      const h = parseFloat(parts[0]) || 0;
      const m = parseFloat(parts[1]) || 0;
      const s = parseFloat(parts[2]) || 0;
      seconds = h * 3600 + m * 60 + s;
    } else if (parts.length === 2) {
      // MM:SS.xxx
      const m = parseFloat(parts[0]) || 0;
      const s = parseFloat(parts[1]) || 0;
      seconds = m * 60 + s;
    } else {
      // fallback: try direct parse
      seconds = parseFloat(ts) || 0;
    }
    return seconds;
  }

  // remove HTML tags and collapse whitespace
  function cleanText(text) {
    return text
      .replace(/<\/?[^>]+(>|$)/g, '')    // strip HTML tags
      .replace(/\s+/g, ' ')              // collapse whitespace/newlines
      .trim();
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // timestamp line contains "-->"
    if (line.includes('-->')) {
      const parts = line.split('-->');
      const startTs = parts[0].trim();
      const startSeconds = parseTimeToSeconds(startTs);

      // collect subsequent non-empty lines as the cue text
      let j = i + 1;
      const cueLines = [];
      while (j < lines.length && lines[j].trim() !== '') {
        cueLines.push(lines[j]);
        j++;
      }
      i = j; // advance outer loop

      const sentence = cleanText(cueLines.join(' ')) + `<button type="button" class="btn btn-light position-relative sepia opacity-25 position-absolute bottom-0 end-0 mb-1" onclick="getPodcastTranslate(this)">${svgTranslate}</button>`;
      // skip empty sentence
      if (sentence) {
        results.push({ startTime: startSeconds, sentence });
      }
    }
  }

  return results;
}

/* ---------- 範例用法 ---------- 
const sampleVtt = `WEBVTT

1
00:00:07.300 --> 00:00:10.000
This is a sentence.

2
00:00:12.150 --> 00:00:15.000
Another <i>multi-line</i>
subtitle line.

00:00:20.000 --> 00:00:22.500
短句子，中文也支援。
`;

 console.log(parseVTT(sampleVtt));
 預期輸出（console）:
[
  { startTime: 7.3, sentence: "This is a sentence." },
  { startTime: 12.15, sentence: "Another multi-line subtitle line." },
  { startTime: 20, sentence: "短句子，中文也支援。" }
]
*/




//    VOICETUBE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getVtAuth(){
  const res = await fetch(preStr+encodeURIComponent('https://tw.voicetube.com'));
  const str = await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  return JSON.parse(doc.querySelector('#__NEXT_DATA__').innerText);
}

let vtRaw, vtBuildId, vtAuth;
(async () => {
  vtRaw = await getVtAuth();
  vtBuildId = vtRaw.buildId;
  vtAuth = vtRaw.props.pageProps.auth.token;
})();

async function vtGetList(siteName,t){
  hidePlayer();
  adSegments = [];

  let res, str;
  const headers={'Content-Type': 'application/json','authorization':`Bearer ${vtAuth}`};

  try{
  if (t.startsWith('#')){
    t=t.slice(1);
    res = await fetch(`${preStr}https://tw.voicetube.com/_next/data/${vtBuildId}/zh-TW/search.json?query=${t.replaceAll(' ','+')}&sortBy=relevance&page=${rr}`);
    str = await res.json();
    str = str.pageProps.dehydratedState.queries[0].state;

  } else if (t.startsWith('q_')) {
    t=t.slice(2);

    res = await fetch(`https://vtapi.voicetube.com/v2.1/zh-TW/${t}?platform=Web&limit=20&offset=${rr-1}`, {
      method: 'GET',
      headers: headers,
      });
    str=await res.json();

  } else if (t==='hotVideos') {
    res = await fetch(`https://vtapi.voicetube.com/v2.2/videos/hotVideos?platform=Web&page=${rr}&perPage=20&language=zh-TW`, {
      method: 'GET',
      headers: headers,
      });
    str=await res.json();

  } else if (t==='videos') {
    res = await fetch(`https://vtapi.voicetube.com/v2.2/videos?platform=Web&language=zh-TW`, {
      method: 'POST',
      headers: headers,
      body: `{"page":${rr},"perPage":20,"isFeatured":true,"sortMode":"DESC","sortBy":"publishedAt"}`
      });
    str=await res.json();

  } else {
  
    res = await fetch('https://vtapi.voicetube.com/v2.2/videos?platform=Web&language=zh-TW', {
      method: 'POST',
      headers: headers,
      body: `{"page":${rr},"perPage":30,"sortMode":"DESC"${t.startsWith('c_')?`,"channel":"${t.slice(2)}"`:''}${t.startsWith('d_')?`,"duration":[${t.slice(2)}]`:''}${t.startsWith('l_')?`,"levels":["${t.slice(2)}"]`:''},"sortBy":"publishedAt"}`,
      });
    str=await res.json();

  }


  for (let h of str.data.items? str.data.items : str.data){
    items.push([h.id,h.title,h.cefrLevel,h.durationText,h.isTranslated,h.youtubeId])
  }
  for (let h of items){
    html+=`<p class="title fs12" onclick="vtGetContent('${h[0]}',${h[4]},'${h[5]}')">${h[1]}<br><span class="time">${h[2]} | </span><span class="fs10 fw-bold">${h[3]}</span></p><div id="${h[0]}" class="content">
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


async function vtGetContent(id,isTranslated,youtubeId){
  hidePlayer();

  if (id==='') {
    id=document.querySelector('#user-input').value;
    isTranslated=true;
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<p></p><div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';


  try {
  const res=await fetch(`https://vtapi.voicetube.com/v2.1.1/zh-TW/videos/${id}?platform=Web&language=zh-TW`);
  const str=await res.json();

  youtubeId=str.data.youtubeId;
  media = ytPlayer;

  if (mediaSwitch==='ON'){
    createYouTubePlayer(str.data.youtubeId);
    yt.style.display='block';ct.style.display='block';
    setPlaybackRate(1);
  }   

  cEl.previousElementSibling.innerHTML+=`${str.data.publishedAt ? `<p class="fs10">${cvt2Timezone(str.data.publishedAt*1000)}</p>` : ''}`;

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
    cEl.innerHTML+=`<p class="fs12"><strong>${v.text}</strong> | ${v.cefrLevel}</p>`;
    for (let d of v.definitions){
      cEl.innerHTML+=`
      <p class="fs10"><span>/${d.pronunciationKk}<br>${d.pos}${d.wordPlural ? ` | ${d.wordPlural}` : ''}</span></p>
      <p class="fs12">${d.englishDefinition} | ${d.chineseTraditionalDefinition}</p>
      <p class="fs12">${d.englishExample}</p>
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


async function vtGetSearchResults(siteName,t){ return html = await vtGetList(siteName, '#'+t) }



//    YOUTUBE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let lang='en';

async function ytbGetList(siteName,t){
  hidePlayer();
  adSegments = [];
  lang='en';

  if (t.endsWith('$')){lang='';t=t.slice(0,-1);}else{lang='en';}

  try{
    const res=await fetch(preStr+encodeURIComponent(t.startsWith('@')?`https://www.youtube.com/${t}`:`https://www.youtube.com/playlist?list=${t}`));
    const buf=await res.arrayBuffer();
    const raw=new TextDecoder('utf-8').decode(buf);
    const str=raw.replace(/\\x([0-9A-Fa-f]{2})/g, (_, p1) =>String.fromCharCode(parseInt(p1, 16)));    

    const ytInitialData=JSON.parse(str.match(/var\s+ytInitialData\s*=\s*([\s\S]*?);<\/script>/)?.[1]).contents.twoColumnBrowseResultsRenderer;
    const data=t.startsWith('@')
    ? ytInitialData.tabs[1].tabRenderer.content.richGridRenderer.contents
    : ytInitialData.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;

    if (t.startsWith('@')) {
      for (let d of data){
        if (d.richItemRenderer){
          items.push([d.richItemRenderer.content.videoRenderer.videoId,d.richItemRenderer.content.videoRenderer.title.runs[0].text,d.richItemRenderer.content.videoRenderer.lengthText.simpleText]);
        }        
      }
    } else {
      for (let d of data){
        if (d.playlistVideoRenderer){
          items.push([d.playlistVideoRenderer.videoId,d.playlistVideoRenderer.title.runs[0].text,d.playlistVideoRenderer.lengthText.simpleText]);
        }
      }
    }

    for (let h of items){
      html+=`<p class="title fs12" onclick="ytbGetContent('${h[0]}')">${h[1]} | <span class="fs10 fw-bold">${h[2]}</span></p><div id="${h[0]}" class="content">
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

async function ytbGetContent(id){
  hidePlayer();

  if (id==='') {
    id=getYouTubeVideoId(document.querySelector('#user-input').value);
    newNews();showTop(siteNameVar);items=[];html='';
    loading.style.display='block';

    list.innerHTML+=`<div id="${id}" class="content">
      <div class="pt-2 sepia">
        <table class="table table-auto fs11 p-0 sepia">
          <tbody id="lines-${id}"></tbody>
        </table>
      </div>
      </div><hr>`;

    loading.style.display='none';
    document.querySelector('#user-input').value='';
  }

  contentId = id;
  adSegments = [];
  const cEl=document.getElementById(id);

  media = ytPlayer;

  if (mediaSwitch==='ON'){
    createYouTubePlayer(id);
    yt.style.display='block';ct.style.display='block';
    setPlaybackRate(1);
  }   


  if (lang=='') return;

  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    // if (cEl.innerText.length>10) return; // already got transcription in cEl

  try{
  const res = await fetch(preStr+'https://tactiq-apps-prod.tactiq.io/transcript', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: `{"videoUrl":"https://www.youtube.com/watch?v=${id}","langCode":"en"}`,
    });
  const rawLrc=await res.json();

  let ts=[];
  for (let s of rawLrc.captions){
    ts.push({
      startTime: s.start,
      sentence: s.text
    });     
  }
  getLinesTable(ts,id,true);

  } catch {cEl.innerHTML+=`<p>尚未提供文稿</p>`}
  loading.style.display='none';

  } else {
    cEl.style.display='none';
  }
}



//    OPERATION
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function hidePlayer(){
  ap.style.display='none';vp.style.display='none';yt.style.display='none';ct.style.display='none !important';ap.src='';vp.src='';
}

function closeContent(){
  const el = contentId.indexOf('\/') !== -1 ? document.querySelector(`#${contentId}`) : document.getElementById(contentId);
  el.style.display='none';
  el.previousElementSibling.scrollIntoView();
  // document.body.scrollTop = 0;document.documentElement.scrollTop = 0;
}

function setPlaybackRate(speed){
  media.playbackRate = speed;
  speedLabel.textContent = media.playbackRate.toFixed(2) + "x";
}

let mediaSwitch = 'ON';
document.getElementById('mediaSwitch').addEventListener('change', function () {
  mediaSwitch = this.checked ? 'ON' : 'OFF';
});


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
    playerVars: { modestbranding: 1, rel: 0, controls: 1, showinfo: 0, hl: 'en', cc_lang_pref: 'en' },
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


/**
 * 從 YouTube 鏈接或字串取得 videoId（若無則回傳 null）
 * 支援範例：
 * - https://www.youtube.com/watch?v=SpeWbCq5s_c&list=...
 * - https://youtu.be/SpeWbCq5s_c
 * - https://www.youtube.com/embed/SpeWbCq5s_c
 * - https://www.youtube.com/shorts/SpeWbCq5s_c
 * - 也接受直接傳入 videoId 字串（長度 11）
 */
function getYouTubeVideoId(input) {
  if (!input) return null;
  // 若使用者直接傳入 videoId（YouTube id 通常為 11 個字，但有少數例外）
  const idCandidate = String(input).trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(idCandidate)) return idCandidate;

  // 嘗試解析為 URL（若不是合法 URL 會丟錯）
  let url;
  try {
    url = new URL(input);
  } catch (e) {
    // 不是完整 URL，嘗試在字串中用 regex 抓 id
    const fallback = input.match(/[A-Za-z0-9_-]{11}/);
    return fallback ? fallback[0] : null;
  }

  // 1) 標準 watch?v=...
  if (url.searchParams && url.searchParams.get('v')) {
    const v = url.searchParams.get('v');
    if (/^[A-Za-z0-9_-]{11}$/.test(v)) return v;
  }

  // 2) youtu.be 短址，path 第一段為 id
  if (url.hostname === 'youtu.be' || url.hostname.endsWith('.youtu.be')) {
    const p = url.pathname.split('/').filter(Boolean)[0];
    if (p && /^[A-Za-z0-9_-]{11}$/.test(p)) return p;
  }

  // 3) embed, v, shorts 等常見路徑： /embed/ID, /v/ID, /shorts/ID
  const pathMatch = url.pathname.match(/(?:\/embed\/|\/v\/|\/shorts\/|\/watch\/|\/videos\/)([A-Za-z0-9_-]{11})/);
  if (pathMatch) return pathMatch[1];

  // 4) 有時在 hash fragment 裡面（例如 SPA 使用 #!v=... 或 #v=...）
  if (url.hash) {
    const hashParams = new URLSearchParams(url.hash.replace(/^#?!?/, ''));
    if (hashParams.get('v') && /^[A-Za-z0-9_-]{11}$/.test(hashParams.get('v'))) {
      return hashParams.get('v');
    }
    // 或直接在 hash 裡面包含 id
    const hashMatch = url.hash.match(/[A-Za-z0-9_-]{11}/);
    if (hashMatch) return hashMatch[0];
  }

  // 5) 最後的保底：在整個 href 中找 11 長度的 token（會挑第一個）
  const fallback = url.href.match(/[A-Za-z0-9_-]{11}/);
  return fallback ? fallback[0] : null;
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

if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: '영어베이터',         // 可以是 App 名稱
    artist: '영어베이터',           // 可留空或改為品牌名
    // album: 'Podcast Library',         // 可選
    artwork: [
      { src: 'icons/icon-podcast-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icons/icon-podcast-512.png', sizes: '512x512', type: 'image/png' }
    ]
  });
}


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
  // const changeSpeed = (delta) => {
  //   let newRate = media.playbackRate + delta;
  //   // 限制範圍在 0.5x ~ 2.0x
  //   newRate = Math.max(0.5, Math.min(2.0, newRate));
  //   media.playbackRate = newRate;
  //   speedLabel.textContent = newRate.toFixed(1) + "x";
  // };

  // 加速或減速函式

const changeSpeed = (delta) => {
  // 👉 YouTube iframe player
  if (media && typeof media.getPlaybackRate === "function") {
    const available = media.getAvailablePlaybackRates(); // [0.25, 0.5, 1, 1.25, 1.5, 2]
    const current = media.getPlaybackRate();

    // 你的需求：YouTube 用 0.25 級距
    let newRate = current + (delta > 0 ? 0.25 : -0.25);

    // 限制在合法範圍內
    newRate = Math.max(Math.min(newRate, Math.max(...available)), Math.min(...available));

    // 找最近的合法速率
    const closest = available.reduce((prev, curr) =>
      Math.abs(curr - newRate) < Math.abs(prev - newRate) ? curr : prev
    );

    media.setPlaybackRate(closest);
    updateSpeedLabel(closest);
    return;
  }

  // 👉 HTML5 audio 或 video
  if (media && (media.tagName === "AUDIO" || media.tagName === "VIDEO")) {

    // 你的需求：Audio/Video 用 0.1 級距
    let newRate = media.playbackRate + (delta > 0 ? 0.1 : -0.1);

    // 可自行調整範圍
    newRate = Math.max(0.5, Math.min(3.0, newRate));

    // 四捨五入到 0.1
    newRate = Math.round(newRate * 10) / 10;

    media.playbackRate = newRate;
    updateSpeedLabel(newRate);
    return;
  }

  console.warn("無法變更播放速度，media 尚未初始化或不支援。");
};



  // 更新畫面上的顯示文字
  const updateSpeedLabel = (rate) => {
    if (typeof speedLabel !== "undefined" && speedLabel) {
      speedLabel.textContent = rate.toFixed(2).replace(/\.0+$/, "") + "x";
    }
  };  

  // 按鈕事件綁定
  speedDown.addEventListener("click", () => changeSpeed(-1));
  speedUp.addEventListener("click", () => changeSpeed(+1));
  playBtn.addEventListener("click", playPause);
  rwBtn.addEventListener("click", () => skip(-5));
  fwBtn.addEventListener("click", () => skip(+5));



  // function scrollToRow(currentRow) {
  //   if (currentRow && currentRow !== lastHighlightedRow) {
  //     const rect = currentRow.getBoundingClientRect();
  //     const absoluteY = window.scrollY + rect.top;
  //     // const targetY = absoluteY - window.innerHeight / 2;
  //     const targetY = absoluteY - toptiv.offsetHeight;
  //     window.scrollTo({ top: targetY, behavior: 'smooth' });
  //     lastHighlightedRow = currentRow;
  //   }
  // }



document.addEventListener("click", (e) => {
  if (e.target.closest('button')) return;

  function getCurrentTime(media) {
    return media.playVideo ? media.getCurrentTime() : media.currentTime;
  }

  function getDuration(media) {
    return media.playVideo ? media.getDuration() : media.duration;
  }



  const table = document.querySelector(`#lines-${contentId}`);
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
  const targetY = absoluteY - topdiv.offsetHeight;
  window.scrollTo({ top: targetY, behavior: 'smooth' });

  // 停用舊的 interval / ontimeupdate
  if (window.ytLoopInterval) {
    clearInterval(window.ytLoopInterval);
    window.ytLoopInterval = null;
  }
  if (media.ontimeupdate) media.ontimeupdate = null;

  let lastHighlightedRow = row; // 記錄最後高亮行，避免重複滾動

  function scrollToRow(currentRow) {
    if (!autoScrollEnabled) return; // 若使用者在滾動，略過
    if (currentRow && currentRow !== lastHighlightedRow) {
      const rect = currentRow.getBoundingClientRect();
      const absoluteY = window.scrollY + rect.top;
      // const targetY = absoluteY - window.innerHeight / 2;
      const topdiv = document.getElementById('top');
      const targetY = absoluteY - topdiv.offsetHeight;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      lastHighlightedRow = currentRow;
    }
  }

  // function autoScrollToRow(row) {
  //   if (!autoScrollEnabled) return; // 若使用者在滾動，略過

  //   const topHeight = topdiv ? toptiv.offsetHeight : 0;

  //   const rect = row.getBoundingClientRect();
  //   const absoluteY = window.scrollY + rect.top;
  //   const targetY = absoluteY - topHeight; // 捲動到 top 區塊的正下方

  //   window.scrollTo({
  //     top: targetY,
  //     behavior: 'smooth'
  //   });
  // }

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
          if (mode==='continuous'){
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
      playBtn.innerHTML = svgPause;

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
          if (mode==='continuous'){
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
        }

        if (mode === "single" && current >= endTime) {
          media.pause();
          playBtn.innerHTML = svgPlay;
          media.ontimeupdate = null;
        } else if (mode === "loop" && current >= endTime) {
          media.currentTime = startTime;
          media.play();
          playBtn.innerHTML = svgPause;
        }
      };
    }
  }

  playSegment();
});



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

    const topHeight = topdiv ? toptiv.offsetHeight : 0;

    const rect = row.getBoundingClientRect();
    const absoluteY = window.scrollY + rect.top;
    const targetY = absoluteY - topHeight; // 捲動到 top 區塊的正下方

    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }


  // function autoScrollToRow(row) {
  //   if (!autoScrollEnabled) return; // 若使用者在滾動，略過

  //   const rect = row.getBoundingClientRect();
  //   const absoluteY = window.scrollY + rect.top;
  //   const targetY = absoluteY - (window.innerHeight * trLvl);

  //   window.scrollTo({
  //     top: targetY,
  //     behavior: 'smooth'
  //   });
  // }

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










