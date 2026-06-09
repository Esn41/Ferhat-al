const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");
const typing = document.getElementById("typing");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "bubble " + type;
    div.innerText = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function aiReply(message) {

    typing.classList.remove("hidden");

    setTimeout(() => {

        typing.classList.add("hidden");

        let cevap = "Komut alındı.";

        const msg = message.toLowerCase();

        if(msg.includes("uygulama")){
            cevap = "📱 Yeni mobil uygulama fikri oluşturuldu.";
        }

        else if(msg.includes("oyun")){
            cevap = "🎮 Yeni oyun konsepti hazırlandı.";
        }

        else if(msg.includes("web")){
            cevap = "🌐 Modern web sitesi planı hazır.";
        }

        else if(msg.includes("güvenlik")){
            cevap = "🛡️ Güvenlik analizi tamamlandı.";
        }

        else if(msg.includes("merhaba")){
            cevap = "👋 Merhaba Ferhat, sana nasıl yardımcı olabilirim?";
        }

        addMessage(cevap,"ai");

    },1200);
}

sendBtn.addEventListener("click", () => {

    const text = chatInput.value.trim();

    if(!text) return;

    addMessage(text,"user");

    chatInput.value = "";

    aiReply(text);

});

chatInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){
        sendBtn.click();
    }

});

const voiceBtn = document.getElementById("voiceFloat");

if ("webkitSpeechRecognition" in window) {

  const recognition = new webkitSpeechRecognition();

  recognition.lang = "tr-TR";
  recognition.continuous = false;
  recognition.interimResults = false;

  voiceBtn.addEventListener("click", () => {

    recognition.start();

    addMessage("🎤 Dinleniyor...", "ai");

  });

  recognition.onresult = (event) => {

    const speech =
      event.results[0][0].transcript;

    chatInput.value = speech;

    sendBtn.click();

  };

}
