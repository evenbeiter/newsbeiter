//    FOR NEWSBEITER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var onEVBT=true; if (window.location.href.indexOf('evenbeiter.github.io')==-1){onEVBT=false;}

const apollo=[['','Latest']];
const bbc=[['','首頁'],['topics/c83plve5vmjt','國際'],['topics/cd6qem06z92t','台灣'],['topics/cpydz21p2zmt','經濟'],['topics/cq8nqywy37yt','財經'],['topics/cgqny5mmrezt','股市'],['topics/cn05jy5nv81t','川普關稅'],['topics/cgvl47l38e1t','影片']];
const bnext=[['articles','新聞'],['ranking','熱門'],['topics','專題'],['tags/AI','AI'],['categories/semiconductor','半導體'],['categories/AI','AI與大數據'],['categories/5g','5G通訊'],['categories/car','電動車/交通科技'],['categories/manufacture','智慧製造'],['categories/media','影音新媒體'],['categories/fintech','金融科技'],['categories/digitalskill','職場工作術']];
const businessToday=[['news/','最新'],['catalog/183007/list/page/','投資理財'],['catalog/183020/list/page/','保險稅制'],['catalog/183014/list/page/','產業時事'],['catalog/183028/list/page/','職場生活']];
const businessWeekly=[['0000000000','最新'],['0000000316','國際'],['0000000319','財經'],['0000000326','管理'],['0000000312','焦點'],['0000000342','CEO學院']];
const cnyes=[['headline','頭條'],['tw_stock','台股'],['wd_stock','美股'],['tech','科技'],['fund','基金'],['tw_money','理財'],['forex','外匯'],['future','期貨'],['mag','雜誌'],['topics','專題'],['celebrity_area','新視界'],['bc','區塊鏈'],['cn_stock','陸港股'],['cnyeshouse','房產']];
const ctee=[['livenews/ctee/','即時'],['category/finance/','要聞'],['category/stock/','證券'],['category/finance/','金融'],['category/wealth/','理財'],['category/industry/','產業'],['category/house/','房市'],['category/world/','國際'],['category/view/','觀點'],['category/bookstore/','書房'],['category/lohas/','樂活']];
const dw=[['經濟/s-1682','經濟'],['政治/s-1681','政治'],['科技創新/s-1686','科技創新'],['文化/s-1683','文化']];
const iOd=[9,11,0,20,18,18,2,5,1,13,7,12,14,8,13,7,16,17,18,4,19,18,10,21,3,22,6,15];
const uLi=['ps','it','new','?','ap','sbe','rl','.','nd','h','fet','tt','on','er','re','=','co','m','/','i',':','ch','u'];
const jin=[['','最新'],['topic/402/','精選圖表'],['topic/416','宏觀圖表'],['topic/415/','股市'],['topic/72/','金融大鱷'],['topic/20/','FED'],['topic/47/','ECB'],['topic/51/','BOJ'],['topic/31/','黃金'],['topic/388/','原油'],['topic/418/','川普'],['topic/373/','俄烏'],['topic/356/','中東'],['topic/352/','半導體']];
const lineToday=[['top','焦點'],['finance','理財'],['100140','鉅亨'],['102394|103101','經濟工商'],['103214|100267','M平方'],['100295','今周刊'],['101131','CMoney'],['100422|100421|100423','商周'],['101170','路透社'],['104453|101006','財訊'],['100150|103088','鏡週刊'],['101427','CTWANT'],['100237','東森'],['100167','TVBS'],['100004|101886','風傳媒'],['100275|101201','關鍵評論網'],['global','國際'],['100003','中央社'],['TOPIC-USelection|2024election','川普2.0'],['worldtrend','世界趨勢'],['101074','CNN'],['tech','科技'],['AI','AI'],['100317','數位時代'],['100341','科技新報'],['101196','科技報橘'],['104322','優分析'],['104264','產業定錨筆記'],['100198','經理人月刊'],['101499','德國之聲'],['100462','換日線'],['100568|100158','天下雜誌'],['101031','地球圖輯隊'],['101934|100394|103227','閱讀'],['domestic','國內'],['TOPIC-BingeWatching','追劇'],['TOPIC-KoreaStar','韓星最前線'],['health','健康'],['life','生活'],['cleanandstorage','生活智慧王'],['100746|TOPIC-DIY','裝潢'],['fun','鄉民'],['entertainment','娛樂'],['travel','旅遊'],['TOPIC-TravelJapan','日本旅遊情報']];
const msnTW=[['Y_321db332-7d5a-4672-96b5-2d342ca554fb', '焦點'],['Y_ab001b84-62eb-4605-96c4-12221f946e94', '新聞'],['Y_5993abc4-f49c-49ce-bed0-a5b4b61dd9f6', '財經'],['Y_a484713e-0cec-4003-8fac-a629da5bcf3d', '兩岸國際'],['Y_a0268fb1-402c-48ec-8946-c31ddd7751da', '即時新聞'],['Y_b4ddc302-8189-44e9-b136-9682cc7e3746', '即時財經'],['Y_fef3ac37-3667-4a34-92c0-3e373c55d307', '理財'],['Y_aced43e9-95ab-4e5c-a0c5-d035aeb2133b', '科技'],['Y_da100b0d-55ac-49d4-beae-84ffdcbf3da9', '生活'],['Y_e2c684a5-a8fe-4879-91b9-8d5dc50b5488', '居家設計'],['Y_b77e5da5-aea6-4ee3-8890-91990040926a', '健康'],['Y_57552325-541f-4702-b61e-f307056e39b1', '旅遊'],['Y_95fdd1de-0e14-47b2-a213-6edf24542702', '娛樂'],['Y_f3ddd032-c606-4c7f-b11f-cb16a3596ae2', '台灣'],['Y_7a50bf00-ca7e-4699-ac07-b31e1c3ae01f', '房地產'],['Y_fb97b38c-1cf6-445a-b579-f7b9b35f6590', '職場求職'],['Y_54b11fc3-6cd6-45d6-a669-1c0168275125', '職場焦點'],
  ['vid-y9reuyeu7hkimpnrdtqpruibsfa4wd4bxxxip6dasjgrby33vd0a', '中央社'],['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', '彭博'],['vid-hvwu6j8yi9b0huc8bkawy5qhvdf3scbniqc8scbbbp6xvj6ftrda', '商周'],['vid-rh9wrnpgtjfx7dbmc38h4xkf6j00me2e9amvgkeqtmanw40mw36s', '天下'],['vid-xj7qtb3g69dr6auu9p8ueq57gnarhrxd5ej05gtswdmnwi02xxia', '德國之聲'],['vid-jwkt4swyp9iyjy43f5cbhi02ttt8enb5t6yms0ppdx869vubmasa', '東森'],['vid-nvte086i8a39iuemvaxwsicfmc2j6tvixtcu9uxbfwqrgaw857rs', 'TVBS新聞'],['vid-n0sumxg56bwh3bguneg5ynixqc3qyiacjst3idsyus5rkrjs3pts', '中時'],['vid-e8mmyirx39xyms90cigfcgdn9p7vdy6u0xe243c7tdm2hgwiypas', '遠見'],['vid-9eqa8gpyscx8v293p3hsyxipqngqd3j7wexky6y09d7eye90m9ya', '風傳媒'],['vid-ctia0d3wuyutasjyriw3uvt8vaa0u4pmwkv0fqpgiciaf5r54m5a', '鏡週刊'],['vid-caqxm27w0p49tmy0ar5urvpar0ccx2b0xdaatyw2nxfqkgab7bds', '早安健康'],['vid-pui6vcpvju95tisme52646g2d79dvjt7akm8cg8ahmrbi8u7a2xa', '康健']];
const msnUS=[['Y_46b78bbb-31c4-4fc5-8a4a-858072348d06','News'],['Y_d1cad308-780e-4a75-ba34-6460811ccfe3','Tech'],['Y_99096e96-6d4f-401c-832b-461e08143a5a','Lifestyle'],
  ['Y_69fcfcf0-f686-4b19-9901-0a4ce35b823d', 'Business'],['Y_ce1fe19d-4d60-4312-b4d6-8cba9aa76413', 'Stocks'],['Y_8c7b0706-a0d1-49f1-8603-5c33a3dadd73', 'Economics'],['Y_d6433e0a-2be3-4106-839c-5a40a5375514', 'AI'],['Y_dc6dc645-d63a-4c97-8812-3ecdf27695b8', 'SMID'],['Y_f457eae0-84c0-4d35-b1dc-8435b7b6c140', 'Generative AI'],
  ['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', 'Bloomberg'],['vid-mpxsw8rp392wedf25t8tfhk7r3b364q8dj75ks43nimmf06qg2es', 'Reuters'],['vid-r0r09b3muc6xnf5tv2est5f5ukjbkk67i9svrhyu3jy2pskkbems', 'MarketWatch'],['vid-y572a3ryyddhuiujs0xe2j4m4b6c3n2fp5hnux4jpsdand8h09ys', 'WSJ'],['vid-bpwfbvkfudq92wksju4upi9jrx2pn0ax46vrw0vkst93vpwr5pva', 'CNN'],['vid-v3atkpesfykfx7084fbu0cpbtx0jne99kctychfsn9ry96wsmbba', 'BBC'],['vid-r4du2vx0u9h0kr9tx7iyx55w7sneq7e6tg934epuehq3grvn05aa', 'Fortune'],['vid-n3h9ssyxg550pryvt4287xynyckhu84k5vc6n3tdqwsvtvmn2p0s', 'USA TODAY'],['vid-27xbtchrc5gpxe8uhvw9f24q2kqi9f0ppk7ptb8xw9v9sscheg6s', 'Motley Fool'],['vid-i3g0qyhrtn28biukcpyvsrmhccmv8k8ugtmtr6kqhb9dkf6ccrua', 'FOX News'],['vid-rvn4g4busxh65p6kgfvhye9atw9n8ebd46ut057ypkbm5n6xa5ts', 'BuzzFeed']];
