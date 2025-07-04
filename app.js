const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Entre un nombre valide entre 1 et 100.";
  } else if (guess < secretNumber) {
    message.textContent = "Trop petit ! Essaie encore.";
  } else if (guess > secretNumber) {
    message.textContent = "Trop grand ! Essaie encore.";
  } else {
    message.textContent = `Bravo ! Tu as trouvé en ${attempts} essais 🎉`;
  }
}
