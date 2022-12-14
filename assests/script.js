const titleElement = document.querySelector("#title");
const title2Element = document.querySelector("#title-2")
const questionStartBtn = document.querySelector("#button");
const questionsElement = document.querySelector("#questions");
const questionTimerElement = document.querySelector("#timer");
const questionTitleElement = document.querySelector("#time-remaining")
const questionsAskedElement = document.querySelector("#questions");
const answerButtonElement1 = document.querySelector("#button1");
const answerButtonElement2 = document.querySelector("#button2");
const answerButtonElement3 = document.querySelector("#button3");
const answerButtonElement4 = document.querySelector("#button4");
const submitButtonElement = document.querySelector("#submit-button");
const feedbackTextElement = document.querySelector("#feedback");
const scoreboardElement = document.querySelector("#scoreboard");
const arrayOfButton = document.querySelectorAll("article button");
const savedInitialsElement = document.querySelector("#saved-initials")
const subheaderDivElement = document.querySelector("#sub-header")
const submitDivElement = document.querySelector("#submit")
const inputElement = document.querySelector("#textbox");
const inputText = document.querySelector("#text");

let questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  submitPage,
];

let selectedQuestion = 1;

for (let button of arrayOfButton) {
  button.addEventListener("click", buttonListener);
}

hiddenButton();
subheaderDivElement.style.visibility = "hidden";

let scoreboard = 0;
let countdown = 60;

const feedbackCorrect = "Correct!";
const feedbackWrong = "Wrong! Please try again!";
const feedbackClear = "";
const feedbackLose = "You Lose! Press refresh to try again";
const feedbackWin = "You are a winner!"

questionStartBtn.addEventListener("click", quizStart);

function quizStart() {
  scoreboardElement.textContent = scoreboard;
  question1();
  visibleButton();
  questionTimerElement.textContent = countdown;
  subheaderDivElement.style.visibility = "visible";
  title2Element.style.visibility = "hidden";
  const timer = setInterval(() => {
    countdown--;
    questionTimerElement.textContent = countdown;
    if (countdown === 0 || countdown < 0) {
      loseGame();
      clearInterval(timer);
    } if (selectedQuestion === 5 ||selectedQuestion > 5) {
      clearInterval(timer);
    }
  }, 1000);
}

function question1() {
  const questionAsked1 = ["What is Thors hammer called?"];
  let question1Choice1 = ["Mjolnir"];
  let question1Choice2 = ["Gungir"];
  let question1Choice3 = ["Yaka Arrow"];
  let question1Choice4 = ["Hellfire Chain"];
  questionsAskedElement.textContent = questionAsked1;
  answerButtonElement1.textContent = question1Choice1;
  answerButtonElement1.dataset.isCorrect = true;
  answerButtonElement2.textContent = question1Choice2;
  answerButtonElement2.dataset.isCorrect = false;
  answerButtonElement3.textContent = question1Choice3;
  answerButtonElement3.dataset.isCorrect = false;
  answerButtonElement4.textContent = question1Choice4;
  answerButtonElement4.dataset.isCorrect = false;
}

function question2() {
  const questionAsked2 = [
    "Who destroyed half the universe in order to sustain peace?",
  ];
  const question2Choice1 = ["The Hulk"];
  const question2Choice2 = ["Thanos"];
  const question2Choice3 = ["Colossus"];
  const question2Choice4 = ["Groot"];
  questionsAskedElement.textContent = questionAsked2;
  answerButtonElement1.textContent = question2Choice1;
  answerButtonElement1.dataset.isCorrect = false;
  answerButtonElement2.textContent = question2Choice2;
  answerButtonElement2.dataset.isCorrect = true;
  answerButtonElement3.textContent = question2Choice3;
  answerButtonElement3.dataset.isCorrect = false;
  answerButtonElement4.textContent = question2Choice4;
  answerButtonElement4.dataset.isCorrect = false;
}

function question3() {
  const questionAsked3 = ["What is Iron Man's name?"];
  const question3Choice1 = ["Steve Rogers"];
  const question3Choice2 = ["Peter Quill"];
  const question3Choice3 = ["Clint Barton"];
  const question3Choice4 = ["Tony Stark"];
  questionsAskedElement.textContent = questionAsked3;
  answerButtonElement1.textContent = question3Choice1;
  answerButtonElement1.dataset.isCorrect = false;
  answerButtonElement2.textContent = question3Choice2;
  answerButtonElement2.dataset.isCorrect = false;
  answerButtonElement3.textContent = question3Choice3;
  answerButtonElement3.dataset.isCorrect = false;
  answerButtonElement4.textContent = question3Choice4;
  answerButtonElement4.dataset.isCorrect = true;
}

function question4() {
  const questionAsked4 = ["What Color is Captain Americas Shield?"];
  const question4Choice1 = ["Black, Red & White"];
  const question4Choice2 = ["Pink, Yellow & Purple"];
  const question4Choice3 = ["Red, White & Blue"];
  const question4Choice4 = ["Cyan, Purple & Black"];
  questionsAskedElement.textContent = questionAsked4;
  answerButtonElement1.textContent = question4Choice1;
  answerButtonElement1.dataset.isCorrect = false;
  answerButtonElement2.textContent = question4Choice2;
  answerButtonElement2.dataset.isCorrect = false;
  answerButtonElement3.textContent = question4Choice3;
  answerButtonElement3.dataset.isCorrect = true;
  answerButtonElement4.textContent = question4Choice4;
  answerButtonElement4.dataset.isCorrect = false;
}

