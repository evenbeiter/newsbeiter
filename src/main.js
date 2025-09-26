// functions-init > main > functions-fetch > functions-note > opencc-cn2t

//    DEFINE NAME OF ELEMENTS (same in main.bml.js)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const options=document.getElementById('btn-group');
const btn=document.getElementById('btn');
// const notebookBtn = document.getElementById('notebookBtn');
const uploadBtn = document.getElementById('uploadBtn');
const channelList=document.getElementById('channelList');
const searchList=document.getElementById('searchList');
//const ecoMagList=document.getElementById('ecoMagList');
const urlList=document.getElementById('urlList');
const list=document.getElementById('list');
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
  
  //ping();
  createUrlListDiv([allSites,videoSites]);
  createSearchListDiv(faq,searchSites);
  openUrlList();
