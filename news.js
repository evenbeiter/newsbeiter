const allSites=[['lineToday','LINE'],['anue','鉅亨'],['ctee','工商'],['udn','聯合'],['wealth','財訊'],['businessToday','今周刊'],['businessWeekly','商周'],['bnext','數位時代'],['technews','科技新報'],['msnTW','MSN 台灣'],['msnUS','MSN']];
const videoSites={'msn':[['WATCH','MSN'],['money video','Money'],['lifestyle video','Lifestyle'],['entertainment video','Entertainment']],'msnChannel':[['vid-4k3nj4ageev4xbh5ka3xq2xv0au7qyya0p2bt0w8tvx9u0x895rs','CNBC'],['vid-9sg538d8084xdac9cqur3c8fr7gyh8mehuf2f55ssbmcapc6hrha', 'CBS'],['vid-vvpqk5ypg9f3g4ypq6ahsrf0tu0bu56i7vh63n3tseid8uk4mkvs', 'Washington Post']],'others':[['wsjVideo','WSJ']]};
const uLi = ['ps','it','new','?','ap','sbe','rl','.','nd','h','fet','tt','on','er','re','=','co','m','/','i',':','ch','u'];
const searchSites=[['lineToday','LINE'],['anue','鉅亨'],['ctee','工商'],['udn','聯合'],['businessToday','今周刊'],['cnbcVideo','CNBC']]; 
const iOd=[9,11,0,20,18,18,2,5,1,13,7,12,14,8,13,7,16,17,18,4,19,18,10,21,3,22,6,15];
const msnTW=[['Y_321db332-7d5a-4672-96b5-2d342ca554fb', '焦點'],['Y_ab001b84-62eb-4605-96c4-12221f946e94', '新聞'],['Y_5993abc4-f49c-49ce-bed0-a5b4b61dd9f6', '財經'],['Y_a484713e-0cec-4003-8fac-a629da5bcf3d', '兩岸國際'],['Y_a0268fb1-402c-48ec-8946-c31ddd7751da', '即時新聞'],['Y_b4ddc302-8189-44e9-b136-9682cc7e3746', '即時財經'],['Y_fef3ac37-3667-4a34-92c0-3e373c55d307', '理財'],['Y_aced43e9-95ab-4e5c-a0c5-d035aeb2133b', '科技'],['Y_da100b0d-55ac-49d4-beae-84ffdcbf3da9', '生活'],['Y_e2c684a5-a8fe-4879-91b9-8d5dc50b5488', '居家設計'],['Y_b77e5da5-aea6-4ee3-8890-91990040926a', '健康'],['Y_57552325-541f-4702-b61e-f307056e39b1', '旅遊'],['Y_95fdd1de-0e14-47b2-a213-6edf24542702', '娛樂'],['Y_f3ddd032-c606-4c7f-b11f-cb16a3596ae2', '台灣'],['Y_7a50bf00-ca7e-4699-ac07-b31e1c3ae01f', '房地產'],['Y_fb97b38c-1cf6-445a-b579-f7b9b35f6590', '職場求職'],['Y_54b11fc3-6cd6-45d6-a669-1c0168275125', '職場焦點'],
  ['vid-y9reuyeu7hkimpnrdtqpruibsfa4wd4bxxxip6dasjgrby33vd0a', '中央社'],['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', '彭博'],['vid-hvwu6j8yi9b0huc8bkawy5qhvdf3scbniqc8scbbbp6xvj6ftrda', '商周'],['vid-rh9wrnpgtjfx7dbmc38h4xkf6j00me2e9amvgkeqtmanw40mw36s', '天下'],['vid-xj7qtb3g69dr6auu9p8ueq57gnarhrxd5ej05gtswdmnwi02xxia', '德國之聲'],['vid-jwkt4swyp9iyjy43f5cbhi02ttt8enb5t6yms0ppdx869vubmasa', '東森'],['vid-nvte086i8a39iuemvaxwsicfmc2j6tvixtcu9uxbfwqrgaw857rs', 'TVBS新聞'],['vid-n0sumxg56bwh3bguneg5ynixqc3qyiacjst3idsyus5rkrjs3pts', '中時'],['vid-e8mmyirx39xyms90cigfcgdn9p7vdy6u0xe243c7tdm2hgwiypas', '遠見'],['vid-9eqa8gpyscx8v293p3hsyxipqngqd3j7wexky6y09d7eye90m9ya', '風傳媒'],['vid-ctia0d3wuyutasjyriw3uvt8vaa0u4pmwkv0fqpgiciaf5r54m5a', '鏡週刊'],['vid-caqxm27w0p49tmy0ar5urvpar0ccx2b0xdaatyw2nxfqkgab7bds', '早安健康'],['vid-pui6vcpvju95tisme52646g2d79dvjt7akm8cg8ahmrbi8u7a2xa', '康健']];
