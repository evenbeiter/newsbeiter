//    FOR NEWSBEITER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const faq=[['wscn','華爾街見聞','私募'],['udnMoney','經濟日報','日股'],['ctee','工商','美債']];
const allSites1=[['msnTW','MSN 台灣'],['ctee','工商'],['udn','聯合'],['wealth','財訊'],['dw','德國之聲'],['wscn','華爾街見聞']];
//,['wiki','維基百科']];
const allSites2=[['lineToday','LINE'],['cnyes','鉅亨'],['reuters','路透'],['udnMoney','經濟日報'],['businessToday','今周刊'],['businessWeekly','商周'],['bbc','BBC'],['bnext','數位時代'],['technews','科技新報'],['jin','金十'],['msnUS','MSN'],['peInsights','PEI'],['apollo','Apollo']];
const videoSites={'msn':[['WATCH','MSN'],['money video','Money'],['lifestyle video','Lifestyle'],['entertainment video','Entertainment']],'msnChannel':[['vid-4k3nj4ageev4xbh5ka3xq2xv0au7qyya0p2bt0w8tvx9u0x895rs','CNBC'],['vid-9sg538d8084xdac9cqur3c8fr7gyh8mehuf2f55ssbmcapc6hrha', 'CBS'],['vid-vvpqk5ypg9f3g4ypq6ahsrf0tu0bu56i7vh63n3tseid8uk4mkvs', 'Washington Post']],'others':[['wsjVideo','WSJ']]};
const msnVideo=[['WATCH','MSN'],['money video','Money'],['lifestyle video','Lifestyle'],['entertainment video','Entertainment']];
const msnChannelVideo=[['vid-4k3nj4ageev4xbh5ka3xq2xv0au7qyya0p2bt0w8tvx9u0x895rs','CNBC'],['vid-9sg538d8084xdac9cqur3c8fr7gyh8mehuf2f55ssbmcapc6hrha', 'CBS'],['vid-vvpqk5ypg9f3g4ypq6ahsrf0tu0bu56i7vh63n3tseid8uk4mkvs', 'Washington Post']];
const otherVideo=[['wsjVideo','WSJ']];
const uLi=['ps','it','new','?','ap','sbe','rl','.','nd','h','fet','tt','on','er','re','=','co','m','/','i',':','ch','u'];
const searchSites=[['lineToday','LINE'],['cnyes','鉅亨'],['wscn','華爾街見聞'],['ctee','工商'],['udnMoney','經濟日報'],['businessToday','今周刊']]; 
const iOd=[9,11,0,20,18,18,2,5,1,13,7,12,14,8,13,7,16,17,18,4,19,18,10,21,3,22,6,15];
const msnTW=[['Y_321db332-7d5a-4672-96b5-2d342ca554fb', '焦點'],['Y_ab001b84-62eb-4605-96c4-12221f946e94', '新聞'],['Y_5993abc4-f49c-49ce-bed0-a5b4b61dd9f6', '財經'],['Y_a484713e-0cec-4003-8fac-a629da5bcf3d', '兩岸國際'],['Y_a0268fb1-402c-48ec-8946-c31ddd7751da', '即時新聞'],['Y_b4ddc302-8189-44e9-b136-9682cc7e3746', '即時財經'],['Y_fef3ac37-3667-4a34-92c0-3e373c55d307', '理財'],['Y_aced43e9-95ab-4e5c-a0c5-d035aeb2133b', '科技'],['Y_da100b0d-55ac-49d4-beae-84ffdcbf3da9', '生活'],['Y_e2c684a5-a8fe-4879-91b9-8d5dc50b5488', '居家設計'],['Y_b77e5da5-aea6-4ee3-8890-91990040926a', '健康'],['Y_57552325-541f-4702-b61e-f307056e39b1', '旅遊'],['Y_95fdd1de-0e14-47b2-a213-6edf24542702', '娛樂'],['Y_f3ddd032-c606-4c7f-b11f-cb16a3596ae2', '台灣'],['Y_7a50bf00-ca7e-4699-ac07-b31e1c3ae01f', '房地產'],['Y_fb97b38c-1cf6-445a-b579-f7b9b35f6590', '職場求職'],['Y_54b11fc3-6cd6-45d6-a669-1c0168275125', '職場焦點'],
  ['vid-y9reuyeu7hkimpnrdtqpruibsfa4wd4bxxxip6dasjgrby33vd0a', '中央社'],['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', '彭博'],['vid-hvwu6j8yi9b0huc8bkawy5qhvdf3scbniqc8scbbbp6xvj6ftrda', '商周'],['vid-rh9wrnpgtjfx7dbmc38h4xkf6j00me2e9amvgkeqtmanw40mw36s', '天下'],['vid-xj7qtb3g69dr6auu9p8ueq57gnarhrxd5ej05gtswdmnwi02xxia', '德國之聲'],['vid-jwkt4swyp9iyjy43f5cbhi02ttt8enb5t6yms0ppdx869vubmasa', '東森'],['vid-nvte086i8a39iuemvaxwsicfmc2j6tvixtcu9uxbfwqrgaw857rs', 'TVBS新聞'],['vid-n0sumxg56bwh3bguneg5ynixqc3qyiacjst3idsyus5rkrjs3pts', '中時'],['vid-e8mmyirx39xyms90cigfcgdn9p7vdy6u0xe243c7tdm2hgwiypas', '遠見'],['vid-9eqa8gpyscx8v293p3hsyxipqngqd3j7wexky6y09d7eye90m9ya', '風傳媒'],['vid-ctia0d3wuyutasjyriw3uvt8vaa0u4pmwkv0fqpgiciaf5r54m5a', '鏡週刊'],['vid-caqxm27w0p49tmy0ar5urvpar0ccx2b0xdaatyw2nxfqkgab7bds', '早安健康'],['vid-pui6vcpvju95tisme52646g2d79dvjt7akm8cg8ahmrbi8u7a2xa', '康健']];
