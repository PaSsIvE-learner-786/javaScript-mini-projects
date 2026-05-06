let computerChoice = 0;
let userChoice = "";

let user = document.getElementById("user-choice");
let computer = document.getElementById("computer-choice");
let result = document.getElementById("result");


let scoreTie = document.querySelector("#score-tie");
let scoreWin = document.querySelector("#score-win");
let scoreLose = document.querySelector("#score-lose");

// as null  a fasly value we can use || operator to assign a default value to score if there is no score in local storage
let score = JSON.parse(localStorage.getItem("score")) || {
  tie: 0,
  win: 0,
  lose: 0
};

scoreTie.textContent = score.tie;
scoreWin.textContent = score.win;
scoreLose.textContent = score.lose;

function userPlay() {
  function comChoice(){
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      computer.textContent = '👊';
      return '👊';
    }
    else if (choice === 1) {
      computer.textContent = '✋';
      return '✋';
    }
    else {
      computer.textContent = '✌️';
      return '✌️';
    }
  }
  
  computerChoice = comChoice();
  let content = "";
  
  if (userChoice === "👊") {
    user.textContent = '👊';
    
    if (computerChoice === "👊") {
      content = 'It\'s a tie!';
      score.tie++;
    }
    else if (computerChoice === "✋") {
      content = 'You lose! Paper covers rock.';
      score.lose++;
    }
    else {
      content = 'You win! Rock crushes scissor.';
      score.win++;
    }
  }
  
  else if (userChoice === "✋") {
    user.textContent = '✋';
    
    if (computerChoice === "✋") {
      content = 'It\'s a tie!';
      score.tie++;
    }
    else if (computerChoice === "✌️") {
      content = 'You lose! Scissor cuts paper.';
      score.lose++;
    }
    else {
      content = 'You win! Paper covers rock.';
      score.win++;
    }
  }
  
  else{
    user.textContent = '✌️';
    
    if (computerChoice === "👊") {
      content = 'You lose! Rock crushes scissor.';
      score.lose++;
    }
    else if (computerChoice === "✋") {
      content = 'You win! Scissor cuts paper.';
      score.win++;
    }
    else {
      content = 'It\'s a tie!.';
      score.tie++;
    }
  }
  
  result.textContent = content;
  localStorage.setItem("score", JSON.stringify(score)); 
  
  scoreTie.textContent = score.tie;
  scoreWin.textContent = score.win;
  scoreLose.textContent = score.lose;
}

function resetScore() {
  localStorage.removeItem("score");
  score = {
    tie: 0,
    win: 0,
    lose: 0
  };
  scoreTie.textContent = score.tie;
  scoreWin.textContent = score.win;
  scoreLose.textContent = score.lose;

  console.log("Score reset successfully.");
}
