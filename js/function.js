//    GLOBAL FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function showTop(t){
  topdiv.innerText=t;
  topdiv.style.display='block';
}

function openChannelList(){
  channelList.style.display='block';
  searchList.style.display='none';
  urlList.style.display='none';
  options.style.display='block';
  topdiv.style.display='none';
}

function openSearchList(){
  channelList.style.display='none';
  searchList.style.display='block';
  urlList.style.display='none';
  options.style.display='block';
  topdiv.style.display='none';
}

function openUrlList(){
  channelList.style.display='none';
  searchList.style.display='none';
  urlList.style.display='block';
  options.style.display='block';
  topdiv.style.display='none';
}

function openOptions(){
  if (options.style.display=='none'){
    options.style.display='block';
    topdiv.style.display='none';
  } else {
    options.style.display='none';
    topdiv.style.display='block';
  }
}

async function ping(){
  var res=await fetch(preStr+'https://date.nager.at/api/v3/publicholidays/2025/US');
}

// function createBtnGroup(site,siteName,top){
//   btn.innerHTML=formHeader;
//   for (let tab of site){
//     btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${siteName}','${top}','${tab[0]}')">${tab[1]}</button>`;
//   }
//     get1stList(siteName,top,site[0][0]);
// }

// function openSearchList(){
//   btn.innerHTML=formHeader;
//   tabs=faq;
//   for (let tab of tabs){
//     btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getFAQSearchResults('${tab[0]}','${tab[1]}','${tab[2]}')">${tab[2]}</button>`;
//   }  
//   btn.innerHTML+=`<input type="text" id="search-term" class="form-control my-2">`;
//   tabs=searchSites;
//   for (let tab of tabs){
//     btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stSearchResults('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
//   }
//   options.style.display='block';
//   topdiv.style.display='none';
// }

