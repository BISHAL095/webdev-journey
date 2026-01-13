let playerScore = 0;
let compScore = 0;
let round = 1;

function playTurn() {
    if (round <= 5) {
        // ... (Insert your logic to determine who wins the current turn)
        // Example: If player wins this turn
        playerScore++;
        
        // Update the UI
        document.getElementById("player-score").innerText = playerScore;
        document.getElementById("comp-score").innerText = compScore;

        if (round === 5) {
            showFinalResult();
        } else {
            round++;
            document.getElementById("round-num").innerText = round;
        }
    }
}

function showFinalResult() {
    const resultElement = document.getElementById("final-result");
    if (playerScore > compScore) {
        resultElement.innerText = "You Won the Game! 🏆";
        resultElement.style.color = "green";
    } else if (compScore > playerScore) {
        resultElement.innerText = "You Lost the Game! ❌";
        resultElement.style.color = "red";
    } else {
        resultElement.innerText = "It's a Draw! 🤝";
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    round = 1;
    document.getElementById("player-score").innerText = "0";
    document.getElementById("comp-score").innerText = "0";
    document.getElementById("round-num").innerText = "1";
    document.getElementById("final-result").innerText = "";
}
