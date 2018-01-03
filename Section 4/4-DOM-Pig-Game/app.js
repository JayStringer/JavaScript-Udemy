/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Declare global variables
var scores, previousDice, roundScore, activePlayer, gamePlaying;


init();


function init() {
    // Define global variables
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    // Hide the dice image
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";

    // Set default values
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}

function roundReset() {
    // Reset Round Score
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    // Remove 'active' class from current player
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
    // Switch player...
    activePlayer = 1 - activePlayer;
    // ...and give them the 'active' class
    document.querySelector(".player-" + activePlayer + "-panel").classList.add('active');
    // Hide the dice for the next round
    document.getElementById("dice-1").style.display = "none";
    document.getElementById("dice-2").style.display = "none";
}

// Create event listener for click on the "Roll Rice" button
document.querySelector(".btn-roll").addEventListener('click', function() {
    if(gamePlaying) {
        // Generate random dice number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        // Make a shortcut for selecting a specific element
        var diceDOM1 = document.getElementById("dice-1");
        var diceDOM2 = document.getElementById("dice-2");
        // Re-display the dice image
        diceDOM1.style.display = "block";
        diceDOM2.style.display = "block";
        // Make the image correspond to the dice value
        diceDOM1.src = "dice-" + dice1 + ".png";
        diceDOM2.src = "dice-" + dice2 + ".png";

        // Update the round score for current player IF the rolled number was NOT 1 OR two 6's were rolled 
        if(dice1 === 1 || dice2 === 1 || (dice1 === 6 && dice2 === 6)) {
            roundReset();
        } else {
            // Add score
            roundScore += (dice1 + dice2);
            // Display Round Score
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
    }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
    if(gamePlaying) {
        // Add round score to current score
        scores[activePlayer] += roundScore;
        // Update UI
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var target;

        if(input) {
            target = input;
        } else {
            target = 100;
        }

        // Check if player score is equal to or larger than the final score from the html
        if(scores[activePlayer] >= target) {
            // Add the "winner" class for the active player.
            document.getElementById("name-" + activePlayer).textContent = "Winner!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
            // Hide the dice again
            document.getElementById("dice-1").style.display = "none";
            document.getElementById("dice-2").style.display = "none";
            // Set current score to 0
            document.getElementById("current-" + activePlayer).textContent = 0;
            gamePlaying = false;
        } else {
            // Reset the round
            roundReset();
        }
    }
});

// Reset the game when new game is clicked
document.querySelector(".btn-new").addEventListener("click", init);