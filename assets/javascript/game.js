 // letter array
 var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
// variables Wins, Losses, Guesses left, Guess so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];



// game function
document.onkeyup = function(event) {
    
    // user guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // computer random word
    var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];
    // pushing the user selected letter to the letters guessed
    lettersGuessed.push(userGuess);

    // if else statements
    if (userGuess === computerGuess) {
        win++;
        }  
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }   


};