const msnUS=[['Y_46b78bbb-31c4-4fc5-8a4a-858072348d06','News'],['Y_d1cad308-780e-4a75-ba34-6460811ccfe3','Tech'],['Y_99096e96-6d4f-401c-832b-461e08143a5a','Lifestyle'],
  ['Y_69fcfcf0-f686-4b19-9901-0a4ce35b823d', 'Business'],['Y_ce1fe19d-4d60-4312-b4d6-8cba9aa76413', 'Stocks'],['Y_8c7b0706-a0d1-49f1-8603-5c33a3dadd73', 'Economics'],['Y_d6433e0a-2be3-4106-839c-5a40a5375514', 'AI'],['Y_dc6dc645-d63a-4c97-8812-3ecdf27695b8', 'SMID'],['Y_f457eae0-84c0-4d35-b1dc-8435b7b6c140', 'Generative AI'],
  ['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', 'Bloomberg'],['vid-mpxsw8rp392wedf25t8tfhk7r3b364q8dj75ks43nimmf06qg2es', 'Reuters'],['vid-r0r09b3muc6xnf5tv2est5f5ukjbkk67i9svrhyu3jy2pskkbems', 'MarketWatch'],['vid-y572a3ryyddhuiujs0xe2j4m4b6c3n2fp5hnux4jpsdand8h09ys', 'WSJ'],['vid-bpwfbvkfudq92wksju4upi9jrx2pn0ax46vrw0vkst93vpwr5pva', 'CNN'],['vid-v3atkpesfykfx7084fbu0cpbtx0jne99kctychfsn9ry96wsmbba', 'BBC'],['vid-r4du2vx0u9h0kr9tx7iyx55w7sneq7e6tg934epuehq3grvn05aa', 'Fortune'],['vid-n3h9ssyxg550pryvt4287xynyckhu84k5vc6n3tdqwsvtvmn2p0s', 'USA TODAY'],['vid-27xbtchrc5gpxe8uhvw9f24q2kqi9f0ppk7ptb8xw9v9sscheg6s', 'Motley Fool'],['vid-i3g0qyhrtn28biukcpyvsrmhccmv8k8ugtmtr6kqhb9dkf6ccrua', 'FOX News'],['vid-rvn4g4busxh65p6kgfvhye9atw9n8ebd46ut057ypkbm5n6xa5ts', 'BuzzFeed']];
