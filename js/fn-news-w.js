//    CNA, CNYES HAO,

//    CNA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnaGetList(siteName,t){
  try{url='https://www.cna.com.tw/cna2018api/api/WNewsList';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: '{"action":"0","category":"'+t+'","pagesize":"100","pageidx":1}',
    });
  var str=await res.json();
  for (let a of str.ResultData.Items){
    items.push([a.PageUrl,a.HeadLine])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cnaGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  html= '<p class="fs10">'+doc.querySelector('.updatetime').innerText+'</p>'+doc.querySelector('.paragraph').outerHTML.replaceAll('</span></a><a','</span></a><br><a') + '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    CNYES HAO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnyeshaoGetList(siteName,t){
  try{
  var k=4;
  if (t.slice(0,2)=='W_'){url='https://hao.cnyes.com/h_api/1/pg_wall/more';t=t.slice(2)}else{url='https://hao.cnyes.com/h_api/1/pg_ch/more'};
  for (let i=0;i<k;i++){console.log((rr-1)*k+i+1);
    var res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=UTF-8',},
      body: '{"p2":"'+t+'","p3":'+((rr-1)*k+i+1)+',"timezoneOffset":-28800000}',
    });
    var str=await res.json();
    for (let h of str.payload.Root.Page_文章.List_文章){
      items.push([h.文章Id,h.標題,h.排序時間,h.Rendered_內容,h._號.名稱]);
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]?h[1]:'【詳內文】'}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])} | ${h[4]}</p>${h[3]}<p class="text-end"><a href="https://hao.cnyes.com/post/${h[0]}" target="_blank">分享</a></p><br></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    YAHOO TW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function yahooTWGetList(siteName,t){
  try{coun='TW';
  if (t.slice(-2)=='__'){t=t.slice(0,-2);coun='US'};
  var url='https://ncp-gw-finance.media.yahoo.com/api/v2/gql/stream_view?count=200&imageFormat=WEBP&namespace=finance&ntkEnabled=false&ssl=true&id=neo-ntk-assetlist-stream&site=finance&version=v1&enableCrossModuleDedup=true&snippetCount=200&listId='+t;
  let res=await fetch(url);
  let str=await res.json();
  var data=str.data.main.stream.slice((rr-1)*50,rr*50);
  for (let h of data){
    if(h.content){
      h=h.content;
      items.push([h.id,h.title])
    }
  }
  for (let h of items){
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function yahooTWGetContent(id){
    try{const res = await fetch('https://www.yahoo.com/caas/content/article/?region='+coun+'&uuid='+id);
    const str=await res.json();
    var a=str.items[0].data.partnerData;
    var b=str.items[0].markup.replaceAll('data-src','src').replace(/padding-bottom[\\s\\S]*?%/g,'');
    html = '<p class="fs10">'+cvt2Timezone(a.publishDate)+' | '+a.publisher+'</p>'+ b + '<p class="text-end"><a href="' + a.finalUrl + '" target="_blank">分享</a></p><br>';
  }catch{html='<p>尚無內容</p><br>'}
  return html;
}

async function yahooTWGetSearchResults(siteName,t){
  try{
  coun='TW'; var k=3;
  for (let i=0;i<k;i++){
  url='https://tw.news.yahoo.com/_td-news/api/resource/NuwaSearchService.newsSearch;loadMore=true;query='+t+';offset='+(k*10*(rr-1)+(i*10));console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  var data=str.data;
  for (let h of data){
    items.push([h.id,h.title,h.published_at,h.provider_name])
  }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<br><span id="dateAuthor-${h[0]}" class="fs10 fw-normal">${h[2]} | ${h[3]}</span></p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

//    YAHOO VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function yahooVideoGetList(siteName,t){
  try{var payload={
    "payload":{
      "gqlVariables": {
          "main": {
              "pagination": {
                  "uuids": uuids
              }
          }
      }
  },
    "serviceConfig": {
      "listId": t,
      "count": 200,
      "snippetCount": 50
    }
  };
  var url='https://finance.yahoo.com/xhr/ncp?location=US&queryRef=videosCategoryNeo&serviceKey=ncp_fin&lang=en-US&region=US';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'text/plain;charset=UTF-8',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  uuids=str.data.main.pagination.uudis;
  
  for (let h of str.data.main.stream){
    items.push([h.id,h.content.title,h.content.pubDate,h.content.duration,h.content.thumbnail.originalUrl,h.content.canonicalUrl.url])
  }

  for (let h of items){
    html+=`<div onclick="yahooVideoGetContent(this.id,'${h[0]}','${h[5]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="yahooVideoGetContent(this.id,'${h[0]}','${h[5]}')"></div><hr>`
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}

async function yahooVideoGetContent(clickedId,id,url){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    cEl.style.display='block';
    var nuxtDataItem = '<iframe id="video-'+id+'" src="'+url+'?format=embed" scrolling=no style="width:100%;height:auto"></iframe>'+'<p class="text-end"><a href="' + url + '" target="_blank">Share</a></p><br>';
    cEl.innerHTML=nuxtDataItem;

    document.getElementById('video-'+id).parentElement.previousElementSibling.firstChild.setAttribute('style', 'display: none !important;');
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){
      cEl.style.display='none';
      cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}
