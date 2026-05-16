'use strict';

let computerChoice = "";
let userChoice = "";

let choice = document.getElementById("choice");
let result = document.getElementById("result");


let scoreBoard = document.querySelector("#scoreBoard");

function updateScore(){
  scoreBoard.textContent = `Win: ${score.win}  |  Lose: ${score.lose}  |  Tie: ${score.tie}`;
}

// as null  a fasly value we can use || operator to assign a default value to score if there is no score in local storage
let score = JSON.parse(localStorage.getItem("score")) || {
  tie: 0,
  win: 0,
  lose: 0
};
updateScore();

function userPlay() {

  function comChoice(){
    const compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      return '👊';
    }
    else if (compChoice === 1) {
      return '✋';
    }
    else {
      return '✌️';
    }
  }
  
  computerChoice = comChoice();

  let content = "";
  
  if (userChoice === "👊") {
    
    if (computerChoice === "👊") {
      content = "It's a tie!";
      score.tie++;
    }
    else if (computerChoice === "✋") {
      content = "You lose! Paper covers rock.";
      score.lose++;
    }
    else {
      content = "You win! Rock crushes scissor.";
      score.win++;
    }
  }
  
  else if (userChoice === "✋") {
    
    if (computerChoice === "✋") {
      content = "It's a tie!";
      score.tie++;
    }
    else if (computerChoice === "✌️") {
      content = "You lose! Scissor cuts paper.";
      score.lose++;
    }
    else {
      content = "You win! Paper covers rock.";
      score.win++;
    }
  }
  
  else{

    if (computerChoice === "👊") {
      content = "You lose! Rock crushes scissor.";
      score.lose++;
    }
    else if (computerChoice === "✋") {
      content = "You win! Scissor cuts paper.";
      score.win++;
    }
    else {
      content = "It's a tie!.";
      score.tie++;
    }
  }
  
  result.textContent = content;
  choice.textContent = `You ${userChoice}    |   ${computerChoice}Computer `;
  localStorage.setItem("score", JSON.stringify(score)); 
  updateScore();
}

function resetScore() {
  localStorage.removeItem("score");
  score = {
    tie: 0,
    win: 0,
    lose: 0
  };
  updateScore();
  console.log("Score reset successfully.");
}
