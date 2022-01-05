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

function playRound(p1, c1) {
    let p1 = p1.toLowerCase();
    if (p1 === c1) {
        return "TIED!"
    } else if ( p1 === "rock" || c1 === "paper") {
        return "You LOSE! Paper beats rock."
    } else if ( p1 === "paper" || c1 === "scizzor"){
        return "You LOSE! Scizzor beats paper."
    } else if ( p1 === "scizzor" || c1 === "rock") {
        return "You LOSE! Rock beats scizzor."
    } else {
        return "YOU WIN!"
    }

const p1 = prompt("Rock? Paper? Scizzor?");
const c1 = computerPlay();
console.log(playRound(p1, c1));
};

function game() {
    return playRound()
    if (condition) {
        
    } else {
        
    }
    return playRound
    return playRound
    return playRound
    return playRound
}