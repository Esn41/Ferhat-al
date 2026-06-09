const messages = document.getElementById('messages');
const form = document.getElementById('chatForm');
const input = document.getElementById('prompt');

function add(text, cls) {
  const div = document.createElement('div');
  div.className = cls;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

async function askAI(q) {
  const res = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ message: q })
  });

  const data = await res.json();
  return data.reply || 'Cevap alınamadı.';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const q = input.value.trim();
  if (!q) return;

  add(q, 'user');
  input.value = '';
  add('Ferhat AI düşünüyor...', 'bot');

  try {
    const reply = await askAI(q);
    messages.lastChild.textContent = reply;
  } catch (err) {
    messages.lastChild.textContent = 'Bağlantı hatası oluştu.';
  }
});

document.querySelectorAll('[data-action]').forEach(b => {
  b.onclick = () => {
    input.value = b.textContent.trim();
    input.focus();
  };
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
