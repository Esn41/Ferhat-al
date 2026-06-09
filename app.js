const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

function addMessage(text, type) {
    const div = document.createElement("div");
    div.className = "bubble " + type;
    div.innerText = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function askAI(message) {

    addMessage("🤖 Düşünüyorum...", "ai");

    try {

        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message
            })
        });

        const data = await response.json();

        const lastBubble =
            document.querySelector(".bubble.ai:last-child");

        if (lastBubble) {
            lastBubble.innerText = data.answer;
        }

    } catch (err) {

        const lastBubble =
            document.querySelector(".bubble.ai:last-child");

        if (lastBubble) {
            lastBubble.innerText =
                "❌ AI bağlantı hatası.";
        }
    }
}

sendBtn.addEventListener("click", () => {

    const text = chatInput.value.trim();

    if (!text) return;

    addMessage(text, "user");

    chatInput.value = "";

    askAI(text);

});

chatInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        sendBtn.click();
    }

});