function question5() {
  const questionAsked5 = ["What Animal is Rocket Racoon"];
  const question5Choice1 = ["Racoon"];
  const question5Choice2 = ["Rabbit"];
  const question5Choice3 = ["Squirrel"];
  const question5Choice4 = ["Dog"];
  questionsAskedElement.textContent = questionAsked5;
  answerButtonElement1.textContent = question5Choice1;
  answerButtonElement1.dataset.isCorrect = true;
  answerButtonElement2.textContent = question5Choice2;
  answerButtonElement2.dataset.isCorrect = false;
  answerButtonElement3.textContent = question5Choice3;
  answerButtonElement3.dataset.isCorrect = false;
  answerButtonElement4.textContent = question5Choice4;
  answerButtonElement4.dataset.isCorrect = false;
}

function loseGame() {
  titleElement.textContent = feedbackLose;
  answerButtonElement1.style.visibility = "hidden";
  answerButtonElement2.style.visibility = "hidden";
  answerButtonElement3.style.visibility = "hidden";
  answerButtonElement4.style.visibility = "hidden";
  questionsAskedElement.style.visibility = "hidden";
  feedbackTextElement.textContent = "";
  questionTimerElement.textContent = "";
  subheaderDivElement.textContent = "";
}

function questionWrong() {
  countdown -= 5;
  scoreboard -= 3;
  if (scoreboard < 0) {
    scoreboard = 0;
  }
  scoreboardElement.textContent = scoreboard;
  feedbackTextElement.textContent = feedbackWrong + " -5 seconds & -3 points";
}

function questionCorrect() {
  scoreboard += 5;
  scoreboardElement.textContent = scoreboard;
  feedbackTextElement.textContent = feedbackCorrect + " +5 points";
  return;
}

function buttonListener(event) {
  switch (event.target) {
    case answerButtonElement1:
      if (answerButtonElement1.dataset.isCorrect === "true") {
        questionCorrect();
        questionArray[selectedQuestion]();
        selectedQuestion++;
        break;
      } else {
        if (answerButtonElement1.dataset.isCorrect !== true) questionWrong();
        break;
      }
    case answerButtonElement2:
      if (answerButtonElement2.dataset.isCorrect === "true") {
        questionCorrect();
        questionArray[selectedQuestion]();
        selectedQuestion++;
        break;
      } else {
        if (answerButtonElement2.dataset.isCorrect !== true) questionWrong();
        break;
      }
    case answerButtonElement3:
      if (answerButtonElement3.dataset.isCorrect === "true") {
        questionCorrect();
        questionArray[selectedQuestion]();
        selectedQuestion++;
        break;
      } else {
        if (answerButtonElement3.dataset.isCorrect !== true) questionWrong();
        break;
      }
    case answerButtonElement4:
      if (answerButtonElement4.dataset.isCorrect === "true") {
        questionCorrect();
        questionArray[selectedQuestion]();
        selectedQuestion++;
        break;
      } else {
        if (answerButtonElement4.dataset.isCorrect !== true) questionWrong();
        break;
      }
  }
}

function hiddenButton() {
  answerButtonElement1.style.visibility = "hidden";
  answerButtonElement2.style.visibility = "hidden";
  answerButtonElement3.style.visibility = "hidden";
  answerButtonElement4.style.visibility = "hidden";
  submitDivElement.style.visibility = "hidden";
}

function visibleButton() {
  questionStartBtn.style.visibility = "hidden";
  answerButtonElement1.style.visibility = "visible";
  answerButtonElement2.style.visibility = "visible";
  answerButtonElement3.style.visibility = "visible";
  answerButtonElement4.style.visibility = "visible";
}

function submitPage() {
  titleElement.textContent = feedbackWin;
  titleElement.style.fontSize = "xxx-large";
  answerButtonElement1.style.visibility = "hidden";
  answerButtonElement2.style.visibility = "hidden";
  answerButtonElement3.style.visibility = "hidden";
  answerButtonElement4.style.visibility = "hidden";
  questionsAskedElement.style.visibility = "hidden";
  questionTimerElement.textContent = "";
  submitDivElement.style.visibility = "visible";
  inputText.style.visibility = "hidden";
  feedbackTextElement.textContent = "";
  questionTimerElement.textContent = "";
  questionTitleElement.textContent = "";
}

inputElement.addEventListener("input", updateValue);

function updateValue(initials) {
  inputText.textContent = initials.target.value;
}

submitButtonElement.addEventListener("click", saveInput);
function saveInput() {
  localStorage.setItem("Initials", inputText.textContent);
  localStorage.setItem("Score", scoreboard);
  savedInitialsElement.textContent = inputText.textContent + " Score: " + scoreboard;
  submitButtonElement.style.visibility = "hidden";
  inputElement.style.visibility = "hidden";
}