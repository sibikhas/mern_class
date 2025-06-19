function play(option) {
  const resultEl = document.getElementById("result");
  const arr = ["rock", "paper", "scissors"];
  const computerOption = arr[Math.floor(Math.random() * 3)];
  
  if (option === computerOption) {
    resultEl.innerHTML = `<h1>Draw! You both chose ${option}</h1>`;
  } else if (
    (option === "rock"     && computerOption === "scissors") ||
    (option === "paper"    && computerOption === "rock")     ||
    (option === "scissors" && computerOption === "paper")
  ) {
    resultEl.innerHTML = `<h1>You win! ${option} beats ${computerOption}</h1>`;
  } else {
    resultEl.innerHTML = `<h1>Computer wins! ${computerOption} beats ${option}</h1>`;
  }
}

["rock", "paper", "scissors"].forEach(opt => {
  document.getElementById(opt).addEventListener("click", () => play(opt));
});