const lineToday=[['top','焦點'],['finance','理財'],['100140','鉅亨'],['102394|103101','經濟工商'],['103214|100267','M平方'],['100295','今周刊'],['101131','CMoney'],['100422|100421|100423','商周'],['101170','路透社'],['104453|101006','財訊'],['100150|103088','鏡週刊'],['101427','CTWANT'],['100237','東森'],['100167','TVBS'],['100004|101886','風傳媒'],['100275|101201','關鍵評論網'],['global','國際'],['100003','中央社'],['TOPIC-USelection|2024election','川普2.0'],['worldtrend','世界趨勢'],['101074','CNN'],['tech','科技'],['AI','AI'],['100317','數位時代'],['100341','科技新報'],['101196','科技報橘'],['104322','優分析'],['104264','產業定錨筆記'],['100198','經理人月刊'],['101499','德國之聲'],['100462','換日線'],['100568|100158','天下雜誌'],['101031','地球圖輯隊'],['101934|100394|103227','閱讀'],['domestic','國內'],['TOPIC-BingeWatching','追劇'],['TOPIC-KoreaStar','韓星最前線'],['health','健康'],['life','生活'],['cleanandstorage','生活智慧王'],['100746|TOPIC-DIY','裝潢'],['fun','鄉民'],['entertainment','娛樂'],['travel','旅遊'],['TOPIC-TravelJapan','日本旅遊情報']];
const cnyes=[['headline','頭條'],['tw_stock','台股'],['wd_stock','美股'],['tech','科技'],['fund','基金'],['tw_money','理財'],['forex','外匯'],['future','期貨'],['mag','雜誌'],['topics','專題'],['celebrity_area','新視界'],['bc','區塊鏈'],['cn_stock','陸港股'],['cnyeshouse','房產']];
const wscn=[['global','最新'],['shares','股市'],['bonds','債市'],['commodities','商品'],['forex','外匯'],['tmt','科技'],['ai','AI']];
const jin=[['','最新'],['topic/402/','精選圖表'],['topic/416','宏觀圖表'],['topic/415/','股市'],['topic/72/','金融大鱷'],['topic/20/','FED'],['topic/47/','ECB'],['topic/51/','BOJ'],['topic/31/','黃金'],['topic/388/','原油'],['topic/418/','川普'],['topic/373/','俄烏'],['topic/356/','中東'],['topic/352/','半導體']];
const reuters=[['market:bond,crypto,economic,etf,forex,futures,index,stock','最新'],['market:forex','外匯'],['market:bond','債市'],['market:stock','股市'],['market:index','指數'],['market:futures','期貨'],['market:economic','經濟'],['market:crypto','加密貨幣'],['market:etf','ETF'],['area:WLD','全球'],['area:AME','美國'],['area:EUR','歐洲'],['area:ASI','亞洲'],['area:OCN','大洋洲'],['area:AFR','非洲']];
const ctee=[['livenews/ctee/','即時'],['category/finance/','要聞'],['category/stock/','證券'],['category/finance/','金融'],['category/wealth/','理財'],['category/industry/','產業'],['category/house/','房市'],['category/world/','國際'],['category/view/','觀點'],['category/bookstore/','書房'],['category/lohas/','樂活']];
const udnMoney=[['0','即時'],['10846','要聞'],['5588','國際'],['5590','證券'],['12017','金融'],['11111','期貨'],['5592','理財'],['5591','產業'],['5589','兩岸'],['5593','房市'],['5595','專欄'],['5596','品味'],['122327','OFF學']];
const udn=[['id=&channelId=1&cate_id=0&type=breaknews','最新'],['channelId=2&type=cate_latest_news&cate_id=6638','要聞'],['channelId=2&type=cate_latest_news&cate_id=6645','股市'],['channelId=2&type=cate_latest_news&cate_id=7225','全球'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=124373','美國關稅'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=6811','全球財經'],['channelId=2&type=cate_latest_news&cate_id=6644','產經'],['channelId=1015&type=cate_latest_news&cate_id=0','雜誌'],['channelId=2&type=cate_latest_news&cate_id=6649','生活']];
const wealth=[["Articles|","最新"],["Articles|bd088d2c-f76a-4187-8673-1ae412cd6356","謝金河"],["Category|95f4329c-bcf4-47c4-b133-879bb862b479","財經茶水間"],["Category|2c6379e9-7527-442b-880a-bb9552689e06","國際"],["Category|87259978-8ff6-465c-b552-c33f69f6432e","投資理財"],["Category|450cbbed-c577-4d8e-a689-8e90b4f8bac7","財經指標"],["Category|d1354fa3-82bf-42e6-84ad-9e36d7615892","金融圈"],["Category|79c03f3f-d546-4551-a05f-c6d38e5579ca","科技"],["Category|3187845b-57fb-4336-bc4b-4f30cbeb642c","企業"],["Category|dd2b5859-96aa-42bb-b5cc-08e6c7c8728e","生醫"],["Category|800e2b3c-0352-4fba-aea2-01fff6b16015","地產"],["Category|352be1d4-7ce8-42b8-9a84-0f491f7927ea","政經"],["Category|de408237-667e-4594-abd8-8106ba567324","健康醫療"],["Category|2eb0f6be-d8bb-447d-b067-e17601f44056","美食旅遊"],["Category|2492cf34-afd8-40ee-95de-6f340988ab22","品味人生"]];
const businessToday=[['news/','最新'],['catalog/183007/list/page/','投資理財'],['catalog/183020/list/page/','保險稅制'],['catalog/183014/list/page/','產業時事'],['catalog/183028/list/page/','職場生活']];
const businessWeekly=[['0000000000','最新'],['0000000316','國際'],['0000000319','財經'],['0000000326','管理'],['0000000312','焦點'],['0000000342','CEO學院']];
var preStr=''; if (window.location.href.indexOf('evenbeiter.github.io')!==-1){preStr=sCC(uLi,iOd)};
const bbc=[['','首頁'],['topics/c83plve5vmjt','國際'],['topics/cd6qem06z92t','台灣'],['topics/cpydz21p2zmt','經濟'],['topics/cq8nqywy37yt','財經'],['topics/cgqny5mmrezt','股市'],['topics/cn05jy5nv81t','川普關稅'],['topics/cgvl47l38e1t','影片']];
const dw=[['經濟/s-1682','經濟'],['政治/s-1681','政治'],['科技創新/s-1686','科技創新'],['文化/s-1683','文化']];
const bnext=[['articles','新聞'],['ranking','熱門'],['topics','專題'],['tags/AI','AI'],['categories/semiconductor','半導體'],['categories/AI','AI與大數據'],['categories/5g','5G通訊'],['categories/car','電動車/交通科技'],['categories/manufacture','智慧製造'],['categories/media','影音新媒體'],['categories/fintech','金融科技'],['categories/digitalskill','職場工作術']];
const technews=[['technews.tw/','最新'],['technews.tw/category/semiconductor/','半導體'],['technews.tw/category/component/','零組件'],['finance.technews.tw/','財經'],['technews.tw/category/internet/','網路'],['technews.tw/category/cutting-edge/','尖端科技'],['technews.tw/topics/','系列專題'],['technews.tw/category/natural-science/環境科學/','環境科學'],['technews.tw/category/能源科技/','能源科技']];
const peInsights=[['','Latest']];
const apollo=[['','Latest']];
const wiki=[['','Did You Know...']];


