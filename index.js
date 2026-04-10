let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// elements
const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const actualNum = document.getElementById("actualNumber");
const attemptsText = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

function checkGuess() {
  const userGuess = Number(guessInput.value);
  attempts++;
  attemptsText.textContent = attempts;
  if (guess === secretNumber) {
    result.textContent = "CORRECT!";
    message.textContent = "Hey! You got it! I think you can read mind!";
  } else if (guess < secretNumber) {
    result.textContent = "TOO LOW!";
    message.textContent = "Nope, Try again, higher!";
  } else if (guess > secretNumber) {
    result.textContent = "TOO HIGH!";
    message.textContent = "Nope, Try again, lower!";
  }
}

checkBtn.addEventListener("click", checkGuess);

resetBtn.addEventListener("click", () => {
  location.reload();
});
