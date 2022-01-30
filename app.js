function computerPlay() {
    //  set up array for randomizer function to pick from
    let handArray = ["rock", "paper", "scissor"];
    // set up randomizer function selecting from array
    let randomNumber = Math.floor(Math.random() * handArray.length);
    return handArray[randomNumber];
  }
  
// set score, ready for counting
let result = "";
let score = "";
let p1score = 0;
let c1score = 0;
// Play a round of RPS, by asking player to choose. Set choice to lowercase for case-insensitivity
// Pit choices against, count if won, and redo round if choice is not one of 3 recognized choices.
function playRound(p1) {
  // let p1 = prompt("Rock? Paper? Scissor?").toLowerCase();
  const c1 = computerPlay();
  if (p1 === c1) {
    result = "TIED! Try Again!";
  } else if (p1 === "rock" && c1 === "paper") {
    result = "You LOSE! Paper beats rock. Try Again!";
  } else if (p1 === "paper" && c1 === "scissor") {
    result = "You LOSE! Scissor beats paper. Try Again!";
  } else if (p1 === "scissor" && c1 === "rock") {
    result = "You LOSE! Rock beats scissor. Try Again!";
  } else if (p1 === "rock" || p1 === "paper" || p1 === "scissor") {
    result = "YOU WIN! KEEP GOING!";
  } else {
    alert(`"${p1}" is not one of the choices. Try that again.`);
  }
  return result;
}
function record() {
if (p1score != 5 && c1score != 5) {
  if (result.includes("WIN")) {
    score = `${result} (Player = ${(p1score += 1)} | Comp = ${c1score})`;
  } else if (result.includes("TIED")) {
    score = `${result} (Player = ${p1score} | Comp = ${c1score})`;
  } else if (result.includes("LOSE")) {
    score = `${result} (Player = ${p1score} | Comp = ${(c1score += 1)})`;
  }
} else if (p1score === 5 || c1score === 5) {
    if (p1score > c1score) {
      score = "Player is the WINNER!"
    } else {
      score = "Computer is the WINNER!"
    }
  }
  return score;
}
// reset score and set a game, best of 5 rounds. Show player as winner with score or computer score out of 5.
// function game() {
//   let final = "";
//   if (p1score >= 3) {
//       final = result + score + `YAY! Player won! Score: ${p1score} - ${c1score}`;
//   } else if (p1score = c1score) {
//       final = result + score + `TIED! Score: ${p1score} - ${c1score}`;
//   } else  {
//       final = result + score + `Sorry, Computer won! Score: ${c1score} - ${p1score}`;
//   }
//   return final
// }
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let p1 = button.id;
    playRound(p1);
    record();
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `${score}`;

    container.appendChild(content);
  });
});
  