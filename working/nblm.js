const n = new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Taipei'})).getTime()/1000;
const n_24 = new Date(n*1000).setHours(0,0,0,0)/1000;
const n_00 = (n_24-86400);

url=preStr+encodeURIComponent(`https://api.cnyes.com/media/api/v1/newslist/category/${t}?limit=30&startAt=${n_00}&endAt=${n_24}&page=${rr}`);
let res=await fetch(url);
let str=await res.json();
for (let a of str.items.data){
  html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')">
        <p class="time">${cvt2Timezone(a.publishAt*1000)}</p>${decodeHTMLEntities(a.content).replace(
  /<a\s+href="https:\/\/news\.cnyes\.com\/news\/id\/(\d+)"[\s\S]*?]>\[(\d+)\]<\/a>/g,
  (match, id, num) => {
    return `<button onclick="popupContent('${id}')">[${num}]</button>`;
})}<p class="text-end"><a href="https://news.cnyes.com/news/id/${a.newsId}" target="_blank">分享</a></p><br>
        </div><hr>`;
}