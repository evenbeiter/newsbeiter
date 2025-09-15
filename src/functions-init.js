// (function(){
    
var onEVBT=true; if (window.location.href.indexOf('evenbeiter.github.io')==-1){onEVBT=false;}
const ab=[['','Latest']];
const apollo=[['','Latest']];
const bbc=[['','首頁'],['topics/c83plve5vmjt','國際'],['topics/cd6qem06z92t','台灣'],['topics/cpydz21p2zmt','經濟'],['topics/cq8nqywy37yt','財經'],['topics/cgqny5mmrezt','股市'],['topics/cn05jy5nv81t','川普關稅'],['topics/cgvl47l38e1t','影片']];
const bbg=[['MARKETS','Markets'],['ECONOMICS','Economics'],['INDUSTRIES','Industries'],['TECHNOLOGY','Technology'],['BUSINESS','Business'],['VIEW','View'],['POLITICS','Politics'],['AT2bBytfUHQ/john-authers','John Authers']];
const blk=[['','Latest']];const ishares=[['','Latest']];
const bnext=[['articles','新聞'],['ranking','熱門'],['topics','專題'],['tags/AI','AI'],['categories/semiconductor','半導體'],['categories/AI','AI與大數據'],['categories/5g','5G通訊'],['categories/car','電動車/交通科技'],['categories/manufacture','智慧製造'],['categories/media','影音新媒體'],['categories/fintech','金融科技'],['categories/digitalskill','職場工作術']];
const boa=[['','Latest']];
const businessToday=[['news/','最新'],['catalog/183007/list/page/','投資理財'],['catalog/183020/list/page/','保險稅制'],['catalog/183014/list/page/','產業時事'],['catalog/183028/list/page/','職場生活']];
const businessWeekly=[['0000000000','最新'],['0000000316','國際'],['0000000319','財經'],['0000000326','管理'],['0000000312','焦點'],['0000000342','CEO學院']];
const cna=[['aall','即時'],['aopl','國際'],['aie','產經'],['asc','證券'],['ait','科技'],['ahel','生活'],['amov','娛樂']];
const cnyes=[['headline','頭條'],['wd_stock','美股'],['tw_stock','台股'],['ai_headline','AI頭條'],['ai_wd_stock','AI美股'],['ai_tw_stock','AI台股'],['tech','科技'],['fund','基金'],['tw_money','理財'],['forex','外匯'],['future','期貨'],['mag','雜誌'],['topics','專題'],['celebrity_area','新視界'],['bc','區塊鏈'],['cn_stock','陸港股'],['cnyeshouse','房產']];
const cnyeshao=[['W_1','最新'],['W_2','推薦'],['W_8','美股'],['W_40','台股'],['W_14','國際'],['W_62','宏觀'],['W_11','外匯'],['W_13','商品期貨'],['W_40','科技'],['30','美股艾大叔'],['361680','華爾街脈動'],['444','RexAA'],['443','小小天下'],['29','北風窗'],['113','老馬記']];
const ctee=[['livenews/ctee/','即時'],['category/finance/','要聞'],['category/stock/','證券'],['category/finance/','金融'],['category/wealth/','理財'],['category/industry/','產業'],['category/house/','房市'],['category/world/','國際'],['category/view/','觀點'],['category/bookstore/','書房'],['category/lohas/','樂活']];
const dw=[['經濟/s-1682','經濟'],['政治/s-1681','政治'],['科技創新/s-1686','科技創新'],['文化/s-1683','文化']];
const gsam=[['','Latest']];
const iOd=[9,11,0,20,18,18,2,5,1,13,7,12,14,8,13,7,16,17,18,4,19,18,10,21,3,22,6,15];
const uLi=['ps','it','new','?','ap','sbe','rl','.','nd','h','fet','tt','on','er','re','=','co','m','/','i',':','ch','u'];
const invesco=[['insights/topic/market-and-economic-insights/jcr:content/root/responsivegrid/container_component__66575723/container-par/content_cards','Market & Economic'],['insights/topic/investment-related-insights/jcr:content/root/responsivegrid/container_component_1874952832/container-par/content_cards','Investment'],['solutions/invesco-etfs/etf-insights/jcr:content/root/responsivegrid/container_component/container-par/content_cards_463948_1078104609','ETF']];
const invtCom=[['rates-bonds/u.s.-10-year-bond-yield-news/','債市'],['news/forex-news/','匯市'],['news/latest-news/','最新'],['news/economy/','財經'],['news/economic-indicators/','經濟數據'],['news/commodities-news/','原物料'],['news/cryptocurrency-news/','加密貨幣'],['indices/japan-ni225-news/','日經'],['indices/topix-news/','東證'],['analysis/market-overview/','市場評論'],['analysis/editors-picks/','精選評論']];
const isbl=[['','Latest']];
const jin=[['','最新'],['topic/402/','精選圖表'],['topic/416','宏觀圖表'],['topic/415/','股市'],['topic/72/','金融大鱷'],['topic/20/','FED'],['topic/47/','ECB'],['topic/51/','BOJ'],['topic/31/','黃金'],['topic/388/','原油'],['topic/418/','川普'],['topic/373/','俄烏'],['topic/356/','中東'],['topic/352/','半導體']];
const jpm=[['https://am.jpmorgan.com/content/jpm-am-aem/americas/us/en/adv/insights/_jcr_content/root/responsivegrid/jpm_am_mosaic_copy.model.json','Latest'],['https://am.jpmorgan.com/content/jpm-am-aem/americas/us/en/adv/insights/market-insights/guide-to-the-markets/_jcr_content/root/responsivegrid/jpm_am_gtx_slide_vie.model.json__market-insights/guide-to-the-markets/mi-guide-to-the-markets-us','GTM'],['https://am.jpmorgan.com/content/jpm-am-aem/americas/us/en/adv/insights/market-insights/guide-to-alternatives/_jcr_content/root/responsivegrid/jpm_am_gtx_slide_vie.model.json__market-insights/guide-to-alternatives/mi-guide-to-alternatives','GTA'],['https://am.jpmorgan.com/content/jpm-am-aem/americas/us/en/adv/insights/etf-insights/guide-to-etfs/_jcr_content.linklistv2.json__market-insights/guide-to-etfs/guide-to-etfs','GTE'],['https://am.jpmorgan.com/content/jpm-am-aem/emea/no/en/adv/insights/market-insights/guide-to-the-markets/_jcr_content/root/responsivegrid/jpm_am_gtx_slide_vie.model.json__market-insights/guide-to-the-markets/mi-guide-to-the-markets-ce-en','GTEU'],['https://am.jpmorgan.com/content/jpm-am-aem/asiapacific/hk/en/adv/insights/market-insights/guide-to-the-markets/_jcr_content/root/responsivegrid/jpm_am_gtx_slide_vie.model.json__market-insights/guide-to-the-markets/guide-to-the-markets-asia','GTAS'],['https://am.jpmorgan.com/content/jpm-am-aem/americas/us/en/adv/insights/retirement-insights/guide-to-retirement/_jcr_content/root/responsivegrid/jpm_am_gtx_slide_vie_1506598259.model.json__retirement-insights/guide-to-retirement-us','GTR']];
const jpmpb=[['','Latest']];
const lineToday=[['top','焦點'],['finance','理財'],['100140','鉅亨'],['102394|103101','經濟工商'],['103214|100267','M平方'],['100295','今周刊'],['101131','CMoney'],['100422|100421|100423','商周'],['101170','路透社'],['100294','MoneyDJ'],['104453|101006','財訊'],['100150|103088','鏡週刊'],['101427','CTWANT'],['100237','東森'],['100167','TVBS'],['100004|101886','風傳媒'],['100275|101201','關鍵評論網'],['global','國際'],['100003','中央社'],['TOPIC-USelection|2024election','川普2.0'],['worldtrend','世界趨勢'],['101074','CNN'],['tech','科技'],['AI','AI'],['100317','數位時代'],['100341','科技新報'],['101196','科技報橘'],['104322','優分析'],['104264','產業定錨筆記'],['100198','經理人月刊'],['101499','德國之聲'],['100462','換日線'],['100568|100158','天下雜誌'],['101031','地球圖輯隊'],['101934|100394|103227','閱讀'],['domestic','國內'],['TOPIC-BingeWatching','追劇'],['TOPIC-KoreaStar','韓星最前線'],['100008','韓星網'],['105376','韓娛最前線'],['health','健康'],['life','生活'],['cleanandstorage','生活智慧王'],['100746|TOPIC-DIY','裝潢'],['fun','鄉民'],['entertainment','娛樂'],['travel','旅遊'],['TOPIC-TravelJapan','日本旅遊情報']];
const mindi=[['','最新']];
const ms=[['','Latest']];
const msnTW=[['Y_a0268fb1-402c-48ec-8946-c31ddd7751da', '即時新聞'],['Y_b4ddc302-8189-44e9-b136-9682cc7e3746', '即時財經'],['Y_5993abc4-f49c-49ce-bed0-a5b4b61dd9f6', '財經'],['Y_a484713e-0cec-4003-8fac-a629da5bcf3d', '兩岸國際'],['Y_fef3ac37-3667-4a34-92c0-3e373c55d307', '理財'],['Y_aced43e9-95ab-4e5c-a0c5-d035aeb2133b', '科技'],['Y_da100b0d-55ac-49d4-beae-84ffdcbf3da9', '生活'],['Y_e2c684a5-a8fe-4879-91b9-8d5dc50b5488', '居家設計'],['Y_b77e5da5-aea6-4ee3-8890-91990040926a', '健康'],['Y_57552325-541f-4702-b61e-f307056e39b1', '旅遊'],['Y_95fdd1de-0e14-47b2-a213-6edf24542702', '娛樂'],['Y_f3ddd032-c606-4c7f-b11f-cb16a3596ae2', '台灣'],['Y_7a50bf00-ca7e-4699-ac07-b31e1c3ae01f', '房地產'],['Y_fb97b38c-1cf6-445a-b579-f7b9b35f6590', '職場求職'],['Y_54b11fc3-6cd6-45d6-a669-1c0168275125', '職場焦點'],['vid-y9reuyeu7hkimpnrdtqpruibsfa4wd4bxxxip6dasjgrby33vd0a', '中央社'],['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', '彭博'],['vid-hvwu6j8yi9b0huc8bkawy5qhvdf3scbniqc8scbbbp6xvj6ftrda', '商周'],['vid-rh9wrnpgtjfx7dbmc38h4xkf6j00me2e9amvgkeqtmanw40mw36s', '天下'],['vid-xj7qtb3g69dr6auu9p8ueq57gnarhrxd5ej05gtswdmnwi02xxia', '德國之聲'],['vid-jwkt4swyp9iyjy43f5cbhi02ttt8enb5t6yms0ppdx869vubmasa', '東森'],['vid-nvte086i8a39iuemvaxwsicfmc2j6tvixtcu9uxbfwqrgaw857rs', 'TVBS新聞'],['vid-n0sumxg56bwh3bguneg5ynixqc3qyiacjst3idsyus5rkrjs3pts', '中時'],['vid-e8mmyirx39xyms90cigfcgdn9p7vdy6u0xe243c7tdm2hgwiypas', '遠見'],['vid-9eqa8gpyscx8v293p3hsyxipqngqd3j7wexky6y09d7eye90m9ya', '風傳媒'],['vid-ctia0d3wuyutasjyriw3uvt8vaa0u4pmwkv0fqpgiciaf5r54m5a', '鏡週刊'],['vid-caqxm27w0p49tmy0ar5urvpar0ccx2b0xdaatyw2nxfqkgab7bds', '早安健康'],['vid-pui6vcpvju95tisme52646g2d79dvjt7akm8cg8ahmrbi8u7a2xa', '康健'],['Y_321db332-7d5a-4672-96b5-2d342ca554fb', '焦點'],['Y_ab001b84-62eb-4605-96c4-12221f946e94', '新聞']];
const msnUS=[['Y_46b78bbb-31c4-4fc5-8a4a-858072348d06','News'],['Y_d1cad308-780e-4a75-ba34-6460811ccfe3','Tech'],['Y_99096e96-6d4f-401c-832b-461e08143a5a','Lifestyle'],['Y_69fcfcf0-f686-4b19-9901-0a4ce35b823d', 'Business'],['Y_ce1fe19d-4d60-4312-b4d6-8cba9aa76413', 'Stocks'],['Y_8c7b0706-a0d1-49f1-8603-5c33a3dadd73', 'Economics'],['Y_d6433e0a-2be3-4106-839c-5a40a5375514', 'AI'],['Y_dc6dc645-d63a-4c97-8812-3ecdf27695b8', 'SMID'],['Y_f457eae0-84c0-4d35-b1dc-8435b7b6c140', 'Generative AI'],['vid-08gw7ky4u229xjsjvnf4n6n7v67gxm0pjmv9fr4y2x9jjmwcri4s', 'Bloomberg'],['vid-mpxsw8rp392wedf25t8tfhk7r3b364q8dj75ks43nimmf06qg2es', 'Reuters'],['vid-r0r09b3muc6xnf5tv2est5f5ukjbkk67i9svrhyu3jy2pskkbems', 'MarketWatch'],['vid-y572a3ryyddhuiujs0xe2j4m4b6c3n2fp5hnux4jpsdand8h09ys', 'WSJ'],['vid-bpwfbvkfudq92wksju4upi9jrx2pn0ax46vrw0vkst93vpwr5pva', 'CNN'],['vid-v3atkpesfykfx7084fbu0cpbtx0jne99kctychfsn9ry96wsmbba', 'BBC'],['vid-r4du2vx0u9h0kr9tx7iyx55w7sneq7e6tg934epuehq3grvn05aa', 'Fortune'],['vid-n3h9ssyxg550pryvt4287xynyckhu84k5vc6n3tdqwsvtvmn2p0s', 'USA TODAY'],['vid-27xbtchrc5gpxe8uhvw9f24q2kqi9f0ppk7ptb8xw9v9sscheg6s', 'Motley Fool'],['vid-i3g0qyhrtn28biukcpyvsrmhccmv8k8ugtmtr6kqhb9dkf6ccrua', 'FOX News'],['vid-rvn4g4busxh65p6kgfvhye9atw9n8ebd46ut057ypkbm5n6xa5ts', 'BuzzFeed']];
const nb=[['','All'],['{921E72A4-5051-4B39-8273-7D833553B3F6}','Fixed Income'],['{2E93C31D-413D-4D7D-AC8D-D9C21D5372D6}','Equities'],['{7BC2AFCB-3CBD-448C-9C3E-556C97A543FA}','Multi-Asset'],['{34CE1C17-AF8D-4385-9B86-776EE519795D}','Public Real Assets'],['{72DFCB28-DD56-4266-8FAA-D887379A3F15}','Liquid Alts'],['{9FA955E6-01E1-405B-A205-2AA05834D459}','Private Equity'],['{33BE00CD-749A-4862-B004-0A6F837C6221}','Private Credit'],['{C4880DDA-A4F7-4DB7-A265-8327C3A0C7D9}','Specialty Alternatives']];
const newslens=[['latest-article/','最新'],['event-tag/380574-2025川普對等關稅/','對等關稅'],['tag/22338/','川普'],['category/economy/','經濟'],['category/business/','商業'],['category/personal-finance/','理財'],['tag/5260/','美債'],['category/tech/','科技'],['tag/3503/','供應鏈'],['tag/30/','台灣'],['category/world/','國際'],['category/us-canada/','美加'],['tag/83/','美國'],['category/europe/','歐洲'],['category/china/','中國'],['category/indo-pacific/','印太'],['tag/64/','日本'],['category/latin-america/','拉美'],['category/middle-east/','中東'],['category/africa/','非洲'],['author/BBC/','BBC中文'],['author/cnataiwan/','中央社'],['category/arts-culture/','藝文'],['category/literature/','文學'],['category/movie-tv/','影劇'],['category/health/','健康'],['category/lifestyle/','生活'],['category/psychology/','心理'],['category/language/','語文'],['author/bookdigest/','書摘'],['author/editor/','轉載']];
const daily=[['','最新']];
const idea=[['','最新']];
const peInsights=[['','Latest']];
const pimco=[['','Latest']];
var preStr=''; if (onEVBT===true){preStr=sCC(uLi,iOd)};
const reuters=[['market:bond,crypto,economic,etf,forex,futures,index,stock','最新'],['market:forex','外匯'],['market:bond','債市'],['market:stock','股市'],['market:index','指數'],['market:futures','期貨'],['market:economic','經濟'],['market:crypto','加密貨幣'],['market:etf','ETF'],['area:WLD','全球'],['area:AME','美國'],['area:EUR','歐洲'],['area:ASI','亞洲'],['area:OCN','大洋洲'],['area:AFR','非洲']];
const schroders=[['','Latest']];
const sina=[['sinago_finance_usstocks_feed','美股'],['2183570524','雪球']];
const ssga=[['','Latest']];
const substack=[['investmacro','COT'],['altgoesmainstream','Alt Goes Mainstream']];
const technews=[['technews.tw/','最新'],['technews.tw/category/semiconductor/','半導體'],['technews.tw/category/component/','零組件'],['finance.technews.tw/','財經'],['technews.tw/category/internet/','網路'],['technews.tw/category/cutting-edge/','尖端科技'],['technews.tw/topics/','系列專題'],['technews.tw/category/natural-science/環境科學/','環境科學'],['technews.tw/category/能源科技/','能源科技']];
const twt=[['WinfieldSmart','Win Smart'],['MikeZaccardi','Mike Zaccardi'],['Barchart','Barchart'],['ISABELNET_SA','isabelnet'],['tEconomics','Trading Economics'],['TimmerFidelity','Jurrien Timmer'],['charliebilello','Charlie Bilello'],['dailychartbook','Daily Chartbook']];
const udn=[['id=&channelId=1&cate_id=0&type=breaknews','最新'],['channelId=2&type=cate_latest_news&cate_id=6638','要聞'],['channelId=2&type=cate_latest_news&cate_id=6645','股市'],['channelId=2&type=cate_latest_news&cate_id=7225','全球'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=124373','美國關稅'],['channelId=2&type=subcate_articles&cate_id=7225&sub_id=6811','全球財經'],['channelId=2&type=cate_latest_news&cate_id=6644','產經'],['channelId=1015&type=cate_latest_news&cate_id=0','雜誌'],['channelId=2&type=cate_latest_news&cate_id=6649','生活']];
const udnMoney=[['0','即時'],['10846','要聞'],['5588','國際'],['5590','證券'],['12017','金融'],['11111','期貨'],['5592','理財'],['5591','產業'],['5589','兩岸'],['5593','房市'],['5595','專欄'],['5596','品味'],['122327','OFF學']];
const wealth=[["Articles|","最新"],["Articles|bd088d2c-f76a-4187-8673-1ae412cd6356","謝金河"],["Category|95f4329c-bcf4-47c4-b133-879bb862b479","財經茶水間"],["Category|2c6379e9-7527-442b-880a-bb9552689e06","國際"],["Category|87259978-8ff6-465c-b552-c33f69f6432e","投資理財"],["Category|450cbbed-c577-4d8e-a689-8e90b4f8bac7","財經指標"],["Category|d1354fa3-82bf-42e6-84ad-9e36d7615892","金融圈"],["Category|79c03f3f-d546-4551-a05f-c6d38e5579ca","科技"],["Category|3187845b-57fb-4336-bc4b-4f30cbeb642c","企業"],["Category|dd2b5859-96aa-42bb-b5cc-08e6c7c8728e","生醫"],["Category|800e2b3c-0352-4fba-aea2-01fff6b16015","地產"],["Category|352be1d4-7ce8-42b8-9a84-0f491f7927ea","政經"],["Category|de408237-667e-4594-abd8-8106ba567324","健康醫療"],["Category|2eb0f6be-d8bb-447d-b067-e17601f44056","美食旅遊"],["Category|2492cf34-afd8-40ee-95de-6f340988ab22","品味人生"]];
const wiki=[['','Did You Know...']];
const wscn=[['global','最新'],['shares','股市'],['bonds','債市'],['commodities','商品'],['forex','外匯'],['tmt','科技'],['ai','AI']];
const xueqiu=[['203','新聞'],['205','達人'],['巴菲特致股东的信原文精读','巴菲特致股東信']];
const yahooTW=[['cff206bf-9612-4903-9863-a9ad12319b12','焦點'],['b11aeba6-28c8-47bd-b0d8-96b89a20d817','即時'],['a8a208bf-23e1-4950-8aba-8a8d1c0c2da5','財經'],['f10835b8-98fe-48b4-a506-023937ab0a4b','Yahoo 特派'],['4e1fb4b1-9bf1-4d00-81a1-64001c935310','股匯市'],['cdbe8dd0-22d4-11ea-bbfb-7e2fb6871bd3','台股盤勢'],['9f0e62c0-22d5-11ea-bede-345eb8f1edf4','國際財經'],['e9628320-22d4-11ea-9ef0-2fabb53ab0e9','基金動態'],['381351b0-6d8c-11e9-bb53-0fc098ecd9a1','雜誌'],['ad05d340-22d5-11ea-9db1-fe39a6582c47','研究報告'],['70394000-22d5-11ea-bef4-114a94a8f820','小資理財'],['875b56b0-22d5-11ea-95cf-d43d8a1a8360','專家專欄'],['ebb0818f-c3e6-4c43-ab06-7fabe34c02f5','產業'],['65c6fa3b-b4c8-42e7-afed-c468a927d71f','國際'],['9336b431-7f5d-4dba-b06d-0dce56fb3f8f','娛樂'],['47409191-3f19-48a5-b99a-b7a19c5152f1','Yahoo'],['1af9d85f-9f45-4f07-a290-d6116fcd7e94','BBC'],['fbe20d0c-5704-4a52-a6dd-862b105734a8','中時'],['e9162370-a63f-41e1-b6ab-a2ca4bc88aa3','三立'],['841ae727-aaf4-4d96-89e8-6023380a5f0d','TVBS'],['d1c5195f-8c50-441f-8d4f-192505ff481a','公視'],['616c3db4-1af4-4d9a-90c2-e8d5b61fdca8','中天'],['24a219a6-e124-4d54-85c0-da53c42dad3f','聯合'],['1eeeee88-4e98-49f5-9283-d95b59faa8d0','東森'],['92e62bbd-f6b0-4ff2-ae60-da5e92602b8b','CWANT'],['15344921-beff-4849-8c1e-799f00eb6104','壹蘋'],['15fd91e7-7935-439f-a2a9-caea96a5c3db','鏡週刊'],['81870ef4-46f4-4ed2-a2b3-d436b9b85c06','NOWNews'],['80c8c637-4f0d-4df0-8c2e-d66523148f6d','台視'],['"75f58300-9102-4339-a493-1e2f3e31313c"','民視'],['f0caaf82-30b3-4e6c-a2eb-aa9577dbe7d4','華視'],['483b66c7-0238-411e-be93-53e1478272d3','新頭殻'],['71b213f3-88c4-41fe-b9f0-a59e9045e2d0','風傳媒'],['275994b0-0e8a-11eb-9ffd-16766ba98f36','BBC中文'],['bd00c410-4b30-4245-abf8-d23656709efa__','Latest'],['db1d46e0-a969-11e9-bff5-6dfdb80d79cf__','Stock Market News'],['04d9350a-bbd1-4787-95be-740cc5ee8852__','Earnings'],['0897608a-7d79-47df-9377-b07bd22b0fde__','Yahoo Finance'],['ed5c8883-d951-4e70-87b3-9f8f375fb410__','Premium News'],['dffbd430-02a2-11e7-bcfc-437e9432ca73__','Tech'],['b1f0c990-db7a-11e7-a937-0d92c86f9da1__','Crypto']];
const ytn=[['mcd=0117&hcd=03','放送'],['mcd=0117&hcd=04','音樂'],['mcd=0117&hcd=05','電影'],['mcd=0117&hcd=17','專訪'],['mcd=0117&hcd=15','議題'],['mcd=0117&hcd=20','焦點'],['mcd=0117&hcd=18','YTN Star News'],['mcd=0103&hcd=','社會'],['mcd=0115&hcd=','全國'],['mcd=0101&hcd=','政治'],['mcd=0102&hcd=','經濟'],['mcd=0104&hcd=','國際'],['mcd=0106&hcd=','文化']];

const bbgVideo=[['markets;bbiz;technology;cryptocurrencies;pursuits','Latest'],['markets','Markets'],['bbiz','Business'],['technology','Technology'],['cryptocurrencies','Crypto'],['pursuits','Pursuits']];
const msnVideo=[['vid-4k3nj4ageev4xbh5ka3xq2xv0au7qyya0p2bt0w8tvx9u0x895rs','CNBC'],['money video','Money'],['vid-9sg538d8084xdac9cqur3c8fr7gyh8mehuf2f55ssbmcapc6hrha', 'CBS'],['vid-vvpqk5ypg9f3g4ypq6ahsrf0tu0bu56i7vh63n3tseid8uk4mkvs', 'Washington Post'],['WATCH','MSN'],['lifestyle video','Lifestyle'],['entertainment video','Entertainment']];
const reutersVideo=[['Editors_Picks','Editor’s Picks'],['World_News_US','World News'],['Breakingviews','Breakingviews'],['MarketsNow','Markets Now'],['6ffc0233e09c26943b265ef3abd575b2d872818b','Business'],['Moments_Of_Innovation','Innovations'],['sustainable-business','Sustainable Business'],['5067a8733f8a8fe097f3098427c3b0acc6708a7b','Environment'],['d45538fb92ef02a065c15e16d3dd6a297c2ae7d7','Technology'],['lifestyleus','Lifestyle'],['4ccf1d535d893e464710e92b6722e47e8a3524df','Oddly Enough'],['189f8813eb619acad6694531e1004d4fcae3c097','Entertainment']];
const wsjVideo=[['','Latest'],['&type=wsj-section&query=News','News'],['&type=wsj-subsection&query=World','World News'],['&type=wsj-section&query=Tech','Business'],['&type=wsj-subsection&query=Markets','Markets'],['&type=wsj-subsection&query=Economy','Economy'],['&type=wsj-subsection&query=Small+Business','Entrepreneurship'],['&type=wsj-section&query=Tech','Tech'],['&type=wsj-subsection&query=Management','Management'],['&type=wsj-section&query=Opinion','Opinion'],['&type=wsj-section&query=Lifestyle','Life & Culture'],['&type=playlist&query=Most+Viewed+WSJ+Videos','Most Popular']];
const yahooVideo=[['00390a14-17cc-49d2-9e32-79365335f0ca','Latest'],['3058c878-ce30-48f5-93ed-567dfcf3e07b','Editor’s Picks'],['2d4617cb-4448-4bbe-be69-507820ee12be','Investing & Market Insights'],['9657ccb4-0423-4420-94de-024c54839a21','Trending Stocks'],['e799ec4c-02d3-477d-ba05-e8bb5c88bfc8','Tech News'],['aa2ec37b-b63e-4154-b9bd-18e0b14bb1e7','Asking for a Trend'],['d27bc0dd-04f8-4a61-8b08-9c7c6cc3169f','Catalysts'],['9a665a61-55bd-43bc-8657-6eb984ef9a37','Market Domination'],['0c9d1849-74a9-459f-9131-a9cee22acc8e','Morning Brief'],['739eb51e-bc2e-4bd2-99a8-6793977028ed','Market Domination Overtime']];

const faq=[['cnyes','鉅亨','盤後'],['wscn','華爾街見聞','美股'],['ctee','工商','美債'],['udnMoney','經濟日報','日股'],['wscn','華爾街見聞','私募']];
const searchSites=[['lineToday','LINE'],['yahooTW','奇摩'],['cna','中央社'],['cnyes','鉅亨'],['wscn','華爾街見聞'],['ctee','工商'],['wealth','財訊'],['udnMoney','經濟日報'],['businessToday','今周刊'],['businessWeekly','商周'],['daily','筆記'],['idea','點子']]; 
const allSites1=[['msnTW','MSN 台灣',msnTW,'msn.com/zh-tw','https://www.msn.com/zh-tw'],['ctee','工商',ctee,'ctee.com.tw','https://www.ctee.com.tw/'],['udn','聯合',udn,'udn.com','https://udn.com/'],['wealth','財訊',wealth,'wealth.com.tw','https://www.wealth.com.tw/'],['dw','德國之聲',dw,'dw.com/zh-hant','https://www.dw.com/zh-hant/'],['wscn','華爾街見聞',wscn,'wallstreetcn.com','https://wallstreetcn.com/'],['daily','筆記',daily,'',''],['idea','點子',idea,'','']];
const allSites2=[['lineToday','LINE',lineToday,'today.line.me','https://today.line.me/tw/v3/tab'],['yahooTW','奇摩',yahooTW,'tw.news.yahoo.com|tw.stock.yahoo.com','https://tw.news.yahoo.com/'],['cna','中央社',cna,'cna.com.tw','https://www.cna.com.tw/'],['newslens','關鍵評論網',newslens,'thenewslens.com','https://www.thenewslens.com/'],['cnyes','鉅亨',cnyes,'www.cnyes.com|news.cnyes.com','https://news.cnyes.com/news/cat/headline'],['cnyeshao','鉅亨號',cnyeshao,'hao.cnyes.com','https://hao.cnyes.com/ch/361680'],['reuters','路透',reuters,'tw.tradingview.com','https://tw.tradingview.com'],['udnMoney','經濟日報',udnMoney,'money.udn.com','https://money.udn.com'],['businessToday','今周刊',businessToday,'businesstoday.com.tw','https://www.businesstoday.com.tw'],['businessWeekly','商周',businessWeekly,'businessweekly.com.tw','https://www.businessweekly.com.tw'],['bbc','BBC',bbc,'bbc.com/zhongwen','https://www.bbc.com/zhongwen/trad'],['bnext','數位時代',bnext,'www.bnext.com.tw','https://www.bnext.com.tw'],['technews','科技新報',technews,'cdn.technews.tw|cdn.finance.technews.tw','https://cdn.technews.tw/'],['jin','金十',jin,'jin10.com','https://xnews.jin10.com'],['sina','新浪',sina,'sina.com.cn','https://finance.sina.com.cn'],['msnUS','MSN',msnUS,'msn.com/en-us','https://www.msn.com/en-us'],['isbl','ISABELNET',isbl,'isabelnet.com','https://www.isabelnet.com/blog/'],['apollo','Apollo',apollo,'apolloacademy.com','https://www.apolloacademy.com/the-daily-spark'],['blk','BlackRock',blk,'blackrock.com','https://www.blackrock.com/us/individual/insights/'],['ishares','iShares',ishares,'ishares.com','https://www.ishares.com/us/insights'],['jpm','JPM',jpm,'am.jpmorgan.com','https://am.jpmorgan.com/'],['pimco','PIMCO',pimco,'pimco.com','https://www.pimco.com'],['gsam','GSAM',gsam,'am.gs.com','https://am.gs.com/'],['ms','MS',ms,'morganstanley.com','https://www.morganstanley.com/im/en-sg/institutional-investor/insights'],['jpmpb','JPM PB',jpmpb,'privatebank.jpmorgan.com','https://privatebank.jpmorgan.com/apac/en/insights'],['boa','BOA',boa,'institute.bankofamerica.com','https://institute.bankofamerica.com/economic-insights.html'],['ssga','SSGA',ssga,'ssga.com','https://www.ssga.com/us/en/institutional/insights'],['invesco','Invesco',invesco,'invesco.com','https://www.invesco.com/'],['peInsights','PEI',peInsights,'pe-insights.com','https://pe-insights.com'],['substack','Substack',substack,'substack.com','https://altgoesmainstream.substack.com/'],['ytn','YTN',ytn,'ytn.co.kr','https://www.ytn.co.kr']];
const videoSites=[['msnVideo','MSN'],['yahooVideo','Yahoo',yahooVideo,'finance.yahoo.com','https://finance.yahoo.com/'],['wsjVideo','WSJ'],['bbgVideo','Bloomberg',bbgVideo,'bloomberg.com','https://www.bloomberg.com/video-v2'],['reutersVideo','Reuters']];

const allSitesB=[['bbg','BBG',bbg,'bloomberg.com','https://www.bloomberg.com'],['nb','NB',nb,'nb.com','https://www.nb.com'],['ab','AB',ab,'alliancebernstein.com','https://www.alliancebernstein.com'],['invtCom','Investing.com',invtCom,'investing.com','https://hk.investing.com/'],['mindi','敏迪',mindi,'mindiworldnews','https://www.mindiworldnews.com/'],['schroders','Schroders',schroders,'schroders.com','https://www.schroders.com/en-us/us/non-resident-clients/insights'],['xueqiu','雪球',xueqiu,'xueqiu.com','https://xueqiu.com/']];

const openContentDirectly=['apollo','cnyeshao','ecoMag'];
const cvtSc2Tc=['wscn','jin','sina','wiki','xueqiu'];
const sites2Translate=['ab','apollo','bbg','blk','boa','ecoMag','gsam','invesco','ishares','jpm','jpmpb','ms','msnUS','nb','peInsights','pimco','schroders','ssga','substack','yahooTW'];
const kr=['ytn'];
const noNextPage=['ecoMag'];
const msnALL=['msnTW','msnUS'];
const rmImgStyle='img, figure, figure.caas-figure div.caas-figure-with-pb, .bbc-17ytifv, .bbc-j1srjl, .bbc-j1srjl, .bbc-2fjy3x, .caas-img-container, .caas-img-loader, .col-xs-12 div.video-js.plyr__video-embed iframe';


//    GLOBAL VARIABLES
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var siteNameVar='',docTitle='',tabs=[];
var items=[],ytnCoverImg='',ytnVideo='',ecoMagContent,url='',html='',coun='',t='',uuids='',lastId='',cursor='',payload={},rt='',rr=0,buildId='';
//const sats=getLastNSats(5);


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
        if (tab[0].indexOf('|')===-1){urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList(${tab[0]},'${tab[0]}','${tab[1]}')">${tab[1]}</button>`}
        else {urlList.innerHTML+=`<button class="btn sepia me-1 mb-1" type="button" onclick="createChannelList('','${tab[0]}','${tab[1]}')">${tab[1]}</button>`};
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
  // notebookBtn.style.display='none';
}

async function get1stSearchResults(siteName,top){
  var checkUrl=[...allSites1,...allSites2,...allSitesB].find(pair=>pair[0]===siteName)?.[3];
  checkUrl=checkUrl.split('|');
  for (let s of checkUrl){if (window.location.href.indexOf(s)!==-1){var onEXURL=true;break}else{var onEXURL=false}};
  if (onEVBT===true||onEXURL===true){
    rr=0;
    getSearchResults(siteName);
    showTop(top+' | 搜尋：'+document.getElementById('search-term').value);
  } else {
    openUrl([...allSites1,...allSites2,...allSitesB].find(pair=>pair[0]===siteName)?.[4]);
  }
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
  var cEl=document.getElementById(id);html='';
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

async function translateGoogle(a){
  try{
  var res = await fetch(sCC(uLi,iOd).replace('/api/fetch?url=','/translate/google'), {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({ text: a, to: 'zh-TW' })
    });
  var str=await res.json();
  return str.translatedText||'';
  }catch (error) {return '';console.error(error)}
}

// async function translate(a){
//   var i = [[[`<p class="ArticleBodyText_articleBodyContent__17wqE typography_articleBody__3UcBa paywall" data-component="paragraph">Counting all the people at work in a country the size of the US isn’t easy. That said, the latest revision to the official non-farm payroll data, which found<strong> </strong>that jobs were over-counted by 910,000<strong> </strong>in the 12 months to March, does nothing to salve confidence. This was the largest change on record and toward the lower end of expectations. However, it came as no great surprise, and the history of revisions to the number shows that initial inaccuracy isn’t a new phenomenon:</p>`], "en", "zh-TW"], "te_lib"];
//   var res = await fetch("https://translate-pa.googleapis.com/v1/translateHtml", {
//     method: 'POST',
//     headers: {"content-type": "application/json+protobuf","x-goog-api-key": "AIzaSyATBXajvzQLTDHEQbcpq0Ihe0vWDHmO520"},
//     body: JSON.stringify(i),
//   });
//   var str = await res.json();
//   console.log(str);
//   console.log(Array.isArray(str) && Array.isArray(str[0]) ? str[0] : str);
// }

//const throttledTranslate = _.throttle(async (text) => {
//  return fetch("https://translate-pa.googleapis.com/v1/translateHtml", { ... });
//}, 105); // 1000ms / 10 ≈ 100ms

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

      if (!res.ok) throw new Error(`API error: ${res.status}`);
      const str = await res.json();console.log(str);
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

// 建立一個全域翻譯器
const translateIR = createThrottledTranslator();

// 包成可呼叫的函數
async function translate(text) {
 const translated = await translateIR(text);
 return translated;
}


async function translatePapago(a){
  try{
  var res = await fetch(sCC(uLi,iOd).replace('/api/fetch?url=','/translate/papago'), {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify({ text: a, to: 'zh-TW' })
    });
  var str=await res.json();
  return str.translatedText||'';
  }catch (error) {return '';console.error(error)}
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

  // async function translateText(text) {
  //   const url = `https://translate.googleapis.com/translate_a/t?anno=3&client=gtx&dt=t&sl=auto&tl=zh-TW&format=html&q=${encodeURIComponent(text)}`;
  //   try {
  //     const res=await fetch(url);const json=await res.json();const translated=json[0][0].replace(/ onclick=[\s\S]*?\)"/g,'') || '';
  //     return translated;
  //   } catch (e) {console.error('Failed to translate.', e);return '';}
  // }

  // function insertTranslationAfter(el, translatedText) {
  //   const div = document.createElement('p');
  //   div.className = 'translated-text';
  //   div.setAttribute('data-translated', 'true');
  //   div.textContent = translatedText;
  //   el.parentNode.insertBefore(div,el.nextSibling);
  //   // const lastTextNode = Array.from(el.childNodes).reverse().find(n => n.nodeType === Node.TEXT_NODE);
  //   // if (lastTextNode && lastTextNode.nextSibling) {el.insertBefore(div, lastTextNode.nextSibling)} else {el.appendChild(div)}
  // }
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
        // 這裡只處理 h2，你可依需求擴充
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

async function popupContent(id){
  overlay.style.display='block';
  popupChart.innerHTML+=await window[`${siteNameVar}GetContent`](id);
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

// document.addEventListener("click", (e) => {
//   const btn = e.target.closest(".copyt-note-btn");console.log(btn);
//   if (!btn) return;
//   console.log(btn);
//   const originalHTML = btn.innerHTML;
//   const container = btn.closest('div.note-block');console.log(container);
//   const htmlContent = container.innerHTML.replace(btn.outerHTML,'');

//   navigator.clipboard.write([
//     new ClipboardItem({
//       "text/html": new Blob([htmlContent], { type: "text/html" }),
//       "text/plain": new Blob([container.innerText], { type: "text/plain" })
//     })
//   ]).then(() => {
//     btn.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
//             fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
//         <path d="M12.736 3.97a.733.733 0 0 1 1.047 
//                   0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 
//                   0 0 1-1.065.02L3.217 8.384a.757.757 
//                   0 0 1 0-1.06.733.733 0 0 1 
//                   1.047 0l3.052 3.093 5.4-6.425z"/>
//       </svg>`;
//     setTimeout(() => {
//       btn.innerHTML = originalHTML;
//     }, 1000);
//   });
// });

function copyNote(btn){
  const originalHTML = btn.innerHTML;
  const container = btn.closest('div.note-block');console.log(container);
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
function hideOverlay(){document.getElementById('customOverlay').classList.add('d-none');}
function showOverlay(el,elSrc){
  document.getElementById('customOverlay').classList.remove('d-none');
  if (el='blkIframe'){
    document.getElementById('popupChart').dataset.src=elSrc;document.getElementById('gtmImg').src='';
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

// window.ab=ab;window.bbg=bbg;window.iOd=iOd;window.uLi=uLi;window.preStr=preStr;window.invtCom=invtCom;window.mindi=mindi;window.nb=nb;window.schroders=schroders;window.twt=twt;window.xueqiu=xueqiu;window.allSitesB=allSitesB;
// window.createChannelList=createChannelList;window.createSearchListDiv=createSearchListDiv;window.createUrlListDiv=createUrlListDiv;window.get1stList=get1stList;window.get1stSearchResults=get1stSearchResults;window.getFAQSearchResults=getFAQSearchResults;window.getList=getList;window.getContent=getContent;window.getSearchResults=getSearchResults;window.cvtS2HHMMSS=cvtS2HHMMSS;window.translate=translate;window.translateGoogle=translateGoogle;window.translatePapago=translatePapago;window.getTranslation=getTranslation;
// window.openContentDirectly=openContentDirectly;window.cvtSc2Tc=cvtSc2Tc;window.sites2Translate=sites2Translate;window.kr=kr;window.noNextPage=noNextPage;window.msnALL=msnALL;window.rmImgStyle=rmImgStyle;
// window.getLastNSats=getLastNSats;window.showTop=showTop;window.newNews=newNews;window.openChannelList=openChannelList;window.openSearchList=openSearchList;window.openUrlList=openUrlList;window.openEcoMagList=openEcoMagList;window.openOptions=openOptions;window.ping=ping;window.cvt2Timezone=cvt2Timezone;window.sCC=sCC;window.openUrl=openUrl;window.decodeHTMLEntities=decodeHTMLEntities;window.cnTest=cnTest;window.convertTextInsideTags=convertTextInsideTags;window.hideOverlay=hideOverlay;window.showOverlay=showOverlay;
// window.cvtS2HHMMSS=cvtS2HHMMSS;window.startLazyTranslation=startLazyTranslation;
// window.translateGoogle=translateGoogle;window.jsonToHtml=jsonToHtml;window.transformToParagraphs=transformToParagraphs;window.shareLink=shareLink;


// })();








