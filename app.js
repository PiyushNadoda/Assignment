const username = document.getElementById("username");
const phone = document.getElementById("phone");
const next = document.getElementById("next");
const mainContainer = document.querySelector(".main-container");
const attempt = document.getElementById("attempt");

// showing countdown page on clicking next button
next.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value.trim() === "") {
    username.classList.add("required");
    setTimeout(() => {
      username.classList.remove("required");
    }, 2000);
  }
  if (phone.value.trim() === "") {
    phone.classList.add("required");
    setTimeout(() => {
      phone.classList.remove("required");
    }, 2000);
  }
  if (username.value.trim() !== "" && phone.value.trim() !== "") {
    mainContainer.classList.remove("welcome-page");
    mainContainer.classList.add("next");
    quizBeginCountdown();
  }
});

// showing next question on clicking attempt
attempt.addEventListener("click", () => {
  const queNum1 = document.getElementById("question-number");
  const queNum2 = document.getElementById("question-number-for-card");
  const progressBar = document.getElementById("progress-done");
  if (parseInt(queNum1.innerText) < 15) {
    queNum1.innerText = parseInt(queNum1.innerText) + 1;
    queNum2.innerText = queNum1.innerText;
    progressBar.style.width = `${(parseInt(queNum1.innerText) / 15) * 100}%`;
  } else {
    queNum1.innerText = 1;
    queNum2.innerText = queNum1.innerText;
    progressBar.style.width = `${(parseInt(queNum1.innerText) / 15) * 100}%`;
  }
});

// countdown for countdown page

function quizBeginCountdown() {
  const count = document.getElementById("count");
  const interval = setInterval(() => {
    if (parseInt(count.innerText) > 1) {
      count.innerText = parseInt(count.innerText) - 1;
    } else {
      mainContainer.classList.remove("next");
      mainContainer.classList.add("quiz-page");
      quizTimer(interval);
    }
  }, 1000);
}

// countdown on quiz page
function quizTimer(interval) {
  clearInterval(interval);
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  const interval2 = setInterval(() => {
    if (parseInt(sec.innerText) === 0) {
      if (parseInt(min.innerText) === 0) {
        clearInterval(interval2);
      } else {
        sec.innerText = 59;
        if (parseInt(min.innerText) < 11) {
          min.innerText = `0${parseInt(min.innerText) - 1}`;
        } else {
          min.innerText = parseInt(min.innerText) - 1;
        }
      }
    } else if (parseInt(sec.innerText) < 11) {
      sec.innerText = `0${parseInt(sec.innerText) - 1}`;
    } else {
      sec.innerText = parseInt(sec.innerText) - 1;
    }
  }, 2000);
}
