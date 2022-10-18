let questionStartBtn = document.querySelector("#button");
let questionsElement = document.querySelector("#questions");
let questionTimerElement = document.querySelector("#timer");
let questionsAskedElement = document.querySelector("#questions");
let answerButtonElement1 = document.querySelector("#button1")
let answerButtonElement2 = document.querySelector("#button2")
let answerButtonElement3 = document.querySelector("#button3")
let answerButtonElement4 = document.querySelector("#button4")

let questions = ["What is thors hammer called?"];

//function showQuestions = (questions)

questionStartBtn.addEventListener("click", quizStart);

function quizStart() {
  countdown = 60;
  questionTimerElement.textContent = countdown;
  timer = setInterval(() => {
    countdown--;
    questionTimerElement.textContent = countdown;
  }, 1000);
  questionsAskedElement.textContent = questions;
  answerElement1
}

answerButtonElement4.addEventListener("click", answer1)
function answer1(){
    console.log("Hello")
}