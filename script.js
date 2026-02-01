function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();

    if (message === "") return;

    addMessage(message, "user-message");
    input.value = "";

    setTimeout(() => {
        const reply = botReply(message);
        addMessage(reply, "bot-message");
    }, 500);
}

function addMessage(text, className) {
    const chatBox = document.getElementById("chatBox");
    const msgDiv = document.createElement("div");
    msgDiv.className = className;
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(question) {
    question = question.toLowerCase();

    if (question.includes("hello") || question.includes("hi")) {
        return "Hello! How can I help you?";
    }
    if (question.includes("your name")) {
        return "I am BotForge 🤖";
    }
    if (question.includes("what is ai")) {
        return "AI stands for Artificial Intelligence.";
    }
    if (question.includes("who created you")) {
        return "I was created by a developer using JavaScript 😄";
    }
    if (question.includes("bye")) {
        return "Goodbye! Have a great day 👋";
    }

    return "Sorry, I don't understand that yet.";
}
