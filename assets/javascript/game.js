 // letter array
 var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
// variables Wins, Losses, Guesses left, Guess so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];


// game function
document.onkeyup = function(event) {
    
    // user guess
    var userGuess = (event.key).toLowerCase();
    // computer random word
    var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    // pushing the user selected letter to the letters guessed
    lettersGuessed.push(userGuess);

    // if else statements
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        lettersGuessed = [];
        var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];        
        }  
    if (userGuess !== computerGuess){
        guessesLeft--;   
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        lettersGuessed = [];
        var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];        
    }
    
    var html = 
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses so far: " + lettersGuessed + "</p>";

    document.querySelector("#game").innerHTML = html;

    // console.log(userGuess);
    // console.log(computerGuess);

};
