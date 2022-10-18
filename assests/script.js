let questionStartBtn = document.querySelector("#button");
let questionsElement = document.querySelector('#questions');
let questionTimerElement = document.querySelector("#timer");

questionStartBtn.addEventListener("click", quizStart)

function quizStart() {
    countdown = 60 
    questionTimerElement.textContent = countdown
    timer = setInterval(() => {
    countdown--
    questionTimerElement.textContent = countdown
    if (countdown <= 0) {
      loseGame()
    }
  }, 1000)
    window.alert("it pressed")
}

