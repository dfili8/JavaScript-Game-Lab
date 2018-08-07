const opponentName = 'Grant the Almighty Chicken';
let userName;
let userHealthPoints = 40;
let opponentHealthPoints = 10;
let userWins = 0;

const question = prompt('Do you want to play?');
const answer = question.toLowerCase();

if(answer === 'yes'){
    startGame();
} else {
    console.log('Try again!');
}

function startGame(){
    userName = prompt('Enter your name:');
    fightToTheDeath();
}

function fightToTheDeath() {
    while(userWins < 3 && userHealthPoints > 0) {
        userHealthPoints -= Math.floor(Math.random() * 2) + 1;
        opponentHealthPoints -= Math.floor(Math.random() * 2) + 1;
        console.log(`${userName} has ${userHealthPoints} health points left`);
        console.log(`${opponentName} has ${opponentHealthPoints} health points left`);
        if(opponentHealthPoints < 1){
            userWins++;
            console.log(`${userName} has won this round.`);
            opponentHealthPoints = 10;
        } 

        if (userWins === 3) {
            console.log(`Game Over. ${userName} is victorious!`);
        } else if (userHealthPoints < 1) {
            console.log(`Game Over. ${opponentName} is victorious!`);
        }
    }
}