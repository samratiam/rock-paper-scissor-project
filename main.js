// Rock, Paper and Scissors Game between User and Computer 

const getUserChoice = function (userInput) {
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Invalid choice !!");
    }
}

let userInput = 'paper';
userInput = userInput.toLowerCase();

let userChoice = getUserChoice(userInput);
// console.log("User choice:", userChoice);

const getComputerChoice = function () {
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            break;
    }
}

let computerChoice = getComputerChoice();
// console.log("Computer choice:", computerChoice)

const determineWinner = function (userChoice, computerChoice) {
    console.log("User choice:", userChoice);
    console.log("Computer choice:", computerChoice);
    if (userChoice === computerChoice) {
        return "Tie game!!";
    }

    else {
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return "Computer won!!";
            }
            else {
                return "User won!!"
            }
        }

        else if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                return "Computer won!!";
            }
            else {
                return "User won!!"
            }
        }

        else if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                return "User won!!";
            }
            else {
                return "Computer won!!"
            }
        }
    }
}

const playGame = function (userChoice, computerChoice) {
    console.log(determineWinner(userChoice, computerChoice));
}

playGame(userChoice, computerChoice);
