const questions = [
    {
      question: "Q1- Which of the following is NOT a valid JavaScript data type?",
      options: ["String", "Boolean", "Integer", "Object"],
      correctAnswer: "Integer"
    },
    {
      question: "Q2- Which language is used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      correctAnswer: "JavaScript"
    },
    {
      question: "Q3- What is the correct syntax to create a function in JavaScript?",
      options: ["function = myFunction()", "function: myFunction()", "function myFunction()", "def myFunction()"],
      correctAnswer: "function myFunction()"
    },
    {
      question: "Q4- Which of the following will return the length of a string in JavaScript?",
      options: ["str.length()", "str.size()", "str.length", "str.count()"],
      correctAnswer: "str.length"
    },
    {
      question: "Q5- Which operator is used to assign a value to a variable in JavaScript?",
      options: ["=", "==", "===", ":="],
      correctAnswer: "="
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 5;

function startQuiz() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';

    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = '';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('option1').textContent = question.options[0];
    document.getElementById('option2').textContent = question.options[1];
    document.getElementById('option3').textContent = question.options[2];
    document.getElementById('option4').textContent = question.options[3];

    timeLeft = 5;
    document.getElementById('time-left').textContent = timeLeft;
    startTimer();

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.onclick = () => checkAnswer(option.textContent);
    });
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(answer) {
    clearInterval(timer);
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `Your Score: ${score} out of 5`;
    document.getElementById('restart-btn').style.display = 'inline-block';
}