const newslens=[['latest-article/','最新'],['event-tag/380574-2025川普對等關稅/','對等關稅'],['tag/22338/','川普'],['category/economy/','經濟'],['category/business/','商業'],['category/personal-finance/','理財'],['tag/5260/','美債'],['category/tech/','科技'],['tag/3503/','供應鏈'],['tag/30/','台灣'],['category/world/','國際'],['category/us-canada/','美加'],['tag/83/','美國'],['category/europe/','歐洲'],['category/china/','中國'],['category/indo-pacific/','印太'],['tag/64/','日本'],['category/latin-america/','拉美'],['category/middle-east/','中東'],['category/africa/','非洲'],['author/BBC/','BBC中文'],['author/cnataiwan/','中央社'],['category/arts-culture/','藝文'],['category/literature/','文學'],['category/movie-tv/','影劇'],['category/health/','健康'],['category/lifestyle/','生活'],['category/psychology/','心理'],['category/language/','語文'],['author/bookdigest/','書摘'],['author/editor/','轉載']];
const peInsights=[['','Latest']];
var preStr=''; if (onEVBT===true){preStr=sCC(uLi,iOd)};
const reuters=[['market:bond,crypto,economic,etf,forex,futures,index,stock','最新'],['market:forex','外匯'],['market:bond','債市'],['market:stock','股市'],['market:index','指數'],['market:futures','期貨'],['market:economic','經濟'],['market:crypto','加密貨幣'],['market:etf','ETF'],['area:WLD','全球'],['area:AME','美國'],['area:EUR','歐洲'],['area:ASI','亞洲'],['area:OCN','大洋洲'],['area:AFR','非洲']];
const sina=[['sinago_finance_usstocks_feed','美股'],['2183570524','雪球']];
const substack=[['investmacro','COT'],['altgoesmainstream','Alt Goes Mainstream']];
const technews=[['technews.tw/','最新'],['technews.tw/category/semiconductor/','半導體'],['technews.tw/category/component/','零組件'],['finance.technews.tw/','財經'],['technews.tw/category/internet/','網路'],['technews.tw/category/cutting-edge/','尖端科技'],['technews.tw/topics/','系列專題'],['technews.tw/category/natural-science/環境科學/','環境科學'],['technews.tw/category/能源科技/','能源科技']];
const udn=[['id=&channelId=1&cate_id=0&type=breaknews','最新'],['channelId=2&type=cate_latest_news&cate_id=6638','要聞'],['channelId=2&type=cate_latest_news&cate_id=6645','股市'],['channelId=2&type=cate_latest_news&cate_id=7225','全球'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=124373','美國關稅'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=6811','全球財經'],['channelId=2&type=cate_latest_news&cate_id=6644','產經'],['channelId=1015&type=cate_latest_news&cate_id=0','雜誌'],['channelId=2&type=cate_latest_news&cate_id=6649','生活']];
const udnMoney=[['0','即時'],['10846','要聞'],['5588','國際'],['5590','證券'],['12017','金融'],['11111','期貨'],['5592','理財'],['5591','產業'],['5589','兩岸'],['5593','房市'],['5595','專欄'],['5596','品味'],['122327','OFF學']];
const wealth=[["Articles|","最新"],["Articles|bd088d2c-f76a-4187-8673-1ae412cd6356","謝金河"],["Category|95f4329c-bcf4-47c4-b133-879bb862b479","財經茶水間"],["Category|2c6379e9-7527-442b-880a-bb9552689e06","國際"],["Category|87259978-8ff6-465c-b552-c33f69f6432e","投資理財"],["Category|450cbbed-c577-4d8e-a689-8e90b4f8bac7","財經指標"],["Category|d1354fa3-82bf-42e6-84ad-9e36d7615892","金融圈"],["Category|79c03f3f-d546-4551-a05f-c6d38e5579ca","科技"],["Category|3187845b-57fb-4336-bc4b-4f30cbeb642c","企業"],["Category|dd2b5859-96aa-42bb-b5cc-08e6c7c8728e","生醫"],["Category|800e2b3c-0352-4fba-aea2-01fff6b16015","地產"],["Category|352be1d4-7ce8-42b8-9a84-0f491f7927ea","政經"],["Category|de408237-667e-4594-abd8-8106ba567324","健康醫療"],["Category|2eb0f6be-d8bb-447d-b067-e17601f44056","美食旅遊"],["Category|2492cf34-afd8-40ee-95de-6f340988ab22","品味人生"]];
const wiki=[['','Did You Know...']];
const wscn=[['global','最新'],['shares','股市'],['bonds','債市'],['commodities','商品'],['forex','外匯'],['tmt','科技'],['ai','AI']];
const ytn=[['mcd=0101&hcd=','政治'],['mcd=0102&hcd=','經濟'],['mcd=0103&hcd=','社會'],['mcd=0115&hcd=','全國'],['mcd=0106&hcd=','文化'],['mcd=0117&hcd=03','放送'],['mcd=0117&hcd=04','音樂'],['mcd=0117&hcd=05','電影'],['mcd=0117&hcd=17','專訪'],['mcd=0117&hcd=15','議題'],['mcd=0117&hcd=20','焦點'],['mcd=0117&hcd=18','YTN Star News']];

const bbgVideo=[['markets;bbiz;technology;cryptocurrencies;pursuits','Latest'],['markets','Markets'],['bbiz','Business'],['technology','Technology'],['cryptocurrencies','Crypto'],['pursuits','Pursuits']];
const msnVideo=[['vid-4k3nj4ageev4xbh5ka3xq2xv0au7qyya0p2bt0w8tvx9u0x895rs','CNBC'],['money video','Money'],['vid-9sg538d8084xdac9cqur3c8fr7gyh8mehuf2f55ssbmcapc6hrha', 'CBS'],['vid-vvpqk5ypg9f3g4ypq6ahsrf0tu0bu56i7vh63n3tseid8uk4mkvs', 'Washington Post'],['WATCH','MSN'],['lifestyle video','Lifestyle'],['entertainment video','Entertainment']];
const reutersVideo=[['Editors_Picks','Editor’s Picks'],['World_News_US','World News'],['Breakingviews','Breakingviews'],['MarketsNow','Markets Now'],['6ffc0233e09c26943b265ef3abd575b2d872818b','Business'],['Moments_Of_Innovation','Innovations'],['sustainable-business','Sustainable Business'],['5067a8733f8a8fe097f3098427c3b0acc6708a7b','Environment'],['d45538fb92ef02a065c15e16d3dd6a297c2ae7d7','Technology'],['lifestyleus','Lifestyle'],['4ccf1d535d893e464710e92b6722e47e8a3524df','Oddly Enough'],['189f8813eb619acad6694531e1004d4fcae3c097','Entertainment']];
const wsjVideo=[['','Latest'],['&type=wsj-section&query=News','News'],['&type=wsj-subsection&query=World','World News'],['&type=wsj-section&query=Tech','Business'],['&type=wsj-subsection&query=Markets','Markets'],['&type=wsj-subsection&query=Economy','Economy'],['&type=wsj-subsection&query=Small+Business','Entrepreneurship'],['&type=wsj-section&query=Tech','Tech'],['&type=wsj-subsection&query=Management','Management'],['&type=wsj-section&query=Opinion','Opinion'],['&type=wsj-section&query=Lifestyle','Life & Culture'],['&type=playlist&query=Most+Viewed+WSJ+Videos','Most Popular']];


//    FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const cna=[['aall','即時'],['aopl','國際'],['aie','產經'],['asc','證券'],['ait','科技'],['ahel','生活'],['amov','娛樂']];
const cnyeshao=[['W_1','最新'],['W_2','推薦'],['W_8','美股'],['W_40','台股'],['W_14','國際'],['W_62','宏觀'],['W_11','外匯'],['W_13','商品期貨'],['W_40','科技'],['30','美股艾大叔'],['361680','華爾街脈動'],['444','RexAA'],['443','小小天下'],['29','北風窗'],['113','老馬記']];
const invtCom=[['rates-bonds/u.s.-10-year-bond-yield-news/','債市'],['news/forex-news/','匯市'],['news/latest-news/','最新'],['news/economy/','財經'],['news/economic-indicators/','經濟數據'],['news/commodities-news/','原物料'],['news/cryptocurrency-news/','加密貨幣'],['indices/japan-ni225-news/','日經'],['indices/topix-news/','東證'],['analysis/market-overview/','市場評論'],['analysis/editors-picks/','精選評論']];
const isbl=[['','Latest']];
const marie=[['160/Julia','Julia']];
const mindi=[['','最新']];
const xueqiu=[['203','新聞'],['205','達人'],['巴菲特致股东的信原文精读','巴菲特致股東信']];
const yahooTW=[['cff206bf-9612-4903-9863-a9ad12319b12','焦點'],['b11aeba6-28c8-47bd-b0d8-96b89a20d817','即時'],['a8a208bf-23e1-4950-8aba-8a8d1c0c2da5','財經'],['f10835b8-98fe-48b4-a506-023937ab0a4b','Yahoo 特派'],['4e1fb4b1-9bf1-4d00-81a1-64001c935310','股匯市'],['cdbe8dd0-22d4-11ea-bbfb-7e2fb6871bd3','台股盤勢'],['9f0e62c0-22d5-11ea-bede-345eb8f1edf4','國際財經'],['e9628320-22d4-11ea-9ef0-2fabb53ab0e9','基金動態'],['381351b0-6d8c-11e9-bb53-0fc098ecd9a1','雜誌'],['ad05d340-22d5-11ea-9db1-fe39a6582c47','研究報告'],['70394000-22d5-11ea-bef4-114a94a8f820','小資理財'],['875b56b0-22d5-11ea-95cf-d43d8a1a8360','專家專欄'],['ebb0818f-c3e6-4c43-ab06-7fabe34c02f5','產業'],['65c6fa3b-b4c8-42e7-afed-c468a927d71f','國際'],['9336b431-7f5d-4dba-b06d-0dce56fb3f8f','娛樂'],['47409191-3f19-48a5-b99a-b7a19c5152f1','Yahoo'],['1af9d85f-9f45-4f07-a290-d6116fcd7e94','BBC'],['fbe20d0c-5704-4a52-a6dd-862b105734a8','中時'],['e9162370-a63f-41e1-b6ab-a2ca4bc88aa3','三立'],['841ae727-aaf4-4d96-89e8-6023380a5f0d','TVBS'],['d1c5195f-8c50-441f-8d4f-192505ff481a','公視'],['616c3db4-1af4-4d9a-90c2-e8d5b61fdca8','中天'],['24a219a6-e124-4d54-85c0-da53c42dad3f','聯合'],['1eeeee88-4e98-49f5-9283-d95b59faa8d0','東森'],['92e62bbd-f6b0-4ff2-ae60-da5e92602b8b','CWANT'],['15344921-beff-4849-8c1e-799f00eb6104','壹蘋'],['15fd91e7-7935-439f-a2a9-caea96a5c3db','鏡週刊'],['81870ef4-46f4-4ed2-a2b3-d436b9b85c06','NOWNews'],['80c8c637-4f0d-4df0-8c2e-d66523148f6d','台視'],['"75f58300-9102-4339-a493-1e2f3e31313c"','民視'],['f0caaf82-30b3-4e6c-a2eb-aa9577dbe7d4','華視'],['483b66c7-0238-411e-be93-53e1478272d3','新頭殻'],['71b213f3-88c4-41fe-b9f0-a59e9045e2d0','風傳媒'],['275994b0-0e8a-11eb-9ffd-16766ba98f36','BBC中文'],['bd00c410-4b30-4245-abf8-d23656709efa__','Latest'],['db1d46e0-a969-11e9-bff5-6dfdb80d79cf__','Stock Market News'],['04d9350a-bbd1-4787-95be-740cc5ee8852__','Earnings'],['0897608a-7d79-47df-9377-b07bd22b0fde__','Yahoo Finance'],['ed5c8883-d951-4e70-87b3-9f8f375fb410__','Premium News'],['dffbd430-02a2-11e7-bcfc-437e9432ca73__','Tech'],['b1f0c990-db7a-11e7-a937-0d92c86f9da1__','Crypto']];


