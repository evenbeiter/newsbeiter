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

  ap.style.display='block';vp.style.display='none';yt.style.display='none';ap.src='';vp.src='';

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
      ap.style.display='block';vp.style.display='none';yt.style.display='none';
    } else if (doc.querySelectorAll('video').length!==0) {
      media=vp;
      vp.src= mediaSrc;ap.src='';
      vp.style.display='block';ap.style.display='none';yt.style.display='none';
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


