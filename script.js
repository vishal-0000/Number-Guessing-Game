let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

function checkGuess() {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  attempts.textContent = attemptsLeft;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    endGame();
  } else if (attemptsLeft === 0) {
    message.textContent = `❌ Out of attempts! The number was ${secretNumber}.`;
    endGame();
  } else if (userGuess > secretNumber) {
    message.textContent = "📉 Too high! Try a lower number.";
  } else {
    message.textContent = "📈 Too low! Try a higher number.";
  }

  guessInput.value = "";
}

function endGame() {
  guessBtn.disabled = true;
  guessInput.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  attempts.textContent = attemptsLeft;
  message.textContent = "";
  guessBtn.disabled = false;
  guessInput.disabled = false;
  guessInput.value = "";
  restartBtn.style.display = "none";
}