const msnUS=[['Y_46b78bbb-31c4-4fc5-8a4a-858072348d06','News'],['Y_d1cad308-780e-4a75-ba34-6460811ccfe3','Tech'],['Y_99096e96-6d4f-401c-832b-461e08143a5a','Lifestyle'],
  ['Y_69fcfcf0-f686-4b19-9901-0a4ce35b823d', 'Business'],['Y_ce1fe19d-4d60-4312-b4d6-8cba9aa76413', 'Stocks'],['Y_8c7b0706-a0d1-49f1-8603-5c33a3dadd73', 'Economics'],['Y_d6433e0a-2be3-4106-839c-5a40a5375514', 'AI'],['Y_dc6dc645-d63a-4c97-8812-3ecdf27695b8', 'SMID'],['Y_f457eae0-84c0-4d35-b1dc-8435b7b6c140', 'Generative AI'],
  ['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', 'Bloomberg'],['vid-mpxsw8rp392wedf25t8tfhk7r3b364q8dj75ks43nimmf06qg2es', 'Reuters'],['vid-r0r09b3muc6xnf5tv2est5f5ukjbkk67i9svrhyu3jy2pskkbems', 'MarketWatch'],['vid-y572a3ryyddhuiujs0xe2j4m4b6c3n2fp5hnux4jpsdand8h09ys', 'WSJ'],['vid-bpwfbvkfudq92wksju4upi9jrx2pn0ax46vrw0vkst93vpwr5pva', 'CNN'],['vid-v3atkpesfykfx7084fbu0cpbtx0jne99kctychfsn9ry96wsmbba', 'BBC'],['vid-r4du2vx0u9h0kr9tx7iyx55w7sneq7e6tg934epuehq3grvn05aa', 'Fortune'],['vid-n3h9ssyxg550pryvt4287xynyckhu84k5vc6n3tdqwsvtvmn2p0s', 'USA TODAY'],['vid-27xbtchrc5gpxe8uhvw9f24q2kqi9f0ppk7ptb8xw9v9sscheg6s', 'Motley Fool'],['vid-i3g0qyhrtn28biukcpyvsrmhccmv8k8ugtmtr6kqhb9dkf6ccrua', 'FOX News'],['vid-rvn4g4busxh65p6kgfvhye9atw9n8ebd46ut057ypkbm5n6xa5ts', 'BuzzFeed']];
const lineToday=[['top','焦點'],['finance','理財'],['100140','鉅亨'],['102394|103101','經濟工商'],['103214|100267','M平方'],['100295','今周刊'],['101131','CMoney'],['100422|100421|100423','商周'],['101170','路透社'],['104453|101006','財訊'],['100150|103088','鏡週刊'],['101427','CTWANT'],['100237','東森'],['100167','TVBS'],['100004|101886','風傳媒'],['100275|101201','關鍵評論網'],['global','國際'],['100003','中央社'],['TOPIC-USelection|2024election','川普2.0'],['worldtrend','世界趨勢'],['101074','CNN'],['tech','科技'],['AI','AI'],['100317','數位時代'],['100341','科技新報'],['101196','科技報橘'],['104322','優分析'],['104264','產業定錨筆記'],['100198','經理人月刊'],['101499','德國之聲'],['100462','換日線'],['100568|100158','天下雜誌'],['101031','地球圖輯隊'],['101934|100394','閱讀'],['domestic','國內'],['TOPIC-BingeWatching','追劇'],['TOPIC-KoreaStar','韓星最前線'],['health','健康'],['life','生活'],['cleanandstorage','生活智慧王'],['fun','鄉民'],['entertainment','娛樂'],['travel','旅遊'],['TOPIC-TravelJapan','日本旅遊情報']];
const anue=[['headline','頭條'],['tw_stock','台股'],['wd_stock','美股'],['tech','科技'],['fund','基金'],['tw_money','理財'],['forex','外匯'],['future','期貨'],['mag','雜誌'],['topics','專題'],['celebrity_area','新視界'],['bc','區塊鏈'],['cn_stock','陸港股'],['cnyeshouse','房產']];
const ctee=[['livenews/ctee/','即時'],['category/finance/','要聞'],['category/stock/','證券'],['category/finance/','金融'],['category/wealth/','理財'],['category/industry/','產業'],['category/house/','房市'],['category/world/','國際'],['category/view/','觀點'],['category/bookstore/','書房'],['category/lohas/','樂活']];
const udn=[['id=&channelId=1&cate_id=0&type=breaknews','最新'],['channelId=2&type=cate_latest_news&cate_id=6638','要聞'],['channelId=2&type=cate_latest_news&cate_id=6645','股市'],['channelId=2&type=cate_latest_news&cate_id=7225','全球'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=124373','美國關稅'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=6811','全球財經'],['channelId=2&type=cate_latest_news&cate_id=6644','產經'],['channelId=2&type=cate_latest_news&cate_id=6649','生活']];
const wealth=[["Articles|","最新"],["Articles|bd088d2c-f76a-4187-8673-1ae412cd6356","謝金河"],["Category|95f4329c-bcf4-47c4-b133-879bb862b479","財經茶水間"],["Category|2c6379e9-7527-442b-880a-bb9552689e06","國際"],["Category|87259978-8ff6-465c-b552-c33f69f6432e","投資理財"],["Category|450cbbed-c577-4d8e-a689-8e90b4f8bac7","財經指標"],["Category|d1354fa3-82bf-42e6-84ad-9e36d7615892","金融圈"],["Category|79c03f3f-d546-4551-a05f-c6d38e5579ca","科技"],["Category|3187845b-57fb-4336-bc4b-4f30cbeb642c","企業"],["Category|dd2b5859-96aa-42bb-b5cc-08e6c7c8728e","生醫"],["Category|800e2b3c-0352-4fba-aea2-01fff6b16015","地產"],["Category|352be1d4-7ce8-42b8-9a84-0f491f7927ea","政經"],["Category|de408237-667e-4594-abd8-8106ba567324","健康醫療"],["Category|2eb0f6be-d8bb-447d-b067-e17601f44056","美食旅遊"],["Category|2492cf34-afd8-40ee-95de-6f340988ab22","品味人生"]];
const businessToday=[['news/','最新'],['catalog/183007/list/page/','投資理財'],['catalog/183020/list/page/','保險稅制'],['catalog/183014/list/page/','產業時事'],['catalog/183028/list/page/','職場生活']];
const businessWeekly=[['0000000000','最新'],['0000000316','國際'],['0000000319','財經'],['0000000326','管理'],['0000000312','焦點'],['0000000342','CEO學院']];
const preStr=sCC(uLi,iOd);
const bnext=[['articles','新聞'],['ranking','熱門'],['topics','專題'],['tags/AI','AI'],['categories/semiconductor','半導體'],['categories/AI','AI與大數據'],['categories/5g','5G通訊'],['categories/car','電動車/交通科技'],['categories/manufacture','智慧製造'],['categories/media','影音新媒體'],['categories/fintech','金融科技'],['categories/digitalskill','職場工作術']];
const technews=[['technews.tw/','最新'],['technews.tw/category/semiconductor/','半導體'],['technews.tw/category/component/','零組件'],['finance.technews.tw/','財經'],['technews.tw/category/internet/','網路'],['technews.tw/category/cutting-edge/','尖端科技'],['technews.tw/topics/','系列專題'],['technews.tw/category/natural-science/環境科學/','環境科學'],['technews.tw/category/能源科技/','能源科技']];
const formHeader=`<button class="btn sepia me-1 mb-1" type="button" onclick="openMediaList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><hr style="margin-right:3rem">`;
var tabs=[];
var siteName='';
var coun='';
var t='';
var uuids='';
var payload={};
var rt='';
var rr=0;
var options=document.getElementById('btn-group');
var btn=document.getElementById('btn');
var list=document.getElementById('list');
var topdiv=document.getElementById('top');
var loading=document.getElementById('loading');

  
//    LANDING PAGE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