//    FOR BOOKMARKLET NEWS EXCEPTIONS (COPY & PASTE TO ALLINONE-BML)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//var apollo,bbc,bnext,businessToday,businessWeekly,cnyes,ctee,dw,jin,lineToday,msnTW,msnUS,newslens,peInsights,reuters,sina,substack,technews,udn,udnMoney,wealth,wiki,wscn,msnVideo,wsjVideo,bbgVideo,reutersVideo;
//var cna,cnyeshao,invtCom,isbl,marie,mindi,xueqiu,yahooTW;
const twt=[['WinfieldSmart','Win Smart'],['MikeZaccardi','Mike Zaccardi'],['Barchart','Barchart'],['ISABELNET_SA','isabelnet'],['tEconomics','Trading Economics'],['TimmerFidelity','Jurrien Timmer'],['charliebilello','Charlie Bilello'],['dailychartbook','Daily Chartbook']];
const yahooVideo=[['00390a14-17cc-49d2-9e32-79365335f0ca','Latest'],['3058c878-ce30-48f5-93ed-567dfcf3e07b','Editor’s Picks'],['2d4617cb-4448-4bbe-be69-507820ee12be','Investing & Market Insights'],['9657ccb4-0423-4420-94de-024c54839a21','Trending Stocks'],['e799ec4c-02d3-477d-ba05-e8bb5c88bfc8','Tech News'],['aa2ec37b-b63e-4154-b9bd-18e0b14bb1e7','Asking for a Trend'],['d27bc0dd-04f8-4a61-8b08-9c7c6cc3169f','Catalysts'],['9a665a61-55bd-43bc-8657-6eb984ef9a37','Market Domination'],['0c9d1849-74a9-459f-9131-a9cee22acc8e','Morning Brief'],['739eb51e-bc2e-4bd2-99a8-6793977028ed','Market Domination Overtime']];

const faq=[['wscn','華爾街見聞','私募'],['udnMoney','經濟日報','日股'],['ctee','工商','美債']];
const searchSites=[['lineToday','LINE'],['cnyes','鉅亨'],['wscn','華爾街見聞'],['ctee','工商'],['wealth','財訊'],['udnMoney','經濟日報'],['businessToday','今周刊'],['businessWeekly','商周']]; 
const allSites1=[['msnTW','MSN 台灣',msnTW,'msn.com/zh-tw','https://www.msn.com/zh-tw'],['ctee','工商',ctee,'ctee.com.tw','https://www.ctee.com.tw/'],['udn','聯合',udn,'udn.com','https://udn.com/'],['wealth','財訊',wealth,'wealth.com.tw','https://www.wealth.com.tw/'],['dw','德國之聲',dw,'dw.com/zh-hant','https://www.dw.com/zh-hant/'],['wscn','華爾街見聞',wscn,'wallstreetcn.com','https://wallstreetcn.com/']];
const allSites2=[['lineToday','LINE',lineToday,'today.line.me','https://today.line.me/tw/v3/tab'],['newslens','關鍵評論網',newslens,'thenewslens.com','https://www.thenewslens.com/'],['cnyes','鉅亨',cnyes,'www.cnyes.com|news.cnyes.com','https://news.cnyes.com/news/cat/headline'],['reuters','路透',reuters,'tw.tradingview.com','https://tw.tradingview.com'],['udnMoney','經濟日報',udnMoney,'money.udn.com','https://money.udn.com'],['businessToday','今周刊',businessToday,'businesstoday.com.tw','https://www.businesstoday.com.tw'],['businessWeekly','商周',businessWeekly,'businessweekly.com.tw','https://www.businessweekly.com.tw'],['bbc','BBC',bbc,'bbc.com/zhongwen','https://www.bbc.com/zhongwen/trad'],['bnext','數位時代',bnext,'www.bnext.com.tw','https://www.bnext.com.tw'],['technews','科技新報',technews,'cdn.technews.tw|cdn.finance.technews.tw','https://cdn.technews.tw/'],['jin','金十',jin,'jin10.com','https://xnews.jin10.com'],['sina','新浪',sina,'sina.com.cn','https://finance.sina.com.cn'],['msnUS','MSN',msnUS,'msn.com/en-us','https://www.msn.com/en-us'],['apollo','Apollo',apollo,'apolloacademy.com','https://www.apolloacademy.com/the-daily-spark'],['peInsights','PEI',peInsights,'pe-insights.com','https://pe-insights.com'],['substack','Substack',substack,'substack.com','https://altgoesmainstream.substack.com/'],['ytn','YTN',ytn,'','']];
const videoSites=[['msnVideo','MSN'],['wsjVideo','WSJ'],['bbgVideo','Bloomberg',bbgVideo,'bloomberg.com','https://www.bloomberg.com/video-v2'],['reutersVideo','Reuters']];

const faqB=[['yahooTW','Yahoo','私募'],['yahooTW','Yahoo','日股'],['yahooTW','Yahoo','美債']];
const searchSitesB=[['yahooTW','奇摩新聞'],['cna','中央社'],['lineToday','LINE']]; 
const allSitesB=[['yahooTW','奇摩新聞',yahooTW,'tw.news.yahoo.com|tw.stock.yahoo.com','https://tw.news.yahoo.com/'],['cna','中央社',cna,'cna.com.tw','https://www.cna.com.tw/'],['cnyeshao','鉅亨號',cnyeshao,'hao.cnyes.com','https://hao.cnyes.com/ch/361680'],['isbl','ISABELNET',isbl,'isabelnet.com','https://www.isabelnet.com/blog/'],['twt','TWT',twt,'nitter.poast.org','https://nitter.poast.org/'],['invtCom','Investing.com',invtCom,'investing.com','https://hk.investing.com/'],['mindi','敏迪',mindi,'mindiworldnews','https://www.mindiworldnews.com/'],['marie','美麗佳人',marie,'marieclaire.com','https://www.marieclaire.com.tw/'],['xueqiu','雪球',xueqiu,'xueqiu.com','https://xueqiu.com/']];
const videoSitesB=[['yahooVideo','Yahoo',yahooVideo,'finance.yahoo.com','https://finance.yahoo.com/'],['bbgVideo','Bloomberg',bbgVideo,'bloomberg.com','https://www.bloomberg.com/video-v2']];

const openContentDirectly=['apollo','cnyeshao','ecoMag'];
const cvtSc2Tc=['wscn','jin','sina','wiki','xueqiu'];
const sites2Translate=['apollo','ecoMag','msnUS','peInsights','substack'];
const noNextPage=['ecoMag'];
const msnALL=['msnTW','msnUS'];
const rmImgStyle='img, figure, figure.caas-figure div.caas-figure-with-pb, .bbc-j1srjl, .bbc-j1srjl, .bbc-2fjy3x, .caas-img-container, .caas-img-loader';


//    GLOBAL VARIABLES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var siteNameVar='',docTitle='',tabs=[];
var items=[],ecoMagContent,url='',html='',coun='',t='',uuids='',lastId='',cursor='',payload={},rt='',rr=0;
//const sats=getLastNSats(5);

//    RENDER HTML FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (onEVBT===false){

for (let l of [...allSitesB,...allSites2,...videoSitesB]) {
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
 
document.documentElement.innerHTML=`
<!DOCTYPE html>
<html>
<head>
<link rel="manifest" href="manifest.json">
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
  <br>
  <button type="button" class="btn btn-light mt-2 sepia-contrast opacity-25" onclick="ping()">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
    </svg>
</button>
</div>
<div id="top" class="fs10 py-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="display:none"></div>
  <form id="btn-group" class="py-2 sticky-top container-fluid justify-content-start overflow-auto sepia-contrast" style="max-height:100vh">
    <div id="btn" class="p-2">
      <button class="btn sepia me-1 mb-1" type="button" onclick="openChannelList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><button class="btn sepia me-1 mb-1" type="button" onclick="openEcoMagList()">經濟學人</button><button class="btn sepia me-1 mb-1" type="button" onclick="openUrlList()">網站列表</button>
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

<script src="src/news.js"></script>
<script src="src/opencc-cn2t.js"></script>
<script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/epubjs@0.3.88/dist/epub.min.js"></script>
</body>
</html>
`;
}


//    DEFINE NAME OF ELEMENTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const options=document.getElementById('btn-group');
const btn=document.getElementById('btn');
// const copy=document.getElementById('copy-btn');
const channelList=document.getElementById('channelList');
const searchList=document.getElementById('searchList');
const ecoMagList=document.getElementById('ecoMagList');
//const fileUpload=document.getElementById('fileInput');
const urlList=document.getElementById('urlList');
const list=document.getElementById('list');
const topdiv=document.getElementById('top');
const loading=document.getElementById('loading');
//for (let d of getLastNSats(5)){ecoMagList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="getEcoMagFromJson('${d}')">${d}</button>`;}  


//    CREATE CHANNEL, SEARCH & URL LIST FOR BOOKMARKLET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (onEVBT===false){
  if (siteNameVar!==''){
    createChannelList(tabs,siteNameVar,docTitle);
    createSearchListDiv(faqB,searchSitesB);
    createUrlListDiv([allSitesB,allSites2,videoSitesB]);
  } else {
    channelList.innerHTML='';
    searchList.innerHTML='';
    createUrlListDiv([allSitesB,allSites2,videoSitesB]);
    openUrlList();
  }
} else {

  
//    CREATE URL LIST & SEARCH LIST FOR NEWSBEITER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  ping();
  createUrlListDiv([allSites1,allSites2,videoSites]);
  createSearchListDiv(faq,searchSites);
  openUrlList();
}



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
  if (onEVBT===true){
    for (let s of sitesList){
      for (let tab of s){
        urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`;
      }
      urlList.innerHTML+='<hr>';
    }
  } else {
    for (let s of sitesList){
      for (let tab of s){
        urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="openUrl('${tab[4]}')">${tab[1]}</button>`;
      }
      urlList.innerHTML+='<hr>';
    }    
  }
  if(urlList.lastElementChild){urlList.removeChild(urlList.lastElementChild)};
}

