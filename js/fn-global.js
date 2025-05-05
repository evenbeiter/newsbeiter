//    LANDING
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ping();
openMediaList();

function showTop(t){
  topdiv.innerText=t;
  topdiv.style.display='block';
}

function openMediaList(){
  btn.innerHTML=formHeader;
  tabs=allSites1;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createBtnGroup(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
  btn.innerHTML+='<hr>';
  tabs=allSites2;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createBtnGroup(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
  btn.innerHTML+='<hr>';
  tabs=msnVideo;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('msnVideo','${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
  }
  tabs=msnChannelVideo;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('msnChannelVideo','${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
  }
  tabs=otherVideo;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${tab[0]}','${tab[1]}','')">${tab[1]}</button>`;
  }
  options.style.display='block';
  topdiv.style.display='none';
}

function openSearchList(){
  btn.innerHTML=formHeader;
  tabs=faq;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getFAQSearchResults('${tab[0]}','${tab[1]}','${tab[2]}')">${tab[2]}</button>`;
  }  
  btn.innerHTML+=`<input type="text" id="search-term" class="form-control my-2">`;
  tabs=searchSites;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stSearchResults('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
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

function createBtnGroup(site,siteName,top){
  btn.innerHTML=formHeader;
  for (let tab of site){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${siteName}','${top}','${tab[0]}')">${tab[1]}</button>`;
  }
    get1stList(siteName,top,site[0][0]);
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


//    GLOBAL FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
