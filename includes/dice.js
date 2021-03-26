let diceArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
let totalGames = 0;
let play1Wins = 0;
let play2Wins = 0;
let playTies = 0;

function rollDice() {
    totalGames++;
    let gamesPlayed = document.body.querySelector('#games');
    gamesPlayed.innerHTML = totalGames;
    let dice1 = (Math.floor(Math.random() * 6));
    let dice2 = (Math.floor(Math.random() * 6));

    let diceImg1 = document.body.querySelector('.dice-img1');
    let diceImg2 = document.body.querySelector('.dice-img2');

    diceImg1.src = "./images/" + diceArray[dice1];
    diceImg2.src = "./images/" + diceArray[dice2];
    //Decide the winner
    if (dice1 === dice2) {
        let gameHeader = document.body.querySelector('h1');
        gameHeader.innerHTML = "It's a tie, no winner!";
        playTies++;
        let gamesTied = document.body.querySelector('#playT');
        gamesTied.innerHTML = playTies;
    }
    else if (dice1 < dice2) {
        let gameHeader = document.body.querySelector('h1');
        gameHeader.innerHTML = "Player 2 Wins!";
        play2Wins++;
        let gamesP2Wins = document.body.querySelector('#play2W');
        gamesP2Wins.innerHTML = play2Wins;
    }
    else {
        let gameHeader = document.body.querySelector('h1');
        gameHeader.innerHTML = "Player 1 Wins!";
        play1Wins++;
        let gamesP1Wins = document.body.querySelector('#play1W');
        gamesP1Wins.innerHTML = play1Wins;
    }
}

let btnRollDice = document.body.querySelector('#rollDice')
btnRollDice.addEventListener('click', rollDice);