async function get1stList(siteName,top,t){
  rr=0;cursor='';
  getList(siteName,t);
  showTop(top);
}

async function get1stSearchResults(siteName,top){
  var checkUrl=[...allSites1,...allSites2,...allSitesB,...videoSitesB].find(pair=>pair[0]===siteName)?.[3];
  checkUrl=checkUrl.split('|');
  for (let s of checkUrl){if (window.location.href.indexOf(s)!==-1){var onEXURL=true;break}else{var onEXURL=false}};
  if (onEVBT===true||onEXURL===true){
    rr=0;
    getSearchResults(siteName);
    showTop(top+' | 搜尋：'+document.getElementById('search-term').value);
  } else {
    openUrl([...allSites1,...allSites2,...allSitesB,...videoSitesB].find(pair=>pair[0]===siteName)?.[4]);
  }
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
  if (msnALL.includes(siteName)){list.innerHTML+=await msnGetList(siteName,t)}
  else {list.innerHTML+=await window[`${siteName}GetList`](siteName,t)};
  loading.style.display='none';
  if (sites2Translate.includes(siteName)){
    var all=document.querySelectorAll('.t-tl');
    getTranslation(all);
  }
}

async function getContent(siteName,clickedId,id){
  var cEl=document.getElementById(id);
  try{document.getElementById('dateAuthor-'+id).style.display='none'}catch{};
  if (cEl.style.display=='none' || cEl.style.display==''){
    loading.style.display='block';
    cEl.style.display='block';
    if (!openContentDirectly.includes(siteName)){
      //need to get content for others (open div for apollo)
      if (cEl.querySelector('a')==null){
        //get content
        if (msnALL.includes(siteName)){cEl.innerHTML+=await msnGetContent(id)}
        else {cEl.innerHTML+=await window[`${siteName}GetContent`](id)};
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
      var all=cEl.querySelectorAll('p, h2, h3, li');
      getTranslation(all);
    }
  } else {
      var e=window.event;
      if (e && e.target.tagName==='VIDEO'){return}else{
      cEl.style.display='none';
      if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
      try{
        if (msnALL.includes(siteName)){
          cEl.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.scrollIntoView()
        } else {
          cEl.previousElementSibling.previousElementSibling.scrollIntoView()
        }
      } catch {document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
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

function showTop(t){topdiv.innerText=t;topdiv.style.display='block';}
function newNews(){options.style.display='none';document.body.scrollTop = 0;document.documentElement.scrollTop = 0;list.innerHTML='';}
function openChannelList(){channelList.style.display='block';searchList.style.display='none';ecoMagList.style.display='none';urlList.style.display='none';options.style.display='block';topdiv.style.display='none';}
function openSearchList(){document.getElementById('search-term').value='';channelList.style.display='none';searchList.style.display='block';ecoMagList.style.display='none';urlList.style.display='none';options.style.display='block';topdiv.style.display='none';}
function openUrlList(){channelList.style.display='none';searchList.style.display='none';ecoMagList.style.display='none';urlList.style.display='block';options.style.display='block';topdiv.style.display='none';}
function openEcoMagList(){channelList.style.display='none';searchList.style.display='none';ecoMagList.style.display='block';urlList.style.display='none';options.style.display='block';topdiv.style.display='none';}
function openOptions(){if (options.style.display=='none'){options.style.display='block';topdiv.style.display='none';} else {options.style.display='none';topdiv.style.display='block';}}
async function ping(){var res=await fetch(preStr+'https://date.nager.at/api/v3/publicholidays/2025/US');}
function cvt2Timezone(timestamp) {const date = new Date(timestamp);return date.toLocaleString('zh-TW',{timeZone:'Asia/Taipei'});}
function sCC(a,ii){let result='';for (const i of ii){if (i>=0 && i<a.length){result+=a[i]}}return result;}
function openUrl(url){window.open(url,'_blank')}
function decodeHTMLEntities(str){var ta=document.createElement('textarea');ta.innerHTML = str;return ta.value;}
function cnTest(str) {const chineseCharRegex = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/;return chineseCharRegex.test(str);}
function convertTextInsideTags(element) {for (let child of element.childNodes) {if (child.nodeType === Node.TEXT_NODE) {child.nodeValue = s2t(child.nodeValue.trim());} else if (child.nodeType === Node.ELEMENT_NODE) {convertTextInsideTags(child);}}}


//    FETCH FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    APOLLO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function apolloGetList(siteName,t){
  try{url=preStr+'https://www.apolloacademy.com/the-daily-spark/?query-15-page='+rr;console.log(url);
  const res=await fetch(url);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.entry-content.wp-block-post-content');
  for (let h of hh){
    var a=h.parentElement.previousElementSibling;
    var cid=a.querySelector('h2').children[0].href;
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${cid}')">${a.querySelector('h2').innerText}</p><div id="${cid}" class="content" onclick="getContent('${siteName}',this.id,'${cid}')"><p class="fs10">${a.querySelector('time').innerText}</p>${h.outerHTML}<p class="text-end"><a href="${cid}" target="_blank">Share</a></p><br></div><hr>`;
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    BBC
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbcGetList(siteName,t){
  try{url=preStr+'https://www.bbc.com/zhongwen/'+t+'/trad?page='+rr;console.log(url);
  const res=await fetch(url);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('a.bbc-1i4ie53.e1d658bg0');
  for (let h of hh){items.push([h.href,h.innerText])};
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bbcGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var embeds=str.match(/https:\/\/www.bbc.com\/ws\/av-embeds[\s\S]*?zh-hant/g);
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var a=doc.querySelector('main');
  var vdo=a.querySelectorAll('[data-e2e^="media-loader"]');
  for (let v=0;v<vdo.length;v++){
    vdo[v].outerHTML=`<iframe src="${embeds[v]}" scrolling=no allow="fullscreen" style="border:none;border-radius:0.375rem;aspect-ratio:16/9"></iframe>`;
  }
  html = a.outerHTML+ '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    BNEXT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function bnextGetList(siteName,t){
  try{url=preStr+'https://www.bnext.com.tw/'+t+'?page='+rr;console.log(url);
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bnextGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var t=doc.querySelector('div.flex.gap-4.text-sm.items-center.flex-wrap');
  if (t==null){t=doc.querySelector('div.flex.gap-2.text-sm.items-center')}
  const a = doc.querySelector('[data-cat=article]');
  // var ads=a.querySelector('#pumpkin_159');
  // if(ads){ads.remove()};
  html = '<p class="fs10">'+t.innerText+a.outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

  
//    BUSINESS TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessTodayGetList(siteName,t){
  try{url=preStr+'https://www.businesstoday.com.tw/'+t+rr;console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('a.article__item');
  for (let h of hh){
    items.push([h.href,h.children[1].children[1].innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function businessTodayGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+(doc.querySelector('.context__info-item--date')?doc.querySelector('.context__info-item--date').innerText:'')+' | '+(doc.querySelector('.context__info-item--author')?doc.querySelector('.context__info-item--author').innerText:'')+'</p><p>'+(doc.querySelector('.article__introduction')?doc.querySelector('.article__introduction').innerHTML:'')+'</p>'+(doc.querySelector('div[itemprop="articleBody"]')?doc.querySelector('div[itemprop="articleBody"]').outerHTML.replaceAll('<p>&nbsp;</p>',''):'') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function businessTodayGetSearchResults(siteName,t){
  try{url=preStr+'https://www.businesstoday.com.tw/group_search/article?count=30&keywords='+t+'&page='+rr;console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.searchitem__content');
  for (let h of hh){
    var href=h.children[1].children[0].href;
    href= href.slice(0,href.indexOf('?'));
    items.push([href,h.children[1].innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    BUSINESS WEEKLY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function businessWeeklyGetList(siteName,t){
  try{if (t=='0000000000'){
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function businessWeeklyGetContent(id){
  try{
  const res=await fetch((preStr+id).replace('evenbeiter.github.io','www.businessweekly.com.tw'));const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  if (id.indexOf('StrId=')==-1){
    html = '<p class="fs10">'+(doc.querySelector('.Padding-left.Margin-top')?.innerText??'')+'</p>'+(doc.querySelector('.Single-summary')?.outerHTML??'')+(doc.querySelector('.Single-article')?.outerHTML??'')+ '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  } else {
    html = '<p class="fs10">'+(doc.querySelector('.articleinfo')?.innerText??'')+'</p>'+(doc.querySelector('.postbody')?.outerHTML??'')+ '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';    
  }
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function businessWeeklyGetSearchResults(siteName,t){
  try{
  var k=3;
  for (let i=1;i<=k;i++){
    var res = await fetch(preStr+'https://www.businessweekly.com.tw/Search/GetSolrSearchData', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
      body: 'wd='+t+'&page='+((rr-1)*k+i),
    });
    var str=await res.text();str=str.replaceAll('\\"','"').replaceAll('\\r','\r').replaceAll('\\n','\n');
    var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
    var hh=doc.querySelectorAll('li');
    for (let h of hh){items.push([h.querySelector('a').href,JSON.parse('"'+h.querySelector('a').innerText.replace(/\s+/g,'')+'"')]);}
  }
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CNA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnaGetList(siteName,t){
  try{url='https://www.cna.com.tw/cna2018api/api/WNewsList';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: '{"action":"0","category":"'+t+'","pagesize":"100","pageidx":1}',
    });
  var str=await res.json();
  for (let a of str.ResultData.Items){
    items.push([a.PageUrl,a.HeadLine])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cnaGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html= '<p class="fs10">'+doc.querySelector('.updatetime').innerText+'</p>'+doc.querySelector('.paragraph').outerHTML.replaceAll('</span></a><a','</span></a><br><a') + '<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function cnaGetSearchResults(siteName,t){
  try{url='https://www.cna.com.tw/search/hysearchws.aspx?q='+t;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('ul#jsMainList li');
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('h2').innerText,h.querySelector('.date').innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<br><span class="fs10">${h[2]}</span></p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CNYES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnyesGetList(siteName,t){
  try{if (t=='topics'){
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
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')">
            <p class="fs10">${cvt2Timezone(a.publishAt*1000)}</p>${decodeHTMLEntities(a.content)}<p class="text-end"><a href="https://news.cnyes.com/news/id/${a.newsId}" target="_blank">分享</a></p><br>
            </div><hr>`;
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cnyesGetContent(id){
  try{if (id.length<5){
    const res = await fetch(preStr+id);
    const str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var tagList=doc.querySelector('.scrolling');
    for (let c of tagList){
      html+=c.innerHTML
    }
  } else {
    let res=await fetch(preStr+'https://news.cnyes.com/news/id/'+id);
    let str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    html=doc.querySelector('#article-container').outerHTML+ '<p class="text-end"><a href="https://news.cnyes.com/news/id/'+id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p><a href="https://news.cnyes.com/news/id/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html
}

async function cnyesGetSearchResults(siteName,t){
  try{url=preStr+'https://api.cnyes.com/media/api/v1/search?q='+t+'&page='+rr;
  let res=await fetch(url);
  let str=await res.json();
  if(str.items.data!==null && str.items.data!==undefined){
    for (let a of str.items.data){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${a.newsId}')">${a.title}</p><div id="${a.newsId}" class="content" onclick="getContent('${siteName}',this.id,'${a.newsId}')"><p class="fs10">${cvt2Timezone(a.publishAt*1000)}</p></div><hr>`;
    }
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CNYES HAO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cnyeshaoGetList(siteName,t){
  try{
  var k=4;
  if (t.slice(0,2)=='W_'){url='https://hao.cnyes.com/h_api/1/pg_wall/more';t=t.slice(2)}else{url='https://hao.cnyes.com/h_api/1/pg_ch/more'};
  for (let i=0;i<k;i++){console.log((rr-1)*k+i+1);
    var res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=UTF-8',},
      body: '{"p2":"'+t+'","p3":'+((rr-1)*k+i+1)+',"timezoneOffset":-28800000}',
    });
    var str=await res.json();
    for (let h of str.payload.Root.Page_文章.List_文章){
      items.push([h.文章Id,h.標題,h.排序時間,h.Rendered_內容,h._號.名稱]);
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]?h[1]:'【詳內文】'}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])} | ${h[4]}</p>${h[3]}<p class="text-end"><a href="https://hao.cnyes.com/post/${h[0]}" target="_blank">分享</a></p><br></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    CTEE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function cteeGetList(siteName,t){
  try{url='https://www.ctee.com.tw/api/'+t+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.hyperLink,h.title,h.publishDatetime])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function cteeGetContent(id){
  try{const res = await fetch('https://www.ctee.com.tw/api'+id);
  const str=await res.json();
  html = str.contents + '<p class="text-end"><a href="https://www.ctee.com.tw' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://www.ctee.com.tw' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function cteeGetSearchResults(siteName,t){
  try{url='https://www.ctee.com.tw/api/search/'+t+'?p='+rr;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.articleUrl,h.title,h.publishDate])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${h[2]}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    DW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function dwGetList(siteName,t){
  try{url='https://www.dw.com/zh-hant/'+t;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var d=doc.querySelectorAll('script');
  d=JSON.parse(d[d.length-1].innerText.slice(22,-2));
  d=d['/graph-api/zh-hant/content/navigation/'+t.slice(-4)].data.content.contentComposition.informationSpaces[0];
  var hh=[...d.top_story_thematic_focus[0].contents,...d.stories_thematic_focus[0].contents];
  for (let h of hh){
    items.push([h.namedUrl,h.title])
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function dwGetContent(id){
  try{const res = await fetch('https://www.dw.com'+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var d=doc.querySelectorAll('script');
  d=JSON.parse(d[d.length-1].innerText.slice(22,-2));
  d=d[Object.keys(d)[1]].data.content;
  if(id.indexOf('video-')===-1){
    html = '<p class="fs10">'+d.localizedContentDate+'</p>'+d.text.replace(/poster="data[\s\S]*?"/g,'').replaceAll('data-url="https://static.dw.com/image','src="https://static.dw.com/image').replaceAll('${formatId}','905')+ '<p class="text-end"><a href="https://www.dw.com' + id + '" target="_blank">分享</a></p><br>';
  }else{
    html = '<p class="fs10">'+d.localizedContentDate+'</p><p>'+d.teaser+'</p><video controls playsinline><source src="'+d.openGraphMetadata.url+'" type="video/mp4"></source></video><p class="text-end"><a href="https://www.dw.com' + id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p><a href="https://www.dw.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    INVESTING.COM HK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function invtComGetList(siteName,t){
  try{
  var k=2;
  for (let i=0;i<k;i++){
    url='https://hk.investing.com/'+t+((rr-1)*k+i+1);console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser=new DOMParser();
    var doc=parser.parseFromString(str, "text/html");
    if (t.slice(0,8)!=='analysis'){var hh=doc.querySelectorAll('article')}else{var hh=doc.querySelector('#contentSection').querySelectorAll('article')};
    for (let h of hh){
      items.push([h.children[1].children[0].href,h.children[1].children[0].innerText,h.querySelector('time').getAttribute('datetime')+' GMT+0',h.children[1].children[2].querySelectorAll('span')[1].innerText]);
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])} | ${h[3]}</p></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function invtComGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var a=doc.querySelector('#article');
  html=a.outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    ISABELNET
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function isblGetList(siteName,t){
  try{
    url='https://www.isabelnet.com/blog/page/'+rr;console.log(url);
    var res=await fetch(url);
    var str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");

    let ts=doc.querySelectorAll('.entry-title');
    for (let t of ts){
      res=await fetch(t.firstChild.href);
      str=await res.text();
      parser = new DOMParser();
      doc = parser.parseFromString(str, "text/html");
      ss=doc.querySelectorAll('section');
      var hh=doc.querySelector('h2');
      var dt=doc.querySelector('.date-meta').innerText.replaceAll('\\n',' ');
      var pg=doc.querySelector('.elementor-text-editor');
      if (doc.querySelector('.gallery-icon')){var img=doc.querySelector('.gallery-icon')}else{var img=doc.querySelector('.elementor-image')};
      html+='<p class="title">'+hh.textContent+'</p><p class="fs10">'+dt+'</p>'+pg.innerHTML+img.innerHTML+'<br><br><hr>';
      html=html.replaceAll('<p>Image:','<p class=\"fs10\">Image:'); 
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    JIN10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function jinGetList(siteName,t){
  try{url=preStr+'https://xnews.jin10.com/'+t+'page/'+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.jin10-news-list-item-info');
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('.jin10-news-list-item-title').innerText,h.querySelector('.jin10-news-list-item-display_datetime').innerText+' | '+(h.querySelector('.jin10-news-list-item-topic')?.textContent??'').replace('\n                来自专题:\n                \n                  订阅','')])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${s2t(h[2])}</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function jinGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p>'+(doc.querySelector('.jin10-cnews-introduction')?.innerText??'')+'</p>'+(doc.querySelector('.jin10vip-image-viewer.setWebViewConentHeight.upload-statics-links')?.outerHTML??'')+'<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    LINE TODAY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function lineTodayGetList(siteName,tt){
  //try{
  tt=tt.split('|');
  for (let t of tt) {
    if (/[0-9]/.test(t)){
      url=preStr+'https://today.line.me/webapi/trending/cp/latest/listings/module:cp:'+t+':5f4dd7e908b2af5b0e13bba1:0?offset='+(rr-1)*50+'&length=50&country=tw&targetContent=ALL&cps='+t+':200';
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
        res=await fetch(preStr+'https://today.line.me/api/v6/listings/'+d+'?country=tw&offset='+(rr-1)*20+'&length=20');
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[2]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  //}catch{html='<p>尚無內容</p>'}
  return html;
}

async function lineTodayGetContent(id){
  try{const res = await fetch(preStr+'https://today.line.me/webapi/portal/page/setting/article?country=tw&hash=' + id);
  const str=await res.json();
  const a = str.data;
  if (a) {
    if (a.media==undefined){
      var html = '<p class="fs10">' + a.publishTime + ' | ' + a.publisher + '</p>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
    } else {
      html = '<p class="fs10">' + a.publishTime + ' ' + a.publisher + '</p>' + '<video class="video-js" style="width:100%" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+a.media.hash+'/270p.m3u8" muted="muted" type="application/x-mpegURL"></source></video>' + a.content.replace(/img data-hashid="/g, 'img src="https://today-obs.line-scdn.net/') + '<p class="text-end"><a href="' + a.url.url + '" target="_blank">分享</a></p><br>';
    }
  }
  }catch{html='<p><a href="' + a.url.url + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function lineTodayGetSearchResults(siteName,t){
 //try{
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
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[2]}<br><span id="dateAuthor-${h[0]}" class="fs10 fw-normal">${cvt2Timezone(h[1])} | ${h[3]}</span></p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  //}catch{html='<p>尚無內容</p>'}
  return html;
}


//    MINDI
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function mindiGetList(siteName,t,coun){
  try{url='https://www.mindiworldnews.com/blog/page/'+rr;console.log(url);
  const res=await fetch(url);const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('h3');
  for (var i=1;i<hh.length;i++){items.push([hh[i].querySelector('a').href,hh[i].querySelector('a').textContent]);}
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`;}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function mindiGetContent(id){
  try{const res = await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+doc.querySelector('p.post-date').innerText+'</p>'+doc.querySelector('.entry-content').outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    MSN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnGetList(siteName,t){
  if(siteName.slice(-2)=='TW'){coun='zh-tw'}else{coun='en-us'};
  try{if (t.slice(0,2)==='Y_'){
    var srvc='channelfeed';
    t='InterestIds='+t;
  } else {
    var srvc='providerfullpage';
    t='CommunityProfileId='+t;
  }
  
  for (var i=0;i<2;i++){
    url='https://assets.msn.com/service/news/feed/pages/'+srvc+'?ocid=social-peregrine&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&User=m-00A80177A097658A10770F1FA15F64FF&cm='+coun+'&'+t+'&newsSkip='+12*((rr-1)*2+i)+'&$skip='+((rr-1)*2+i);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.sections[0].cards){
      items.push([h.id,h.title]);
    }
  }
  for (let d of items){
    html+=`<p class="${coun} t-tl fw-bold" onclick="getContent('${siteName}',this.id,'${d[0]}')">${d[1]}</p><div id="${d[0]}" class="content ${coun}" onclick="getContent('${siteName}',this.id,'${d[0]}')"></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function msnGetContent(id){
  try{var res = await fetch('https://assets.msn.com/content/view/v2/Detail/'+coun+'/'+id);
  var d=await res.json();

  if (d.type==='article'){
    html = '<p class="fs10">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name||'')+'</p>' +(d.body?d.body.replaceAll('\/>','\/><br>'):'')+ '<p class="text-end"><a href="' + (d.sourceHref||'') + '" target="_blank">分享</a></p><br>';
  } else if (d.type==='slideshow'){
    var slides=d.slides;
    var slidesHtml='';
    for (let s of slides){
      slidesHtml+='<img src="'+(s.image.url?s.image.url:'')+'"><br><p>'+(s.title?s.title:'')+'</p>'+(s.body?s.body:'');
    }
    html = '<p class="fs10">'+(d.updatedDateTime?cvt2Timezone(d.updatedDateTime):'')+' | '+(d.provider.name||'')+'</p>' +slidesHtml+ '<p class="text-end"><a href="' + (d.sourceHref||'') + '" target="_blank">分享</a></p><br>';
  } 
  }catch{html='<p><a href="' + ((d && d.sourceHref)||'') + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    PE INSIGHTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function peInsightsGetList(siteName,t){
  try{var k=3;
  for (let i=1;i<k;i++){
    url=preStr+'https://pe-insights.com/page/'+((rr-1)*k+i)+'?s='+t+'&et_pb_searchform_submit=et_search_proccess&et_pb_include_posts=yes&et_pb_include_pages=yes';console.log(url);
    let res=await fetch(url);
    let str=await res.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, "text/html");
    var hh=doc.querySelectorAll('h2.entry-title');
    for (let h of hh){
      items.push([h.children[0].href,h.innerText,h.nextElementSibling.innerText])
    }
  }
  for (let h of items){
    html+=`<div class="t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="title">${h[1]}</p></div><p class="fs10">${h[2]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function peInsightsGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var img=doc.querySelector('section[data-id="e95520d"]');
  var a=doc.querySelector('section[data-id="4813b0f"]');

  if (a) {
    html = img.outerHTML+'<br>'+a.outerHTML.replaceAll(/<span[\s\S]*?">/g,'') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    THE NEWSLENS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function newslensGetList(siteName,t){
  try{
  if(rr==1){url=preStr+'https://www.thenewslens.com/'+t}else{url=preStr+'https://www.thenewslens.com/'+t+'page'+rr};console.log(url);
  var res = await fetch(url);
  var str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('h3');
  if (hh.length==0){var hh=doc.querySelectorAll('div.item-title.h6')};
  for (let h of hh){
    items.push([h.querySelector('a').href,h.querySelector('a').innerText])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function newslensGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+doc.querySelector('div.item-froms').innerText.replace(/\s+/g,' ')+'</p>'+doc.querySelector('section.item.article-body').outerHTML + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    REUTERS FROM TRADINGVIEW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function reutersGetList(siteName,t){
  try{
  if (t.slice(0,6)=='market'){url=preStr+'https://news-mediator.tradingview.com/news-flow/v2/news?filter=lang:zh-Hant&filter='+t+'&filter=provider:reuters&client=screener';console.log(url)}
  else {url=preStr+'https://news-mediator.tradingview.com/news-flow/v2/news?filter='+t+'&filter=lang:zh-Hant&filter=provider:reuters&client=screener';console.log(url)}
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.items){
    items.push([h.storyPath,h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function reutersGetContent(id){
  try{const res = await fetch(preStr+'https://tw.tradingview.com'+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+cvt2Timezone(doc.querySelector('time').dateTime)+' | '+doc.querySelector('.container-S9SJ08EW').querySelector('span').innerText+'</p>' +doc.querySelector('.body-KX2tCBZq.body-pIO_GYwT.content-pIO_GYwT').outerHTML+'<p class="text-end"><a href="https://tw.tradingview.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://tw.tradingview.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    SINA
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function sinaGetList(siteName,t){
  try{
  if (/[0-9]/.test(t)){
    url=preStr+'https://cj.sina.com.cn/k/api/article/lists_by_author?uid='+t+'&page='+rr+'&count=20';console.log(url);
    const res=await fetch(url);const str=await res.json();
    for (let h of str.result.data.lists){items.push([h.url,h.title]);}
  } else {
    url=preStr+'https://api.cj.sina.cn/transmit?pid=finance_wap_proxy_fl_1663832597&smartFlow='+t+'&up='+(rr-1)+'&pageSize=30';console.log(url);
    const res=await fetch(url);const str=await res.json();
    for (let h of str.data){items.push([h.wapurl,h.title]);}
  }
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`;}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function sinaGetContent(id){
  try{const res = await fetch(preStr+id);const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  if (/[0-9]/.test(rt)){
  html='<p class="fs10">'+doc.querySelector('.date-source').innerText+'</p>'+doc.querySelector('#artibody').outerHTML.replace(/src="data:image[\s\S]*?data-src/g,'src') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';   
  } else {
  html='<p class="fs10">'+doc.querySelector('time').innerText.replace(/\s+/g,' ')+'</p>'+doc.querySelector('section.art_pic_card.art_content').outerHTML.replace(/src="data:image[\s\S]*?data-src/g,'src') + '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>'; 
  }}catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    SUBSTACK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function substackGetList(siteName,t){
  try{url=preStr+'https://'+t+'.substack.com/api/v1/archive?sort=new&limit=20&offset='+(rr-1)*20;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.slug,h.title])
  }
  for (let h of items){
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function substackGetContent(id){
  try{const res = await fetch(preStr+'https://'+rt+'.substack.com/api/v1/posts/'+id);
  const str=await res.json();
  html = '<p class="fs10">'+cvt2Timezone(str.updated_at)+'</p><p>'+str.subtitle+'</p>'+str.body_html+'<p class="text-end"><a href="https://'+rt+'.substack.com/p/' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://'+rt+'.substack.com/p/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    TECH NEWS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function technewsGetList(siteName,t){
  try{url=preStr+'https://cdn.'+t+'page/'+rr;console.log(url);
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function technewsGetContent(id){
  try{const res = await fetch(preStr+id.replace('https://','https://cdn.').replace('finance.',''));
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");

  if (doc.querySelector('.copy')!==null){
    var t=doc.querySelector('.date');
    var z = doc.querySelector('.copy').outerHTML;
  } else {
    var t=doc.querySelectorAll('span.body')[1];
    var a = doc.querySelector('.bigg');
    var b = doc.querySelector('.indent');
    var z=a.outerHTML+b.outerHTML;
  }

  html = '<p class="fs10">'+t.innerText+'</p>'+z+ '<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>'
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    TWT
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function twtGetList(siteName,t){
  try{
  const res=await fetch('https://nitter.poast.org/'+t+cursor);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  const sm=doc.querySelector('.show-more').children[0].href;cursor=sm.slice(sm.indexOf('?'));
  items=doc.querySelectorAll('.tweet-body');
  for (let h of items){
    html+='<p class="fs10">'+(h.querySelector('.tweet-date')?.innerText??'')+' | '+(h.querySelector('.fullname')?.innerText??'')+' '+(h.querySelector('.username')?.innerText??'')+'</p>'+(h.querySelector('.tweet-content.media-body')?.outerHTML.replaceAll('<div','<p').replaceAll('</div>','</p>')??'');
    try{var img=h.querySelector('.attachments').querySelectorAll('img');
    if (img){for (let i of img){html+='<img src="'+i.src+'">';}}
   }catch{};
   html+='<br><hr>';
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    UDN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function udnGetList(siteName,t){
  try{url='https://udn.com/api/more?'+t+'&page='+(rr-1);console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  if (str.lists.length<18){var k=5}else{var k=1};
  for (let i=0;i<k;i++){
    var url='https://udn.com/api/more?'+t+'&page='+((rr-1)*k+i);console.log(url);
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.lists){
      items.push([h.titleLink.slice(0,h.titleLink.indexOf('?')),h.title])
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function udnGetContent(id){
  try{const res = await fetch('https://udn.com/'+id);
  const str=await res.text();
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  var t=doc.querySelector('.authors');
  var a=doc.querySelector('.article-content');
  html = '<p class="fs10">'+t.innerText+'</p>'+a.outerHTML + '<p class="text-end"><a href="https://udn.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://udn.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function udnGetSearchResults(siteName,t){
  try{url=preStr+'https://udn.com/api/more?channelId=2&type=searchword&id=search:'+t+'&page='+rr;
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str){
    items.push([h.titleLink,h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    UDN MONEY
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function udnMoneyGetList(siteName,t){
  try{url=preStr+'https://money.udn.com/rank/ajax_newest/1001/'+t+'/'+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.story__content a');
  for (let h of hh){
    items.push([h.href.slice(0,h.href.indexOf('?')),h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function udnMoneyGetContent(id){
  try{const res = await fetch(preStr+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+doc.querySelector('time').innerText+' | '+doc.querySelector('.article-body__info').innerText+'</p>' +doc.querySelector('.article-body__editor').outerHTML+'<p class="text-end"><a href="' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function udnMoneyGetSearchResults(siteName,t){
  try{url=preStr+'https://money.udn.com/search/result/1001/'+t+'/'+rr;console.log(url);
  let res=await fetch(url);
  let str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('.story__content a');
  for (let h of hh){
    items.push([h.href.slice(0,h.href.indexOf('?')),h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    WEALTH
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wealthGetList(siteName,t){
  try{var p=t.split('|');var op=p[0];var t=p[1];
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
  
  url='https://www.wealth.com.tw/graphql';
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
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function wealthGetContent(id){
  try{payload={
    "operationName": "Article",
    "variables": {
      "id": id
    },
    "query": "query Article($id: ID!, $token: String) {\n  article(id: $id, token: $token) {\n    ...ArticleBaseFields\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  title\n  cover\n  coverText\n  content\n  releasedAt\n  authors {\n    name\n  }\n}\n"
  };

  url='https://www.wealth.com.tw/graphql';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  var data=str.data.article;
  var content=JSON.parse(str.data.article.content);

  html = '<p class="fs10">'+cvt2Timezone(data.releasedAt)+' | '+data.authors[0].name+'</p><img src="https://static.wealth.com.tw/'+data.cover+'"><p class="fs10">'+data.coverText+'</p><div id="'+id+'__">aaaaa</div><p class="text-end"><a href="https://www.wealth.com.tw/articles/' + id + '" target="_blank">分享</a></p><br>';
  var body='';    
  for (let c of content){
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
  html=html.replace('aaaaa',body);
  }catch{html='<p><a href="https://www.wealth.com.tw/articles/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function wealthGetSearchResults(siteName,t){
  try{
    payload={
      "operationName": "Articles",
      "variables": {
        "offset": (rr-1)*50,
        "limit": 50,
        "searchTerm": t,
        "viewOrderType": null
      },
      "query": "query Articles($offset: Int, $limit: Int, $type: ArticleType, $vipOnly: Boolean, $searchTerm: String, $isFameColumn: Boolean, $magazineId: ID, $authorId: ID, $viewOrderType: ArticleViewOrderType) {\n  articles(\n    offset: $offset\n    limit: $limit\n    type: $type\n    vipOnly: $vipOnly\n    searchTerm: $searchTerm\n    isFameColumn: $isFameColumn\n    magazineId: $magazineId\n    authorId: $authorId\n    viewOrderType: $viewOrderType\n  ) {\n    ...ArticleBaseFields\n    __typename\n  }\n}\n\nfragment ArticleBaseFields on Article {\n  id\n  state\n  title\n  subtitle\n  cover\n  coverText\n  coverAlt\n  content\n  contents\n  type\n  vipOnly\n  views\n  video {\n    id\n    youtubeId\n    playlistId\n    __typename\n  }\n  authors {\n    id\n    name\n    state\n    fameColumn {\n      id\n      avatar\n      description\n      __typename\n    }\n    __typename\n  }\n  directors\n  organizers {\n    id\n    name\n    state\n    fameColumn {\n      id\n      avatar\n      description\n      __typename\n    }\n    __typename\n  }\n  hashtags {\n    id\n    name\n    __typename\n  }\n  categories {\n    id\n    name\n    __typename\n  }\n  releasedAt\n  createdAt\n  updatedAt\n  deletedAt\n  isHeadline\n  isPinned\n  isSponsored\n  __typename\n}\n"
    }

  url='https://www.wealth.com.tw/graphql';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();  
  for (let h of str.data.articles){
    items.push([h.id,h.title])
  }
  
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    WSCN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wscnGetList(siteName,t){
  try{url='https://api-one-wscn.awtmt.com/apiv1/content/information-flow?accept=article,chart&action=upglide&limit=20&channel='+t+'&cursor='+cursor;console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.data.next_cursor;
  for (let h of str.data.items){
    if (h.resource_type!=='topic'&&h.resource_type!=='theme'){
      items.push([h.resource_type+'s/'+h.resource.id,h.resource.title]);
    } else {
      var hh=h.resource.contents;
      for (let d of hh){
        items.push([d.resource_type+'s/'+d.resource.id,'【'+h.resource.title+'】'+d.resource.title]);        
      }
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function wscnGetContent(id){
  try{const res = await fetch('https://api-one-wscn.awtmt.com/apiv1/content/'+id+'?extract=0');
  const str=await res.json();
  html = '<p class="fs10">'+cvt2Timezone(str.data.display_time*1000)+'</p>'+str.data.content + '<p class="text-end"><a href="https://wallstreetcn.com/' + id + '" target="_blank">分享</a></p><br>';
  if (str.videos!==undefined){html+='<video style="width:100%" tabindex="-1" playsinline webkit-playsinline controls><source src="https://today-obs.line-scdn.net/'+str.videos[0].uri+' type="application/x-mpegURL"></source></video>'};
  }catch{html='<p><a href="https://wallstreetcn.com/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}

async function wscnGetSearchResults(siteName,t){
  try{url='https://api-one-wscn.awtmt.com/apiv1/search/article?limit=20&query='+t+'&cursor='+cursor;
  let res=await fetch(url);
  let str=await res.json();
  cursor=str.data.next_cursor;
  for (let h of str.data.items){
    items.push(['articles/'+h.id,h.title])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}


//    XUEQIU
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function xueqiuGetList(siteName,t){
  try{
  if (/[0-9]/.test(t)){
    var k=3;lastId='';
    for (let i=1;i<=k;i++){
      url='https://xueqiu.com/recommend-proxy/anonymous_recommend.json?category='+t+'&page='+((rr-1)*k+i)+'&last_id='+lastId;console.log(url);
      const res=await fetch(url);const str=await res.json();lastId=str.list[str.list.length-1].id;
      for (let h of str.list){items.push([h.target,(h.title===undefined||h.title===null||h.title==='')?h.description:h.title]);}    
    }
    for (let h of items){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`;
    }    
  } else {
    var k=3;
    for (let i=1;i<=k;i++){
      url='https://xueqiu.com/query/v1/search/status.json?sortId=2&q='+t+'+&page='+((rr-1)*k+i);console.log(url);
      const res=await fetch(url);const str=await res.json();
      for (let h of str.list){items.push([h.target,(h.title===undefined||h.title===null||h.title==='')?h.description:h.title,h.created_at,h.text,h.user.screen_name]);}    
    }
    for (let h of items){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">${cvt2Timezone(h[2])} | ${h[4]}</p>${h[3]}<p class="text-end"><a href="https://xueqiu.com${h[0]}" target="_blank">分享</a></p><br></div><hr>`;
    }    
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function xueqiuGetContent(id){
  try{const res=await fetch('https://xueqiu.com'+id);const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  html = '<p class="fs10">'+doc.querySelector('.avatar__subtitle').innerText+'</p>'+doc.querySelector('.article__bd__detail').outerHTML+ '<p class="text-end"><a href="https://xueqiu.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://xueqiu.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    YAHOO TW
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function yahooTWGetList(siteName,t){
  try{coun='TW';
  if (t.slice(-2)=='__'){t=t.slice(0,-2);coun='US'};
  var url='https://ncp-gw-finance.media.yahoo.com/api/v2/gql/stream_view?count=200&imageFormat=WEBP&namespace=finance&ntkEnabled=false&ssl=true&id=neo-ntk-assetlist-stream&site=finance&version=v1&enableCrossModuleDedup=true&snippetCount=200&listId='+t;
  let res=await fetch(url);
  let str=await res.json();
  var data=str.data.main.stream.slice((rr-1)*50,rr*50);
  for (let h of data){
    if(h.content){
      h=h.content;
      items.push([h.id,h.title])
    }
  }
  for (let h of items){
    html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function yahooTWGetContent(id){
    try{const res = await fetch('https://www.yahoo.com/caas/content/article/?region='+coun+'&uuid='+id);
    const str=await res.json();
    var a=str.items[0].data.partnerData;
    var b=str.items[0].markup.replaceAll('data-src','src').replace(/padding-bottom[\\s\\S]*?%/g,'');
    html = '<p class="fs10">'+cvt2Timezone(a.publishDate)+' | '+a.publisher+'</p>'+ b + '<p class="text-end"><a href="' + a.finalUrl + '" target="_blank">分享</a></p><br>';
  }catch{html='<p>尚無內容</p><br>'}
  return html;
}

async function yahooTWGetSearchResults(siteName,t){
  try{
  coun='TW'; var k=3;
  for (let i=0;i<k;i++){
  url='https://tw.news.yahoo.com/_td-news/api/resource/NuwaSearchService.newsSearch;loadMore=true;query='+t+';offset='+(k*10*(rr-1)+(i*10));console.log(url);
  let res=await fetch(url);
  let str=await res.json();
  var data=str.data;
  for (let h of data){
    items.push([h.id,h.title,h.published_at,h.provider_name])
  }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}<br><span id="dateAuthor-${h[0]}" class="fs10 fw-normal">${h[2]} | ${h[3]}</span></p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

//    YAHOO VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function yahooVideoGetList(siteName,t){
  try{var payload={"payload":{"gqlVariables": {"main": {"pagination": {"uuids": uuids}}}},"serviceConfig": {"listId": t,"count": 200,"snippetCount": 50}};
  var url='https://finance.yahoo.com/xhr/ncp?location=US&queryRef=videosCategoryNeo&serviceKey=ncp_fin&lang=en-US&region=US';
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'text/plain;charset=UTF-8',},
    body: JSON.stringify(payload),
    });
  var str=await res.json();
  uuids=str.data.main.pagination.uudis;
  
  for (let h of str.data.main.stream){
    items.push([h.id,h.content.title,h.content.pubDate,h.content.duration,h.content.thumbnail.originalUrl,h.content.canonicalUrl.url])
  }

  for (let h of items){
    html+=`<div onclick="yahooVideoGetContent(this.id,'${h[0]}','${h[5]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="yahooVideoGetContent(this.id,'${h[0]}','${h[5]}')"></div><hr>`
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}

async function yahooVideoGetContent(clickedId,id,url){
  var cEl=document.getElementById(id);
  if (cEl.style.display=='none' || cEl.style.display==''){
    cEl.style.display='block';
    html='<iframe id="video-'+id+'" src="'+url+'?format=embed" scrolling=no style="width:100%;height:auto"></iframe>'+'<p class="text-end"><a href="' + url + '" target="_blank">Share</a></p><br>';
    cEl.innerHTML=html;
    document.getElementById('video-'+id).parentElement.previousElementSibling.firstChild.setAttribute('style', 'display: none !important;');
  } else {
    if (clickedId=='' || cEl.innerHTML.indexOf('<video')==-1){
      cEl.style.display='none';
      cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()
    }
  }
}


//    YTN
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function ytnGetList(siteName,t){
  try{
  if (t.slice(0,8)=='mcd=0117'){url=preStr+'https://star.ytn.co.kr/ajax/getMoreNews.php'}else{url=preStr+'https://www.ytn.co.kr/ajax/getMoreNews.php'};
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
    body: t+'&page='+rr,
    });
  var str=await res.text();
  for (let a of JSON.parse(str).data){
    items.push([a[1]+'_'+a.join_key,a.title,a.n_date])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="fs10">$h[2]</p></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function ytnGetContent(id){
  try{const res = await fetch(preStr+'https://www.ytn.co.kr/_ln/'+id);
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html=(doc.querySelector('.arti_summary')?.innerHTML??'')+(doc.querySelector('#YTN_Player')?.outerHTML??'')+(doc.querySelector('#CmAdContent')?.outerHTML??'')+ '<p class="text-end"><a href="https://www.ytn.co.kr/_ln/'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://www.ytn.co.kr/_ln/' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}




//    d: MSN, MSN CHANNEL, WSJ, VIDEO GET CONTENT
//    p: BBG
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    BLOOMBERG VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbgVideoGetList(siteName,t){
  try{
    url=preStr+'https://personalization.bloomberg.com/user/recommendations/cfru?timezoneOffset=-28800000&limit=50&resourceTypes=Video&offset='+(rr-1)*30+'&includedSites='+t;
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str){
      items.push([h.assetID,h.headline,h.publishedAt,h.duration,h.thumbnailUrl,h.url])
    }
    items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

    for (let h of items){
      html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://www.bloomberg.com/media-manifest/videos/android/WiFi/${h[0]}.m3u8')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${cvt2Timezone(h[2])} | <span class="fw-bold">${cvtS2HHMMSS(h[3],1000)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','https://www.bloomberg.com/media-manifest/videos/android/WiFi/${h[0]}.m3u8')"></div><hr>`
    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    MSN VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function msnVideoGetList(siteName,t){
  try{
  if (t.slice(0,3)==='vid'){  // MSN VIDEO FROM CHANNEL
    for (var i=0;i<2;i++){
      url='https://assets.msn.com/service/news/feed/pages/providerfullpage?market=en-us&timeOut=10000&ocid=finance-data-feeds&apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&CommunityProfileId='+t+'&cm=en-us&User=m-00A80177A097658A10770F1FA15F64FF&newsSkip='+12*((rr-1)*2+i)+'&query=newest&$skip='+((rr-1)*2+i);
      let res=await fetch(url);
      let str=await res.json();
      for (let h of str.sections[0].cards){
        if(h.type=='video'){
          items.push([h.id,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url,h.provider.name]);
        }
      }
    }
  } else {  // MSN VIDEO FROM CATEGORY
    url='https://assets.msn.com/service/MSN/Feed/me?apikey=0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM&cm=en-us&contentType=video&query='+t+'&queryType=myfeed&$top=50&$skip='+(rr-1)*50;
    let res=await fetch(url);
    let str=await res.json();
    for (let h of str.value[0].subCards){
      items.push([h.sourceId,h.title,h.publishedDateTime,h.videoMetadata.playTime,h.images[0].url,h.url,h.externalVideoFiles[1].url,h.provider.name]);
    }
  }
  
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${h[7]}<br>${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    MSN VIDEO FROM CHANNEL
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
async function msnChannelVideoGetList(siteName,t){
  try{
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
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  return html;
  }catch{html='<p>尚無內容</p>'}
}


//    REUTERS VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function reutersVideoGetList(siteName,t){
  try{
    url='https://www.reuters.com/pf/api/v3/content/fetch/video-playlist-by-collection-v1?query={"collection_alias":"featured-video","offset":'+(rr-1)*20+',"size":20,"website":"reuters"}&d=284&mxId=00000000&_website=reuters';
    let res=await fetch(url);
    let str=await res.json();
    let raw=str.result.channels.filter(s => s.id === t);
    for (let h of raw[0].videos){
      items.push([h.id,h.title,h.published_time,h.duration,h.thumbnail.url,h.source.hls])
    }
    items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});

    for (let h of items){
      html+=`<div onclick="videoGetContent(this.id,'${h[0]}','https://www.reuters.com/video/watch/id'+'${h[0]}','${h[5]}')"><img src="${h[4]}" class="pb-2"><span class="title">${h[1]}</span><br><span class="fs10">${cvt2Timezone(h[2])} | </span><span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','https://www.reuters.com/video/watch/id'+'${h[0]}','${h[5]}')"></div><hr>`

    }
  }catch{html='<p>No Content.</p>'}
  return html;
}


//    WSJ VIDEO
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function wsjVideoGetList(siteName,t){
  try{url='https://video-api.shdsvc.dowjones.io/api/legacy/find-all-videos?lang=en-us&count=50'+t+'&page='+(rr-1);
  let res=await fetch(url);
  let str=await res.json();
  for (let h of str.items){
    var thumbnail=h.thumbnailList[0].url;
    items.push([h.id.replace('{','').replace('}',''),h.name,h.formattedCreationDate,h.duration,thumbnail.slice(0,thumbnail.indexOf('?')),h.linkURL,h.hls])
  }
  items.sort((a, b) => {return Number(new Date(b[2]).getTime()) - Number(new Date(a[2]).getTime())});
  
  for (let h of items){
    html+=`<div onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"><img src="${h[4]}" class="pb-2"><p class="title">${h[1]}</p><p class="fs10">${cvt2Timezone(h[2])} | <span class="fs10 fw-bold">${cvtS2HHMMSS(h[3],1)}</span></p></div><div id="${h[0]}" class="content" onclick="videoGetContent(this.id,'${h[0]}','${h[5]}','${h[6]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
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
      var e=window.event;
      if (e && e.target.tagName==='VIDEO'){return}else{
      cEl.style.display='none';
      if (cEl.querySelectorAll('video').length>0){cEl.querySelectorAll('video').forEach(v=>v.pause())};
      try{cEl.previousElementSibling.firstChild.setAttribute('style', 'display: block !important;');
      cEl.previousElementSibling.previousElementSibling.scrollIntoView()}catch{document.body.scrollTop = 0;document.documentElement.scrollTop = 0}
    }
  }
}


//    THE ECONOMIST MAGAZINE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dlEcoMag(){
  var date = prompt('Issue Date:');date=date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
  var link = document.createElement('a');
  link.href = `https://github.com/hehonghui/awesome-english-ebooks/raw/master/01_economist/te_${date}/TheEconomist.${date}.epub`;
  link.target = '_blank';link.download = `TheEconomist.${date}.epub`;
  link.click();link.remove();
}

// async function openBook(input){
//   options.style.display='none';
//   if (input.files.length === 0) {alert('Please select an EPUB file.');return;}
//   const file=input.files[0];
//   const reader=new FileReader();

//   reader.onload = async (e) => {
//     const arrayBuffer=e.target.result;const book=ePub({ replacements: 'blobUrl' });
//     await book.open(arrayBuffer);
//     var jsonOutput = {
//       metadata: book.packaging.metadata,
//       chapters: []
//     };

//     let spineItems = book.spine.spineItems;
//     var i=0;
//     for (let item of spineItems) {
//       i=i+1;
//       let chapter = await item.load(book.load.bind(book));
//       let str = await item.render();
//       var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
//       var content=doc.querySelector('body').innerHTML;
//       jsonOutput.chapters.push({
//         id: 'chapter_'+i,
//         href: item.href,
//         content: content
//       });
//     }
    
//     var array=[];
//     for (let c of jsonOutput.chapters){
//       var parser=new DOMParser();var doc = parser.parseFromString(c.content, "text/html");
//       if(doc.querySelector('h1')){
//         c.section=doc.querySelector('.te_section_title')?.textContent??null;
//         if(c.section!==null){array.push(c)};
//       }
//     }
//     var tabs = [...new Set(array.map(item => item.section))];console.log(tabs);
//     ecoMagContent = Object.values(array.reduce((acc, item) => {
//       if (!acc[item.section]) {
//         acc[item.section] = { section: item.section, content: [] };
//       }
//       acc[item.section].content.push(item);
//       return acc;
//     }, {})
//     );console.log(ecoMagContent);

//     channelList.innerHTML='';
//     for (let tab of tabs){channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('ecoMag','The Economist | ${tab}','${tab}')">${tab}</button>`;}
//     openChannelList();
//     get1stList('ecoMag','The Economist | Leaders','Leaders');
//   }
//   reader.readAsArrayBuffer(file);
// };

async function openBook(input){
  if (input.files.length === 0) {alert('Please select an EPUB file.');return;}
  const file=input.files[0];
  const reader=new FileReader();

  reader.onload = async (e) => {
    const arrayBuffer=e.target.result;const book=ePub({ replacements: 'blobUrl' });
    await book.open(arrayBuffer);
    var jsonOutput = {
      metadata: book.packaging.metadata,
      chapters: []
    };

    let spineItems = book.spine.spineItems;
    var i=0;
    for (let item of spineItems) {
      i=i+1;
      let chapter = await item.load(book.load.bind(book));
      let str = await item.render();
      var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
      var content=doc.querySelector('body').innerHTML;
      jsonOutput.chapters.push({
        id: 'chapter_'+i,
        href: item.href,
        content: content
      });
    }
    
    var array=[];
    for (let c of jsonOutput.chapters){
      var parser=new DOMParser();var doc = parser.parseFromString(c.content, "text/html");
      if(doc.querySelector('h1')){
        c.section=doc.querySelector('.te_section_title')?.textContent??null;
        if(c.section!==null){array.push(c)};
      }
    }
    var tabs = [...new Set(array.map(item => item.section))];
    ecoMagContent = Object.values(array.reduce((acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = { section: item.section, content: [] };
      }
      acc[item.section].content.push(item);
      return acc;
    }, {})
    );
  }

  document.getElementById('copy-btn').style.display='inline-block';
  reader.readAsArrayBuffer(file);
};

function copyJSONToClipboard(){
  var jsonStr = JSON.stringify(ecoMagContent);
  navigator.clipboard.writeText(jsonStr).then(() => {
    document.getElementById('copy-btn').style.display='none';
    console.log('Copied.');  
  }).catch(err => {
    console.error('Failed: ', err);
  });
}

async function getEcoMagFromJson(date){
  if (date===''){date=document.getElementById('ecoMagDate').value;}
  const res=await fetch('https://raw.githubusercontent.com/evenbeiter/media/refs/heads/main/books/te/'+date+'.json');
  const str=await res.json();
  ecoMagContent=str[0];
  channelList.innerHTML='';
  for (let h of ecoMagContent.content){channelList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="get1stList('ecoMag','The Economist | ${h.section}','${h.section}')">${h.section}</button>`;}
  openChannelList();
  get1stList('ecoMag','The Economist | Leaders','Leaders');
}

// async function ecoMagGetList(siteName,t){
//   try{var hh = ecoMagContent.find(item => item.section === t);
//   for (let h of hh.content){html+=h.content.replace(/ class="[\s\S]*?"/g,'').replace('<h1>',`<p class="title t-tl en-us" onclick="getContent('ecoMag',this.id,'${h.id}')">`).replace('</h1>','</p>').replace('<h3>','<p class="title t-tl en-us">').replace('</h3><h3>',`</p><div id="${h.id}" class="content" onclick="getContent('ecoMag',this.id,'${h.id}')"><p class="fs10">`).replace('</h3>','</p>').replace(/<p><i>For subscribers only[\s\S]*?<\/p>/g,'').replace(/<p>This article was downloaded by[\s\S]*?<\/p>/g,'').replaceAll('<p>','<p class="en-us">')+'</div><hr>'}
//   }catch{html='<p>No Content.</p>'}
//   return html;
// }

async function ecoMagGetList(siteName,t){
  try{
  if (t==''){
    var issue=getLastNSats(10);
    html+=`<div class="input-group mb-3"><input type="search" id="ecoMagDate" class="form-control my-2"><button class="btn sepia-contrast my-2" type="button" onclick="getEcoMagFromJson('')">Read</button></div>`;
    for (let date of issue){
      const res=await fetch('https://raw.githubusercontent.com/evenbeiter/media/refs/heads/main/books/te/'+date+'.json');const str=await res.json();
      ecoMagContent=str[0];
      html+=`<div onclick="getEcoMagFromJson('${date}')"><img src="${ecoMagContent.cover}"><p class="title">${ecoMagContent.title}</p></div><hr>`
    }
  } else {
  var hh = ecoMagContent.content.find(item => item.section === t);
  for (let h of hh.articles){html+=`<div onclick="getContent('${siteName}',this.id,'${h.url}')">${h.title}</div><div id="${h.url}" class="content" onclick="getContent('${siteName}',this.id,'${h.url}')">${h.content}</div><hr>`}
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}
