const quizData = [
    {
        question: "Who is the captain of the Straw Hat Pirates?",
        options: ["Zoro", "Luffy", "Sanji", "Usopp"],
        answer: "Luffy"
    },
    {
        question: "What Devil Fruit did Luffy eat?",
        options: ["Gomu Gomu no Mi", "Ope Ope no Mi", "Mera Mera no Mi", "Hito Hito no Mi"],
        answer: "Gomu Gomu no Mi"
    },
    {
        question: "Who is the navigator of the crew?",
        options: ["Robin", "Nami", "Vivi", "Hancock"],
        answer: "Nami"
    },
    {
        question: "Who uses three swords?",
        options: ["Sanji", "Zoro", "Mihawk", "Law"],
        answer: "Zoro"
    },
    {
        question: "Who is the Straw Hats' doctor?",
        options: ["Chopper", "Brook", "Franky", "Robin"],
        answer: "Chopper"
    },
    {
        question: "Which ship came before Thousand Sunny?",
        options: ["Red Force", "Going Merry", "Oro Jackson", "Polar Tang"],
        answer: "Going Merry"
    },
    {
        question: "Who can read Poneglyphs?",
        options: ["Nami", "Robin", "Vivi", "Tashigi"],
        answer: "Robin"
    },
    {
        question: "Which sea is Luffy from?",
        options: ["North Blue", "South Blue", "East Blue", "West Blue"],
        answer: "East Blue"
    },
    {
        question: "Who is Luffy's brother?",
        options: ["Ace", "Sabo", "Shanks", "Both Ace and Sabo"],
        answer: "Both Ace and Sabo"
    },
    {
        question: "Who is the shipwright of the crew?",
        options: ["Franky", "Usopp", "Brook", "Jimbei"],
        answer: "Franky"
    },
    {
        question: "Who is the musician of the Straw Hats?",
        options: ["Brook", "Chopper", "Usopp", "Robin"],
        answer: "Brook"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = Array(quizData.length).fill(false);

const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options-box");
const feedback = document.getElementById("feedback");
const scoreBox = document.getElementById("score-box");

function loadQuestion() {
    feedback.textContent = "";
    optionsBox.innerHTML = "";

    const q = quizData[currentQuestion];
    questionBox.textContent = `Q${currentQuestion + 1}. ${q.question}`;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(option);
        optionsBox.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (answered[currentQuestion]) return;

    const correct = quizData[currentQuestion].answer;
    if (selected === correct) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = "❌ Wrong! Correct: " + correct;
        feedback.style.color = "red";
    }

    answered[currentQuestion] = true;
    Array.from(optionsBox.children).forEach(btn => btn.disabled = true);
}

document.getElementById("next-btn").onclick = () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        questionBox.textContent = "🎉 Quiz Completed!";
        optionsBox.innerHTML = "";
        feedback.textContent = "";
        scoreBox.textContent = `Final Score: ${score} / ${quizData.length}`;
    }
};

document.getElementById("prev-btn").onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
};

document.getElementById("skip-btn").onclick = () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
};

loadQuestion();