//    FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cnyeshao=[['W_1','最新'],['W_2','推薦'],['W_8','美股'],['W_40','台股'],['W_14','國際'],['W_62','宏觀'],['W_11','外匯'],['W_13','商品期貨'],['W_40','科技'],['30','美股艾大叔'],['361680','華爾街脈動'],['444','RexAA'],['443','小小天下'],['29','北風窗'],['113','老馬記']];
const yahooTW=[['cff206bf-9612-4903-9863-a9ad12319b12','焦點'],['b11aeba6-28c8-47bd-b0d8-96b89a20d817','即時'],['a8a208bf-23e1-4950-8aba-8a8d1c0c2da5','財經'],['f10835b8-98fe-48b4-a506-023937ab0a4b','Yahoo 特派'],['4e1fb4b1-9bf1-4d00-81a1-64001c935310','股匯市'],['cdbe8dd0-22d4-11ea-bbfb-7e2fb6871bd3','台股盤勢'],['9f0e62c0-22d5-11ea-bede-345eb8f1edf4','國際財經'],['e9628320-22d4-11ea-9ef0-2fabb53ab0e9','基金動態'],['381351b0-6d8c-11e9-bb53-0fc098ecd9a1','雜誌'],['ad05d340-22d5-11ea-9db1-fe39a6582c47','研究報告'],['70394000-22d5-11ea-bef4-114a94a8f820','小資理財'],['875b56b0-22d5-11ea-95cf-d43d8a1a8360','專家專欄'],['ebb0818f-c3e6-4c43-ab06-7fabe34c02f5','產業'],['65c6fa3b-b4c8-42e7-afed-c468a927d71f','國際'],['9336b431-7f5d-4dba-b06d-0dce56fb3f8f','娛樂'],['47409191-3f19-48a5-b99a-b7a19c5152f1','Yahoo'],['1af9d85f-9f45-4f07-a290-d6116fcd7e94','BBC'],['fbe20d0c-5704-4a52-a6dd-862b105734a8','中時'],['e9162370-a63f-41e1-b6ab-a2ca4bc88aa3','三立'],['841ae727-aaf4-4d96-89e8-6023380a5f0d','TVBS'],['d1c5195f-8c50-441f-8d4f-192505ff481a','公視'],['616c3db4-1af4-4d9a-90c2-e8d5b61fdca8','中天'],['24a219a6-e124-4d54-85c0-da53c42dad3f','聯合'],['1eeeee88-4e98-49f5-9283-d95b59faa8d0','東森'],['92e62bbd-f6b0-4ff2-ae60-da5e92602b8b','CWANT'],['15344921-beff-4849-8c1e-799f00eb6104','壹蘋'],['15fd91e7-7935-439f-a2a9-caea96a5c3db','鏡週刊'],['81870ef4-46f4-4ed2-a2b3-d436b9b85c06','NOWNews'],['80c8c637-4f0d-4df0-8c2e-d66523148f6d','台視'],['"75f58300-9102-4339-a493-1e2f3e31313c"','民視'],['f0caaf82-30b3-4e6c-a2eb-aa9577dbe7d4','華視'],['483b66c7-0238-411e-be93-53e1478272d3','新頭殻'],['71b213f3-88c4-41fe-b9f0-a59e9045e2d0','風傳媒'],['275994b0-0e8a-11eb-9ffd-16766ba98f36','BBC中文'],['bd00c410-4b30-4245-abf8-d23656709efa__','Latest'],['db1d46e0-a969-11e9-bff5-6dfdb80d79cf__','Stock Market News'],['04d9350a-bbd1-4787-95be-740cc5ee8852__','Earnings'],['0897608a-7d79-47df-9377-b07bd22b0fde__','Yahoo Finance'],['ed5c8883-d951-4e70-87b3-9f8f375fb410__','Premium News'],['dffbd430-02a2-11e7-bcfc-437e9432ca73__','Tech'],['b1f0c990-db7a-11e7-a937-0d92c86f9da1__','Crypto']];
const cna=[['aall','即時'],['aopl','國際'],['aie','產經'],['asc','證券'],['ait','科技'],['ahel','生活'],['amov','娛樂']];
const yahooVideo=[['00390a14-17cc-49d2-9e32-79365335f0ca','Latest'],['3058c878-ce30-48f5-93ed-567dfcf3e07b','Editor\'s Picks'],['2d4617cb-4448-4bbe-be69-507820ee12be','Investing & Market Insights'],['9657ccb4-0423-4420-94de-024c54839a21','Trending Stocks'],['e799ec4c-02d3-477d-ba05-e8bb5c88bfc8','Tech News'],['aa2ec37b-b63e-4154-b9bd-18e0b14bb1e7','Asking for a Trend'],['d27bc0dd-04f8-4a61-8b08-9c7c6cc3169f','Catalysts'],['9a665a61-55bd-43bc-8657-6eb984ef9a37','Market Domination'],['0c9d1849-74a9-459f-9131-a9cee22acc8e','Morning Brief'],['739eb51e-bc2e-4bd2-99a8-6793977028ed','Market Domination Overtime']];
const isbl=[['','Latest']];
const invtCom=[['rates-bonds/u.s.-10-year-bond-yield-news/','債市'],['news/forex-news/','匯市'],['news/latest-news/','最新'],['news/economy/','財經'],['news/economic-indicators/','經濟數據'],['news/commodities-news/','原物料'],['news/cryptocurrency-news/','加密貨幣'],['indices/japan-ni225-news/','日經'],['indices/topix-news/','東證'],['analysis/market-overview/','市場評論'],['analysis/editors-picks/','精選評論']];
const marie=[['160/Julia','Julia']];
const bbgVideo=[['markets;bbiz;technology;cryptocurrencies;pursuits','Latest'],['markets','Markets'],['bbiz','Business'],['technology','Technology'],['cryptocurrencies','Crypto'],['pursuits','Pursuits']];