ping();
openMediaList();

function showTop(t){
  topdiv.innerText=t;
  topdiv.style.display='block';
}

function openMediaList(){
  btn.innerHTML=formHeader;
  tabs=allSites;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createBtnGroup(${tab[0]},'${tab[0]}')">${tab[1]}</button>`;
  }
  tabs=videoSites;
  btn.innerHTML+='<hr>';
  for (let tab of tabs.msnChannel){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="msnChannelVideoGet1stList('${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
  }
  for (let tab of tabs.others){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="${tab[0]}Get1stList('')">${tab[1]}</button>`;
  }
  btn.innerHTML+='<br>';
  for (let tab of tabs.msn){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="msnVideoGet1stList('${tab[0]}')">${tab[1]}</button>`;
  }
  options.style.display='block';
  topdiv.style.display='none';
}

function openSearchList(){
  btn.innerHTML=formHeader+`<input type="text" id="search-term" class="form-control mb-2">`;
  tabs=searchSites;
  for (let tab of tabs){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="${tab[0]}Get1stSearchResults()">${tab[1]}</button>`;
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

function createBtnGroup(site,siteName){
  btn.innerHTML=formHeader;
  for (let tab of site){
    btn.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="${siteName}Get1stList('${tab[0]}')">${tab[1]}</button>`;
  }
    window[`${siteName}Get1stList`](site[0][0]);
}

// async function get1stList(siteName,top,op,t){
// rr=0;
// if (siteName=='msnTW'){
//   msnGetList(t,'zh-tw')
// } else if (siteName=='msnUS'){
//   msnGetList(t,'en-us')
// } else if (siteName=='wealth'){
//   wealthGetList(op,t);
// } else {
//   window[`${siteName}GetList`](t)
// }
// if (siteName=='msnVideo'){
//   var cat=t.split(' ')[0];
//   cat=cat.charAt(0).toUpperCase() + cat.slice(1);
//   showTop('MSN '+cat);
// } else {
//   showTop(top);
// }
// }


//    MSN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnTWGet1stList(t){
rr=0;
msnGetList(t,'zh-tw');
showTop('MSN 台灣');
}

async function msnUSGet1stList(t){
rr=0;
msnGetList(t,'en-us');
showTop('MSN');
}