function createChannelList(site,siteName,top){
  channelList.innerHTML='';
  for (let tab of site){
    channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${siteName}','【${top}】${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
  }
  openChannelList();
  get1stList(siteName,site[0][1],site[0][0]);
}

function createSearchListDiv(faqList,searchSiteList){
  for (let tab of faqList){
    searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getFAQSearchResults('${tab[0]}','${tab[1]}','${tab[2]}')">${tab[2]}</button>`;
  }  
  searchList.innerHTML+='<input type="text" id="search-term" class="form-control my-2">';
  for (let tab of searchSiteList){
    searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stSearchResults('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
}

function createUrlListDiv4Bml(sitesList){
  for (let s of sitesList){
    for (let tab of s){
      urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
    }
    urlList.innerHTML+='<hr>';
  }
  if(urlList.lastElementChild){urlList.removeChild(urlList.lastElementChild)};
}

async function get1stList(siteName,top,t){
  rr=0;
  getList(siteName,t);
  showTop(top);
}

async function get1stSearchResults(siteName,top){
  rr=0;
  getSearchResults(siteName);
  showTop(top+' - 搜尋：'+document.getElementById('search-term').value);
}

function getFAQSearchResults(siteName,top,t){
  document.getElementById('search-term').value=t;
  get1stSearchResults(siteName,top);
}

async function getList(siteName,t){
  loading.style.display='block';
  siteNameVar=siteName;rr++;rt=t;cursor='';
  if (rr==1){newNews()};
  items=[];html='';
  if (siteName=='msnTW'){list.innerHTML+=await msnGetList(siteName,t,'zh-tw')}
  else if (siteName=='msnUS'){list.innerHTML+=await msnGetList(siteName,t,'en-us')}
  else {list.innerHTML+=await window[`${siteName}GetList`](siteName,t)};
  loading.style.display='none';
  if (siteName==='msnUS'||siteName==='apollo'){
    var all=document.querySelectorAll('.t-tl');
    getTranslation(all);
  }
}

async function getSearchResults(siteName){
  loading.style.display='block';
  siteNameVar=siteName;rr++;rt='s';cursor='';
  if (rr==1){newNews()};
  items=[];html='';
  list.innerHTML+=await window[`${siteName}GetSearchResults`](siteName,document.getElementById('search-term').value);
  loading.style.display='none';
}

async function getContent(siteName,clickedId,id){
  var cEl=document.getElementById(id);
  try{document.getElementById('dateAuthor-'+id).style.display='none'}catch{};
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    if (siteName!=='apollo'){
      //need to get content for others (open div for apollo)
      if (cEl.innerText.length<50){
        //get content
        if (siteName=='msnTW'){cEl.innerHTML+=await msnGetContent(id,'zh-tw')}
        else if (siteName=='msnUS'){cEl.innerHTML+=await msnGetContent(id,'en-us')}
        else {cEl.innerHTML+=await window[`${siteName}GetContent`](id)};
        //remove image style
        cEl.querySelectorAll('img, figure, figure.caas-figure div.caas-figure-with-pb, .bbc-j1srjl, .bbc-j1srjl, .bbc-2fjy3x').forEach(img => {img.removeAttribute('style')});
        //handle image src
        if (siteName=='msnTW'||siteName=='msnUS'){cEl.querySelectorAll('img').forEach(img=>{img.src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/'+img.getAttribute('data-document-id').slice(18)+'.img'})};
        //convert sc to tc
        if (siteName=='wscn'||siteName=='jin'||siteName=='wiki'){convertTextInsideTags(cEl)};
        //remove elements
        if (siteName=='dw'){cEl.querySelectorAll('h2 svg').forEach(a=>{a.remove()})};
      }
    }
    loading.style.display='none';
    //handle translation
    if (siteName==='msnUS'||siteName==='apollo'){
      var all=cEl.querySelectorAll('p, h2, li');
      getTranslation(all);
    } else if (siteName=='peInsights'){
      var all=cEl.querySelectorAll('.tl');
      getTranslation(all);
    }
  } else {
      var e=window.event;
      if (e && e.target.tagName==='VIDEO'){return}else{
      cEl.style.display='none';
      if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
      try{
        if (siteName=='msnTW'||siteName=='msnUS'){
          cEl.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView()
        } else {
          cEl.previousElementSibling.previousElementSibling.scrollIntoView()
        }
      } catch {document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
    }
  }
}

function newNews(){
  options.style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
}

function openUrl(url){
  window.open(url,'_blank')
}

function decodeHTMLEntities(str){
  var ta=document.createElement('textarea');
  ta.innerHTML = str;
  return ta.value;
  ta.remove();
}

function cvtS2HHMMSS(sec,rescale) {
    s = Math.max(0, Math.floor(sec/rescale));
    const hours = Math.floor(s / 3600);
    const minutes = Math.floor((s % 3600) / 60);
    const remainingSeconds = s % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(remainingSeconds).padStart(2, '0');
    if (hours > 0) {
        const hh = String(hours).padStart(2, '0');
        return hh+':'+mm+':'+ss;
    }
    return mm+':'+ss;
}

function cvt2Timezone(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString('zh-TW',{timeZone:'Asia/Taipei'});
}

function sCC(a,ii){
  let result='';
  for (const i of ii){
    if (i>=0 && i<a.length){result+=a[i]}
  }
  return result;
}

async function translate(a){
  try{
    var url = 'https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=zh-TW&q='+encodeURIComponent(a);
    var res=await fetch(url);
    var raw=await res.json();
    var ts='';
    for (var j=0;j<raw[0].length;j++){
        if (raw[0][j][0]!==null && raw[0][j][0]!==undefined && raw[0][j][0]!=='undefined'){ts=ts+raw[0][j][0]}else{ts=ts}
    }
    return ts
  }catch (error) {console.error(error)}
}

async function getTranslation(all){
  for (let a of all){
    if (a.innerText!=='' && cnTest(a.innerText)!==true){
      var t=await translate(a.textContent);
      if (t!==''){a.innerHTML+='<br><span class="fs10 d-inline-block py-3">'+t+'</span>'};
    }
  }
}

function cnTest(str) {
  const chineseCharRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;
  return chineseCharRegex.test(str);
}

function convertTextInsideTags(element) {
  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE) {
      // Convert text content using OpenCC
      child.nodeValue = s2t(child.nodeValue.trim());
    } else if (child.nodeType === Node.ELEMENT_NODE) {
      // Recursively process child elements
      convertTextInsideTags(child);
    }
  }
}
  
let scrollTimeout;
window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 5) {
      if(rt!=='s'){
        getList(siteNameVar,rt);
      }else{
        getSearchResults(siteNameVar);
      }
    }
  }, 1000);
};



