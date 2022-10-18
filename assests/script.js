let questionStartBtn = document.querySelector("#button");
let questionsElement = document.querySelector("#questions");
let questionTimerElement = document.querySelector("#timer");
let questionsAskedElement = document.querySelector("#questions");
let answerButtonElement1 = document.querySelector("#button1");
let answerButtonElement2 = document.querySelector("#button2");
let answerButtonElement3 = document.querySelector("#button3");
let answerButtonElement4 = document.querySelector("#button4");

let questions = [question1];

questionStartBtn.addEventListener("click", quizStart);

function quizStart() {
  question1();
  countdown = 60;
  questionTimerElement.textContent = countdown;
  timer = setInterval(() => {
    countdown--;
    questionTimerElement.textContent = countdown;
  }, 1000);
}
function question1() {
  const questionAsked1 = ["What is Thors hammer called?"];
  const answerChoice1 = ["Mjolnir"];
  const answerChoice2 = ["Gungir"];
  const answerChoice3 = ["Yaka Arrow"];
  const answerChoice4 = ["Hellfire Chain"];
  questionsAskedElement.textContent = questionAsked1;
  answerButtonElement1.textContent = answerChoice1;
  answerButtonElement2.textContent = answerChoice2;
  answerButtonElement3.textContent = answerChoice3;
  answerButtonElement4.textContent = answerChoice4;
}

answerButtonElement4.addEventListener("click", answer1);

function answer1() {
  console.log("Hello");
}
