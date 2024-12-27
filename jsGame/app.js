let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uScore = document.querySelector("#user");
const cScore = document.querySelector("#comp");


const genCompChoice = () => {
  let option = ["rock", "scissors", "paper"];
  let rn = Math.floor(Math.random() * 3);
  return option[rn];
};

const drawGame = () => {
  console.log("match was draw");
  msg.innerText = "Match was draw";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    console.log("you win");
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    uScore.innerText = userScore;
  } else {
    console.log("computer win");
    msg.innerText = `You lose!  ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    cScore.innerText = compScore;
  }
};

const playgame = (userChoice) => {
  console.log("usere choise =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choise =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
   
  } else {
    let userWin = true;
     if (userChoice === "paper") { 
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else  {
      userWin = compChoice === "rock" ? true : false;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};



choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
  });
});

