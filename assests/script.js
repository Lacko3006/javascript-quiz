let titleElement = document.querySelector("#title");
let questionStartBtn = document.querySelector("#button");
let questionsElement = document.querySelector("#questions");
let questionTimerElement = document.querySelector("#timer");
let questionsAskedElement = document.querySelector("#questions");
let answerButtonElement1 = document.querySelector("#button1");
let answerButtonElement2 = document.querySelector("#button2");
let answerButtonElement3 = document.querySelector("#button3");
let answerButtonElement4 = document.querySelector("#button4");
let feedbackTextElement = document.querySelector("#feedback");

let timer;
const feedbackRight = ["Correct!"];
const feedbackWrong = ["Wrong"];
const feedbackClear = [""];
const feedbackLose = ["You Lose!"]

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
  let answerChoice1 = ["Mjolnir"];
  let answerChoice2 = ["Gungir"];
  let answerChoice3 = ["Yaka Arrow"];
  let answerChoice4 = ["Hellfire Chain"];
  questionsAskedElement.textContent = questionAsked1;
  answerButtonElement1.textContent = answerChoice1;
  answerButtonElement2.textContent = answerChoice2;
  answerButtonElement3.textContent = answerChoice3;
  answerButtonElement4.textContent = answerChoice4;

  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        // feedbackTextElement.textContent = feedbackRight
        question2();
        clearFeedback();
        break;
      case answerButtonElement2:
        // feedbackTextElement.textContent = feedbackWrong;
        break;
      case answerButtonElement3:
        // feedbackTextElement.textContent = feedbackWrong;
        break;
      case answerButtonElement4:
        // feedbackTextElement.textContent = feedbackWrong;
        break;
    }
  });
}

function question2() {
  const questionAsked2 = ["Who destroyed half the universe in order to sustain peace?"];
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
        question3()
        break;
      case answerButtonElement3:
        break;
      case answerButtonElement4:
        break;
    }
  });
}

function question3() {
  const questionAsked3 = ["What is Iron Man's name?"]
  const answerChoice1 = ["Steve Rogers"];
  const answerChoice2 = ["Peter Quill"];
  const answerChoice3 = ["Clint Barton"];
  const answerChoice4 = ["Tony Stark"];
  questionsAskedElement.textContent = questionAsked3;
  answerButtonElement1.textContent = answerChoice1;
  answerButtonElement2.textContent = answerChoice2;
  answerButtonElement3.textContent = answerChoice3;
  answerButtonElement4.textContent = answerChoice4;

  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        break;
      case answerButtonElement2:
        break;
      case answerButtonElement3:
        break;
      case answerButtonElement4:
        console.log("Hello")
        break;
    }
  });
}


// goes back to question 1 when pressing answerButton1 on question 3


function loseGame() {
    titleElement.textContent = feedbackLose;
  clearInterval(timer);
}

function clearFeedback(){
    feedbackCountdown = 5;
        feedbackTimer = setInterval(() => {
        feedbackCountdown--;
        feedbackTextElement.textContent = feedbackClear
     }, 1000);
}