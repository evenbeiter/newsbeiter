if (siteNameVar!==''){
for (let tab of tabs){
  channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('${siteNameVar}','${tab[1]}','${tab[0]}')">${tab[1]}</button>`;
}
get1stList(siteNameVar,tabs[0][1],tabs[0][0]);

for (let tab of faq){
  searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getFAQSearchResults('${tab[0]}','${tab[1]}','${tab[2]}')">${tab[2]}</button>`;
}  
searchList.innerHTML+='<input type="text" id="search-term" class="form-control my-2">';
for (let tab of searchSites){
  searchList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stSearchResults('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
}
} else {
  openUrlList()
}

for (let tab of allSites1){
  urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
}
urlList.innerHTML+='<hr>';
for (let tab of otherVideo){
  urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
}
