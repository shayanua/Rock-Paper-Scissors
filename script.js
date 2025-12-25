function PlayGame() {
    console.log("game started");
    let userScore = 0; let computerScore = 0;
    let roundCounter = 0;
    userWin = 3;
    while(roundCounter < 5) {
        roundCounter++;
        userWin = PlayRound(roundCounter, userScore, computerScore);
        if (userWin === 1) {
            userScore++
        }
        else if (userWin === 2) {
            computerScore++
        }
        else {
        }
        console.log(roundCounter);
    }
    console.log("GG!");
}

function PlayRound(roundCounter, userScore, computerScore) {
    roundCounter++;
    let userChoice = null;
    let computerChoice = null;


    while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissor") {
        userChoice = prompt("Enter your choice (Rock, Paper, Scissor): ");
        userChoice = userChoice.toLowerCase();
    }
    let random = 1;
    while (random > 0.9) {
        random = Math.random();
        if (random >= 0 && random < 0.3) {
            computerChoice = "rock";
        }
        else if(random >= 0.3 && random < 0.6) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissor";
        }
    }
    console.log(computerChoice); console.log(userChoice);
    
    if ((userChoice == "paper" && computerChoice == "rock") || 
    (userChoice == "rock" && computerChoice == "scissor") ||
    (userChoice == "scissor" && computerChoice == "paper")) {
        userWin = 1;
        console.log("Win, score: " + (userScore + 1) + ":" + computerScore);
    }

    else if ((computerChoice == "paper" && userChoice == "rock") ||
    (computerChoice == "rock" && userChoice == "scissor") ||
    (computerChoice == "scissor" && userChoice == "paper")) {
        userWin = 2;
        console.log("Lose, score: " + userScore + ":" + (computerScore + 1));
    }

    else {
        userWin = 3;
        console.log("Draw!");
    }
    return userWin;
}


PlayGame();