const faqB=[['yahooTW','Yahoo','私募'],['yahooTW','Yahoo','日股'],['yahooTW','Yahoo','美債']];
const searchSitesB=[['yahooTW','奇摩新聞'],['lineToday','LINE']]; 
const allSitesB=[['lineToday','LINE',lineToday,'today.line.me','https://today.line.me/tw/v3/tab'],['yahooTW','奇摩新聞',yahooTW,'tw.news.yahoo.com|tw.stock.yahoo.com','https://tw.news.yahoo.com/'],['cna','中央社',cna,'cna.com.tw','https://www.cna.com.tw/'],['yahooVideo','Yahoo Video',yahooVideo,'https://finance.yahoo.com','https://finance.yahoo.com/'],['cnyeshao','鉅亨號',cnyeshao,'hao.cnyes.com','https://hao.cnyes.com/ch/361680'],['isbl','ISABELNET',isbl,'isabelnet.com','https://www.isabelnet.com/blog/'],['invtCom','Investing.com',invtCom,'investing.com','https://hk.investing.com/'],['marie','美麗佳人',marie,'marieclaire.com','https://www.marieclaire.com.tw/']];
const otherVideoB=[['bbgVideo','Bloomberg Video',bbgVideo,'bloomberg.com','https://www.bloomberg.com/video-v2']];


