const backendURL = 'https://newsbeiter.onrender.com';

async function validateToken(token) {
  const res = await fetch(`${backendURL}/validate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  });
  const result = await res.json();
  return result.valid;
}

async function submitCode() {
  const code = document.getElementById('code-input').value;
  const res = await fetch(`${backendURL}/verify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  });

  if (res.ok) {
    const data = await res.json();
    localStorage.setItem('authToken', data.token);
    showMain();
  } else {
    document.getElementById('error').style.display = 'block';
  }
}

function showMain() {
  document.getElementById('auth-form').style.display = 'none';
  document.getElementById('container').style.display = 'block';
}

(async function init() {
  const token = localStorage.getItem('authToken');
  if (token && await validateToken(token)) {
    showMain();
    alert('뉴스베이터 입니다!');
  } else {
    document.getElementById('auth-form').style.display = 'block';
  }
})();