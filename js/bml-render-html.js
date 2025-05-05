var siteNameVar='';var tabs;var docTitle='';
for (let l of [...allSites1,...otherVideo]) {
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
      <button class="btn sepia me-1 mb-1" type="button" onclick="openMediaList()">總覽</button><button class="btn sepia me-1 mb-1" type="button" onclick="openSearchList()">搜尋</button><button class="btn sepia me-1 mb-1" type="button" onclick="openUrlList()">網站列表</button>
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