async function msnGetList(t,c){
loading.style.display='block';
siteName='msn';coun=c;rr++;rt=t;console.log(rr);
if (rr==1){newNews()};
var items=[];var url='';var html='';

if (t.slice(0,2)==='Y_'){
  var srvc='channelfeed';
  t='InterestIds='+t;
} else {
  var srvc='providerfullpage';
  t='CommunityProfileId='+t;
}

for (var i=0;i<2;i++){
  var url='https://assets.msn.com/service/news/feed/pages/'+srvc+'?ocid=social-peregrine&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&User=m-00A80177A097658A10770F1FA15F64FF&cm='+coun+'&'+t+'&newsSkip='+12*((rr-1)*2+i)+'&$skip='+((rr-1)*2+i);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.sections[0].cards){
    items.push([h.id,h.title]);
  }
}

for (let d of items){
  html+=`<p class="${coun} t-tl fw-bold" onclick="msnGetContent(this.id,'${d[0]}','${coun}')">${d[1]}</p><div id="${d[0]}" class="content ${coun}" onclick="msnGetContent(this.id,'${d[0]}','${coun}')"></div><hr>`;
}
list.innerHTML+=html;
loading.style.display='none';

if (coun==='en-us'){
  var all=document.querySelectorAll('.t-tl');
  getTranslation(all);
}
}

async function msnGetContent(clickedId,id,coun){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' && cEl.textContent!==''){cEl.style.display='block'}
  else if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    var res = await fetch('https://assets.msn.com/content/view/v2/Detail/'+coun+'/'+id);
    var d=await res.json();
        
    if (clickedId=='') {
      cEl.style.display='block';
      if (d.type==='article'){
        var html = '<span class="fs10">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name ? d.provider.name:'')+'</span><br>' +(d.body?d.body:'')+ '<p class="text-end"><a href="' + (d.sourceHref ? d.sourceHref:'') + '" target="_blank">分享</a></p><br>';
        cEl.innerHTML=html.replaceAll('\/>','\/><br>');
        var images=cEl.querySelectorAll('img');
        var imgSrc=d.imageResources;
        for (let img of images){
          img.src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/'+img.getAttribute('data-document-id').slice(18)+'.img';
        }
      } else if (d.type==='slideshow'){
          var slides=d.slides;
          var slidesHtml='';
          for (let s of slides){
            slidesHtml+='<img src="'+(s.image.url?s.image.url:'')+'"><br><p>'+(s.title?s.title:'')+'</p>'+(s.body?s.body:'');
          }
          var html = '<span class="fs10">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name ? d.provider.name:'')+'</span><br>' +slidesHtml+ '<p class="text-end"><a href="' + (d.sourceHref ? d.sourceHref:'') + '" target="_blank">分享</a></p><br>';
          cEl.innerHTML=html.replaceAll('\/>','\/><br>');

      } else {
        var html = '<p><a href="' + (d.sourceHref ? d.sourceHref:'') + '" target="_blank">繼續閱讀</a></p><br>';
      }

    loading.style.display='none';

  if (coun==='en-us'){
    var all=[];
    var pg=cEl.getElementsByTagName('p');all.push(...pg);
    var h2=cEl.getElementsByTagName('h2');all.push(...h2);
    var li=cEl.getElementsByTagName('li');all.push(...li);
    getTranslation(all);
  }
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){
        cEl.style.display='none';cEl.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
} else {cEl.style.display='none';cEl.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView()}
}


//    LINE TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function lineTodayGet1stList(tt){
rr=0;
lineTodayGetList(tt);
showTop('LINE TODAY');
}

async function lineTodayGetList(tt){
loading.style.display='block';
siteName='lineToday';rr++;rt=tt;
if (rr==1){newNews()};
var items=[];var url='';var html='';
tt=tt.split('|');
for (let t of tt) {
  if (/[0-9]/.test(t)){
    url=preStr+'https://today.line.me/webapi/trending/cp/latest/listings/module:cp:'+t+':5f4dd7e908b2af5b0e13bba1:0?offset='+rr*50+'&length=50&country=tw&targetContent=ALL&cps='+t+':200';
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
      res=await fetch(preStr+'https://today.line.me/api/v6/listings/'+d+'?country=tw&offset='+rr*20+'&length=20');
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
  html+=`<p class="title" onclick="${siteName}GetContent(this.id,'${h[0]}')">${h[2]}</p><div id="${h[0]}" class="content" onclick="${siteName}GetContent(this.id,'${h[0]}')"></div><hr>`
}
if(html!==''){list.innerHTML+=html;}
loading.style.display='none';
}

async function lineTodayGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    const res = await fetch(preStr+'https://today.line.me/webapi/portal/page/setting/article?country=tw&hash=' + id);
    const str=await res.json();
    const a = str.data;
    if (a) {
      if (a.media==undefined){
        var html = '<span>' + a.publishTime + ' ' + a.publisher + '</span><br>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
      } else {
        var html = '<span>' + a.publishTime + ' ' + a.publisher + '</span><br>' + '<video class="vjs-tech" style="width:100%" tabindex="-1" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+a.media.hash+'/270p.m3u8" muted="muted" type="application/x-mpegURL"></source></video>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
      }
        cEl.innerHTML=html;
        loading.style.display='none';
    }
  } else {
    closeContent(cEl,clickedId);
  }
}