//    GLOBAL VARIABLES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const formHeader=`<button class="btn sepia me-1 mb-1" type="button" onclick="openMediaList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><hr style="margin-right:3rem">`;
var tabs=[];
var items=[];var url='';var html='';
var siteNameVar='';
var docTitle='';
var topName='';
var coun='';
var t='';
var uuids='';
var cursor='';
var payload={};
var rt='';
var rr=0;


//    RENDER HTML FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (window.location.href.indexOf('evenbeiter.github.io')==-1){

//var siteNameVar='';var tabs;var docTitle='';
for (let l of [...allSitesB,...otherVideoB]) {
  var ss=l[3].split('|');
  for (let s of ss){if (window.location.href.indexOf(s) !== -1) {siteNameVar=l[0];docTitle=l[1];tabs=l[2];break}}};
  
if (siteNameVar=='isabelnet'){
  function R(a) {
    ona = "on" + a;
    if (window.addEventListener) window.addEventListener(a, function(e) {
        for (var n = e.originalTarget; n; n = n.parentNode) n[ona] = null;
    }, true);
    window[ona] = null;
    document[ona] = null;
    document.onkeydown = null;
    if (document.body) document.body[ona] = null;
    document.body.oncopy = null;
  }
  R("contextmenu");R("click");R("mousedown");R("mouseup");R("selectstart");
}
  
