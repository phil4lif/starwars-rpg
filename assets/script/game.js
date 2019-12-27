//global variables for the game
//objects for fighter statistics
var rey = {
    hp: 150,
    initialAttack: 6
};
var maul = {
    hp: 120,
    initialAttack: 8
};
var yoda={
    hp: 160,
    initialAttack: 9
};
var kylo = {
    hp:140
    initialAttack: 5
};


//the user will choose their character and then it moves to the your character area


// the characters that were not chosen will move to the choose your opponent area

// the user then clicks the attack button, then an amount of damage will be done based on how many times the user has attacked this opponent, this amount will be reduced from the opponents hp


//the opponent will automatically counter attack after it has taken damage and the amount of damage it does will be reduced from the users character's hp

//if the user defeats the opponent, they choose the next opponent to fight and the process is repeated

//when the user's character runs out of hp, their character has been defeated and they have lost the game.