async function lineTodayGet1stSearchResults(){
rr=0;
t=document.getElementById('search-term').value;
showTop('LINE TODAY - 搜尋：'+t);

loading.style.display='block';
siteName='lineToday';
options.style.display='none';
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
var items = [];
var url='';
    url=preStr+'https://today.line.me/webapi/listing/search?country=tw&query='+t;
    let res=await fetch(url);
    let str=await res.json();
    for (let a of str.items){
      items.push(JSON.stringify([a.url.hash,a.publishTimeUnix,a.title,a.publisher]))
    }

items=[...new Set(items)];
items=items.map(i=>JSON.parse(i));
items=items.filter(i=>i[0]!==null && i[0]!=='');
items.sort((a, b) => {return Number(b[1]) - Number(a[1])});

var html ='';
for (let h of items){
  html+=`<p class="title" onclick="${siteName}GetContent(this.id,'${h[0]}')">${h[2]}<br><span class="fs10 fw-normal">${h[3]} | ${cvt2Timezone(h[1])}</span></p><div id="${h[0]}" class="content" onclick="${siteName}GetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML=html;
loading.style.display='none';
document.getElementById('search-term').value='';
}


//    ANUE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function anueGet1stList(t){
rr=0;
anueGetList(t);
showTop('鉅亨');
}

async function anueGetList(t){
loading.style.display='block';
siteName='anue';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';
  
  if (t=='topics'){
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
          html+=`<p class="title" onclick="anueGetContent(this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="anueGetContent(this.id,'${a.newsId}')">
                <span class="time">${new Date(a.publishAt*1000)}</span><br>${decodeHTMLEntities(a.content)}<p class="text-end"><a href="https://news.cnyes.com/news/id/${a.newsId}" target="_blank">分享</a></p><br>
                </div><hr>`;
        }
      
    
  }
  list.innerHTML+=html;
  loading.style.display='none';
}
  
  function decodeHTMLEntities(str){
    var ta=document.createElement('textarea');
    ta.innerHTML = str;
    return ta.value;
  }

  async function anueGetContent(clickedId,id){
    var cEl=document.getElementById(id);
    if (cEl.style.display=='none' || cEl.style.display==''){
      loading.style.display='block';
      cEl.style.display='block';
      if (id.length<5){
        const res = await fetch(preStr+id+',{mode: "no-cors"}');
        const str=await res.text();
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, "text/html");
        var tagList=doc.querySelector('.scrolling');
        for (let c of tagList){
          cEl.innerHTML+=c.innerHTML
        }
      }
      loading.style.display='none';
    } else {
      closeContent(cEl,clickedId);
    }
  }

async function anueGet1stSearchResults(){
rr=0;
anueGetSearchResults();
showTop('鉅亨 - 搜尋：'+t);
document.getElementById('search-term').value='';
}

async function anueGetSearchResults(){
  loading.style.display='block';
  rt='s';
  rr++;
  if (rr==1){
  options.style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
  t=document.getElementById('search-term').value;
}
    var html = '';
    var url='';

      url=preStr+'https://api.cnyes.com/media/api/v1/search?q='+t+'&page='+rr;
      let res=await fetch(url);
      let str=await res.json();
      if(str.items.data!==null && str.items.data!==undefined){
      for (let a of str.items.data){
        html+=`<p class="title" onclick="anueGetSearchContent(this.id,'${a.newsId}')">${a.title.replaceAll('<mark>','').replaceAll('</mark>','')}</p><div id="${a.newsId}" class="content" onclick="anueGetSearchContent(this.id,'${a.newsId}')"><span class="time">${new Date(a.publishAt*1000)}</span><br><div id="content-${a.newsId}"></div><p class="text-end"><a href="https://news.cnyes.com/news/id/${a.newsId}" target="_blank">分享</a></p><br></div><hr>`;
      }
    }
    list.innerHTML+=html;
    loading.style.display='none';
  }

  async function anueGetSearchContent(clickedId,id){
    var cEl=document.getElementById(id);
    var contentEl=document.getElementById('content-'+id);
    if (cEl.style.display=='none' || cEl.style.display==''){
      loading.style.display='block';
      cEl.style.display='block';
      let res=await fetch(preStr+'https://news.cnyes.com/news/id/'+id);
      let str=await res.text();
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, "text/html");
      var a=doc.querySelector('#article-container');
      if(a){contentEl.innerHTML=a.outerHTML};
      loading.style.display='none';
    } else {
      closeContent(cEl,clickedId);
    }
  }

  function openUrl(url){
    window.open(url,'_blank')
  }


//    CTEE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cteeGet1stList(t){
rr=0;
cteeGetList(t);
showTop('工商');
}

async function cteeGetList(t){
loading.style.display='block';
siteName='ctee';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

url='https://www.ctee.com.tw/api/'+t+rr;console.log(url);
let res=await fetch(url);
let str=await res.json();
for (let h of str){
  items.push([h.hyperLink,h.title,h.publishDatetime])
}
var html='';
for (let h of items){
  html+=`<p class="title" onclick="cteeGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="cteeGetContent(this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])}</p></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function cteeGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    const res = await fetch('https://www.ctee.com.tw/api'+id);
    const str=await res.json();
    if (cEl.innerText.length<30){
      var html = str.contents + '<p class="text-end"><a href="https://www.ctee.com.tw' + id + '" target="_blank">分享</a></p><br>';
      cEl.innerHTML+=html;
      cEl.querySelectorAll('img').forEach(img => {img.removeAttribute('style')});
    }
    loading.style.display='none';
  } else {
    closeContent(cEl,clickedId);
  }
}

