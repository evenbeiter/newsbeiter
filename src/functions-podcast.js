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
        pdId=str.match(/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}","Done"/g)[0].replace('","Done"','');
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
  let res=await fetch(`${preStr}https://backend.podscribe.ai/api/episode?id=${h.id}`);
  let str=await res.text();
  const audioUrl=str.match(/https:\/\/jfe93e.s3[\s\S]*?.mp3/g)[0];

  res=await fetch(`https://podscribe-transcript.s3.amazonaws.com/transcripts/${id}.json`);
  str=await res.json();

  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    var html = '';
    cEl.innerHTML=html;
    const video = document.getElementById('video-'+id);
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.play();
    } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play();
        });
    } else {
        console.error("HLS is not supported in this browser.");
    }

    document.getElementById('video-'+id).parentElement.previousElementSibling.firstChild.setAttribute('style', 'display: none !important;');
    loading.style.display='none';
  } else {
      var e=window.event;
      if (e && e.target.tagName==='VIDEO'){return}else{
      cEl.style.display='none';
      if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
      try{cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()}catch{document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
    }
  }
}