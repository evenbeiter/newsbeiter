//    FUNCTIONS FOR NOTES-UPLOADER
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const backendURL = preStr.replace('/api/fetch?url=','');

async function uploadFromClipboard(){
  let textContent = '';
  let confirmUpload = false;
  try {
    if (navigator.clipboard && navigator.clipboard.readText) {
      textContent = await navigator.clipboard.readText();
      if (textContent){confirmUpload = confirm('是否上傳筆記？');} else {alert('無筆記可上傳');}
    }
  } catch (err) {
    alert('無筆記可上傳');
  }
  if (textContent && confirmUpload) {
      fetch(`${backendURL}/note/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({content:textContent})
      }).then(res => {
          if (!res.ok) alert('❌ 上傳失敗');
      });
  }
  notebookBtn.style.display='none';
}




let lastSelectedText = '';
let articleUrl='';

// 📱 偵測選取文字（含 iOS）
document.addEventListener('selectionchange', () => {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return;
  const text = selection.toString().trim();
  if (!text) {uploadBtn.style.display = 'none';return;}
  lastSelectedText = text;
  articleUrl=getArticleUrl();
  showUploadBtn();
});

document.addEventListener('click', function (e) {
  const el = e.target;
  if (isImageLikeElement(el)) {
    lastSelectedText = getImageSrc(el);
    articleUrl=findNextShareLink(el);
    showUploadBtn();
  }
});

function showUploadBtn() {uploadBtn.style.display = 'block';}

uploadBtn.addEventListener('click', () => {
  if (!lastSelectedText) {alert('尚未選取筆記')} else {
    const confirmUpload = confirm('是否上傳筆記？');
    if (!confirmUpload) {uploadBtn.style.display = 'none';return;} else {
      fetch(`${backendURL}/note/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: lastSelectedText, siteName: siteNameVar, src: articleUrl })
      }).then(res => {
        if (!res.ok) alert('❌ 上傳失敗');
        uploadBtn.style.display = 'none';
      });
    }
  }
});

function isImageLikeElement(el) {
  if (!el || !(el instanceof Element)) return false;
  return (
    el.tagName === 'IMG' ||
    el.tagName === 'SVG' || // inline SVG 圖片
    el.tagName === 'FIGURE' || // 可能含有圖與描述
    el.tagName === 'PICTURE' || // 可能含有圖與描述
    el.tagName === 'CANVAS' || // 可能含有圖與描述
    (el.tagName === 'A' && el.querySelector('img')) || // 含有圖片的 <a>
    el.getAttribute('role') === 'img' || // 無障礙角色標示為圖
    el.hasAttribute('aria-label') && el.getAttribute('role') === 'presentation' // aria 的圖片替代方式
  );
}

function getImageSrc(el) {
  //if (!el) return null;
  if (el.tagName === 'IMG') {return `<img src="${el.src}">`;}
  else if (el.querySelector('img')) {return `<img src="${el.querySelector('img').src}">`;}
  else if (el.tagName === 'SVG') {return el.outerHTML;}
  else {return `<a href="${findNextShareLink(el)}">原文連結</a>`;}
}

function findNextShareLink(startNode) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node) => {
        return (
          node.tagName === 'A' &&
          node.textContent.trim() === '分享' &&
          node.href
        )
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      }
    }
  );

  walker.currentNode = startNode;
  while (walker.nextNode()) {
    return walker.currentNode.href;
  }
  return null;
}

function getSelectionElement() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  const container = range.startContainer;

  // 若 startContainer 是文字節點，取其父層
  return container.nodeType === Node.TEXT_NODE ? container.parentNode : container;
}

function getArticleUrl() {
  const selectedElement = getSelectionElement();
  if (!selectedElement) return null;
  return findNextShareLink(selectedElement);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, tag =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[tag]
  );
}

function attachNoteEventListeners() {
  document.querySelectorAll('.deleteNoteBtn').forEach(btn => {
    btn.addEventListener('click', async e => {
      const noteEl = e.target.closest('.note-item');
      const path = noteEl.dataset.path;
      const timestamp = noteEl.dataset.timestamp;

      const confirmed = confirm('確定要刪除這則筆記嗎？');
      if (!confirmed) return;

      const res = await fetch('/note/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, timestamp })
      });

      if (res.ok) {
        noteEl.remove();
      } else {
        alert('刪除失敗');
      }
    });
  });

  document.querySelectorAll('.editNoteBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      const noteEl = e.target.closest('.note-item');
      const textEl = noteEl.querySelector('p');
      const textarea = document.createElement('textarea');
      textarea.className = 'form-control mb-2';
      textarea.value = textEl.innerText;
      textarea.style.height = 'auto';

      textEl.replaceWith(textarea);

      const uploadBtn = document.createElement('button');
      uploadBtn.textContent = '上傳修改';
      uploadBtn.className = 'btn btn-sm btn-primary';
      uploadBtn.onclick = async () => {
        const path = noteEl.dataset.path;
        const timestamp = noteEl.dataset.timestamp;
        const newText = textarea.value;

        const res = await fetch('/note/update', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path, timestamp, text: newText })
        });

        if (res.ok) {
          textarea.replaceWith(document.createElement('p')).textContent = newText;
          uploadBtn.remove();
        } else {
          alert('更新失敗');
        }
      };

      noteEl.querySelector('.btn-group').appendChild(uploadBtn);
    });
  });
}

const noteBtnGroup='';
// const noteBtnGroup=`
//     <div class="d-flex">
//     <div class="btn-group ms-auto">
//       <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25 editNoteBtn">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//           <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//           <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
//         </svg>
//       </button>
//       <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25 uploadNoteBtn">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-upload" viewBox="0 0 16 16">
//           <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"/>
//           <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"/>
//         </svg>
//       </button>
//       <button type="button" class="btn btn-light position-relative sepia-contrast opacity-25 deleteNoteBtn">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
//           <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
//         </svg>
//       </button>
//     </div>
//     </div>
// `;