var bstp='';
if (siteNameVar=='yahooVideo'){bstp=`
  iframe[id^="video"]{width:100%;aspect-ratio:1.78;height:auto;margin-top:0.5rem;border:none;border-radius:0.375rem}
  hr{margin: 1rem 0;color: inherit;border: 0;border-top: 1px solid;opacity: 0.25;}
  .pb-2{padding-bottom:0.5rem !important;}
  .pt-2{padding-top:0.5rem !important;}
  .pt-3{padding-top:0.75rem !important;}
  .py-2{padding-top:0.5rem !important;padding-bottom:0.5rem !important;}
  .p-2{padding:0.5rem !important}
  .m-2{margin:0.5rem !important}
  .me-1{margin-right:0.25rem !important}
  .mb-1{margin-bottom:0.25rem !important}
  .mb-3{margin-bottom:0.75rem !important}
  .mx-3{margin-left:0.75rem !important;margin-right:0.75rem !important}
  .fw-bold{font-weight:700 !important}
  .sticky-top {position: sticky;top: 0;z-index: 1020;}
  .position-fixed{position: fixed !important;} .top-0{top: 0 !important;} .end-0{right: 0 !important;}
  .opacity-25 {opacity: 0.25 !important;}
  .btn {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: var(--bs-body-color);
    --bs-btn-bg: transparent;
    --bs-btn-border-width: var(--bs-border-width);
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.375rem;
    --bs-btn-hover-border-color: transparent;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .btn-light {
    --bs-btn-color: #000;
    --bs-btn-bg: #f8f9fa;
    --bs-btn-border-color: #f8f9fa;
  }
  .text-end{text-align:right}
`} else {bstp=''};
  
