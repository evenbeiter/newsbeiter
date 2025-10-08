//    DEFINE NAME OF ELEMENTS (same in main.bml.js)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const options=document.getElementById('btn-group');
const toc=document.getElementById('toc');
const btn=document.getElementById('btn');
const channelList=document.getElementById('channelList');
const searchList=document.getElementById('searchList');
const urlList=document.getElementById('urlList');
const list=document.getElementById('list');
const lines=document.getElementById('lines');
const topdiv=document.getElementById('top');
const loading=document.getElementById('loading');

const closeBtn=document.getElementById('overlayCloseBtn');
const backdrop=document.getElementById('overlayBackdrop');
const overlay=document.getElementById('customOverlay');
const popupContent=document.getElementById('popupContent');
const isVisible=!overlay.classList.contains('d-none');
document.addEventListener('keydown', function (e) {if (isVisible && e.key === 'Escape') {hideOverlay()}});


//    CREATE URL LIST & SEARCH LIST FOR NEWSBEITER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
if (window.location.href.slice(-4)==='news'){
  createUrlListDiv([allSites,videoSites]);
  createSearchListDiv(faq,searchSites);
  openUrlList();
} else {
  //podcast.html
  createUrlListDiv([allSites]);
  openUrlList();
}
