let computerPlay = () => {
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

function name(params) {
    
}