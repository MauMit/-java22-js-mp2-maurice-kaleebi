
const arr = ['Rock', 'Paper', 'Scissors'];
const winnerH1 = document.querySelector('h1'); // Texten som visar vem som vann matchen
const playerChoiceH2 = document.querySelector('h2'); // ger ett namn till min h2-text som visar användares val
const h3 = document.querySelectorAll('h3');
const h4 = document.querySelectorAll('h4');
const endGameResultH5 = document.querySelector('h5');
const usernameInput = document.querySelector('input');
const button = document.querySelectorAll('button');
const rock = arr[0]; // döper arr[0] till rock för enklare läsning av kod
const paper = arr[1]; // döper arr[1] till paper för enklare läsning av kod
const scissors = arr[2]; // döper arr[2] till scissors för enklare läsning av kod

userNameSubmitButton = button[0];
rockButton = button[1];
paperButton = button[2];
scissorsButton = button[3];

usernameInput.value = '';  // gör så att texten försvinner från sökrutan
let computerChoice = h4[1]; // ger ett namn till min h4[1]-text som visar datorns val
let winnerOfRoundResultH4 = h4[0]; // Visar resultat av ronden på skärmen, om användare väljer sten och datorn väljer på så visar den att datorn vann

let playerWins = 0; // Poäng för spelaren när de har fått 3 rätt och vinner ronden 
let computerWins = 0; // Poäng för datorn när de har fått 3 rätt och vinner ronden

let playerScore = 0; // poäng för spelaren när de väljer rätt
let computerScore = 0; // poäng för datorn när de väljer rätt


userNameSubmitButton.addEventListener('click', event => {
    event.preventDefault(); // gör så att det vi skriver är kvar på sidan

    if (usernameInput.value != '') { // Gör så att man inte kan skriva in en tom sträng i input

        const textFromInput = usernameInput.value;
        const usernameH1 = document.createElement('h1');
        usernameH1.innerText = `Welcome ${textFromInput}`;
        usernameH1.style.textShadow = '2px 2px blue';
        usernameH1.style.marginLeft = '500px'
        document.body.append(usernameH1);
        const form = document.querySelector("form");
        form.remove();
    }
});

rockButton.addEventListener('click', event => {
    let random = Math.floor(Math.random() * arr.length);
    let computerGuess = `${arr[random]}`;
    playerChoiceH2.innerText = 'You Selected Rock';
    winnerH1.innerText = '';
    endGameResultH5.innerText = '';

    if (playerWins == 1 || computerWins == 1) {
        computerScore = 0;
        playerScore = 0;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
        computerWins = 0;
        playerWins = 0;
    }

    if (computerGuess == rock) {

        winnerOfRoundResultH4.innerText = 'Tie';
        computerChoice.innerText = `Computer selected ${computerGuess}`;


    } else if (computerGuess == paper) {
        computerScore++;
        winnerOfRoundResultH4.innerText = 'Computer Wins';
        computerChoice.innerText = `Computer selected ${computerGuess}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
        h3[1].style.color = 'red';


    } else if (computerGuess == scissors) {
        playerScore++;
        winnerOfRoundResultH4.innerText = 'Player Wins';
        computerChoice.innerText = `Computer selected ${computerGuess}`;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[0].style.color = 'blue';
    }

    if (playerScore == 3) {
        playerWins++;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;

    } else if (computerScore == 3) {
        computerWins++;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
    }

    if (computerWins == 1) {

        winnerH1.innerText = 'Computer Won the game';
        endGameResultH5.innerText = 'Game over, Select Rock, Paper or Scissors to play again';
        endGameResultH5.style.color = 'red';

    } else if (playerWins == 1) {

        winnerH1.innerText = 'You Won the game';
        endGameResultH5.innerText = 'You Won, Select Rock, Paper or Scissors to play again';
        endGameResultH5.style.color = 'green';
    }
});

paperButton.addEventListener('click', event => {


    playerChoiceH2.innerText = 'You Selected Paper';
    winnerH1.innerText = '';
    endGameResultH5.innerText = '';

    let random = Math.floor(Math.random() * arr.length);

    let guess = `${arr[random]}`;

    if (playerWins == 1 || computerWins == 1) {

        computerScore = 0;
        playerScore = 0;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;

        computerWins = 0;
        playerWins = 0;
    }

    if (guess == rock) {

        playerScore++;
        winnerOfRoundResultH4.innerText = 'Player Wins';
        computerChoice.innerText = `Computer selected ${guess}`;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[0].style.color = 'blue';

    } else if (guess == paper) {

        winnerOfRoundResultH4.innerText = 'Tie';
        computerChoice.innerText = `Computer selected ${guess}`;



    } else if (guess == scissors) {

        computerScore++;
        winnerOfRoundResultH4.innerText = 'Computer Wins';
        computerChoice.innerText = `Computer selected ${guess}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
        h3[1].style.color = 'red';

    }

    if (playerScore == 3) {

        playerWins++;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;


    } else if (computerScore == 3) {

        computerWins++;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
    }

    if (computerWins == 1) {

        winnerH1.innerText = 'Computer Won the game';
        endGameResultH5.innerText = 'Game over, Select Rock, Paper or Scissors to play again';
        endGameResultH5.style.color = 'red';

    } else if (playerWins == 1) {

        winnerH1.innerText = 'You Won the game';
        endGameResultH5.innerText = 'You Won, Select Rock, Paper or Scissors to play again';
        endGameResultH5.style.color = 'green';
    }

});


scissorsButton.addEventListener('click', event => {


    winnerH1.innerText = '';
    endGameResultH5.innerText = '';

    playerChoiceH2.innerText = 'You Selected Scissors';

    let random = Math.floor(Math.random() * arr.length);

    let guess = `${arr[random]}`;

    if (playerWins == 1 || computerWins == 1) {

        computerScore = 0;
        playerScore = 0;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;

        computerWins = 0;
        playerWins = 0;
    }

    if (guess == paper) {

        playerScore++;
        winnerOfRoundResultH4.innerText = 'Player Wins';
        computerChoice.innerText = `Computer selected ${guess}`;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[0].style.color = 'blue';

    } else if (guess == rock) {

        computerScore++;
        winnerOfRoundResultH4.innerText = 'Computer Wins';
        computerChoice.innerText = `Computer selected ${guess}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
        h3[1].style.color = 'red';

    } else if (guess == scissors) {

        winnerOfRoundResultH4.innerText = 'Tie';
        computerChoice.innerText = `Computer selected ${guess}`;
    }

    if (playerScore == 3) {

        playerWins++;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;

    } else if (computerScore == 3) {

        computerWins++;
        h3[0].innerText = `Player Points: ${playerScore}`;
        h3[1].innerText = `Computer Points: ${computerScore}`;
    }

    if (computerWins == 1) {

        winnerH1.innerText = 'Computer Won the game';
        endGameResultH5.innerText = 'Game over, Select Rock, Paper or Scissors to play again';
        endGameResultH5.style.color = 'red';

    } else if (playerWins == 1) {

        winnerH1.innerText = 'You Won the game';
        endGameResultH5.innerText = 'You Won, Select Rock, Paper or Scissors to play again';
        endGameResultH5.style.color = 'green';

    }

});





