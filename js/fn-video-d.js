//    d: MSN, MSN CHANNEL, WSJ, VIDEO GET CONTENT
//    p: BBG

//    BLOOMBERG VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbgVideoGetList(siteName,t){
  try{
    url='https://personalization.bloomberg.com/user/recommendations/cfru?timezoneOffset=-28800000&limit=50&resourceTypes=Video&offset='+(rr-1)*50+'&includedSites='+t;
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str){
      items.push([h.assetID,h.headline,h.publishedAt,h.duration,h.thumbnailUrl,h.url])
    }
    items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

    for (let h of items){
      html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://www.bloomberg.com/media-manifest/videos/android/WiFi/${h[0]}.m3u8')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${cvt2Timezone(h[2])} | <span class="fw-bold">${cvtS2HHMMSS(h[3],1000)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://www.bloomberg.com/media-manifest/videos/android/WiFi/${h[0]}.m3u8')"></div><hr>`
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    MSN VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnVideoGetList(siteName,t){
  try{url='https://assets.msn.com/service/MSN/Feed/me?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&cm=en-us&contentType=video&query='+t+'&queryType=myfeed&$top=50&$skip='+(rr-1)*50;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.value[0].subCards){
    items.push([h.sourceId,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url,h.provider.name]);
  }
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${h[7]}<br>${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    MSN VIDEO FROM CHANNEL
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function msnChannelVideoGetList(siteName,t){
  try{for (var i=0;i<2;i++){
    url='https://assets.msn.com/service/news/feed/pages/providerfullpage?market=en-us&timeOut=10000&ocid=finance-data-feeds&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&CommunityProfileId='+t+'&cm=en-us&User=m-00A80177A097658A10770F1FA15F64FF&newsSkip='+12*((rr-1)*2+i)+'&query=newest&$skip='+((rr-1)*2+i);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.sections[0].cards){
      if(h.type=='video'){
        items.push([h.id,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url]);
      }
    }
  }
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  return html;
  }catch{html='<p>尚無內容</p>'}
}


//    WSJ VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wsjVideoGetList(siteName,t){
  try{url='https://video-api.shdsvc.dowjones.io/api/legacy/find-all-videos?lang=en-us&count=50'+t+'&page='+(rr-1);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.items){
    var thumbnail=h.thumbnailList[0].url;
    items.push([h.id.replace('{','').replace('}',''),h.name,h.formattedCreationDate,h.duration,thumbnail.slice(0,thumbnail.indexOf('?')),h.linkURL,h.hls])
  }
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    VIDEO GET CONTENT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function videoGetContent(clickedId,id,url,m3u8Url){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    var html = '<video id="video-'+id+'" class="video-js" style="width:100%;height:auto" playsinline controls></video>'+'<p class="text-end"><a href="' + url + '" target="_blank">Share</a></p><br>';
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
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){
      cEl.style.display='none';
      cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}
