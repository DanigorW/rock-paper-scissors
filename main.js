let userScore = 0;
let userScore2 = 0;

let button = document.querySelector("button");
let userScoreEl = document.querySelector(".user-1-score");
let userScoreEl2 = document.querySelector(".user-2-score");
let main = document.querySelector(".main");
let h1 = document.querySelector(".h1");
let rock = document.querySelector(".r");
let paper = document.querySelector(".p");
let scissors = document.querySelector(".s");

button.addEventListener("click", () => {
  userScore = 0;
  userScore2 = 0;
  userScoreEl2.textContent = userScore2;
  userScoreEl.textContent = userScore;
});

let compGame = () => {
  let choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const win = (a, b) => {
  userScore++;
  userScoreEl.textContent = userScore;
  h1.textContent = `${a} beats ${b} YOU WIN!`;
  if (userScore === 10) {
    h1.textContent = `YOU WIN!`;
    userScore = 0;
    userScore2 = 0;
    userScoreEl2.textContent = userScore2;
    userScoreEl.textContent = userScore;
  }
};

const lose = (a, b) => {
  userScore2++;
  userScoreEl2.textContent = userScore2;
  h1.textContent = `${b} beats ${a} YOU LOSE!`;
  if (userScore2 === 10) {
    h1.textContent = `YOU LOSE`;
    userScore = 0;
    userScore2 = 0;
    userScoreEl2.textContent = userScore2;
    userScoreEl.textContent = userScore;
  }
};

const draw = () => {
  h1.textContent = `it's a DRAW`;
};

const game = str => {
  const compChoice = compGame();

  switch (str + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(str, compChoice);
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      lose(str, compChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;
  }
};

const mainGame = () => {
  rock.addEventListener("click", () => {
    game("rock");
  });

  paper.addEventListener("click", () => {
    game("paper");
  });

  scissors.addEventListener("click", () => {
    game("scissors");
  });
};

mainGame();
