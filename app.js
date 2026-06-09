const input = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".chat-input button");

const aiBubble = document.querySelector(".bubble.ai");

function cevapVer() {
  const mesaj = input.value.toLowerCase();

  if (mesaj.includes("uygulama")) {
    aiBubble.innerHTML =
      "📱 Android ve iOS uygulaması oluşturma moduna geçildi.";
  }

  else if (mesaj.includes("oyun")) {
    aiBubble.innerHTML =
      "🎮 Oyun geliştirme moduna geçildi.";
  }

  else if (mesaj.includes("web")) {
    aiBubble.innerHTML =
      "🌐 Web sitesi oluşturma moduna geçildi.";
  }

  else if (mesaj.includes("güvenlik")) {
    aiBubble.innerHTML =
      "🛡️ Güvenlik analizi başlatıldı.";
  }

  else if (mesaj.includes("merhaba")) {
    aiBubble.innerHTML =
      "👋 Merhaba Ferhat, sana nasıl yardımcı olabilirim?";
  }

  else {
    aiBubble.innerHTML =
      "🤖 Ferhat AI komutunu işliyor...";
  }

  input.value = "";
}

sendBtn.addEventListener("click", cevapVer);

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    cevapVer();
  }
});

const voiceBtn = document.querySelector(".voice-float");

if (voiceBtn) {
  voiceBtn.addEventListener("click", () => {
    aiBubble.innerHTML =
      "🎤 Sesli komut sistemi V6 aktif.";
  });
}
