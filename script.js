function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user-message");
    input.value = "";

    setTimeout(() => {
        const reply = getReply(text);
        addMessage(reply, "bot-message");
    }, 400);
}

function addMessage(message, className) {
    const chatBox = document.getElementById("chatBox");
    const div = document.createElement("div");
    div.className = className;
    div.innerText = message;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/* ============================
   PLACEMENT CELL Q&A DATA
   ============================ */
const qaData = [
    {
        keywords: ["hello", "hi"],
        answer: "Hello! How can I help you with placements?"
    },
    {
        keywords: ["placement cell"],
        answer: "The Placement Cell assists students with job and internship opportunities."
    },
    {
        keywords: ["eligibility"],
        answer: "Eligibility depends on academic performance and company criteria."
    },
    {
        keywords: ["companies"],
        answer: "Many reputed companies visit the campus every year for recruitment."
    },
    {
        keywords: ["training"],
        answer: "Training includes aptitude, technical skills, and interview preparation."
    },
    {
        keywords: ["internship"],
        answer: "Internship opportunities are shared by the Placement Cell."
    },
    {
        keywords: ["resume"],
        answer: "Students must prepare a professional resume before attending placements."
    },
    {
        keywords: ["placement process"],
        answer: "The process includes registration, tests, technical interview, and HR interview."
    },
    {
        keywords: ["final year"],
        answer: "Placements are mainly conducted for final-year students."
    },
    {
        keywords: ["contact"],
        answer: "You can contact the Placement Cell through the college office or official email."
    },
    {
        keywords: ["bye", "thank"],
        answer: "All the best for your placements! 👍"
    }
];

function getReply(userInput) {
    const input = userInput.toLowerCase();

    for (let i = 0; i < qaData.length; i++) {
        for (let j = 0; j < qaData[i].keywords.length; j++) {
            if (input.includes(qaData[i].keywords[j])) {
                return qaData[i].answer;
            }
        }
    }

    return "Sorry, I don't have information on that. Please contact the Placement Cell.";
}
