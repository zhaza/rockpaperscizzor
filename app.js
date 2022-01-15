function computerPlay() {
//  set up array for randomizer function to pick from
let handArray = [
    'rock',
    'paper',
    'scizzor'
];
// set up randomizer function 
let randomNumber = Math.floor(Math.random()*handArray.length);
return handArray[randomNumber];
};

// set score, ready for counting
let score = 0 ;
// Play a round of RPS, by asking player to choose. 
// Pit choices against, and redo round if choice is not one of 3 recognized choices.
function playRound() {
let p1 = prompt("Rock? Paper? Scissor?").toLowerCase();
const c1 = computerPlay();
    if (p1 === c1) {
        return "TIED! Try Again!";
    } else if ( p1 === "rock" && c1 === "paper") {
        return "You LOSE! Paper beats rock. Try Again!";
    } else if ( p1 === "paper" && c1 === "scissor"){
        return "You LOSE! Scissor beats paper. Try Again!";
    } else if ( p1 === "scizzor" && c1 === "rock") {
        return "You LOSE! Rock beats scissor. Try Again!";
    } else if (p1 === "rock" || p1 === "paper" || p1 === "scissor") {
        return `YOU WIN! KEEP GOING! Won:${score+=1}`;
    } else {
        alert(`"${p1}" is not one of the choices. Try that again.`);
        console.log(playRound());
    }
};
// reset score and set a game, best of 5 rounds. Show player as winner with score or computer score out of 5.
function game() {
    score = 0;
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    if (score >= 3) {
        console.log(`YAY! Player won ${score} times!`);
    } else {
        console.log(`Sorry, computer won. ${5 - score} times`);
    }
};