const quizData = [
    {
        question:"Which of these is a programming language?"
        a: "Itch",
        b:"Scrtch",
        c:"Bite",
        d:"Gnaw",
        correct:"b",
    },
    {
        question:"Which of these is a programming language?"
        a: "Itch",
        b:"Scrtch",
        c:"Bite",
        d:"Gnaw",
        correct:"b",
    },
    {
        question:"Which of these is a programming language?"
        a: "Itch",
        b:"Scrtch",
        c:"Bite",
        d:"Gnaw",
        correct:"b",
    },
    {
        question:"Which of these is a programming language?"
        a: "Itch",
        b:"Scrtch",
        c:"Bite",
        d:"Gnaw",
        correct:"b",
    }
    {
        question:"Which of these is a programming language?"
        a: "Itch",
        b:"Scrtch",
        c:"Bite",
        d:"Gnaw",
        correct:"b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')



let currentquiz = 0
let score = 0

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentquizData = quizData[currentquiz]

    questionEl.innerText = currentquizData.question
    a_text.innerText - currentquizData.a
    b_text.innerText - currentquizData.b
    c_text.innerText - currentquizData.c
    d_text.innerText - currentquizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitbtn.addEventListener('click,(' => {
    const answer = getSelected()
    if (answer) {
    if(answer === quizData[currentquiz].correct){
         score++
    }

    currentquiz++
    if(currentquiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML 
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    }
    }    
}
