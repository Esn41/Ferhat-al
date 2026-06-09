const messages=document.getElementById('messages');
const form=document.getElementById('chatForm');
const input=document.getElementById('prompt');
function add(text,cls){const div=document.createElement('div');div.className='msg '+cls;div.textContent=text;messages.appendChild(div);messages.scrollTop=messages.scrollHeight;}
function reply(q){
  const t=q.toLowerCase();
  if(t.includes('uygulama')) return 'Uygulama planı: 1) fikir 2) ekranlar 3) özellikler 4) kod 5) test 6) Netlify/Firebase 7) Android/iPhone paketleme.';
  if(t.includes('oyun')) return 'Oyun planı: tür seç, karakterleri belirle, bölüm sistemi kur, skor ve kayıt ekle, sonra web veya mobil olarak yayınla.';
  if(t.includes('güvenlik')) return 'Güvenlik: kullanıcı izni, güçlü giriş, veri şifreleme, konum izni, gizlilik sayfası ve Firebase kuralları gerekir.';
  if(t.includes('konum')) return 'Konum paylaşımı için iki kullanıcı eşleşir, izin verir, Firebase üzerinden anlık konum paylaşılır. İzinsiz takip yapılamaz.';
  return 'Bunu Ferhat AI için göreve çevirdim: '+q+' — İstersen bunu ekran, kod ve yayın planına dönüştürebilirim.';
}
form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;add(q,'user');input.value='';setTimeout(()=>add(reply(q),'bot'),400);});
document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>{input.value=b.dataset.action;form.requestSubmit();});
if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
