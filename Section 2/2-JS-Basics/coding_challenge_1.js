// Coding Challenge 1

//--------------------------------*--------------------------------//
// My solution
var player1_height = parseInt(prompt("Please enter the height for Player 1 in 'cm'"),10);
var player1_age = parseInt(prompt("Please enter the age of Player 1"),10);

var player2_height = parseInt(prompt("Please enter the height for Player 2 in 'cm'"), 10);
var player2_age = parseInt(prompt("Please enter the age of Player 2"),10);

var player3_height = parseInt(prompt("Please enter the height for Player 3 in 'cm'"), 10);
var player3_age = parseInt(prompt("Please enter the age of Player 3"),10);

var player1_score = player1_height + (player1_age * 5);
var player2_score = player2_height + (player2_age * 5);
var player3_score = player3_height + (player3_age * 5);


if(player1_score > player2_score && player1_score > player3_score) {
    console.log("Player 1 is the winner with a score of " + player1_score + "!");
} else if(player2_score > player1_score && player2_score > player3_score) {
    console.log("Player 2 is the winner with a score of " + player2_score + "!");
} else if(player3_score > player1_score && player3_score > player2_score) {
    console.log("Player 3 is the winner with a score of " + player3_score + "!");
} else if(player1_score === player2_score && player1_score > player3_score) {
    console.log("Player 1 and 2 drew for first place with a score of " + player1_score + "!");
} else if(player1_score === player3_score && player1_score > player2_score) {
    console.log("Player 1 and 3 drew for first place with a score of " + player1_score + "!");
} else if (player2_score === player3_score && player2_score > player1_score) {
    console.log("Player 2 and 3 drew for first place with a score of " + player2_score + "!");
} else if (player1_score === player2_score && player1_score === player3_score) {
    console.log("All players have the same score of " + player1_score + "!!!");
} else {
    console.log("I have no idea who the winner is!!!");
}
//--------------------------------*--------------------------------//

// Course Solution
var heightJohn = 172;
var heightMike = 165;
var ageJohn = 26;
var ageMike = 29;

var scoreJohn = heightJohn + 5 * ageJohn;
var scoreMike = heightMike + 5 * ageMike;

// if (scoreJohn > scoreMike) {
//     console.log("John wins the game with " + scoreJohn + " points!");
// } else if (scoreMike > scoreJohn) {
//     console.log("Mike wins the game with " + scoreMike + " points!");
// } else if (scoreJohn === scoreMike){
//     console.log("There is a draw.")
// }

var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log("John wins the game with " + scoreJohn + " points!");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log("Mike wins the game with " + scoreMike + " points!");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log("Mary wins the game with " + scoreMary + " points!");
} else {
    console.log("It's a draw");
}