//    FETCH FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    APOLLO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function apolloGetList(siteName,t){
  try{
    url=preStr+'https://www.apolloacademy.com/the-daily-spark/?query-15-page='+rr;console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var hh=doc.querySelectorAll('.entry-content.wp-block-post-content');
  
  for (let h of hh){
    var a=h.parentElement.previousElementSibling;
    var cid=a.querySelector('h2').children[0].href;
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${cid}')">${a.querySelector('h2').innerText}</p><div id="${cid}" class="content" onclick="getContent('${siteName}',this.id,'${cid}')"><p class="fs10">${a.querySelector('time').innerText}</p>${h.outerHTML}<p class="text-end"><a href="${cid}" target="_blank">Share</a></p><br></div><hr>`;
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    BBC
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbcGetList(siteName,t){
  try{url=preStr+'https://www.bbc.com/zhongwen/'+t+'/trad?page='+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('a.bbc-1i4ie53.e1d658bg0');
  for (let h of hh){
    items.push([h.href,h.innerText])
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bbcGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var embeds=str.match(/https:\/\/www.bbc.com\/ws\/av-embeds[\s\S]*?zh-hant/g);
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var a=doc.querySelector('main');
  var vdo=a.querySelectorAll('[data-e2e^="media-loader"]');
  for (let v=0;v<vdo.length;v++){
    vdo[v].outerHTML=`<iframe src="${embeds[v]}" scrolling=no allow="fullscreen" style="border:none;border-radius:0.375rem;aspect-ratio:16/9"></iframe>`;
  }
  html = a.outerHTML+ '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    BNEXT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function bnextGetList(siteName,t){
  try{url=preStr+'https://www.bnext.com.tw/'+t+'?page='+rr;console.log(url);
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
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var t=doc.querySelector('div.flex.gap-4.text-sm.items-center.flex-wrap');
  if (t==null){t=doc.querySelector('div.flex.gap-2.text-sm.items-center')}
  const a = doc.querySelector('[data-cat=article]');
  // var ads=a.querySelector('#pumpkin_159');
  // if(ads){ads.remove()};
  html = '<p class="fs10">'+t.innerText+a.outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

  
//    BUSINESS TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessTodayGetList(siteName,t){
  try{url=preStr+'https://www.businesstoday.com.tw/'+t+rr;console.log(url);
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
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  const img=doc.querySelector('.article__mainbanner');
  const t=doc.querySelector('.context__info-item--date');
  const au=doc.querySelector('.context__info-item--author');
  const a = doc.querySelector('.Zi_ad_ar_iR');
  html = '<p class="fs10">'+t.innerText+' | '+au.innerText+'</p>'+a.outerHTML.replaceAll('<p>&nbsp;</p>','') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function businessTodayGetSearchResults(siteName,t){
  try{url=preStr+'https://www.businesstoday.com.tw/group_search/article?count=30&keywords='+t+'&page='+rr;console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.searchitem__content');
  for (let h of hh){
    var href=hh[0].children[1].children[0].href;
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
    var res = await fetch(preStr+'https://www.businessweekly.com.tw/latest/SearchList', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
      body: 'CurPage='+20*(rr-1),
      });
    var str=await res.json();
    str=str.Content;
  } else {
  var res = await fetch(preStr+'https://www.businessweekly.com.tw/ChannelAction/LoadBlock/', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
    body: 'Start='+(50*rr-1)+'&End='+50*(rr)+'&ID='+t,
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
  try{const res = await fetch((preStr+id).replace('evenbeiter.github.io','www.businessweekly.com.tw'));
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  const p=doc.querySelectorAll('.Border-right')[1] ?? '';
  const t=doc.querySelector('#AppGetDate') ?? '';
  const s=doc.querySelector('.Single-summary') ?? '';  
  const a=doc.querySelector('.Single-article') ?? '';
  //a.querySelectorAll('.Google-special').forEach(e => e.remove());
  html = '<p class="fs10">'+(p.textContent ?? '')+' '+(t.textContent ?? '')+'</p>'+(s.outerHTML ?? '')+(a.outerHTML ?? '')+ '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


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


//    CNYES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnyesGetList(siteName,t){
  try{if (t=='topics'){
    url=preStr+'https://api.cnyes.com/media/api/v1/project/index?page='+rr;
    let res=await fetch(url);
    let str=await res.json();
    for (let a of str.items.data){
      html+=`<p class="title" onclick="openUrl('${a.link}')">${a.title}</p><hr>`;
    }
  } else {
    url=preStr+'https://api.cnyes.com/media/api/v1/newslist/category/'+t+'?limit=30&page='+rr;
    let res=await fetch(url);
    let str=await res.json();
    for (let a of str.items.data){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')">
            <p class="fs10">${cvt2Timezone(a.publishAt*1000)}</p>${decodeHTMLEntities(a.content)}<p class="text-end"><a href="https://news.cnyes.com/news/id/${a.newsId}" target="_blank">分享</a></p><br>
            </div><hr>`;
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cnyesGetContent(id){
  try{if (id.length<5){
    const res = await fetch(preStr+id);
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var tagList=doc.querySelector('.scrolling');
    for (let c of tagList){
      html+=c.innerHTML
    }
  } else {
    let res=await fetch(preStr+'https://news.cnyes.com/news/id/'+id);
    let str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    html=doc.querySelector('#article-container').outerHTML+ '<p class="text-end"><a href="https://news.cnyes.com/news/id/'+id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p><a href="https://news.cnyes.com/news/id/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html
}

async function cnyesGetSearchResults(siteName,t){
  try{url=preStr+'https://api.cnyes.com/media/api/v1/search?q='+t+'&page='+rr;
  let res=await fetch(url);
  let str=await res.json();
  if(str.items.data!==null && str.items.data!==undefined){
    for (let a of str.items.data){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')"><p class="fs10">${cvt2Timezone(a.publishAt*1000)}</p></div><hr>`;
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cteeGetContent(id){
  try{const res = await fetch('https://www.ctee.com.tw/api'+id);
  const str=await res.json();
  html = str.contents + '<p class="text-end"><a href="https://www.ctee.com.tw' + id + '" target="_blank">分享</a></p><br>';
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${h[2]}</p></div><hr>`
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
    html = '<p class="fs10">'+d.localizedContentDate+'</p>'+d.text.replace(/poster="data[\s\S]*?"/g,'').replaceAll('data-url="https://static.dw.com/image','src="https://static.dw.com/image').replaceAll('${formatId}','905')+ '<p class="text-end"><a href="https://www.dw.com' + id + '" target="_blank">分享</a></p><br>';
  }else{
    html = '<p class="fs10">'+d.localizedContentDate+'</p><p>'+d.teaser+'</p><video controls playsinline><source src="'+d.openGraphMetadata.url+'" type="video/mp4"></source></video><p class="text-end"><a href="https://www.dw.com' + id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p><a href="https://www.dw.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    INVESTING.COM HK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function invtComGetList(siteName,t){
  try{
  var k=2;
  for (let i=0;i<k;i++){
    url='https://hk.investing.com/'+t+((rr-1)*k+i+1);console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser=new DOMParser();
    var doc=parser.parseFromString(str, "text/html");
    if (t.slice(0,8)!=='analysis'){var hh=doc.querySelectorAll('article')}else{var hh=doc.querySelector('#contentSection').querySelectorAll('article')};
    for (let h of hh){
      items.push([h.children[1].children[0].href,h.children[1].children[0].innerText,h.querySelector('time').getAttribute('datetime')+' GMT+0',h.children[1].children[2].querySelectorAll('span')[1].innerText]);
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])} | ${h[3]}</p></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function invtComGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var a=doc.querySelector('#article');
  html=a.outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    ISABELNET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function isblGetList(siteName,t){
  try{
    url='https://www.isabelnet.com/blog/page/'+rr;console.log(url);
    var res=await fetch(url);
    var str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");

    let ts=doc.querySelectorAll('.entry-title');
    for (let t of ts){
      res=await fetch(t.firstChild.href);
      str=await res.text();
      parser = new DOMParser();
      doc = parser.parseFromString(str, "text/html");
      ss=doc.querySelectorAll('section');
      var hh=doc.querySelector('h2');
      var dt=doc.querySelector('.date-meta').innerText.replaceAll('\\n',' ');
      var pg=doc.querySelector('.elementor-text-editor');
      if (doc.querySelector('.gallery-icon')){var img=doc.querySelector('.gallery-icon')}else{var img=doc.querySelector('.elementor-image')};
      html+='<p class="title">'+hh.textContent+'</p><p class="fs10">'+dt+'</p>'+pg.innerHTML+img.innerHTML+'<br><br><hr>';
      html=html.replaceAll('<p>Image:','<p class=\"fs10\">Image:'); 
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    JIN10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function jinGetList(siteName,t){
  try{url=preStr+'https://xnews.jin10.com/'+t+'page/'+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.jin10-news-list-item-info');
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('.jin10-news-list-item-title').innerText,h.querySelector('.jin10-news-list-item-display_datetime').innerText+' | '+(h.querySelector('.jin10-news-list-item-topic')?.textContent??'').replace('\n                来自专题:\n                \n                  订阅','')])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${s2t(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function jinGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p>'+(doc.querySelector('.jin10-cnews-introduction')?.innerText??'')+'</p>'+(doc.querySelector('.jin10vip-image-viewer.setWebViewConentHeight.upload-statics-links')?.outerHTML??'')+'<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    LINE TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function lineTodayGetList(siteName,tt){
  //try{
  tt=tt.split('|');
  for (let t of tt) {
    if (/[0-9]/.test(t)){
      url=preStr+'https://today.line.me/webapi/trending/cp/latest/listings/module:cp:'+t+':5f4dd7e908b2af5b0e13bba1:0?offset='+(rr-1)*50+'&length=50&country=tw&targetContent=ALL&cps='+t+':200';
      let res=await fetch(url);
      let str=await res.json();
      for (let a of str.items){
        items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title]))
      }
    } else {
      url=preStr+'https://today.line.me/_next/data/v1/tw/v3/page/'+t+'.json';
      let res=await fetch(url);
      let str=await res.json();
      var data=str.pageProps.fallback['getPageData,'+t].modules;
      data=data.filter(d=>d.source=='LISTING');
      data=data.map(d=>d.listings[0].id);
      
      for (let d of data){
        res=await fetch(preStr+'https://today.line.me/api/v6/listings/'+d+'?country=tw&offset='+(rr-1)*20+'&length=20');
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
  try{const res = await fetch(preStr+'https://today.line.me/webapi/portal/page/setting/article?country=tw&hash=' + id);
  const str=await res.json();
  const a = str.data;
  if (a) {
    if (a.media==undefined){
      var html = '<p class="fs10">' + a.publishTime + ' | ' + a.publisher + '</p>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
    } else {
      html = '<p class="fs10">' + a.publishTime + ' ' + a.publisher + '</p>' + '<video class="video-js" style="width:100%" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+a.media.hash+'/270p.m3u8" muted="muted" type="application/x-mpegURL"></source></video>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
    }
  }
  }catch{html='<p><a href="' + a.url.url + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function lineTodayGetSearchResults(siteName,t){
  try{url=preStr+'https://today.line.me/webapi/listing/search?country=tw&query='+t;
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
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    MSN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnGetList(siteName,t,coun){
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

async function msnGetContent(id,coun){
  try{var res = await fetch('https://assets.msn.com/content/view/v2/Detail/'+coun+'/'+id);
  var d=await res.json();

  if (d.type==='article'){
    html = '<p class="fs10">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name ? d.provider.name:'')+'</p>' +(d.body?d.body.replaceAll('\/>','\/><br>'):'')+ '<p class="text-end"><a href="' + (d.sourceHref ? d.sourceHref:'') + '" target="_blank">分享</a></p><br>';
  } else if (d.type==='slideshow'){
    var slides=d.slides;
    var slidesHtml='';
    for (let s of slides){
      slidesHtml+='<img src="'+(s.image.url?s.image.url:'')+'"><br><p>'+(s.title?s.title:'')+'</p>'+(s.body?s.body:'');
    }
    html = '<p class="fs10">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name ? d.provider.name:'')+'</p>' +slidesHtml+ '<p class="text-end"><a href="' + (d.sourceHref ? d.sourceHref:'') + '" target="_blank">分享</a></p><br>';
  } 
  }catch{html='<p><a href="' + (d.sourceHref ? d.sourceHref:'') + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    PE INSIGHTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function peInsightsGetList(siteName,t){
  try{var k=3;
  for (let i=1;i<k;i++){
    url=preStr+'https://pe-insights.com/page/'+((rr-1)*k+i)+'?s='+t+'&et_pb_searchform_submit=et_search_proccess&et_pb_include_posts=yes&et_pb_include_pages=yes';console.log(url);
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
    html+=`<div class="t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="title">${h[1]}</p></div><p class="fs10">${h[2]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function peInsightsGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var img=doc.querySelector('section[data-id="e95520d"]');
  var a=doc.querySelector('section[data-id="4813b0f"]');

  if (a) {
    html = img.outerHTML+'<br>'+a.outerHTML.replaceAll('<h3','<p class="tl"').replaceAll('</h3>','</p>').replaceAll('<p','<p class="tl"').replaceAll(/<span[\s\S]*?">/g,'') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    REUTERS FROM TRADINGVIEW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function reutersGetList(siteName,t){
  try{
  if (t.slice(0,6)=='market'){url=preStr+'https://news-mediator.tradingview.com/news-flow/v2/news?filter=lang:zh-Hant&filter='+t+'&filter=provider:reuters&client=screener';console.log(url)}
  else {url=preStr+'https://news-mediator.tradingview.com/news-flow/v2/news?filter='+t+'&filter=lang:zh-Hant&filter=provider:reuters&client=screener';console.log(url)}
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
  try{const res = await fetch(preStr+'https://tw.tradingview.com'+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+cvt2Timezone(doc.querySelector('time').dateTime)+' | '+doc.querySelector('.timeAndSocialShare-pIO_GYwT').innerText+'</p>' +doc.querySelector('.body-KX2tCBZq.body-pIO_GYwT.content-pIO_GYwT').outerHTML+'<p class="text-end"><a href="https://tw.tradingview.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://tw.tradingview.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    TECH NEWS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function technewsGetList(siteName,t){
  try{url=preStr+'https://cdn.'+t+'page/'+rr;console.log(url);
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
  try{const res = await fetch(preStr+id.replace('https://','https://cdn.').replace('finance.',''));
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

  html = '<p class="fs10">'+t.innerText+'</p>'+z+ '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>'
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
  html = '<p class="fs10">'+t.innerText+'</p>'+a.outerHTML + '<p class="text-end"><a href="https://udn.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://udn.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function udnGetSearchResults(siteName,t){
  try{url=preStr+'https://udn.com/api/more?channelId=2&type=searchword&id=search:'+t+'&page='+rr;
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
  try{url=preStr+'https://money.udn.com/rank/ajax_newest/1001/'+t+'/'+rr;console.log(url);
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
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+doc.querySelector('time').innerText+' | '+doc.querySelector('.article-body__info').innerText+'</p>' +doc.querySelector('.article-body__editor').outerHTML+'<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function udnMoneyGetSearchResults(siteName,t){
  try{url=preStr+'https://money.udn.com/search/result/1001/'+t+'/'+rr;console.log(url);
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

  html = '<p class="fs10">'+cvt2Timezone(data.releasedAt)+' | '+data.authors[0].name+'</p><img src="https://static.wealth.com.tw/'+data.cover+'"><p class="fs10">'+data.coverText+'</p><div id="'+id+'__">aaaaa</div><p class="text-end"><a href="https://www.wealth.com.tw/articles/' + id + '" target="_blank">分享</a></p><br>';
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
  html = '<p class="fs10">'+cvt2Timezone(str.data.display_time*1000)+'</p>'+str.data.content + '<p class="text-end"><a href="https://wallstreetcn.com/' + id + '" target="_blank">分享</a></p><br>';
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





//    d: MSN, MSN CHANNEL, WSJ, VIDEO GET CONTENT
//    p: BBG
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
