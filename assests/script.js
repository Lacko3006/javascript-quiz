let questionStartBtn = document.querySelector("#button");
let questionsElement = document.querySelector("#questions");
let questionTimerElement = document.querySelector("#timer");
let questionsAskedElement = document.querySelector("#questions");

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
}
