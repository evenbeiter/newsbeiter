//    GLOBAL VARIABLES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var siteNameVar='',docTitle='',tabs=[];
var items=[],ytnCoverImg='',ytnVideo='',ecoMagContent,url='',html='',coun='',t='',uuids='',lastId='',cursor='',payload={},rt='',rr=0,buildId='';


//    GLOBAL FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createChannelList(site,siteName,top){
  channelList.innerHTML='';
  for (let tab of site){channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${siteName}','${top} | ${tab[1]}','${tab[0]}')">${tab[1]}</button>`;}
  openChannelList();
  get1stList(siteName, top+' | '+site[0][1],site[0][0]);
}

function createSearchListDiv(faqList,searchSiteList){
  for (let tab of faqList){searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getFAQSearchResults('${tab[0]}','${tab[1]}','${tab[2]}')">${tab[2]}</button>`;}  
  searchList.innerHTML+='<input type="search" id="search-term" class="form-control my-2">';
  for (let tab of searchSiteList){searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stSearchResults('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;}
}

function createUrlListDiv(sitesList){
  // if (onEVBT===true){
    for (let s of sitesList){
      for (let tab of s){
        if (tab[0].indexOf('|')===-1){urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`}
        else {urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList('','${tab[0]}','${tab[1]}')">${tab[1]}</button>`};
      }
      urlList.innerHTML+='<hr>';
    }
  // } else {
  //   for (let s of sitesList){
  //     for (let tab of s){
  //       urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
  //     }
  //     urlList.innerHTML+='<hr>';
  //   }    
  // }
  if(urlList.lastElementChild){urlList.removeChild(urlList.lastElementChild)};
}

async function get1stList(siteName,top,t){
  rr=0;cursor='';
  getList(siteName,t);
  showTop(top);
  // notebookBtn.style.display='none';
}

async function get1stSearchResults(siteName,top){
  // var checkUrl=[...allSites,...allSitesB].find(pair=>pair[0]===siteName)?.[3];
  // checkUrl=checkUrl.split('|');
  // for (let s of checkUrl){if (window.location.href.indexOf(s)!==-1){var onEXURL=true;break}else{var onEXURL=false}};
  // if (onEVBT===true||onEXURL===true){
    rr=0;
    getSearchResults(siteName);
    showTop(top+' | 搜尋：'+document.getElementById('search-term').value);
  // } else {
  //   openUrl([...allSites,...allSitesB].find(pair=>pair[0]===siteName)?.[4]);
  // }
  // notebookBtn.style.display='none';
}

function getFAQSearchResults(siteName,top,t){
  document.getElementById('search-term').value=t;
  get1stSearchResults(siteName,top);
  // notebookBtn.style.display='none';
}

async function getList(siteName,t){
  loading.style.display='block';
  siteNameVar=siteName;rr++;rt=t;cursor='';
  if (rr==1){newNews()};
  items=[];html='';
  if (msnALL.includes(siteName)){list.innerHTML+=await msnGetList(siteName,t)}
  else {list.innerHTML+=await window[`${siteName}GetList`](siteName,t)};
  loading.style.display='none';
  if (sites2Translate.includes(siteName)){
    var all=document.querySelectorAll('.t-tl');
    getTranslation(all);
  }
}

async function getContent(siteName,clickedId,id){
  var e=window.event;
  if (e && e.target.closest('button')){var cEl=overlay;}else{var cEl=document.getElementById(id);}
  html='';
  try{document.getElementById('dateAuthor-'+id).style.display='none'}catch{};
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    if (!openContentDirectly.includes(siteName)){
      //need to get content for others (open div for apollo)
      if (cEl.querySelector('a')==null){
        //get content
        if (cEl==overlay){var cElDiv=popupContent;}else{var cElDiv=cEl;}
        if (msnALL.includes(siteName)){cElDiv.innerHTML+=await msnGetContent(id)}
        else {cElDiv.innerHTML+=await window[`${siteName}GetContent`](id)};
        
        //handle videos for line
        if (siteName=='lineToday'){
          try{var video=cEl.querySelector('video');if (video){
          var m3u8Url=video.querySelector('source').src;
          if (video.canPlayType('application/vnd.apple.mpegurl')) {
              video.src = m3u8Url;
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
        }}catch{}}

        //handle iframes in blk
        if (siteName=='blk'){
          try{
            var biiFlourish=cEl.querySelectorAll('.bii-flourish'); for (let b of biiFlourish){b.classList.add('p-0')};
            var blkIframe=cEl.querySelectorAll('iframe[id^="bii-flourish"]');
            for (let b of blkIframe){
              // var dataSrc=b.src.replace('https://flo.uri.sh/','').replace('/embed','');
              // b.parentElement.dataset.src=dataSrc;
              //b.parentElement.style.aspectRatio=1.78;
              // b.parentElement.style.width='100%';
              b.outerHTML+=`<p class="text-end fs09em"><a href="${b.src}" target="_blank">放大</a></p>`;
              // b.remove();
              // if(window.Flourish){Flourish.embed();}
              }
          }catch{}
        }

        //handle items for ytn
        if (siteName=='ytn'){
          //img
          cEl.querySelectorAll('img').forEach(img=>{if(img.dataset.src){img.src=img.dataset.src};img.outerHTML+='<p class="fs10">'+img.alt+'</p>'});
          //video
          if (cEl.querySelector('video')){
            const video = cEl.querySelector('video');
            const m3u8Url='https://mpeg4.ytn.co.kr/general/_definst_/mp4:general/mov/2025/'+cEl.id.slice(9,13)+'/'+cEl.id.slice(5)+'_z.mp4/playlist.m3u8';
            if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = m3u8Url;video.play();
            } else if (Hls.isSupported()) {
                const hls = new Hls();hls.loadSource(m3u8Url);hls.attachMedia(video);hls.on(Hls.Events.MANIFEST_PARSED, () => {video.play()});
            } else {
                console.error("HLS is not supported in this browser.");
            }
          }
          //paragraph
          var ss=cEl.querySelector('#CmAdContent').querySelectorAll('span');
          ss.forEach(span => {
            const parts = span.innerHTML.split(/<br\s*\/?>/i); 
            const newHTML = parts.map(part => part.trim()).filter(part => part).map(part => `<p>${part}</p>`).join('');
            span.innerHTML = newHTML;
          });
        };
        //remove image style
        cEl.querySelectorAll(rmImgStyle).forEach(img => {img.removeAttribute('style')});
        //handle image src
        if (msnALL.includes(siteName)){cEl.querySelectorAll('img').forEach(img=>{img.src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/'+img.getAttribute('data-document-id').slice(18)+'.img'})};
        //convert sc to tc
        if (cvtSc2Tc.includes(siteName)){convertTextInsideTags(cEl)};
      }
    }
    loading.style.display='none';
    //handle translation
    if (sites2Translate.includes(siteName)){
      startLazyTranslation(cEl);
      // var all=cEl.querySelectorAll('p:not(.time):not(.xtl), h2, h3, li');
      // getTranslation(all);
      } else if (kr.includes(siteName)){
        var all=cEl.querySelectorAll('p:not(.time), h2, h3, li');
        for (let a of all){
          var t=await translatePapago(a.textContent);
          if (t!==''){a.innerHTML+='<br><span class="fs10 d-inline-block py-3">'+t+'</span>'};
        }
      }
  } else {
    var e=window.event;
    if (e && (e.target.tagName==='VIDEO' || e.target.tagName==='A' || isImageLikeElement(e.target) || e.target.closest('button') || e.target.closest('.safe-click'))){return}else{
      const selection=window.getSelection();
      const selectedText=selection.toString().trim();
      if (selectedText.length===0){
        cEl.style.display='none';
        if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
        try{
          if (msnALL.includes(siteName)){cEl.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView()}
          else {cEl.previousElementSibling.previousElementSibling.scrollIntoView()}
        } catch {document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
      }
    }
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

async function translateOld(a){
  try{
    var url = 'https://translate.googleapis.com/translate_a/t?anno=3&client=gtx&dt=t&sl=auto&tl=zh-TW&format=html&q='+encodeURIComponent(a);
    var res=await fetch(url);
    var raw=await res.json();
    return raw[0][0].replace(/ onclick=[\s\S]*?\)"/g,'')||''
  }catch (error) {console.error(error)}
}

function createThrottledTranslator(limit = 10, interval = 1050) {
  let queue = [];
  let activeCount = 0;

  async function worker() {
    if (queue.length === 0 || activeCount >= limit) return;

    const { text, resolve, reject } = queue.shift();
    activeCount++;

    try {
      const res = await fetch("https://translate-pa.googleapis.com/v1/translateHtml", {
        method: "POST",
        headers: {"content-type": "application/json+protobuf","x-goog-api-key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520"},
        body: JSON.stringify([[[text], "en", "zh-TW"], "te_lib"]),
    });

      const str = await res.json();
      resolve(Array.isArray(str) && Array.isArray(str[0]) ? str[0][0] : str[0]);
    } catch (err) {
      reject(err);
    } finally {
      setTimeout(() => {
        activeCount--;
        worker();
      }, interval / limit);
    }
  }

  return function translateIR(text) {
    return new Promise((resolve, reject) => {
      queue.push({ text, resolve, reject });
      worker();
    });
  };
}

//Array.isArray(str) && Array.isArray(str[0]) ? str[0] : str

// 建立一個全域翻譯器
const translateIR = createThrottledTranslator();

// 包成可呼叫的函數
async function translate(text) {
 const translated = await translateIR(text);
 return translated;
}

async function translateMSFT(text){
  let res=await fetch('https://edge.microsoft.com/translate/auth');
  let at=await res.text();
  // const raw=at.split('.')[1].replace(/-/g, "+").replace(/_/g, "/");
  // const exp=JSON.parse(decodeURIComponent(window.atob(raw))).exp;

  res = await fetch("https://api-edge.cognitive.microsofttranslator.com/translate?from=&to=zh-Hant&api-version=3.0&includeSentenceLength=true", {
        method: 'POST',
        headers: {"content-type": "application/json", "authorization": "Bearer " + at,},
        body: JSON.stringify([{text:text}]),
      });
  let str = await res.json();
  // if (str && str.length > 0 && str[0].translations && str[0].translations.length > 0){
  //   console.log(str.map(m => m.translations[0]?.text || ""));
  // };
  return str[0].translations[0]?.text || "";
}

async function getTranslation(all){
  for (let a of all){
    if (a.innerText!=='' && cnTest(a.innerText)!==true){
    //if (a.innerText!==''){
      var t=await translate(a.innerHTML.trim());
      //var t=await translate(a.textContent);
      if (t!==''&&t!==undefined){a.outerHTML+=t};
      //if (t!==''&&t!==undefined){a.innerHTML+='<br><span class="fs10 d-inline-block py-3">'+t+'</span>'};
    }
  }
}

function startLazyTranslation(containerElement) {
  const selector='p:not(.translated-text):not(.time):not(.xtl), h2, h3, li, div.description';

  const observer = new IntersectionObserver(async (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target;if (shouldIgnore(el)) {observer.unobserve(el);continue;}
      const rawText = el.outerHTML.trim();if (!rawText) {observer.unobserve(el);continue;}
      //      const rawText = getTextOnly(el).trim();if (!rawText) {observer.unobserve(el);continue;}

      //const translated = await translateText(rawText);
      const translated = await translate(rawText);
      el.insertAdjacentHTML('afterend',translated)
      //insertTranslationAfter(el, translated);
      el.setAttribute('data-translated', 'true');
      observer.unobserve(el);
    }
  }, { threshold: 0.4 });

  const elements = containerElement.querySelectorAll(selector);elements.forEach(el => {if (!shouldIgnore(el)) observer.observe(el)});

  function shouldIgnore(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return true;
    if (el.hasAttribute('data-translated')) return true;
    if (el.querySelector('.translated-text')) return true;
    if (cnTest(el.innerText)) return true;
    if (!el || el.innerText.trim().length===0) return true;
    const parentTarget = el.closest(selector);if (parentTarget && parentTarget !== el) return true;
    return false;
  }
  
  function getTextOnly(el) {
    return Array.from(el.childNodes)
      .filter(n => n.nodeType === Node.TEXT_NODE)
      .map(n => n.textContent)
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

}

function jsonToHtml(data) {
  function renderNode(node) {
    if (node.text !== undefined) {
      let text = node.text;
      if (node.bold) text = `<strong>${text}</strong>`;
      if (node.underline) text = `<u>${text}</u>`;
      return text;
    }

    switch (node.type) {
      case 'p':
        return `<p>${(node.children || []).map(renderNode).join('')}</p>`;
      case 'ul':
        return `<ul>${(node.children || []).map(renderNode).join('')}</ul>`;
      case 'li':
        return `<li>${(node.children || []).map(renderNode).join('')}</li>`;
      case 'a':
        const url = node.attrs?.url || '#';
        const target = node.attrs?.target || '_self';
        const children = (node.children || []).map(renderNode).join('');
        return `<a href="${url}" target="${target}">${children}</a>`;
      case 'h2':
        // 這裡只處理 h2
        let h2Content = (node.children || []).map(renderNode).join('');
        return `<h2>${h2Content}</h2>`;
      default:
        // 若遇到未知 type，遞迴其 children
        if (node.children) {
          return (node.children || []).map(renderNode).join('');
        }
        return '';
    }
  }

  function renderParagraphOrImage(item) {
    if (item.paragraph && item.paragraph.json_rte) {
      const nodes = item.paragraph.json_rte.children || [];
      return nodes.map(renderNode).join('');
    }
    if (item.image && item.image.bynder_asset && item.image.bynder_asset.length > 0) {
      const img = item.image.bynder_asset[0];
      return `<img src="${img.originalUrl}" alt="${img.name || ''}" />`;
    }
    return '';
  }

  return data.map(renderParagraphOrImage).join('\n');
}

function transformToParagraphs(targets) {
  const elements = (targets instanceof NodeList || Array.isArray(targets))
    ? Array.from(targets)
    : [targets];

  elements.forEach(element => {
    processElement(element);
  });

  function processElement(el) {
    const blockTagsToKeep = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI'];
    const inlineTags = ['SPAN', 'B', 'I', 'U', 'EM', 'STRONG', 'A', 'SMALL', 'BIG', 'MARK'];

    const newElements = [];
    let currentText = '';

    for (const node of Array.from(el.childNodes)) {
      if (node.nodeType === Node.TEXT_NODE) {
        currentText += node.textContent;
      } else if (node.nodeName === 'BR') {
        if (currentText.trim()) {
          const p = document.createElement('p');
          p.textContent = currentText.trim();
          newElements.push(p);
          currentText = '';
        }
      } else if (inlineTags.includes(node.nodeName)) {
        const temp = document.createElement('div');
        temp.append(...Array.from(node.childNodes));
        currentText += temp.textContent;
      } else if (blockTagsToKeep.includes(node.nodeName)) {
        if (currentText.trim()) {
          const p = document.createElement('p');
          p.textContent = currentText.trim();
          newElements.push(p);
          currentText = '';
        }
        newElements.push(node);
      } else {
        currentText += node.textContent;
      }
    }

    if (currentText.trim()) {
      const p = document.createElement('p');
      p.textContent = currentText.trim();
      newElements.push(p);
    }

    el.innerHTML = '';
    for (const newEl of newElements) {
      el.appendChild(newEl);
    }
  }
}

function getLastNSats(n) {
  const saturdays = [];const today = new Date();
  const dayOfWeek = today.getDay(); // Sunday = 0, Saturday = 6
  const daysSinceSaturday = (dayOfWeek + 1) % 7;
  let current = new Date(today);
  const start = new Date('2025-05-02');
  current.setDate(current.getDate() - daysSinceSaturday);

  for (let i = 0; i < n; i++) {
    if (current>start){
      const yyyymmdd = current.getFullYear().toString() +
        String(current.getMonth() + 1).padStart(2, '0') +
        String(current.getDate()).padStart(2, '0');
      saturdays.push(yyyymmdd);
      current.setDate(current.getDate() - 7);
    }
  }
  return saturdays;
}

async function popup(id){
  overlay.style.display='block';
  popupContent.innerHTML+=await window[`${siteNameVar}GetContent`](id);
}
  
let scrollTimeout;
window.onscroll = function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (!noNextPage.includes(siteNameVar)){
      if (scrollTop + windowHeight >= documentHeight - 5) {
        if(rt!=='s'){
          getList(siteNameVar,rt);
        }else{
          getSearchResults(siteNameVar);
        }
      }
    }
  }, 1000);
};

function copyNote(btn){
  const originalHTML = btn.innerHTML;
  const container = btn.classList.contains('copy-all')? btn.closest('div.content') : btn.closest('div.note-block');
  const htmlContent = container.innerHTML.replace(btn.outerHTML,'');

  navigator.clipboard.write([
    new ClipboardItem({
      "text/html": new Blob([htmlContent], { type: "text/html" }),
      "text/plain": new Blob([container.innerText], { type: "text/plain" })
    })
  ]).then(() => {
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
            fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 
                  0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 
                  0 0 1-1.065.02L3.217 8.384a.757.757 
                  0 0 1 0-1.06.733.733 0 0 1 
                  1.047 0l3.052 3.093 5.4-6.425z"/>
      </svg>`;
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 1000);
  });
}


function showTop(t){topdiv.innerText=t;topdiv.style.display='block';}
function newNews(){options.style.display='none';document.body.scrollTop = 0;document.documentElement.scrollTop = 0;list.innerHTML='';}

function openChannelList(){channelList.style.display='block';searchList.style.display='none';urlList.style.display='none';options.style.display='block';topdiv.style.display='none';}
function openSearchList(){document.getElementById('search-term').value='';channelList.style.display='none';searchList.style.display='block';urlList.style.display='none';options.style.display='block';topdiv.style.display='none';}
function openUrlList(){channelList.style.display='none';searchList.style.display='none';urlList.style.display='block';options.style.display='block';topdiv.style.display='none';}

//function openEcoMagList(){channelList.style.display='none';searchList.style.display='none';ecoMagList.style.display='block';urlList.style.display='none';options.style.display='block';topdiv.style.display='none';}
function openOptions(){if (options.style.display=='none'){options.style.display='block';topdiv.style.display='none';} else {options.style.display='none';topdiv.style.display='block';}}
async function ping(){var res=await fetch(preStr+'https://date.nager.at/api/v3/publicholidays/2025/US');}
function cvt2Timezone(timestamp) {const date = new Date(timestamp);return date.toLocaleString('zh-TW',{timeZone:'Asia/Taipei'});}
// function sCC(a,ii){let result='';for (const i of ii){if (i>=0 && i<a.length){result+=a[i]}}return result;}
function openUrl(url){window.open(url,'_blank')}
function decodeHTMLEntities(str){var ta=document.createElement('textarea');ta.innerHTML = str;return ta.value;}
function cnTest(str) {const chineseCharRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;return chineseCharRegex.test(str);}
function convertTextInsideTags(element) {for (let child of element.childNodes) {if (child.nodeType === Node.TEXT_NODE) {child.nodeValue = s2t(child.nodeValue.trim());} else if (child.nodeType === Node.ELEMENT_NODE) {convertTextInsideTags(child);}}}
function hideOverlay(){document.getElementById('customOverlay').classList.add('d-none');}
function showOverlay(el,elSrc){
  document.getElementById('customOverlay').classList.remove('d-none');
  if (el='blkIframe'){
    popupContent.dataset.src=elSrc;document.getElementById('gtmImg').src='';
  } else {document.getElementById('gtmImg').src=elSrc;}
}
function shareLink(url){return `<p class="text-end"><a href="${url}" target="_blank">分享</a></p><br>`}


const svgArrowUpRight = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
  </svg>
`;

const svgDownload = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
  </svg>
`;

const svgCopy = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
  </svg>
`;

const svgCheck = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
  </svg>
`;

const svgEdit = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
  </svg>
`;

const svgUpload = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
    <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"/>
  </svg>
`;

const svgDelete = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
  </svg>
`;
