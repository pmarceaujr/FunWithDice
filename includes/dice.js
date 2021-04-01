let diceArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
let totalGames = 0;
let play1Wins = 0;
let play2Wins = 0;
let playTies = 0;
let player1Name = prompt("Enter Player One's Name")
let player2Name = prompt("Enter Player Two's Name")
let player1NameH3 = document.body.querySelector('#play1');
let player2NameH3 = document.body.querySelector('#play2');
player1NameH3.innerHTML = player1Name
player2NameH3.innerHTML = player2Name
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
        gameHeader.innerHTML = `${player2Name} Wins!`;
        play2Wins++;
        let gamesP2Wins = document.body.querySelector('#play2W');
        gamesP2Wins.innerHTML = play2Wins;
    }
    else {
        let gameHeader = document.body.querySelector('h1');
        gameHeader.innerHTML = `${player1Name} Wins!`;
        play1Wins++;
        let gamesP1Wins = document.body.querySelector('#play1W');
        gamesP1Wins.innerHTML = play1Wins;
    }
}

let btnRollDice = document.body.querySelector('#rollDice')
btnRollDice.addEventListener('click', rollDice);