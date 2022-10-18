let questionStartBtn = document.querySelector("#button");
let questionsElement = document.querySelector("#questions");
let questionTimerElement = document.querySelector("#timer");
let questionsAskedElement = document.querySelector("#questions");
let answerButtonElement1 = document.querySelector("#button1");
let answerButtonElement2 = document.querySelector("#button2");
let answerButtonElement3 = document.querySelector("#button3");
let answerButtonElement4 = document.querySelector("#button4");
let feedbackTextElement = document.querySelector("#feedback");

//let timer;
const feedbackRight = ["Correct!"];
const feedbackWrong = ["Wrong"];
const feedbackClear = [""];

// let questions = [question1,];

questionStartBtn.addEventListener("click", quizStart);

function quizStart() {
  question1();
  countdown = 60;
  questionTimerElement.textContent = countdown;
  timer = setInterval(() => {
    countdown--;
    questionTimerElement.textContent = countdown;
    if (countdown === 0) {
      loseGame();
    }
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

  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        feedbackTextElement.textContent = feedbackRight
        question2();
        clearFeedback();
        break;
      case answerButtonElement2:
        feedbackTextElement.textContent = feedbackWrong;
        break;
      case answerButtonElement3:
        feedbackTextElement.textContent = feedbackWrong;
        break;
      case answerButtonElement4:
        feedbackTextElement.textContent = feedbackWrong;
        break;
    }
  });
}

function question2() {
  const questionAsked2 = ["Who destroyed half the universe for preservation?"];
  const answerChoice1 = ["The Hulk"];
  const answerChoice2 = ["Thanos"];
  const answerChoice3 = ["Colossus"];
  const answerChoice4 = ["Groot"];
  questionsAskedElement.textContent = questionAsked2;
  answerButtonElement1.textContent = answerChoice1;
  answerButtonElement2.textContent = answerChoice2;
  answerButtonElement3.textContent = answerChoice3;
  answerButtonElement4.textContent = answerChoice4;

  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        break;
      case answerButtonElement2:
        console.log("Hello");
        break;
      case answerButtonElement3:
        break;
      case answerButtonElement4:
        break;
    }
  });
}

function loseGame() {
  clearInterval(timer);
  console.log("hello");
}

function clearFeedback(){
    feedbackCountdown = 5;
        feedbackTimer = setInterval(() => {
        feedbackCountdown--;
        feedbackTextElement.textContent = feedbackClear
        console.log("hello");
     }, 1000);
}