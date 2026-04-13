let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const attemptsText = document.getElementById("attempts");
const resetBtn = document.getElementById("resetBtn");

function checkGuess() {
  const rawValue = guessInput.value;
  if (rawValue === "") {
    result.textContent = "WAIT..";
    message.textContent = "Hey! Put a number first!";
    return;
  }

  const userGuess = Number(guessInput.value);

  attempts++;
  attemptsText.textContent = attempts;
  if (userGuess === secretNumber) {
    result.textContent = "CORRECT!";
    message.textContent = "Hey! You got it! I think you can read mind!";
    checkBtn.disabled = true;
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  } else if (userGuess < secretNumber) {
    result.textContent = "TOO LOW!";
    message.textContent = "Nope, Try again, higher!";

    guessInput.classList.add("shake-animation");

    setTimeout(() => {
      guessInput.classList.remove("shake-animation");
    }, 500);
  } else if (userGuess > secretNumber) {
    result.textContent = "TOO HIGH!";
    message.textContent = "Nope, Try again, lower!";

    guessInput.classList.add("shake-animation");

    setTimeout(() => {
      guessInput.classList.remove("shake-animation");
    }, 500);
  }

  guessInput.value = "";
  guessInput.focus();
}

checkBtn.addEventListener("click", checkGuess);

resetBtn.addEventListener("click", () => {
  location.reload();
});
