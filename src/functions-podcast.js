//    PODCAST
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pdGetList(siteName,t){
  try{url=`https://backend.podscribe.ai/api/series/v2/${t}/episodes?archivedIncludedFilter=false&count=50&cursor=${cursor}&episodeTitle=&seriesId=${t}`;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.next_cursor;
  for (let h of str.data){
    items.push([h.episodes[0].hasTranscription==true?h.episodes[0].transcriptionId:'',h.title,h.uploadedAt,h.id,h.duration])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${cvt2Timezone(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function pdGetContent(id){
  try{const res = await fetch(`https://podscribe-transcript.s3.amazonaws.com/transcripts/${id}.json`);
  const str=await res.json();
  html = str.contents;
  }catch{html='<p><a href="https://www.ctee.com.tw' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}