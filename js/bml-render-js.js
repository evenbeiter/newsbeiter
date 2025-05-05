//    CREATE URL LIST & SEARCH LIST FOR NEWSBEITER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (window.location.href.indexOf('evenbeiter.github.io')!==-1){
  ping();
  for (let tab of allSites1){
    urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
  urlList.innerHTML+='<hr>';
  for (let tab of allSites2){
    urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
  urlList.innerHTML+='<hr>';
  for (let tab of msnVideo){
    urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('msnVideo','${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
  }
  for (let tab of msnChannelVideo){
    urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('msnChannelVideo','${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
  }
  for (let tab of otherVideo){
    urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${tab[0]}','${tab[1]}','')">${tab[1]}</button>`;
  }
  options.style.display='block';
  topdiv.style.display='none';
  createSearchListDiv(faq,searchSites);
  openUrlList();
  
//    CREATE CHANNEL, SEARCH & URL LIST FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

} else if (siteNameVar!==''){
  createChannelList(tabs,siteNameVar,tabs[0][1])
  createSearchListDiv(faqB,searchSitesB);
  createUrlListDiv4Bml([...allSitesB,...otherVideoB]);
} else {
  chennelList.innerHTML='';
  searchList.innerHTML='';
  createUrlListDiv4Bml([...allSitesB,...otherVideoB]);
  openUrlList();
}
