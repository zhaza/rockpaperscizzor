function computerPlay() {
    //  set up array for randomizer function to pick from
    let handArray = ["rock", "paper", "scissor"];
    // set up randomizer function selecting from array
    let randomNumber = Math.floor(Math.random() * handArray.length);
    return handArray[randomNumber];
  }
  
  // set score, ready for counting
  let p1score = 0;
  let c1score = 0;
  // Play a round of RPS, by asking player to choose. Set choice to lowercase for case-insensitivity
  // Pit choices against, count if won, and redo round if choice is not one of 3 recognized choices.
  function playRound() {
    let p1 = prompt("Rock? Paper? Scissor?").toLowerCase();
    const c1 = computerPlay();
    if (p1 === c1) {
      return "TIED! Try Again!";
    } else if (p1 === "rock" && c1 === "paper") {
      return "You LOSE! Paper beats rock. Try Again!";
    } else if (p1 === "paper" && c1 === "scissor") {
      return "You LOSE! Scissor beats paper. Try Again!";
    } else if (p1 === "scissor" && c1 === "rock") {
      return "You LOSE! Rock beats scissor. Try Again!";
    } else if (p1 === "rock" || p1 === "paper" || p1 === "scissor") {
      return "YOU WIN! KEEP GOING!";
    } else {
      alert(`"${p1}" is not one of the choices. Try that again.`);
      console.log(playRound());
    }
  }
  function record() {
    let result = playRound();
    console.log(result);
    if (result.includes("WIN")) {
      console.log(`Current Score: Player = ${(p1score += 1)} | Comp = ${c1score}`);
      return "Round over!";
    } else if (result.includes("TIED")) {
      console.log(`Current Score: Player = ${p1score} | Comp = ${c1score}`);
      return "Round over!";
    } else if (result.includes("LOSE")) {
      console.log(`Current Score: Player = ${p1score} | Comp = ${(c1score += 1)}`);
      return "Round over!";
    }
  }
  // reset score and set a game, best of 5 rounds. Show player as winner with score or computer score out of 5.
  function game() {
    p1score = 0;
    c1score = 0;
    record();
    record();
    record();
    record();
    record();
    if (p1score >= 3) {
        return `YAY! Player won! Score: ${p1score} - ${c1score}`;
    } else if (p1score = c1score) {
        return `TIED! Score: ${p1score} - ${c1score}`;
    } else  {
        return `Sorry, Computer won! Score: ${c1score} - ${p1score}`;
    }
  }
  