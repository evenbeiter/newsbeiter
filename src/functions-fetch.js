//    FETCH FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    APOLLO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function apolloGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://www.apolloacademy.com/the-daily-spark/?query-15-page='+rr);console.log(url);
  const res=await fetch(url);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.entry-content.wp-block-post-content');
  for (let h of hh){
    var a=h.parentElement.previousElementSibling;
    var cid=a.querySelector('h2').children[0].href;
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${cid}')">${a.querySelector('h2').innerText}</p><div id="${cid}" class="content fs12" onclick="getContent('${siteName}',this.id,'${cid}')"><p class="time">${a.querySelector('time').innerText}</p>${h.outerHTML}${shareLink(cid)}</div><hr>`;
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    BBC
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbcGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://www.bbc.com/zhongwen/'+t+'/trad?page='+rr);console.log(url);
  const res=await fetch(url);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('a.bbc-1i4ie53.e1d658bg0');
  for (let h of hh){items.push([h.href,h.innerText])};
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bbcGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var embeds=str.match(/https:\/\/www.bbc.com\/ws\/av-embeds[\s\S]*?zh-hant/g);
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var a=doc.querySelector('main');
  var vdo=a.querySelectorAll('[data-e2e^="media-loader"]');
  for (let v=0;v<vdo.length;v++){
    vdo[v].outerHTML=`<iframe src="${embeds[v]}" scrolling=no allow="fullscreen" style="border:none;border-radius:0.375rem;aspect-ratio:16/9"></iframe>`;
  }
  html = a.outerHTML+shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    BLACKROCK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function blkGetList(siteName,t){
  try{url='https://www.blackrock.com/us/individual/insights';console.log(url);
  let res=await fetch(preStr+url);let str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('div.tile-container');
  for (let h of hh){
      items.push([h.querySelector('a').href,h.querySelector('h2.title').textContent.trim(),h.querySelector('.attribution-text').querySelector('span').textContent.trim()])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<span class="time fw-normal"> ${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function blkGetContent(id){
  try{
  const res = await fetch(preStr+id);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var a=doc.querySelector('#mainWrapper').outerHTML.replace(/ class="[\s\S]*?"/g,'').replaceAll('data-src="','src="').replace(/srcset="[\s\S]*?"/g,'').replaceAll('src="/','src="https://www.blackrock.com/');
  //var a=doc.querySelector('#mainWrapper').outerHTML.replace(/col-[\s\S]*? /g,'').replace(/col-[\s\S]*?"/g,'"').replace(/offset-[\s\S]*? /g,'').replace(/offset-[\s\S]*?"/g,'"').replaceAll('bg-white','').replaceAll('data-src="','src="').replace(/srcset="[\s\S]*?"/g,'').replaceAll('src="/','src="https://www.blackrock.com/');
  if (str.match(/contentUrl":[\s\S]*?.mp4"/g)){a=a.replace('<video','<video playsinline src="'+preStr.replace('api/fetch','embed')+str.match(/contentUrl":"[\s\S]*?.mp4"/g)[0].replace('contentUrl":"',''))};
  html = a+shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function isharesGetList(siteName,t){
  try{url='https://www.ishares.com/us/insights#market-insights';console.log(url);
  let res=await fetch(preStr+encodeURIComponent(url));let str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('ds-card');
  for (let h of hh){
      items.push([h.querySelector('a').href,h.querySelector('.ds-heading-s-lc')?.textContent.trim()??'',h.querySelector('.ds-attribution')?.textContent.trim()??''])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<br><span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function isharesGetContent(id){
  try{
  const res = await fetch(preStr+id);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var a=doc.querySelector('#mainWrapper').outerHTML.replace(/col-[\s\S]*? /g,'').replace(/col-[\s\S]*?"/g,'"').replace(/offset-[\s\S]*? /g,'').replace(/offset-[\s\S]*?"/g,'"').replaceAll('bg-white','').replaceAll('data-src="','src="').replace(/srcset="[\s\S]*?"/g,'').replaceAll('src="/','src="https://www.ishares.com/');
  if (str.match(/contentUrl":[\s\S]*?.mp4"/g)){a=a.replace('<video','<video playsinline src="'+preStr.replace('api/fetch','embed')+str.match(/contentUrl":"[\s\S]*?.mp4"/g)[0].replace('contentUrl":"',''))};
  html = a+shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

//    BNEXT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function bnextGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://www.bnext.com.tw/'+t+'?page='+rr);console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  
  if(t!=='topics'){
    var hh=doc.querySelectorAll('h2.three-line-text');
    for (let h of hh){
      items.push([h.parentElement.parentElement.children[0].href,h.innerText])
    }
  } else {
    var hh=doc.querySelectorAll('h2.text-white');
    for (let h of hh){
      var a=h.parentElement.parentElement.nextElementSibling.href;
      a=a.slice(-(a.length-a.lastIndexOf('/'))+1);
      items.push([a,h.innerText])
    }
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bnextGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var t=doc.querySelector('div.flex.gap-4.text-sm.items-center.flex-wrap');
  if (t==null){t=doc.querySelector('div.flex.gap-2.text-sm.items-center')}
  const a = doc.querySelector('[data-cat=article]');
  // var ads=a.querySelector('#pumpkin_159');
  // if(ads){ads.remove()};
  html = '<p class="time">'+t.innerText+a.outerHTML+shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

  
//    BOA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function boaGetList(siteName,t){
  try{url='https://institute.bankofamerica.com/economic-insights.html';console.log(url);
  let res=await fetch(preStr+url);let str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.aem-wrap--tile');
  for (let h of hh){
      items.push([h.querySelector('a').href,h.querySelector('h4').textContent.trim()])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function boaGetContent(id){
  try{
  const res = await fetch(preStr+id);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  html='<p class="time">'+doc.querySelectorAll('div.positioning-container__wrapper div.aem-wrap--text')+'</p>'+doc.querySelector('.key-takeaways').outerHTML+shareLink(id);
  }catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    BUSINESS TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessTodayGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://www.businesstoday.com.tw/'+t+rr);console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('a.article__item');
  for (let h of hh){
    items.push([h.href,h.children[1].children[1].innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function businessTodayGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  html = '<p class="time">'+(doc.querySelector('.context__info-item--date')?doc.querySelector('.context__info-item--date').innerText:'')+' | '+(doc.querySelector('.context__info-item--author')?doc.querySelector('.context__info-item--author').innerText:'')+'</p><p>'+(doc.querySelector('.article__introduction')?doc.querySelector('.article__introduction').innerHTML:'')+'</p>'+(doc.querySelector('div[itemprop="articleBody"]')?doc.querySelector('div[itemprop="articleBody"]').outerHTML.replaceAll('<p>&nbsp;</p>',''):'') +shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function businessTodayGetSearchResults(siteName,t){
  try{url=preStr+encodeURIComponent('https://www.businesstoday.com.tw/group_search/article?count=30&keywords='+t+'&page='+rr);console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.searchitem__content');
  for (let h of hh){
    var href=h.children[1].children[0].href;
    href= href.slice(0,href.indexOf('?'));
    items.push([href,h.children[1].innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    BUSINESS WEEKLY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessWeeklyGetList(siteName,t){
  try{if (t=='0000000000'){
    var res = await fetch(preStr+encodeURIComponent('https://www.businessweekly.com.tw/latest/SearchList'), {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded',},
      body: new URLSearchParams({ CurPage:20*(rr-1)}),
      });
    var str=await res.json();
    str=str.Content;
  } else {
  var res = await fetch(preStr+encodeURIComponent('https://www.businessweekly.com.tw/ChannelAction/LoadBlock/'), {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    body: new URLSearchParams({
      Start: 50 * rr - 1,
      End: 50 * rr,
      ID: t
    }),
    });
  var str=await res.text();
  }
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var titles=doc.querySelectorAll('.Article-content a');
  for (let tl of titles){
    items.push([tl.href,tl.textContent.replace('                    ','')]);
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function businessWeeklyGetContent(id){
  try{
  const res=await fetch((preStr+encodeURIComponent(id)).replace('evenbeiter.github.io','www.businessweekly.com.tw'));const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  if (id.indexOf('StrId=')==-1){
    html = '<p class="time">'+(doc.querySelector('.Padding-left.Margin-top')?.innerText??'')+'</p>'+(doc.querySelector('.Single-summary')?.outerHTML??'')+(doc.querySelector('.Single-article')?.outerHTML??'')+ '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  } else {
    html = '<p class="time">'+(doc.querySelector('.articleinfo')?.innerText??'')+'</p>'+(doc.querySelector('.postbody')?.outerHTML??'')+shareLink(id);    
  }
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function businessWeeklyGetSearchResults(siteName,t){
  try{
  var k=3;
  for (let i=1;i<=k;i++){
    var res = await fetch(preStr+encodeURIComponent('https://www.businessweekly.com.tw/Search/GetSolrSearchData'), {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded',},
      body: new URLSearchParams({
        wd: t,
        page: (rr-1)*k+i
      }),
    });
    var str=await res.text();str=str.replaceAll('\\"','"').replaceAll('\\r','\r').replaceAll('\\n','\n');
    var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
    var hh=doc.querySelectorAll('li');
    for (let h of hh){items.push([h.querySelector('a').href,JSON.parse('"'+h.querySelector('a').innerText.replace(/\s+/g,'')+'"')]);}
  }
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CNA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnaGetList(siteName,t){
  try{url='https://www.cna.com.tw/cna2018api/api/WNewsList';
  var res = await fetch(preStr+encodeURIComponent(url), {
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
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html= '<p class="time">'+doc.querySelector('.updatetime').innerText+'</p>'+doc.querySelector('.paragraph').outerHTML.replaceAll('</span></a><a','</span></a><br><a') + shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function cnaGetSearchResults(siteName,t){
  try{url='https://www.cna.com.tw/search/hysearchws.aspx?q='+t;console.log(url);
  let res=await fetch(preStr+encodeURIComponent(url));
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('ul#jsMainList li');
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('h2').innerText,h.querySelector('.date').innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<br><span class="fs10">${h[2]}</span></p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CNYES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnyesGetList(siteName,t){
  try{if (t=='topics'){
    url=preStr+encodeURIComponent('https://api.cnyes.com/media/api/v1/project/index?page='+rr);
    let res=await fetch(url);
    let str=await res.json();
    for (let a of str.items.data){
      html+=`<p class="title" onclick="openUrl('${a.link}')">${a.title}</p><hr>`;
    }
  } else {
    url=preStr+encodeURIComponent('https://api.cnyes.com/media/api/v1/newslist/category/'+t+'?limit=30&page='+rr);
    let res=await fetch(url);
    let str=await res.json();
    for (let a of str.items.data){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')">
            <p class="time">${cvt2Timezone(a.publishAt*1000)}</p>${decodeHTMLEntities(a.content)}<p class="text-end"><a href="https://news.cnyes.com/news/id/${a.newsId}" target="_blank">分享</a></p><br>
            </div><hr>`;
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cnyesGetContent(id){
  try{if (id.length<5){
    const res = await fetch(preStr+encodeURIComponent(id));
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var tagList=doc.querySelector('.scrolling');
    for (let c of tagList){
      html+=c.innerHTML
    }
  } else {
    let res=await fetch(preStr+encodeURIComponent('https://news.cnyes.com/news/id/'+id));
    let str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    html=doc.querySelector('#article-container').outerHTML.replaceAll('src="/_next/image?url=','src="')+shareLink('https://news.cnyes.com/news/id/'+id);
  }
  }catch{html='<p><a href="https://news.cnyes.com/news/id/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html
}

async function cnyesGetSearchResults(siteName,t){
  try{url=preStr+encodeURIComponent('https://api.cnyes.com/media/api/v1/search?q='+t+'&page='+rr);
  let res=await fetch(url);
  let str=await res.json();
  if(str.items.data!==null && str.items.data!==undefined){
    for (let a of str.items.data){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')"><p class="time">${cvt2Timezone(a.publishAt*1000)}</p></div><hr>`;
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CNYES HAO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnyeshaoGetList(siteName,t){
  try{
  var k=4;
  if (t.slice(0,2)=='W_'){url='https://hao.cnyes.com/h_api/1/pg_wall/more';t=t.slice(2)}else{url='https://hao.cnyes.com/h_api/1/pg_ch/more'};
  for (let i=0;i<k;i++){console.log((rr-1)*k+i+1);
    var res = await fetch(preStr+encodeURIComponent(url), {
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]?h[1]:'【詳內文】'}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${cvt2Timezone(h[2])} | ${h[4]}</p>${h[3].replace(/ src=\/download_image.ashx[\s\S]*? fid="/g,' src="https://hao.cnyes.com/download_image.ashx?file=')}${shareLink('https://hao.cnyes.com/post/'+h[0])}</div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CTEE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cteeGetList(siteName,t){
  try{url='https://www.ctee.com.tw/api/'+t+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.hyperLink,h.title,h.publishDatetime])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${cvt2Timezone(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cteeGetContent(id){
  try{const res = await fetch('https://www.ctee.com.tw/api'+id);
  const str=await res.json();
  html = str.contents + shareLink('https://www.ctee.com.tw'+id);
  }catch{html='<p><a href="https://www.ctee.com.tw' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function cteeGetSearchResults(siteName,t){
  try{url='https://www.ctee.com.tw/api/search/'+t+'?p='+rr;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.articleUrl,h.title,h.publishDate])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${h[2]}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    DW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function dwGetList(siteName,t){
  try{url='https://www.dw.com/zh-hant/'+t;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var d=doc.querySelectorAll('script');
  d=JSON.parse(d[d.length-1].innerText.slice(22,-2));
  d=d['/graph-api/zh-hant/content/navigation/'+t.slice(-4)].data.content.contentComposition.informationSpaces[0];
  var hh=[...d.top_story_thematic_focus[0].contents,...d.stories_thematic_focus[0].contents];
  for (let h of hh){
    items.push([h.namedUrl,h.title])
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function dwGetContent(id){
  try{const res = await fetch('https://www.dw.com'+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var d=doc.querySelectorAll('script');
  d=JSON.parse(d[d.length-1].innerText.slice(22,-2));
  d=d[Object.keys(d)[1]].data.content;
  if(id.indexOf('video-')===-1){
    html = '<p class="time">'+d.localizedContentDate+'</p>'+d.text.replace(/poster="data[\s\S]*?"/g,'').replaceAll('data-url="https://static.dw.com/image','src="https://static.dw.com/image').replaceAll('${formatId}','905')+ '<p class="text-end"><a href="https://www.dw.com' + id + '" target="_blank">分享</a></p><br>';
  }else{
    html = '<p class="time">'+d.localizedContentDate+'</p><p>'+d.teaser+'</p><video controls playsinline><source src="'+d.openGraphMetadata.url+'" type="video/mp4"></source></video>'+shareLink('https://www.dw.com'+id);
  }
  }catch{html='<p><a href="https://www.dw.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    GSAM
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function gsamGetList(siteName,t){
  try{url='https://am.gs.com/en-us/institutions/insights';
  var res=await fetch(preStr+encodeURIComponent(url));var str=await res.text();buildId=str.match(/"buildId":"[\s\S]*?"/g)[0].replace('"buildId":"','').replace('"','');
  url='https://am.gs.com/services/search-engine/en-us/institutions/search/insights?hitsPerPage=20&page='+rr;console.log(url);
  res=await fetch(preStr+encodeURIComponent(url));
  str=await res.json();
  for (let h of str.insights.hits){
    items.push([h.slug,h.title,h.publishDate.slice(0,10)])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function gsamGetContent(id){
  try{
  url='https://am.gs.com/_next/data/'+buildId+id+'.json';
  const res = await fetch(preStr+encodeURIComponent(url));
  const str=await res.json();
  if (str.pageProps.data.properties.title!=='Fixed Income Weekly: Musings'){
    html=`<p class="time">${str.pageProps.data.properties.authorDetails?.[0].personReferencePath.metadata.firstName??''} ${str.pageProps.data.properties.authorDetails?.[0].personReferencePath.metadata.lastName??''}, ${str.pageProps.data.properties.authorDetails?.[0].personReferencePath.metadata.jobTitle??''}</p>`;
    var order=str.pageProps.data.itemsOrder;
    for (let o of order){
      if (o.slice(0,4)=='text'){html+=str.pageProps.data.items[o].text} else if (o.slice(0,5)=='image'){html+=`<p class="xtl">${str.pageProps.data.items[o].images[0].title}<img src="https://am.gs.com${str.pageProps.data.items[o].images[0].fileReference.path}">${str.pageProps.data.items[o].images[0].source}`}
    }
    html+=shareLink('https://am.gs.com'+id);
  } else {
    html=shareLink('https://am.gs.com'+str.pageProps.data.properties.download.path);
  }}catch{html='<p><a href="https://am.gs.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    INVESCO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function invescoGetList(siteName,t){
  try{url='https://www.invesco.com/content/invesco/us/en/'+t+'.offset_'+rr+'.json';console.log(url);
  let res=await fetch(preStr+url);let str=await res.json();
  for (let h of str.contentCardValues){
      items.push(['https://www.invesco.com'+h.url,h.title,h.date])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function invescoGetContent(id){
  try{
  const res = await fetch(preStr+id);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  html=(doc.querySelector('.key-takeaways__inner')?.outerHTML??'')+(doc.querySelector('.richtext')?.outerHTML??'')+shareLink(id);
  }catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    ISABELNET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function isblGetList(siteName,t){
  try{
    url='https://www.isabelnet.com/blog/page/'+rr;console.log(url);
    var res=await fetch(preStr+encodeURIComponent(url));
    var str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");

    let ts=doc.querySelectorAll('.entry-title');
    for (let t of ts){
      res=await fetch(preStr+encodeURIComponent(t.firstChild.href));
      str=await res.text();
      parser = new DOMParser();
      doc = parser.parseFromString(str, "text/html");
      ss=doc.querySelectorAll('section');
      var hh=doc.querySelector('h2');
      var dt=doc.querySelector('.date-meta').innerText.replaceAll('\\n',' ');
      var pg=doc.querySelector('.elementor-text-editor');
      if (doc.querySelector('.gallery-icon')){var img=doc.querySelector('.gallery-icon')}else{var img=doc.querySelector('.elementor-image')};
      html+='<p class="title">'+hh.textContent+'</p><p class="time">'+dt+'</p>'+pg.innerHTML+img.innerHTML+'<br><br><hr>';
      html=html.replaceAll('<p>Image:','<p class=\"fs10\">Image:'); 
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    JIN10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function jinGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://xnews.jin10.com/'+t+'page/'+rr);console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.jin10-news-list-item-info');
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('.jin10-news-list-item-title').innerText,h.querySelector('.jin10-news-list-item-display_datetime').innerText+' | '+(h.querySelector('.jin10-news-list-item-topic')?.textContent??'').replace('\n                来自专题:\n                \n                  订阅','')])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${s2t(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function jinGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p>'+(doc.querySelector('.jin10-cnews-introduction')?.innerText??'')+'</p>'+(doc.querySelector('.jin10vip-image-viewer.setWebViewConentHeight.upload-statics-links')?.outerHTML??'')+shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    JPM
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function jpmGetList(siteName,t){
  try{url=t;console.log(url);
  if (t=='https://am.jpmorgan.com/content/jpm-am-aem/americas/us/en/adv/insights/_jcr_content/root/responsivegrid/jpm_am_mosaic_copy.model.json'){
    const res=await fetch(preStr+encodeURIComponent(url+'?v='+new Date().getTime()));
    const str=await res.json();
    for (let h of str.pages){
      if (h.authors[0]==undefined){items.push(['https://am.jpmorgan.com'+h.url,h.title,h.displayDate])}else{items.push(['https://am.jpmorgan.com'+h.url,h.title,(h.displayDate+' | '+h.authors[0].name+', '+h.authors[0].title).replace(', null','')])};
    }
    for (let h of items){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<br><span class="time">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
    }
  } else {url=t.split('__')[0];
    const res=await fetch(preStr+encodeURIComponent(url));
    const str=await res.json();
    var cat=str.categories;var htmlCat='';
    html=str.globalDisclosure.replaceAll('<i>','').replaceAll('</i>','');
    for (let c of cat){
      var slides=c.slides;var htmlSlides='';
      for (let s of slides){
        htmlSlides+=`<p>${s.title??''}</p>${s.summaryDescription??''}<img class="safe-click" src="${s.desktopImage}" onclick="showOverlay('gtmImg','${s.desktopImage}')"><br>`;
      }
      html+=`<p class="title xlt" onclick="getContent('${siteName}',this.id,'${c.id}')">${c.name}</p><div id="${c.id}" class="content fs12 xtl" onclick="getContent('${siteName}',this.id,'${c.id}')">${htmlSlides}${shareLink('https://am.jpmorgan.com/content/dam/jpm-am-aem/global/en/insights/'+t.split('__')[1]+'.pdf')}</div><hr>`
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function jpmGetContent(id){
  try{
  if (id=='https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/market-updates/weekly-market-recap/'){
    const res=await fetch(preStr+'https://cdn.jpmorganfunds.com/content/dam/jpm-am-aem/americas/us/en/insights/market-insights/wmr/wmr.json');
    const str=await res.json();
    html='<img src="https://cdn.jpmorganfunds.com/content/dam/jpm-am-aem/americas/us/en/insights/market-insights/wmr/chart_of_the_week.png"><p class="time">'+str.WMI.Disclosures.chartOfTheWeekDisclosure+'</p><p>'+str.WMI.ThoughtOfTheWeek+'</p><p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  } else if (id=='https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/market-updates/economic-update/'){
    const res=await fetch(preStr+'https://cdn.jpmorganfunds.com/content/dam/jpm-am-aem/americas/us/en/insights/market-insights/wmr/wmr.json');
    const str=await res.json();
    html=`
    <p class="title xtl">Growth</p><p>${str.EconomicUpdate.economic_update_growth?.data??''}</p>
    <p class="title xtl">Jobs</p><p>${str.EconomicUpdate.economic_update_jobs?.data??''}</p>
    <p class="title xtl">Profits</p><p>${str.EconomicUpdate.economic_update__profits?.data??''}</p>
    <p class="title xtl">Inflation</p><p>${str.EconomicUpdate.economic_update_inflation?.data??''}</p>
    <p class="title xtl">Rates</p><p>${str.EconomicUpdate.economic_update_rates?.data??''}</p>
    <p class="title xtl">Risks</p><p>${str.EconomicUpdate.economic_update_risks?.data??''}</p>
    <p class="title xtl">Investment Themes</p><p>${str.EconomicUpdate.economic_update_growth_inv_themes?.data??''}</p>
    <p class="text-end"><a href="https://am.jpmorgan.com/content/dam/jpm-am-aem/americas/us/en/insights/market-insights/wmr/economic_update.pdf" target="_blank">分享</a></p><br>`;
  } else if (id=='https://am.jpmorgan.com/us/en/asset-management/adv/insights/market-insights/guide-to-the-markets/'){
      html+=`${shareLink('https://am.jpmorgan.com/content/dam/jpm-am-aem/global/en/insights/market-insights/guide-to-the-markets/mi-guide-to-the-markets-us.pdf')}<hr>`
  } else {
  const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var dd=JSON.parse(doc.querySelector('#jpm-am-editorial-sidebar-desktop').dataset.compJson);
  html=doc.querySelector('.editorial-free-drop').outerHTML + shareLink(id);
  }
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    JPM PB
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function jpmpbGetList(siteName,t){
  try{url='https://privatebank.jpmorgan.com/apac/en/insights';console.log(url);
  let res=await fetch(preStr+url);let str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.jpm-wm-contentcard__info');
  for (let h of hh){
      items.push([h.querySelector('a').href,h.querySelector('h3').textContent.trim(),h.querySelector('.jpm-wm-contentcard__date').textContent])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function jpmpbGetContent(id){
  try{url=('https://privatebank.jpmorgan.com'+id).replace('https://evenbeiter.github.io','');
  const res = await fetch(preStr+url);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('[data-id^="jpm-wm-rebrand-global"]');
  for (let h of hh){html+=h.outerHTML;}
  html=html.replace(/ class="[\s\S]*?"/g,'');
  html+=shareLink(url);
  }catch{html='<p><a href="'+url+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    LINE TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function lineTodayGetList(siteName,tt){
  //try{
  tt=tt.split('|');
  for (let t of tt) {
    if (/[0-9]/.test(t)){
      url=preStr+encodeURIComponent('https://today.line.me/webapi/trending/cp/latest/listings/module:cp:'+t+':5f4dd7e908b2af5b0e13bba1:0?offset='+(rr-1)*50+'&length=50&country=tw&targetContent=ALL&cps='+t+':200');
      let res=await fetch(url);
      let str=await res.json();
      for (let a of str.items){
        items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title]))
      }
    } else {
      url=preStr+encodeURIComponent('https://today.line.me/_next/data/v1/tw/v3/page/'+t+'.json');
      let res=await fetch(url);
      let str=await res.json();
      var data=str.pageProps.fallback['getPageData,'+t].modules;
      data=data.filter(d=>d.source=='LISTING');
      data=data.map(d=>d.listings[0].id);
      
      for (let d of data){
        res=await fetch(preStr+encodeURIComponent('https://today.line.me/api/v6/listings/'+d+'?country=tw&offset='+(rr-1)*20+'&length=20'));
        str=await res.json();
        for (let a of str.items){
            items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title]))
        }
      } 
    }
  }
  items=[...new Set(items)];
  items=items.map(i=>JSON.parse(i));
  items=items.filter(i=>i[0]!==null && i[0]!=='');
  items.sort((a, b) => {return Number(b[1]) - Number(a[1])});
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[2]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  //}catch{html='<p>尚無內容</p>'}
  return html;
}

async function lineTodayGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent('https://today.line.me/webapi/portal/page/setting/article?country=tw&hash=' + id));
  const str=await res.json();
  const a = str.data;
  if (a) {
    if (a.media==undefined){
      var html = '<p class="time">' + a.publishTime + ' | ' + a.publisher + '</p>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + shareLink(a.url.url);
    } else {
      html = '<p class="time">' + a.publishTime + ' ' + a.publisher + '</p>' + '<video class="video-js" style="width:100%" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+a.media.hash+'/270p.m3u8" muted="muted" type="application/x-mpegURL"></source></video>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + shareLink(a.url.url);
    }
  }
  }catch{html='<p><a href="' + a.url.url + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function lineTodayGetSearchResults(siteName,t){
 //try{
  url=preStr+encodeURIComponent('https://today.line.me/webapi/listing/search?country=tw&query='+t);
  let res=await fetch(url);
  let str=await res.json();
  for (let a of str.items){
    items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title,a.publisher]))
  }
  
  items=[...new Set(items)];
  items=items.map(i=>JSON.parse(i));
  items=items.filter(i=>i[0]!==null && i[0]!=='');
  items.sort((a, b) => {return Number(b[1]) - Number(a[1])});
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[2]}<br><span id="dateAuthor-${h[0]}" class="fs10 fw-normal">${cvt2Timezone(h[1])} | ${h[3]}</span></p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  //}catch{html='<p>尚無內容</p>'}
  return html;
}


//    MORGAN STANLEY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msGetList(siteName,t){
  try{url='https://www.morganstanley.com/im/en-sg/institutional-investor/insights';
  const res=await fetch(preStr+url);const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  const tt=doc.querySelectorAll('table .pressCenterDate');const hh=doc.querySelectorAll('table h4.media-heading a');
  for (let i=(rr-1)*25;i<rr*25;i++){items.push([hh[i].href,hh[i].textContent.trim(),tt[i].textContent.trim().replace('•  ','')])}
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0].replace('https://evenbeiter.github.io','https://www.morganstanley.com/')}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0].replace('https://evenbeiter.github.io','https://www.morganstanley.com/')}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function msGetContent(id){
  try{const res = await fetch(preStr+id);const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  html=(doc.querySelectorAll('.insightsContent .dividerColumns')?.[0].outerHTML??'').replaceAll('href="/','href="https://www.morganstanley.com/').replaceAll('src="/','src="https://www.morganstanley.com/').replace(/ class="[\s\S]*?"/g,'')+shareLink(id); 
  }catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    MSN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnGetList(siteName,t){
  if(siteName.slice(-2)=='TW'){coun='zh-tw'}else{coun='en-us'};
  try{if (t.slice(0,2)==='Y_'){
    var srvc='channelfeed';
    t='InterestIds='+t;
  } else {
    var srvc='providerfullpage';
    t='CommunityProfileId='+t;
  }
  
  for (var i=0;i<2;i++){
    url='https://assets.msn.com/service/news/feed/pages/'+srvc+'?ocid=social-peregrine&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&User=m-00A80177A097658A10770F1FA15F64FF&cm='+coun+'&'+t+'&newsSkip='+12*((rr-1)*2+i)+'&$skip='+((rr-1)*2+i);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.sections[0].cards){
      items.push([h.id,h.title]);
    }
  }
  for (let d of items){
    html+=`<p class="${coun} t-tl fw-bold" onclick="getContent('${siteName}',this.id,'${d[0]}')">${d[1]}</p><div id="${d[0]}" class="content ${coun}" onclick="getContent('${siteName}',this.id,'${d[0]}')"></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function msnGetContent(id){
  try{var res = await fetch('https://assets.msn.com/content/view/v2/Detail/'+coun+'/'+id);
  var d=await res.json();

  if (d.type==='article'){
    html = '<p class="time">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name||'')+'</p>' +(d.body?d.body.replaceAll('\/>','\/><br>'):'')+ '<p class="text-end"><a href="' + (d.sourceHref||'') + '" target="_blank">分享</a></p><br>';
  } else if (d.type==='slideshow'){
    var slides=d.slides;
    var slidesHtml='';
    for (let s of slides){
      slidesHtml+='<img src="'+(s.image.url?s.image.url:'')+'"><br><p>'+(s.title?s.title:'')+'</p>'+(s.body?s.body:'');
    }
    html = '<p class="time">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name||'')+'</p>' +slidesHtml+ '<p class="text-end"><a href="' + (d.sourceHref||'') + '" target="_blank">分享</a></p><br>';
  } 
  }catch{html='<p><a href="' + ((d && d.sourceHref)||'') + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    PE INSIGHTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function peInsightsGetList(siteName,t){
  try{var k=3;
  for (let i=1;i<k;i++){
    url=preStr+encodeURIComponent('https://pe-insights.com/page/'+((rr-1)*k+i)+'?s='+t+'&et_pb_searchform_submit=et_search_proccess&et_pb_include_posts=yes&et_pb_include_pages=yes');console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var hh=doc.querySelectorAll('h2.entry-title');
    for (let h of hh){
      items.push([h.children[0].href,h.innerText,h.nextElementSibling.innerText])
    }
  }
  for (let h of items){
    html+=`<div class="t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="title">${h[1]}</p></div><p class="time">${h[2]}</p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function peInsightsGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var img=doc.querySelector('section[data-id="e95520d"]');
  var a=doc.querySelector('section[data-id="4813b0f"]');

  if (a) {
    html = img.outerHTML+'<br>'+a.outerHTML.replaceAll(/<span[\s\S]*?">/g,'') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    PIMCO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function pimcoGetList(siteName,t){
  try{url='https://www.pimco.com/ren/coveo/rest/search/v2?sitecoreItemUri=sitecore://web/{176550E2-E8CD-47BA-BDA2-4B9ACDDB7FEA}?lang=en-US&amp;ver=1&siteName=website-us-en';console.log(url);
  const res=await fetch(preStr+encodeURIComponent(url),{
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    body: new URLSearchParams({firstResult:(rr-1)*25,numberOfResults:25,sortCriteria:'@publishz32xdate descending',cq:'(@z95xlanguage=="en-US") (@z95xlatestversion==1) (@source=="Coveo_web_index - Ren-PIMCO-PROD")'})
  });
  const str=await res.json();
  for (let h of str.results){items.push([h.ClickUri,h.title])};
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function pimcoGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  html=`<p class="time">${doc.querySelector('time').textContent.trim()} | ${doc.querySelector('address').textContent.trim()}</p>`;
  var hh=doc.querySelectorAll('.module-base.two-columns-with-media.gtm-navigation-title');
  for (let h of hh){html+=h.outerHTML};
  html+='<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  html=html.replace(/srcset="[\s\S]*?"/g,'').replaceAll('src="/','src="https://www.pimco.com/');
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    THE NEWSLENS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function newslensGetList(siteName,t){
  try{
  if(rr==1){url=preStr+encodeURIComponent('https://www.thenewslens.com/'+t)}else{url=preStr+encodeURIComponent('https://www.thenewslens.com/'+t+'page'+rr)};console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('h3');
  if (hh.length==0){var hh=doc.querySelectorAll('div.item-title.h6')};
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('a').innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function newslensGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="time">'+doc.querySelector('div.item-froms').innerText.replace(/\s+/g,' ')+'</p>'+doc.querySelector('section.item.article-body').outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    REUTERS FROM TRADINGVIEW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function reutersGetList(siteName,t){
  try{
  if (t.slice(0,6)=='market'){url=preStr+encodeURIComponent('https://news-mediator.tradingview.com/news-flow/v2/news?filter=lang:zh-Hant&filter='+t+'&filter=provider:reuters&client=screener');console.log(url)}
  else {url=preStr+encodeURIComponent('https://news-mediator.tradingview.com/news-flow/v2/news?filter='+t+'&filter=lang:zh-Hant&filter=provider:reuters&client=screener');console.log(url)}
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.items){
    items.push([h.storyPath,h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function reutersGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent('https://tw.tradingview.com'+id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="time">'+cvt2Timezone(doc.querySelector('time').dateTime)+' | '+doc.querySelector('.container-S9SJ08EW').querySelector('span').innerText+'</p>' +doc.querySelector('.body-KX2tCBZq.body-pIO_GYwT.content-pIO_GYwT').outerHTML+'<p class="text-end"><a href="https://tw.tradingview.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://tw.tradingview.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    SINA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function sinaGetList(siteName,t){
  try{
  if (/[0-9]/.test(t)){
    url=preStr+encodeURIComponent('https://cj.sina.com.cn/k/api/article/lists_by_author?uid='+t+'&page='+rr+'&count=20');console.log(url);
    const res=await fetch(url);const str=await res.json();
    for (let h of str.result.data.lists){items.push([h.url,h.title]);}
  } else {
    url=preStr+encodeURIComponent('https://api.cj.sina.cn/transmit?pid=finance_wap_proxy_fl_1663832597&smartFlow='+t+'&up='+(rr-1)+'&pageSize=30');console.log(url);
    const res=await fetch(url);const str=await res.json();
    for (let h of str.data){items.push([h.wapurl,h.title]);}
  }
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`;}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function sinaGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  if (/[0-9]/.test(rt)){
  html='<p class="time">'+doc.querySelector('.date-source').innerText+'</p>'+doc.querySelector('#artibody').outerHTML.replace(/src="data:image[\s\S]*?data-src/g,'src') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';   
  } else {
  html='<p class="time">'+doc.querySelector('time').innerText.replace(/\s+/g,' ')+'</p>'+doc.querySelector('section.art_pic_card.art_content').outerHTML.replace(/src="data:image[\s\S]*?data-src/g,'src') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>'; 
  }}catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    SSGA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function ssgaGetList(siteName,t){
  try{url='https://www.ssga.com/public-api/aem/v2/search?geoloc=us:en&roleproduct=institutional&site=ssmp&n=Insights';
  const res=await fetch(url);const str=await res.json();
  const data=str.results.slice((rr-1)*25,rr*25);
  for (let h of data){items.push([h.l,h.k,h.t])};
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function ssgaGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  html=(doc.querySelectorAll('.aem-GridColumn.aem-GridColumn--default--12.aem-GridColumn--tablet--12.aem-GridColumn--phone--12')?.[0].outerHTML??'')+(doc.querySelectorAll('.aem-GridColumn.aem-GridColumn--default--12.aem-GridColumn--tablet--12.aem-GridColumn--phone--12')?.[1].outerHTML??'').replaceAll('src="/','src="https://www.ssga.com/us/en/')+'<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>'; 
  }catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    SUBSTACK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function substackGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://'+t+'.substack.com/api/v1/archive?sort=new&limit=20&offset='+(rr-1)*20);console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.slug,h.title])
  }
  for (let h of items){
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function substackGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent('https://'+rt+'.substack.com/api/v1/posts/'+id));
  const str=await res.json();
  html = '<p class="time">'+cvt2Timezone(str.updated_at)+'</p><p>'+str.subtitle+'</p>'+str.body_html+'<p class="text-end"><a href="https://'+rt+'.substack.com/p/' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://'+rt+'.substack.com/p/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    TECH NEWS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function technewsGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://cdn.'+t+'page/'+rr);console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('h3.list_post_title'); //mobile
  if (hh.length!==0){
    for (let h of hh){
      items.push([h.firstChild.href,h.innerText]);
    }
  } else {
    var hh=doc.querySelectorAll('h1.entry-title'); //desktop
    for (let h of hh){
      items.push([h.firstChild.href,h.firstChild.title]);
    }
  }

  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function technewsGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id.replace('https://','https://cdn.').replace('finance.','')));
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");

  if (doc.querySelector('.copy')!==null){
    var t=doc.querySelector('.date');
    var z = doc.querySelector('.copy').outerHTML;
  } else {
    var t=doc.querySelectorAll('span.body')[1];
    var a = doc.querySelector('.bigg');
    var b = doc.querySelector('.indent');
    var z=a.outerHTML+b.outerHTML;
  }

  html = '<p class="time">'+t.innerText+'</p>'+z+ '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>'
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    UDN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function udnGetList(siteName,t){
  try{url='https://udn.com/api/more?'+t+'&page='+(rr-1);console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  if (str.lists.length<18){var k=5}else{var k=1};
  for (let i=0;i<k;i++){
    var url='https://udn.com/api/more?'+t+'&page='+((rr-1)*k+i);console.log(url);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.lists){
      items.push([h.titleLink.slice(0,h.titleLink.indexOf('?')),h.title])
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function udnGetContent(id){
  try{const res = await fetch('https://udn.com/'+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var t=doc.querySelector('.authors');
  var a=doc.querySelector('.article-content');
  html = '<p class="time">'+t.innerText+'</p>'+a.outerHTML + '<p class="text-end"><a href="https://udn.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://udn.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function udnGetSearchResults(siteName,t){
  try{url=preStr+encodeURIComponent('https://udn.com/api/more?channelId=2&type=searchword&id=search:'+t+'&page='+rr);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.titleLink,h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    UDN MONEY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function udnMoneyGetList(siteName,t){
  try{url=preStr+encodeURIComponent('https://money.udn.com/rank/ajax_newest/1001/'+t+'/'+rr);console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.story__content a');
  for (let h of hh){
    items.push([h.href.slice(0,h.href.indexOf('?')),h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function udnMoneyGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="time">'+doc.querySelector('time').innerText+' | '+doc.querySelector('.article-body__info').innerText+'</p>' +doc.querySelector('.article-body__editor').outerHTML+'<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function udnMoneyGetSearchResults(siteName,t){
  try{url=preStr+encodeURIComponent('https://money.udn.com/search/result/1001/'+t+'/'+rr);console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.story__content a');
  for (let h of hh){
    items.push([h.href.slice(0,h.href.indexOf('?')),h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    WEALTH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wealthGetList(siteName,t){
  try{var p=t.split('|');var op=p[0];var t=p[1];
  if (op=='Articles'){
    payload={
      "operationName": "Articles",
      "variables": {
        "authorID": t,
        "offset": (rr-1)*50,
        "limit": 50,
        "type": "ARTICLE",
        "viewOrderType": null
      },
      "query": "query Articles($offset: Int, $limit: Int, $type: ArticleType, $vipOnly: Boolean, $searchTerm: String, $isFameColumn: Boolean, $magazineId: ID, $authorId: ID, $viewOrderType: ArticleViewOrderType) {\n  articles(\n    offset: $offset\n    limit: $limit\n    type: $type\n    vipOnly: $vipOnly\n    searchTerm: $searchTerm\n    isFameColumn: $isFameColumn\n    magazineId: $magazineId\n    authorId: $authorId\n    viewOrderType: $viewOrderType\n  ) {\n    ...ArticleBaseFields\n    __typename\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  title\n  cover\n  coverText\n  content\n  authors {\n    name\n  }\n  releasedAt\n}\n"
    }
  } else if (op=='Category'){
    payload={
      "operationName": "Category",
      "variables": {
        "id": t,
        "type": null,
        "offset": (rr-1)*50,
        "limit": 50,
        "viewOrderType": null
      },
      "query": "query Category($id: ID!, $offset: Int, $limit: Int, $type: ArticleType, $viewOrderType: ArticleViewOrderType) {\n  category(id: $id) {\n    id\n    name\n    articles(\n      offset: $offset\n      limit: $limit\n      type: $type\n      viewOrderType: $viewOrderType\n    ) {\n      ...ArticleBaseFields\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  title\n  content\n}\n"
    }
  } else if (op=='LatestMagazine'){
    payload={
      "operationName": "LatestMagazine",
      "variables": {},
      "query": "query LatestMagazine {\n  latestMagazine {\n    id\n    title\n  }\n}\n"
    }
  }
  
  url='https://www.wealth.com.tw/graphql';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  
  if (op=='Category'){var data=str.data.category.articles}else{var data=str.data.articles};
  for (let h of data){
    items.push([h.id,h.title])
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function wealthGetContent(id){
  try{payload={
    "operationName": "Article",
    "variables": {
      "id": id
    },
    "query": "query Article($id: ID!, $token: String) {\n  article(id: $id, token: $token) {\n    ...ArticleBaseFields\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  title\n  cover\n  coverText\n  content\n  releasedAt\n  authors {\n    name\n  }\n}\n"
  };

  url='https://www.wealth.com.tw/graphql';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  var data=str.data.article;
  var content=JSON.parse(str.data.article.content);

  html = '<p class="time">'+cvt2Timezone(data.releasedAt)+' | '+data.authors[0].name+'</p><img src="https://static.wealth.com.tw/'+data.cover+'"><p class="time">'+data.coverText+'</p><div id="'+id+'__">aaaaa</div><p class="text-end"><a href="https://www.wealth.com.tw/articles/' + id + '" target="_blank">分享</a></p><br>';
  var body='';    
  for (let c of content){
    if (c.type=='p'){
      body+='<p>';
      for (let a of c.children){if (a.type=='link'){body+='<a href="'+a.url+'">'+a.children[0].text+'</a>'} else {body+=a.text}};
      body+='</p>';
    } else if (c.type=='image_figure'){
      for (let a of c.children){
        if (a.type=='image'){body+='<img src="https://static.wealth.com.tw/'+a.src+'">'} else if (a.type=='image_caption'){body+='<p class="fs10">'+a.children[0].text+'</p>'}
      }
    }
  }
  html=html.replace('aaaaa',body);
  }catch{html='<p><a href="https://www.wealth.com.tw/articles/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function wealthGetSearchResults(siteName,t){
  try{
    payload={
      "operationName": "Articles",
      "variables": {
        "offset": (rr-1)*50,
        "limit": 50,
        "searchTerm": t,
        "viewOrderType": null
      },
      "query": "query Articles($offset: Int, $limit: Int, $type: ArticleType, $vipOnly: Boolean, $searchTerm: String, $isFameColumn: Boolean, $magazineId: ID, $authorId: ID, $viewOrderType: ArticleViewOrderType) {\n  articles(\n    offset: $offset\n    limit: $limit\n    type: $type\n    vipOnly: $vipOnly\n    searchTerm: $searchTerm\n    isFameColumn: $isFameColumn\n    magazineId: $magazineId\n    authorId: $authorId\n    viewOrderType: $viewOrderType\n  ) {\n    ...ArticleBaseFields\n    __typename\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  state\n  title\n  subtitle\n  cover\n  coverText\n  coverAlt\n  content\n  contents\n  type\n  vipOnly\n  views\n  video {\n    id\n    youtubeId\n    playlistId\n    __typename\n  }\n  authors {\n    id\n    name\n    state\n    fameColumn {\n      id\n      avatar\n      description\n      __typename\n    }\n    __typename\n  }\n  directors\n  organizers {\n    id\n    name\n    state\n    fameColumn {\n      id\n      avatar\n      description\n      __typename\n    }\n    __typename\n  }\n  hashtags {\n    id\n    name\n    __typename\n  }\n  categories {\n    id\n    name\n    __typename\n  }\n  releasedAt\n  createdAt\n  updatedAt\n  deletedAt\n  isHeadline\n  isPinned\n  isSponsored\n  __typename\n}\n"
    }

  url='https://www.wealth.com.tw/graphql';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();  
  for (let h of str.data.articles){
    items.push([h.id,h.title])
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    WSCN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wscnGetList(siteName,t){
  try{url='https://api-one-wscn.awtmt.com/apiv1/content/information-flow?accept=article,chart&action=upglide&limit=20&channel='+t+'&cursor='+cursor;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.data.next_cursor;
  for (let h of str.data.items){
    if (h.resource_type!=='topic'&&h.resource_type!=='theme'){
      items.push([h.resource_type+'s/'+h.resource.id,h.resource.title]);
    } else {
      var hh=h.resource.contents;
      for (let d of hh){
        items.push([d.resource_type+'s/'+d.resource.id,'【'+h.resource.title+'】'+d.resource.title]);        
      }
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function wscnGetContent(id){
  try{const res = await fetch('https://api-one-wscn.awtmt.com/apiv1/content/'+id+'?extract=0');
  const str=await res.json();
  html = '<p class="time">'+cvt2Timezone(str.data.display_time*1000)+'</p>'+str.data.content + '<p class="text-end"><a href="https://wallstreetcn.com/' + id + '" target="_blank">分享</a></p><br>';
  if (str.videos!==undefined){html+='<video style="width:100%" tabindex="-1" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+str.videos[0].uri+' type="application/x-mpegURL"></source></video>'};
  }catch{html='<p><a href="https://wallstreetcn.com/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function wscnGetSearchResults(siteName,t){
  try{url='https://api-one-wscn.awtmt.com/apiv1/search/article?limit=20&query='+t+'&cursor='+cursor;
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.data.next_cursor;
  for (let h of str.data.items){
    items.push(['articles/'+h.id,h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    YAHOO TW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function yahooTWGetList(siteName,t){
  try{coun='.atoms';
  if (t.slice(-2)=='__'){t=t.slice(0,-2);coun='.body-wrap'};
  var payload={"requests":{"g0":{"resource":"StreamService","operation":"read","params":{"ui":{"ntk_bypassA3c":true,"pubtime_maxage":0},"category":"LISTID:"+t,"forceJpg":true,"releasesParams":{"limit":20,"offset":0},"useNCP":true,"batches":{"pagination":true,"size":200,"timeout":1300,"total":200}}}},"context":{"bkt":"t2-pc-twnews-article-r2","crumb":"/U2xgjMOLVZ","intl":"tw","lang":"zh-Hant-TW","prid":"0hburkpk6bmaf","region":"TW","site":"news","tz":"Asia/Taiwan"}};
  var url='https://tw.news.yahoo.com/_td-news/api/resource';
  var res = await fetch(preStr+encodeURIComponent(url), {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  var data=str.g0.data.stream_items.slice((rr-1)*50,rr*50);
      
  if (t!=='00390a14-17cc-49d2-9e32-79365335f0ca'){
    for (let h of data){items.push([h.id,h.title,h.pubtime,h.publisher,h.url])};
    if(coun=='.atoms'){
      for (let h of items){
        html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${cvt2Timezone(h[2])} | ${h[3]}</p></div><hr>`
      }
    } else {
      for (let h of items){
        html+=`<div onclick="getContent('${siteName}',this.id,'${h[4]}')"><p class="title t-tl pb-0">${h[1]}</p><p class="time">${cvt2Timezone(h[2])} | ${h[3]}</p></div><div id="${h[4]}" class="content" onclick="getContent('${siteName}',this.id,'${h[4]}')"></div><hr>`
      }
    }
  } else {
    for (let h of data){items.push([h.id,h.title,h.pubtime,h.publisher,h.images.original.url,h.url])};
    for (let h of items){
      html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://video.media.yql.yahoo.com/v1/video/sapi/hlsstreams/${h[0]}.m3u8')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10">${h[3]}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://video.media.yql.yahoo.com/v1/video/sapi/hlsstreams/${h[0]}.m3u8')"></div><hr>`
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function yahooTWGetContent(id){
    try{
    if(coun=='.atoms'){url='https://tw.news.yahoo.com/share/'+id;} else {url=id;}
    let res = await fetch(preStr+encodeURIComponent(url));
    let str = await res.text();
    var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
    html=doc.querySelector(coun).innerHTML.replaceAll('data-src=','src=') + '<p class="text-end"><a href="' + url + '" target="_blank">分享</a></p><br>';
  }catch{html='<p>尚無內容</p><br>'}
  return html;
}

async function yahooTWGetSearchResults(siteName,t){
  try{
  coun='TW'; var k=3;
  for (let i=0;i<k;i++){
  url='https://tw.news.yahoo.com/_td-news/api/resource/NuwaSearchService.newsSearch;loadMore=true;query='+t+';offset='+(k*10*(rr-1)+(i*10));console.log(url);
  let res=await fetch(preStr+encodeURIComponent(url));
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
  try{
  var payload={"requests":{"g0":{"resource":"StreamService","operation":"read","params":{"ui":{"ntk_bypassA3c":true,"pubtime_maxage":0},"category":"LISTID:"+t,"forceJpg":true,"releasesParams":{"limit":20,"offset":0},"useNCP":true,"batches":{"pagination":true,"size":200,"timeout":1300,"total":200}}}},"context":{"bkt":"t2-pc-twnews-article-r2","crumb":"/U2xgjMOLVZ","intl":"tw","lang":"zh-Hant-TW","prid":"0hburkpk6bmaf","region":"TW","site":"news","tz":"Asia/Taiwan"}};
  var url='https://tw.news.yahoo.com/_td-news/api/resource';
  var res = await fetch(preStr+encodeURIComponent(url), {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  var data=str.g0.data.stream_items.slice((rr-1)*50,rr*50);
      
  for (let h of data){items.push([h.id,h.title,h.pubtime,h.publisher,h.images.original.url,h.url])};
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://video.media.yql.yahoo.com/v1/video/sapi/hlsstreams/${h[0]}.m3u8')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://video.media.yql.yahoo.com/v1/video/sapi/hlsstreams/${h[0]}.m3u8')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    YTN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function ytnGetList(siteName,t){
  try{
  if (t.slice(0,8)=='mcd=0117'){url=preStr+encodeURIComponent('https://star.ytn.co.kr/ajax/getMoreNews.php')}else{url=preStr+encodeURIComponent('https://www.ytn.co.kr/ajax/getMoreNews.php')};
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
    body: t+'&page='+rr,
    });
  var str=await res.text();
  for (let a of JSON.parse(str).data){
    items.push([a.m_cd+'_'+a.join_key,a.title,a.n_date,a.img,a.m_file_link])
  }
  for (let h of items){
    if (!h[4]){ytnVedio=''}else{ytnVideo='<video id="video-'+h[0]+'" class="video-js" style="width:100%;height:auto" playsinline controls></video>'};
    html+=`<div onclick="getContent('${siteName}',this.id,'${h[0]}')"><img src="${h[3]}"><p class="title t-tl">${h[1]}</p></div><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${h[2]}</p>${ytnVideo}</div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function ytnGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent('https://www.ytn.co.kr/_ln/'+id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html=(doc.querySelector('.arti_summary')?.innerHTML??'')+(doc.querySelector('#CmAdContent')?.outerHTML??'')+ '<p class="text-end"><a href="https://www.ytn.co.kr/_ln/'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://www.ytn.co.kr/_ln/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

//https://mpeg4.ytn.co.kr/general/_definst_/mp4:general/mov/2025/0603/202506032045202852_z.mp4/playlist.m3u8



//    d: MSN, MSN CHANNEL, WSJ, VIDEO GET CONTENT
//    p: BBG
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    BLOOMBERG VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbgVideoGetList(siteName,t){
  try{
    url=preStr+encodeURIComponent('https://personalization.bloomberg.com/user/recommendations/cfru?timezoneOffset=-28800000&limit=50&resourceTypes=Video&offset='+(rr-1)*30+'&includedSites='+t);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str){
      items.push([h.assetID,h.headline,h.publishedAt,h.duration,h.thumbnailUrl,h.url])
    }
    items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

    for (let h of items){
      html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://www.bloomberg.com/media-manifest/videos/android/WiFi/${h[0]}.m3u8')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="time">${cvt2Timezone(h[2])} | <span class="fw-bold">${cvtS2HHMMSS(h[3],1000)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://www.bloomberg.com/media-manifest/videos/android/WiFi/${h[0]}.m3u8')"></div><hr>`
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    MSN VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnVideoGetList(siteName,t){
  try{
  if (t.slice(0,3)==='vid'){  // MSN VIDEO FROM CHANNEL
    for (var i=0;i<2;i++){
      url=encodeURIComponent('https://assets.msn.com/service/news/feed/pages/providerfullpage?market=en-us&timeOut=10000&ocid=finance-data-feeds&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&CommunityProfileId='+t+'&cm=en-us&User=m-00A80177A097658A10770F1FA15F64FF&newsSkip='+12*((rr-1)*2+i)+'&query=newest&$skip='+((rr-1)*2+i));
      let res=await fetch(url);
      let str=await res.json();
      for (let h of str.sections[0].cards){
        if(h.type=='video'){
          items.push([h.id,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url,h.provider.name]);
        }
      }
    }
  } else {  // MSN VIDEO FROM CATEGORY
    url=encodeURIComponent('https://assets.msn.com/service/MSN/Feed/me?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&cm=en-us&contentType=video&query='+t+'&queryType=myfeed&$top=50&$skip='+(rr-1)*50);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.value[0].subCards){
      items.push([h.sourceId,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url,h.provider.name]);
    }
  }
  
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="time">${h[7]}<br>${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    MSN VIDEO FROM CHANNEL
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function msnChannelVideoGetList(siteName,t){
  try{
    for (var i=0;i<2;i++){
    url=encodeURIComponent('https://assets.msn.com/service/news/feed/pages/providerfullpage?market=en-us&timeOut=10000&ocid=finance-data-feeds&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&CommunityProfileId='+t+'&cm=en-us&User=m-00A80177A097658A10770F1FA15F64FF&newsSkip='+12*((rr-1)*2+i)+'&query=newest&$skip='+((rr-1)*2+i));
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
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="time">${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  return html;
  }catch{html='<p>尚無內容</p>'}
}


//    REUTERS VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function reutersVideoGetList(siteName,t){
  try{
    url='https://www.reuters.com/pf/api/v3/content/fetch/video-playlist-by-collection-v1?query={"collection_alias":"featured-video","offset":'+(rr-1)*20+',"size":20,"website":"reuters"}&d=284&mxId=00000000&_website=reuters';
    let res=await fetch(encodeURIComponent(url));
    let str=await res.json();
    let raw=str.result.channels.filter(s => s.id === t);
    for (let h of raw[0].videos){
      items.push([h.id,h.title,h.published_time,h.duration,h.thumbnail.url,h.source.hls])
    }
    items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

    for (let h of items){
      html+=`<div onclick="videoGetContent(this.id,'${h[0]}','https://www.reuters.com/video/watch/id'+'${h[0]}','${h[5]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','https://www.reuters.com/video/watch/id'+'${h[0]}','${h[5]}')"></div><hr>`

    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    WSJ VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wsjVideoGetList(siteName,t){
  try{url='https://video-api.shdsvc.dowjones.io/api/legacy/find-all-videos?lang=en-us&count=50'+t+'&page='+(rr-1);
  let res=await fetch(encodeURIComponent(url));
  let str=await res.json();
  for (let h of str.items){
    var thumbnail=h.thumbnailList[0].url;
    items.push([h.id.replace('{','').replace('}',''),h.name,h.formattedCreationDate,h.duration,thumbnail.slice(0,thumbnail.indexOf('?')),h.linkURL,h.hls])
  }
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="time">${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
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
      var e=window.event;
      if (e && e.target.tagName==='VIDEO'){return}else{
      cEl.style.display='none';
      if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
      try{cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()}catch{document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
    }
  }
}


//    THE ECONOMIST MAGAZINE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function copyJSONToClipboard(){
  var jsonStr = JSON.stringify(ecoMagContent);
  navigator.clipboard.writeText(jsonStr).then(() => {
    document.getElementById('copy-btn').style.display='none';
    console.log('Copied.');  
  }).catch(err => {
    console.error('Failed: ', err);
  });
}

async function getEcoMagFromJson(date){
  if (date===''){date=document.getElementById('ecoMagDate').value;}
  const res=await fetch('https://raw.githubusercontent.com/evenbeiter/media/refs/heads/main/books/te/'+date+'.json');
  const str=await res.json();
  ecoMagContent=str[0];
  channelList.innerHTML='';
  for (let h of ecoMagContent.content){channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('ecoMag','The Economist | ${h.section}','${h.section}')">${h.section}</button>`;}
  openChannelList();
  get1stList('ecoMag','The Economist | Leaders','Leaders');
}

async function ecoMagGetList(siteName,t){
  try{
  if (t==''){
    var issue=getLastNSats(10);
    html+=`<div class="input-group mb-3"><input type="search" id="ecoMagDate" class="form-control my-2"><button class="btn sepia-contrast my-2" type="button" onclick="getEcoMagFromJson('')">Read</button></div>`;
    for (let date of issue){
      try{const res=await fetch('https://raw.githubusercontent.com/evenbeiter/media/refs/heads/main/books/te/'+date+'.json');const str=await res.json();
      ecoMagContent=str[0];
      html+=`<div onclick="getEcoMagFromJson('${date}')"><img src="${ecoMagContent.cover}"><p class="title">${ecoMagContent.title}</p></div><hr>`
      }catch{}
    }
  } else {
  var hh = ecoMagContent.content.find(item => item.section === t);
  for (let h of hh.articles){html+=`<div onclick="getContent('${siteName}',this.id,'${h.url}')">${h.title}</div><div id="${h.url}" class="content" onclick="getContent('${siteName}',this.id,'${h.url}')">${h.content}</div><hr>`}
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    NOTES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function noteGetList(siteName,t){
  try{url=`${backendURL}/notes/list/${t}`;
  const res = await fetch(url);const str = await res.json();const data=str.slice((rr-1)*30,rr*30);
  for (let h of data){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h.path}')">${h.title}</p><div id="${h.path}" class="content" onclick="getContent('${siteName}',this.id,'${h.path}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function noteGetContent(id){console.log(id);
  try{url=`${backendURL}/notes/read`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({category:'note', path:id})
  });
  if (!res.ok) throw new Error('無法讀取筆記');
  const str=await res.json();//const { content } = await res.json();const str = JSON.parse(content); // 你存的是 JSON-style 的筆記陣列
  for (let s of str){
    if (s) {var h=JSON.parse(s);//console.log(h);
    html+=h.src?`<p>${h.content.replaceAll('\n\n','</p><p>')}</p><a href="${h.src}" target="_blank">原文連結</a>
      <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25" onclick="getContent('${h.siteName}',this.id,'${h.src}')">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
        </svg>
      </button>
      <br><span class="time fw-normal">${cvt2Timezone(h.timestamp)}</span>
      ${noteBtnGroup}
      <div id="${h.src}" class="content" onclick="getContent('${h.siteName}',this.id,'${h.src}')"></div>
      <hr>`
      :`<p>${h.content.replaceAll('\n\n','</p><p>')}</p><span class="time fw-normal">${cvt2Timezone(h.timestamp)}</span>${noteBtnGroup}<hr>`
    // html+=h.src?`<p>${h.content.replaceAll('\n\n','</p><p>')}</p><a href="${h.src}" target="_blank">原文連結</a><br><span class="time fw-normal">${cvt2Timezone(h.timestamp)}</span>${noteBtnGroup}<hr>`
    //   :`<p>${h.content.replaceAll('\n\n','</p><p>')}</p><span class="time fw-normal">${cvt2Timezone(h.timestamp)}</span>${noteBtnGroup}<hr>`
    }
  }
  if (html==='') html+='<p>尚無內容</p>';
  else html=html.slice(0,html.length-4);
  //else html+=`<button class="btn sepia-contrast me-1 mb-1" type="button" onclick="clearNote()">清空筆記</button><br>`;
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function noteGetSearchResults(siteName,t){
  try{url=`${backendURL}/notes/search?q=${encodeURIComponent(t)}`;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h.path}')">${h.title}</p><div id="${h.path}" class="content" onclick="getContent('${siteName}',this.id,'${h.path}')"></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;

}
