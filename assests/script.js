const titleElement = document.querySelector("#title");
const questionStartBtn = document.querySelector("#button");
const questionsElement = document.querySelector("#questions");
const questionTimerElement = document.querySelector("#timer");
const questionsAskedElement = document.querySelector("#questions");
const answerButtonElement1 = document.querySelector("#button1");
const answerButtonElement2 = document.querySelector("#button2");
const answerButtonElement3 = document.querySelector("#button3");
const answerButtonElement4 = document.querySelector("#button4");
const feedbackTextElement = document.querySelector("#feedback");
const arrayOfButton = document.querySelectorAll("article button");

let questionArray = [question1, question2, question3, question4, question5];

let selectedQuestion = 1;

for (let button of arrayOfButton) {
  button.addEventListener("click", buttonListener);
}

let countdown;
const feedbackRight = ["Correct!"];
const feedbackWrong = ["Wrong"];
const feedbackClear = [""];
const feedbackLose = ["You Lose!"];

questionStartBtn.addEventListener("click", quizStart);

function quizStart() {
  question1();
  countdown = 60;
  questionTimerElement.textContent = countdown;
  const timer = setInterval(() => {
    countdown--;
    questionTimerElement.textContent = countdown;
    if (countdown === 0) {
      loseGame();
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
  answerButtonElement2.dataset.isCorrect = false;
  answerButtonElement4.textContent = question1Choice4;
  answerButtonElement2.dataset.isCorrect = false;

  // document.addEventListener("click", (event) => {
  //   switch (event.target) {
  //     case answerButtonElement1:
  //       // feedbackTextElement.textContent = feedbackRight
  //       question2();
  //       clearFeedback();
  //       break;
  //     case answerButtonElement2:
  //       questionWrong();
  //       // feedbackTextElement.textContent = feedbackWrong;
  //       break;
  //     case answerButtonElement3:
  //       // feedbackTextElement.textContent = feedbackWrong;
  //       break;
  //     case answerButtonElement4:
  //       // feedbackTextElement.textContent = feedbackWrong;
  //       break;
  //   }
  // });
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
  answerButtonElement2.textContent = question2Choice2;
  answerButtonElement3.textContent = question2Choice3;
  answerButtonElement4.textContent = question2Choice4;
  // code what answer is true / false
  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        break;
      case answerButtonElement2:
        question3();
        break;
      case answerButtonElement3:
        break;
      case answerButtonElement4:
        break;
    }
  });
}

function question3() {
  const questionAsked3 = ["What is Iron Man's name?"];
  const question3Choice1 = ["Steve Rogers"];
  const question3Choice2 = ["Peter Quill"];
  const question3Choice3 = ["Clint Barton"];
  const question3Choice4 = ["Tony Stark"];
  questionsAskedElement.textContent = questionAsked3;
  answerButtonElement1.textContent = question3Choice1;
  answerButtonElement2.textContent = question3Choice2;
  answerButtonElement3.textContent = question3Choice3;
  answerButtonElement4.textContent = question3Choice4;
  // code what answer is true / false
  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        break;
      case answerButtonElement2:
        break;
      case answerButtonElement3:
        break;
      case answerButtonElement4:
        question4();
        break;
    }
  });
}

function question4() {
  const questionAsked4 = ["What Color is Captain Americas Shield?"];
  const question4Choice1 = ["Black, Red & White"];
  const question4Choice2 = ["Pink, Yellow & Purple"];
  const question4Choice3 = ["Red, White & Blue"];
  const question4Choice4 = ["Cyan, Purple & Black"];
  questionsAskedElement.textContent = questionAsked4;
  answerButtonElement1.textContent = question4Choice1;
  answerButtonElement2.textContent = question4Choice2;
  answerButtonElement3.textContent = question4Choice3;
  answerButtonElement4.textContent = question4Choice4;
  // code what answer is true / false
  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        break;
      case answerButtonElement2:
        break;
      case answerButtonElement3:
        question5();
        break;
      case answerButtonElement4:
        break;
    }
  });
}

function question5() {
  const questionAsked5 = ["What Animal is Rocket Racoon"];
  const question5Choice1 = ["Racoon"];
  const question5Choice2 = ["Rabbit"];
  const question5Choice3 = ["Squirrel"];
  const question5Choice4 = ["Dog"];
  questionsAskedElement.textContent = questionAsked5;
  answerButtonElement1.textContent = question5Choice1;
  answerButtonElement2.textContent = question5Choice2;
  answerButtonElement3.textContent = question5Choice3;
  answerButtonElement4.textContent = question5Choice4;
  // code what answer is true / false
  document.addEventListener("click", (event) => {
    switch (event.target) {
      case answerButtonElement1:
        break;
      case answerButtonElement2:
        break;
      case answerButtonElement3:
        break;
      case answerButtonElement4:
        break;
    }
  });
}

function loseGame() {
  titleElement.textContent = feedbackLose;
  clearInterval(timer);
}

function clearFeedback() {
  feedbackCountdown = 5;
  feedbackTimer = setInterval(() => {
    feedbackCountdown--;
    feedbackTextElement.textContent = feedbackClear;
  }, 1000);
}

function questionWrong() {
  timer - 5;
  console.log("Hello");
}

function buttonListener(event) {
  switch (event.target) {
    case answerButtonElement1:
      console.log(answerButtonElement1.dataset.isCorrect);
      if (answerButtonElement1.dataset.isCorrect === "true") {
        questionArray[selectedQuestion]();
        selectedQuestion++;
        console.log("Hello");
      } // decrease timer(countdown) and remove score
      else break;
    case answerButtonElement2:
      if (answerButtonElement2 !== true)
        // minus time function
        break;
    case answerButtonElement3:
      break;
    case answerButtonElement4:
      break;
  }
}