document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<title>${docTitle}</title>
<style>
  body {background-color:#F4ECD8;color:#3B2D20;font-size:1.5rem;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  #container{min-height:100vh;margin:auto}
  .content{display:none;cursor:pointer}
  ${bstp}
  iframe{width:100% !important;height:auto !important}
  video{width:100% !important;height:auto !important;border-radius:0.375rem}
  .sepia{background-color:#F4ECD8;color:#3B2D20}
  .sepia-contrast{background-color:#3B2D20;color:#F4ECD8}
  h1,h2,h3,h4,h5,h6,.title{font-size:1.5rem;color:#3B2D20 !important;font-weight:bold}
  a,figcaption{word-wrap:break-word;white-space:normal;overflow-wrap:break-word;word-break:break-word}
  h1 a {color: navy; font-weight: bold; text-decoration:none;cursor:pointer}
  .en-us{font-size:1.2rem}
  .fs10, .time, time, figcaption, table,div.inf,strong#article-byline.bbc-m04vo2,.bbc-1rvtlej,.bbc-1276odk {font-size:1rem}
  img{display:block !important;margin:auto;width:100%;height:auto;border-radius:0.375rem}
  .caas-header,.caas-attr,.caas-readmore,.SubscriptionInner.mySubscriptionInner,.gmailNews, .raise_block,div[data-e2e^="youtube-embed"], .div-gpt-ad-cnyes_news_article_middle_2,.bbc-geybui,.bbc-1151pbn.ebmt73l0,img.logo-PsAlMQQF.xxxsmall-PsAlMQQF.wrapper-TJ9ObuLF.skeleton-PsAlMQQF,img.logo-ocURKVwI.xxxsmall-ocURKVwI.skeleton-ocURKVwI.wrapper-TJ9ObuLF,.edn-ads--inlineAds,.inline-ads,.udn-ads,#sf_div-gpt-ad-1599104924568-0-1,.Google-special,#pumpkin_159,#inside_AD,.coffee-btn-wrapper,#bmc-tn-modal,.googlenews_Content,.reflist,.reflist.columns.references-column-width,#references-NoteFoot,.mw-editsection{display:none}
  .mw-heading1, .mw-heading2 {padding-top:3rem;color:#FF4D00;border-bottom:1px solid;border-color:#a2a9b1}
  .infobox.geography.vcard, .wikitable{max-width:100%!important}
  .bbc-2fjy3x{position:relative;height:0;width:5rem;height:5rem;} .bbc-1rvtlej{list-style:none;padding:0;margin:0;}
  #loading{position:fixed !important;width:100% !important;top:0% !important;left:0% !important}
  #loading-gif{position:absolute !important;top:50% !important;left:50% !important;transform: translate(-50%, -50%);}
  @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1023px) 
    and (-webkit-min-device-pixel-ratio: 2) {
    body{font-size:2rem} h1,h2,h3,h4,h5,h6,.title{font-size:2rem} .en-us{font-size:1.6rem} .fs10, .time, figcaption, .btn{font-size:1.3rem} #list{padding:2rem} svg.bi{height:2.8rem !important;width:2.8rem !important}
  }
  @media only screen 
    and (min-device-width: 1024px) 
    and (max-device-width: 1365px)
    and (-webkit-min-device-pixel-ratio: 2) {
    body{font-size:2rem} h1,h2,h3,h4,h5,h6,.title{font-size:2rem} .en-us{font-size:1.6rem} .fs10, .time, figcaption, .btn{font-size:1.3rem} #list{padding:2rem} svg.bi{height:2.8rem !important;width:2.8rem !important}
  }
  @media (min-width:1200px){
    @font-face{font-family:"Microsoft JhengHei" !important;src:local("Microsoft JhengHei") !important;unicode-range:U+4E00-9FFF !important}
    body {background-color:#E5E4E2;color:#3B3B3B;font-size:1.2rem;font-family:arial,'Microsoft JhengHei', sans-serif !important}
    #container{min-height:100vh;max-width:600px;margin:auto;background-color:#F8F8F8}
    .sepia{background-color:#F8F8F8;color:#3B3B3B}
    .sepia-contrast{background-color:#3B3B3B;color:#F8F8F8}
    #list, .btn {font-weight:bold}
    h1,h2,h3,h4,h5,h6,.title{font-size:1.2rem;color:#3B3B3B !important;font-weight:bold}
    #loading{width:5rem;height:5rem}
  }
</style>
</head>
<body style="margin:0">
<div id="container">
<div class="sticky-top position-fixed m-2 top-0 end-0" style="z-index:1030;padding-top:3rem">
  <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25" onclick="openOptions()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"></path>
    </svg>
  </button>
</div>
<div id="top" class="fs10 p-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="display:none"></div>
  <form id="btn-group" class="p-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="max-height:100vh">
    <div id="btn">
      <button class="btn sepia me-1 mb-1" type="button" onclick="openChannelList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><button class="btn sepia me-1 mb-1" type="button" onclick="openUrlList()">網站列表</button>
      <hr style="margin-right:3rem">
      <div id="channelList"></div>
      <div id="searchList" style="display:none"></div>
      <div id="urlList" style="display:none"></div>
    </div>
  </form>
<div id="list" class="mx-3 pt-3"></div>
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
</div>
</body></html>
`;
}


//    DEFINE NAME OF ELEMENTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var options=document.getElementById('btn-group');
var btn=document.getElementById('btn');
if(document.getElementById('channelList')){var channelList=document.getElementById('channelList')};
if(document.getElementById('searchList')){var searchList=document.getElementById('searchList')};
if(document.getElementById('searchList')){var urlList=document.getElementById('urlList')};
var list=document.getElementById('list');
var topdiv=document.getElementById('top');
var loading=document.getElementById('loading');
//const s2t = OpenCC.Converter({ from: 'cn', to: 'tw' });


//    CREATE CHANNEL, SEARCH & URL LIST FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (window.location.href.indexOf('evenbeiter.github.io')==-1){
  if (siteNameVar!==''){
    createChannelList(tabs,siteNameVar,'【'+docTitle+'】'+tabs[0][1])
    createSearchListDiv(faqB,searchSitesB);
    createUrlListDiv4Bml([allSitesB,otherVideoB]);
  } else {
    chennelList.innerHTML='';
    searchList.innerHTML='';
    createUrlListDiv4Bml([allSitesB,otherVideoB]);
    openUrlList();
  }
} else {

  
//    CREATE URL LIST & SEARCH LIST FOR NEWSBEITER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
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
}