async function cteeGet1stSearchResults(){
rr=0;
cteeGetSearchResults();
showTop('工商 - 搜尋：'+t);
document.getElementById('search-term').value='';
}

async function cteeGetSearchResults(){
  loading.style.display='block';
  rt='s';
  rr++;
  var items=[];
  if (rr==1){
  document.getElementById('btn-group').style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
  t=document.getElementById('search-term').value;
}
  var html = '';
  var url='';

  url='https://www.ctee.com.tw/api/search/'+t+'?p='+rr;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.articleUrl,h.title,h.publishDate])
  }
  var html='';
  for (let h of items){
    html+=`<p class="title" onclick="cteeGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="cteeGetContent(this.id,'${h[0]}')"><p class="fs10">${h[2]}</p></div><hr>`
  }
  list.innerHTML+=html;
  loading.style.display='none';
}


//    UDN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function udnGet1stList(t){
rr=0;
udnGetList(t);
showTop('聯合');
}

async function udnGetList(t){
loading.style.display='block';
siteName='udn';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

url='https://udn.com/api/more?'+t+'&page='+(rr-1);console.log(url);
let res=await fetch(url);
let str=await res.json();
if (str.lists.length<18){var k=5}else{var k=1};
console.log(k);
for (let i=0;i<k;i++){
  var url='https://udn.com/api/more?'+t+'&page='+((rr-1)*k+i);console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.lists){
    items.push([h.titleLink.slice(0,h.titleLink.indexOf('?')),h.title])
  }
}
var html='';
for (let h of items){
  html+=`<p class="title" onclick="udnGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="udnGetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function udnGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    const res = await fetch('https://udn.com/'+id);
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var t=doc.querySelector('.authors');
    var a=doc.querySelector('.article-content');

    if (a) {
      var html = '<p class="fs10">'+t.innerText+'</p>'+a.outerHTML + '<p class="text-end"><a href="https://www.ctee.com.tw' + id + '" target="_blank">分享</a></p><br>';
      cEl.innerHTML=html;
      var ads=[...cEl.querySelectorAll('.inline-ads'),...cEl.querySelectorAll('.udn-ads')];
      for (let ad of ads){ad.remove()};
    }
    loading.style.display='none';
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){cEl.style.display='none';
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}

async function udnGet1stSearchResults(){
rr=0;
udnGetSearchResults();
showTop('聯合 - 搜尋：'+t);
document.getElementById('search-term').value='';
}

async function udnGetSearchResults(){
  loading.style.display='block';
  rt='s';
  rr++;
  var items=[];
  if (rr==1){
  document.getElementById('btn-group').style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
  t=document.getElementById('search-term').value;
}
  var html = '';
  var url='';

  url='https://udn.com/api/more?channelId=2&type=searchword&id=search:'+t+'&page='+rr;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.titleLink,h.title])
  }
  var html='';
  for (let h of items){
    html+=`<p class="title" onclick="udnGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="udnGetContent(this.id,'${h[0]}')"></div><hr>`
  }
  list.innerHTML+=html;
  loading.style.display='none';
}


//    WEALTH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function wealthGet1stList(t){
rr=0;
wealthGetList(t);
showTop('財訊');
}

