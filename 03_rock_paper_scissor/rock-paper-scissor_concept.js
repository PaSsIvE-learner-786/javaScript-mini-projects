// thiss the simple version of rock paper scissor game. It uses if else statements to determine the winner. The computer's choice is generated randomly using Math.random() and Math.floor() functions. The user's choice is taken as input using prompt() function and converted to lowercase using toLowerCase() method. The game then compares the user's choice with the computer's choice and determines the winner based on the rules of the game. The result is displayed using console.log() and alert() functions.

// let userChoice = prompt("Enter your choice: r for rock, p for paper, s for scissor").toLowerCase();
// let computerChoice = Math.floor(Math.random() * 3);

// console.log("computerChoice: " + computerChoice);

// if (userChoice === "r") {
//   if (computerChoice === 0) {
//     console.log("Computer chose rock. It's a tie!");
//     alert("It's a tie!");
//   }
//   else if (computerChoice === 1) {
//     console.log("Computer chose paper. Computer wins! Paper covers rock.");
//     alert("Computer wins! Paper covers rock.");
//   }
//   else {
//     console.log("Computer chose scissor. You win! Rock crushes scissor.");
//     alert("You win! Rock crushes scissor.");
//   }
// }

// if (userChoice === "p") {
//   if (computerChoice === 1) {
//     console.log("Computer chose paper. It's a tie!");
//     alert("It's a tie!");
//   }
//   else if (computerChoice === 0) {
//     console.log("Computer chose scissor. Computer wins! Scissor cuts paper.");
//     alert("Computer wins! Scissor cuts paper.");
//   }
//   else {
//     console.log("Computer chose rock. You win!  Paper covers rock.");
//     alert("You win! Paper covers rock.");
//   }
// }

// if (userChoice === "s") {
//   if (computerChoice === 0) {
//     console.log("Computer chose rock. Computer wins! Rock crushes scissor.");
//     alert("Computer wins! Rock crushes scissor.");
//   }
//   else if (computerChoice === 1) {
//     console.log("Computer chose paper. You win! Scissor cuts paper.");
//     alert("You win! Scissor cuts paper.");
//   }
//   else {
//     console.log("Computer chose scissor. It's a tie!.");
//     alert("It's a tie!.");
//   }
// }