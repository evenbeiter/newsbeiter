// (function(){

// functions-init > functions-fetchbml > main-bml > functions-note > opencc-cn2t

//    RENDER HTML FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for (let l of allSitesB) {var ss=l[3].split('|');for (let s of ss){if (window.location.href.indexOf(s) !== -1) {siteNameVar=l[0];docTitle=l[1];tabs=l[2];break}}};

//  (to be removed in chrome extension)
document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<link href="https://evenbeiter.github.io/newsbeiter/src/news.css" rel="stylesheet">
<title>${docTitle}</title>
</head>
<body>
<div id="container">
<div class="sticky-top position-fixed m-2 top-0 end-0" style="z-index:1030;padding-top:3rem">
  <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25" onclick="openOptions()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path>
    </svg>
  </button>
  <button id="uploadBtn" type="button" class="btn btn-light mt-2 sepia-contrast opacity-25">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
      <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"/>
    </svg>  
  </button>
</div>
<div id="top" class="z-2 fs10 py-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="display:none"></div>
  <form id="btn-group" class="py-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="max-height:100vh">
    <div id="btn" class="p-2">
      <button class="btn sepia me-1 mb-1" type="button" onclick="openChannelList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('ecoMag','The Economist','')">經濟學人</button><button class="btn sepia me-1 mb-1" type="button" onclick="openUrlList()">網站列表</button>
      <hr style="margin-right:3rem">
      <div id="channelList"></div>
      <div id="searchList" style="display:none"></div>
      <div id="ecoMagList" style="display:none">
        <button class="btn sepia me-1 mb-1" onclick="dlEcoMag()">下載雜誌</button>
        <button id="copy-btn" class="btn sepia me-1 mb-1" onclick="copyJSONToClipboard()" style="display:none">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
          </svg>
        </button>
        <input type="file" id="fileInput" class="btn sepia me-1 mb-1 form-control" onchange="openBook(this)"/><hr>
      </div>
      <div id="urlList" style="display:none"></div>
    </div>
  </form>
<div id="list" class="mx-3 pt-3 sepia"></div>
<div id="loading" class="position-fixed w-100 top-0 start-0" style="height:100vh;display:none"><div id="loading-gif" class="position-absolute top-50 start-50 translate-middle" style="z-index:1030;width:3rem;height:3rem">
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" stroke="#555">
  <g fill="none" fill-rule="evenodd">
    <circle cx="30" cy="30" r="26" stroke-opacity="0.2" stroke-width="6"/>
    <path d="M56 30c0-14.36-11.64-26-26-26" stroke="#555" stroke-width="6">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 30 30"
        to="360 30 30"
        dur="1s"
        repeatCount="indefinite"/>
    </path>
  </g>
</svg>
</div></div>
  
<div id="customOverlay" class="position-fixed top-0 start-0 w-100 h-100 d-none z-3">
  <div id="overlayBackdrop" class="position-absolute top-0 start-0 w-100 h-100 bg-secondary bg-opacity-25" onclick="hideOverlay()"></div>
  <div class="position-absolute top-50 start-50 translate-middle bg-white border rounded shadow p-4" style="width: 90vw; height: 90vh; overflow: auto;">
    <button id="overlayCloseBtn" type="button" class="btn-close position-absolute top-0 end-0 m-3" aria-label="Close" onclick="hideOverlay()"></button>
    <div class="p-4 h-100 overflow-auto"><div id="popupChart" class="w-100"></div><img id="gtmImg" class="img-fluid" style="max-height:100%;object-fit:contain"></div>
  </div>
</div>
</div>
  
</body>
</html>
`;


//    DEFINE NAME OF ELEMENTS (same in main-page.js)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const options=document.getElementById('btn-group');
const btn=document.getElementById('btn');
const uploadBtn = document.getElementById('uploadBtn');
const channelList=document.getElementById('channelList');
const searchList=document.getElementById('searchList');
const ecoMagList=document.getElementById('ecoMagList');
const urlList=document.getElementById('urlList');
const list=document.getElementById('list');
const topdiv=document.getElementById('top');
const loading=document.getElementById('loading');

const closeBtn=document.getElementById('overlayCloseBtn');
const backdrop=document.getElementById('overlayBackdrop');
const overlay=document.getElementById('customOverlay');
const isVisible=!overlay.classList.contains('d-none');
document.addEventListener('keydown', function (e) {if (isVisible && e.key === 'Escape') {hideOverlay()}});


//    CREATE CHANNEL, SEARCH & URL LIST FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (siteNameVar!==''){
  createChannelList(tabs,siteNameVar,docTitle);
  //createSearchListDiv(faqB,searchSitesB);
  //createUrlListDiv([allSitesB,allSites2,videoSitesB]);
  createUrlListDiv([allSitesB]);
} else {
  channelList.innerHTML='';
  searchList.innerHTML='';
  //createUrlListDiv([allSitesB,allSites2,videoSitesB]);
  createUrlListDiv([allSitesB]);
  openUrlList();
}

// window.options=options;window.btn=btn;window.channelList=channelList;window.searchList=searchList;window.ecoMagList=ecoMagList;window.urlList=urlList;window.list=list;window.topdiv=topdiv;window.loading=loading;window.closeBtn=closeBtn;window.backdrop=backdrop;window.overlay=overlay;window.isVisible=isVisible;

// })();