async function wealthGetList(t){
loading.style.display='block';console.log(t);
siteName='wealth';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';
var p=t.split('|');var op=p[0];var t=p[1];
console.log(p);console.log(op);console.log(t);
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

var url='https://www.wealth.com.tw/graphql';
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
  html+=`<p class="title" onclick="wealthGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="wealthGetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function wealthGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';

    var payload={
      "operationName": "Article",
      "variables": {
        "id": id
      },
      "query": "query Article($id: ID!, $token: String) {\n  article(id: $id, token: $token) {\n    ...ArticleBaseFields\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  title\n  cover\n  coverText\n  content\n  releasedAt\n  authors {\n    name\n  }\n}\n"
    };

    var url='https://www.wealth.com.tw/graphql';
    var res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(payload),
      });
    var str=await res.json();
    var data=str.data.article;
    var content=JSON.parse(str.data.article.content);

    var html = '<p class="fs10">'+cvt2Timezone(data.releasedAt)+' | '+data.authors[0].name+'</p><img src="https://static.wealth.com.tw/'+data.cover+'"><p class="fs10">'+data.coverText+'</p><div id="'+id+'__"></div><p class="text-end"><a href="https://www.wealth.com.tw/articles/' + id + '" target="_blank">分享</a></p><br>';
    cEl.innerHTML=html;
    var body='';    
    for (let c of content){console.log(c);
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
    document.getElementById(id+'__').innerHTML=body;
    loading.style.display='none';
  } else {
    closeContent(cEl,clickedId);
  }
}


//    BUSINESS TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessTodayGet1stList(t){
rr=0;
businessTodayGetList(t);
showTop('今周刊');
}

async function businessTodayGetList(t){
loading.style.display='block';
siteName='businessToday';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

url=preStr+'https://www.businesstoday.com.tw/'+t+rr;console.log(url);
var res = await fetch(url);
var str=await res.text();
var parser = new DOMParser();
var doc = parser.parseFromString(str, "text/html");
var hh=doc.querySelectorAll('a.article__item');
for (let h of hh){
  items.push([h.href,h.children[1].children[1].innerText])
}

for (let h of items){
  html+=`<p class="title" onclick="businessTodayGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="businessTodayGetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function businessTodayGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    const res = await fetch(preStr+id);
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    const img=doc.querySelector('.article__mainbanner');
    const t=doc.querySelector('.context__info-item--date');
    const au=doc.querySelector('.context__info-item--author');
    const a = doc.querySelector('.Zi_ad_ar_iR');

    if (a) {
      var html = '<p class="fs10">'+t.innerText+' | '+au.innerText+'</p>'+a.outerHTML.replaceAll('<p>&nbsp;</p>','') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
      cEl.innerHTML=html;
      var ads=cEl.querySelectorAll('iframe');
      for (let ad of ads){ad.remove()};
    }
    loading.style.display='none';
  } else {
    closeContent(cEl,clickedId);
  }
}

async function businessTodayGet1stSearchResults(){
rr=0;
businessTodayGetSearchResults();
showTop('今周刊 - 搜尋：'+t);
document.getElementById('search-term').value='';
}

async function businessTodayGetSearchResults(){
  loading.style.display='block';
  rt='s';
  rr++;
  var items=[];
  if (rr==1){
  document.getElementById('btn-group').style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
  t=document.getElementById('search-term').value;
}
  var html = '';
  var url='';

url=preStr+'https://www.businesstoday.com.tw/group_search/article?count=30&keywords='+t+'&page='+rr;console.log(url);
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
  var html='';
  for (let h of items){
    html+=`<p class="title" onclick="businessTodayGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="businessTodayGetContent(this.id,'${h[0]}')"></div><hr>`
  }
    list.innerHTML+=html;
    loading.style.display='none';
}


//    BUSINESS WEEKLY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessWeeklyGet1stList(t){
rr=0;
businessWeeklyGetList(t);
showTop('商業周刊');
}

async function businessWeeklyGetList(t){
loading.style.display='block';
siteName='businessWeekly';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

if (t=='0000000000'){
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
  html+=`<p class="title" onclick="businessWeeklyGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="businessWeeklyGetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function businessWeeklyGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    const res = await fetch((preStr+id).replace('evenbeiter.github.io','www.businessweekly.com.tw'));
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    const p=doc.querySelectorAll('.Border-right')[1] ?? '';
    const t=doc.querySelector('#AppGetDate') ?? '';
    const s=doc.querySelector('.Single-summary') ?? '';  
    const a=doc.querySelector('.Single-article') ?? '';
    a.querySelectorAll('.Google-special').forEach(e => e.remove());
    if (a) {
        var html = '<p class="fs10">'+(p.textContent ?? '')+' '+(t.textContent ?? '')+'</p>'+(s.outerHTML ?? '')+(a.outerHTML ?? '')+ '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
        cEl.innerHTML=html;
    }
    loading.style.display='none';
  } else {
    closeContent(cEl,clickedId);
  }
}


//    BNEXT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function bnextGet1stList(t){
rr=0;
bnextGetList(t);
showTop('數位時代');
}

async function bnextGetList(t){
loading.style.display='block';
siteName='bnext';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

url=preStr+'https://www.bnext.com.tw/'+t+'?page='+rr;console.log(url);
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
  html+=`<p class="title" onclick="bnextGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="bnextGetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function bnextGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if(id.length>10){
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    const res = await fetch(preStr+id);
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var t=doc.querySelector('div.flex.gap-4.text-sm.items-center.flex-wrap');
    if (t==null){t=doc.querySelector('div.flex.gap-2.text-sm.items-center')}
    const a = doc.querySelector('[data-cat=article]');

    if (a) {
      var html = '<p class="fs10">'+t.innerText+a.outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
      cEl.innerHTML=html;
      var ads=cEl.querySelector('#pumpkin_159');
      if(ads){ads.remove()};
    }
    loading.style.display='none';
  } else {
    closeContent(cEl,clickedId);
  }
  } else {
     var items=[];
      var url=preStr+'https://www.bnext.com.tw/topic/view/'+id;
      var res = await fetch(url);
      var str=await res.text();
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, "text/html");
      
      var hh=doc.querySelectorAll('a.absolute.inset-0');
      for (let h of hh){console.log(h.parentElement.children[2].children[1]);
        if(h.parentElement.children[2].children[1]!==undefined){items.push([h.href,h.parentElement.children[2].children[1].innerText.replaceAll('\n','')])}
      }
      console.log(items);
      var html='';
      for (let h of items){
        html+=`<p class="title" onclick="bnextGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="bnextetContent(this.id,'${h[0]}')"></div><hr>`
      }
      cEl.innerHTML=html;
      cEl.style.display='block';
  }
}

  
//    TECH NEWS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function technewsGet1stList(t){
rr=0;
technewsGetList(t);
showTop('科技新報');
}

