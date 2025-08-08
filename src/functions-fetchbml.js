//    AB
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function abGetList(siteName,t){
  try{url='https://searchapi.alliancebernstein.com/search?countryCode=us&audience=investments&language=en-us';console.log(url); 
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: `{"freeText":"","pageNumber":${rr},"pageSize":20,"searchFor":{},"sortBy":[{"fieldName":"authorPublishDate","order":1}]}`,
    });
  var str=await res.json();
  for (let h of str.docs){items.push(['https://www.alliancebernstein.com'+h.uri,h.title,h.authorPublishDate])}
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${cvt2Timezone(h[2])}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function abGetContent(id){
  try{if (id.slice(-4)=='.pdf'){openUrl(id)}else{
  const res=await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('div.layoutcontainer div.ab-container');
  html='<p class="time">'+hh[0].textContent.trim()+'</p>'+hh[1].outerHTML+shareLink(id);
  }}catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    BBG
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bbgGetList(siteName,t){
  try{if(t!=='AT2bBytfUHQ/john-authers'){
    url='https://www.bloomberg.com/lineup-next/api/stories?limit=30&brand='+t+'&pageNumber='+rr;
    const res=await fetch(url);const str=await res.json();
    for (let d of str){items.push([d.url,d.headline])};    
  }else{url='https://www.bloomberg.com/lineup-next/api/author/'+t+'?pageNumber='+rr};
    const res=await fetch(url);const str=await res.json();
    for (let d of str.items){items.push([d.url,d.headline])}; 
  for (let h of items){html+=`<p class="title t-tl" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function bbgGetContent(id){
  try{const res = await fetch(id);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelector('#__NEXT_DATA__');hh=JSON.parse(hh.textContent).props.pageProps.story;
  var data=JSON.parse(hh.body.content);

  if (hh.lede!==null){var lede='<img src="'+hh.lede.url+'"><p>'+hh.lede.caption+'</p>'}else{var lede=''};
  var body='';
  for (let d of data){
    if (d.type=='paragraph'){
      body+='<p>';
      for (let i of d.content){
        if (i.type=='text'){body+=i.value} else if (i.type=='link'){body+='<a href="'+i.data.href+'">'+i.content[0].value+'</a>'} else if (i.type=='entity'){body+='<a href="'+i.data.link['data-web-url']+'" target="_blank">'+i.content[0].value+'</a>'}
      }
      body+='</p>';
    } else if (d.type=='media'){
      if (d.subType=='chart'){
        body+='<img src="'+d.data.chart.fallback+'"></img><br>';
      } else {
        body+='<img src="'+d.data.attachment.url+'"></img><br>';
      }
    } else if (d.type=='quote'){
      for (let c of d.content){
        if (c.type=='text'){body+='<blockquote>'+c.value+'</blockquote>'}
      }
    } else if (d.type=='heading'){
      for (let c of d.content){
        if (c.type=='text'){body+='<h1>'+c.value+'</h1>'}
      }
    } else if (d.type=='list'){
      body+='<ul>';
      for (let c of d.content){
        if (c.type=='listItem'){
          body+='<li>';
          for (let i of c.content){
            if (i.type=='text'){body+=i.value} else if (i.type=='link'){body+='<a href="'+i.data.href+'">'+i.content[0].value+'</a>'} else if (i.type=='entity'){body+='<a href="'+i.data.link['data-web-url']+'" target="_blank">'+i.content[0].value+'</a>'}
          }
          body+='</li>';
        }
      }
      body+='</ul>';
    }
  }
  html='<p class="time">'+cvt2Timezone(hh.publishedAt)+'</p>'+lede+body+shareLink(id);
  }catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    INVESTING.COM HK
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function invtComGetList(siteName,t){
  try{
  var k=2;
  for (let i=0;i<k;i++){
    url='https://hk.investing.com/'+t+((rr-1)*k+i+1);console.log(url);
    let res=await fetch(preStr+encodeURIComponent(url));
    let str=await res.text();
    var parser=new DOMParser();
    var doc=parser.parseFromString(str, "text/html");
    if (t.slice(0,8)!=='analysis'){var hh=doc.querySelectorAll('article')}else{var hh=doc.querySelector('#contentSection').querySelectorAll('article')};
    for (let h of hh){
      items.push([h.children[1].children[0].href,h.children[1].children[0].innerText,h.querySelector('time').getAttribute('datetime')+' GMT+0',h.children[1].children[2].querySelectorAll('span')[1].innerText]);
    }
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${cvt2Timezone(h[2])} | ${h[3]}</p></div><hr>`;
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function invtComGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  var a=doc.querySelector('#article');
  html=a.outerHTML + shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    MINDI
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function mindiGetList(siteName,t,coun){
  try{url='https://www.mindiworldnews.com/blog/page/'+rr;console.log(url);
  const res=await fetch(preStr+encodeURIComponent(url));const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelectorAll('h3');
  for (var i=1;i<hh.length;i++){items.push([hh[i].querySelector('a').href,hh[i].querySelector('a').textContent]);}
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`;}
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function mindiGetContent(id){
  try{const res = await fetch(preStr+encodeURIComponent(id));
  const str=await res.text();
  var parser=new DOMParser();
  var doc=parser.parseFromString(str, "text/html");
  html = '<p class="time">'+doc.querySelector('p.post-date').innerText+'</p>'+doc.querySelector('.entry-content').outerHTML + shareLink(id);
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    NB
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function nbGetList(siteName,t){
  try{
  if (t==''){var body=new URLSearchParams({language:'en',sortOrder:'new'})}else{var body=new URLSearchParams({language:'en',sortOrder:'new'});body.append('filterone[]',t);body=body.toString();};
  var res = await fetch(preStr+'https://www.nb.com/api/Sitecore/Article/FilterResults', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    body: body,
    });
  var str=await res.json();
  var parser=new DOMParser();var doc=parser.parseFromString(str.filteredResults, "text/html");
  var hh=doc.querySelectorAll('.article-list-tile');
  var data=Array.from(hh).slice((rr-1)*25,rr*25);
  for (let h of data){items.push([h.querySelector('a').href,h.querySelector('h6').innerText,h.querySelector('date').innerText])};
  for (let h of items){html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`};
  }catch{html='<p>No Content.</p>'}
  return html;
}

async function nbGetContent(id){
  try{const res = await fetch(preStr+id);const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");console.log(doc.querySelectorAll('.col-xs-12.col-sm-9')[1]);
  html = '<p class="time">'+(doc.querySelector('.article-date-content')?.innerText??'')+'</p>'+(doc.querySelector('main')?.innerHTML.replace(/ class="[\s\S]*?"/g,'')??'') + '<p class="text-end"><a href="' + id + '" target="_blank">Share</a></p><br>';
  }catch{html='<p><a href="' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}


//    SCHRODERS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function schrodersGetList(siteName,t){
  try{
  url='https://schcom.azureedge.net/algolia/1/indexes/*/queries?x-algolia-agent=Algolia for JavaScript (4.24.0); Browser (lite); instantsearch.js (4.69.0); react (18.3.1); react-instantsearch (7.9.0); react-instantsearch-core (7.9.0); next.js (14.2.25); JS Helper (3.20.0)';console.log(url); 
  var res = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded',},
    body: `{"requests":[{"indexName":"prod_public-content_date_desc_en-us","params":"analyticsTags=['listing_insights']&clickAnalytics=true&facets=[]&filters=businessUnit: 'Asset Management' AND audience: 'Non-Resident Clients' AND contentType: 'insight_article'&highlightPostTag=__/ais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=25&page=${rr-1}&tagFilters=&userToken=163978537_1747095177"}]}`,
    });
  var str=await res.json();

  for (let h of str.results[0].hits){
    items.push([h.url,h.title,h.updatedAt.slice(0,10)])
  }
  for (let h of items){
    html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]} <span class="time fw-normal">${h[2]}</span></p><div id="${h[0]}" class="content fs12" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function schrodersGetContent(id){
  try{
  const res=await fetch(id);
  const str=await res.text();
  var parser=new DOMParser();var doc=parser.parseFromString(str, "text/html");
  var hh=doc.querySelector('#__NEXT_DATA__');
  var cc=JSON.parse(hh.textContent).props.pageProps.pageData.entry.insight_body.body;
  html=jsonToHtml(cc)+'<p class="text-end"><a href="'+id+'" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="'+id+'" target="_blank">繼續閱讀</a></p><br>'}
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
      const res=await fetch(preStr+encodeURIComponent(url));const str=await res.json();lastId=str.list[str.list.length-1].id;
      for (let h of str.list){items.push([h.target,(h.title===undefined||h.title===null||h.title==='')?h.description:h.title]);}    
    }
    for (let h of items){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${s2t(h[1])}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"></div><hr>`;
    }    
  } else {
    var k=3;
    for (let i=1;i<=k;i++){
      url='https://xueqiu.com/query/v1/search/status.json?sortId=2&q='+t+'+&page='+((rr-1)*k+i);console.log(url);
      const res=await fetch(preStr+encodeURIComponent(url));const str=await res.json();
      for (let h of str.list){items.push([h.target,(h.title===undefined||h.title===null||h.title==='')?h.description:h.title,h.created_at,h.text,h.user.screen_name]);}    
    }
    for (let h of items){
      html+=`<p class="title" onclick="getContent('${siteName}',this.id,'${h[0]}')">${h[1]}</p><div id="${h[0]}" class="content" onclick="getContent('${siteName}',this.id,'${h[0]}')"><p class="time">${cvt2Timezone(h[2])} | ${h[4]}</p>${h[3]}<p class="text-end"><a href="https://xueqiu.com${h[0]}" target="_blank">分享</a></p><br></div><hr>`;
    }    
  }
  }catch{html='<p>尚無內容</p>'}
  return html;
}

async function xueqiuGetContent(id){
  try{url='https://xueqiu.com'+id;
  const res=await fetch(preStr+encodeURIComponent(url));const str=await res.text();
  const parser=new DOMParser();const doc=parser.parseFromString(str, "text/html");
  html = '<p class="time">'+doc.querySelector('.avatar__subtitle').innerText+'</p>'+doc.querySelector('.article__bd__detail').outerHTML+ '<p class="text-end"><a href="https://xueqiu.com' + id + '" target="_blank">分享</a></p><br>';
  }catch{html='<p><a href="https://xueqiu.com' + id + '" target="_blank">繼續閱讀</a></p><br>'}
  return html;
}