async function technewsGetList(t){
loading.style.display='block';
siteName='technews';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';
  
url=preStr+'https://cdn.'+t+'page/'+rr;console.log(url);
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
  html+=`<p class="title" onclick="technewsGetContent(this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="technewsGetContent(this.id,'${h[0]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}

async function technewsGetContent(clickedId,id){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    
    const res = await fetch(preStr+id.replace('https://','https://cdn.').replace('finance.',''));
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");

    if (doc.querySelector('.copy')!==null){
      const t=doc.querySelector('.date');
      const z = doc.querySelector('.copy').outerHTML;
    } else {
      const t=doc.querySelectorAll('span.body')[1];
      const a = doc.querySelector('.bigg');
      const b = doc.querySelector('.indent');
      const z=a.outerHTML+b.outerHTML;
    }
    
    var html = '<p class="fs10">'+t.innerText+'</p>'+z+ '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
    cEl.innerHTML=html;
    var ads=cEl.querySelector('#inside_AD');
    ads.remove();
    ads=cEl.querySelectorAll('.coffee-btn-wrapper');
    for (let ad of ads){ad.remove()};
    ads=cEl.querySelector('#bmc-tn-modal');
    ads.remove();
    ads=cEl.querySelectorAll('.googlenews_Content');
    for (let ad of ads){ad.remove()};
    
    loading.style.display='none';
  } else {
    closeContent(cEl,clickedId);
  }
}


//    MSN VIDEO FROM CHANNEL
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function msnChannelVideoGet1stList(t,channel){
rr=0;
msnChannelVideoGetList(t);
showTop(channel);
}

async function msnChannelVideoGetList(t){
loading.style.display='block';
siteName='msnChannelVideo';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

for (var i=0;i<2;i++){
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
  html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}


//    MSN VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function msnVideoGet1stList(t){
rr=0;
msnVideoGetList(t);
var cat=t.split(' ')[0];
cat=cat.charAt(0).toUpperCase() + cat.slice(1);
showTop('MSN '+cat);
}

async function msnVideoGetList(t){
loading.style.display='block';
siteName='msnVideo';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';
  
url='https://assets.msn.com/service/MSN/Feed/me?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&cm=en-us&contentType=video&query='+t+'&queryType=myfeed&$top=50&$skip='+(rr-1)*50;
let res=await fetch(url);
let str=await res.json();
for (let h of str.value[0].subCards){
  items.push([h.sourceId,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url,h.provider.name]);
}
items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

for (let h of items){
  html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${h[7]}<br>${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
}


//    WSJ VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function wsjVideoGet1stList(t){
rr=0;
wsjVideoGetList(t);
showTop('WSJ Video');
}

async function wsjVideoGetList(t){
loading.style.display='block';
siteName='wsjVideo';rr++;rt=t;
if (rr==1){newNews()};
var items=[];var url='';var html='';

url='https://video-api.shdsvc.dowjones.io/api/legacy/find-all-videos?lang=en-us&count=50'+t+'&page='+(rr-1);
let res=await fetch(url);
let str=await res.json();
for (let h of str.items){
  var thumbnail=h.thumbnailList[0].url;
  items.push([h.id.replace('{','').replace('}',''),h.name,h.formattedCreationDate,h.duration,thumbnail.slice(0,thumbnail.indexOf('?')),h.linkURL,h.hls])
}
items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

var html='';
for (let h of items){
  html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
}
list.innerHTML+=html;
loading.style.display='none';
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


//    GLOBAL FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function newNews(){
  options.style.display='none';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  list.innerHTML='';
}

function closeContent(cEl,clickedId){
  if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){cEl.style.display='none';
    cEl.previousElementSibling.previousElementSibling.scrollIntoView();
  }
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
    return date.toLocaleString();
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
      if (t!==''){a.outerHTML+='<p class="fs10">'+t+'</p>'};
    }
  }
}

function cnTest(str) {
  const chineseCharRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;
  return chineseCharRegex.test(str);
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
        if (typeof window[`${siteName}GetList`] === "function") {
          if (siteName!=='msn'){
            window[`${siteName}GetList`](rt)
          } else {
            window[`${siteName}GetList`](rt,coun)
          }
        }
      }else{
        if (typeof window[`${siteName}GetSearchResults`] === "function") {window[`${siteName}GetSearchResults`]()}
      }
    }
  }, 1000);
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(reg) {
      console.log('Service Worker registered:', reg);
    })
    .catch(function(err) {
      console.error('Service Worker registration failed:', err);
    });
}
