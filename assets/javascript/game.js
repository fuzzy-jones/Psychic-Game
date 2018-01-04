 // letter array
 var letterOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
// variables Wins, Losses, Guesses left, Guess so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
// computer picks a random letter
var computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];


// game function
document.onkeyup = function(event) {
    
    // user guess
    var userGuess = (event.key).toLowerCase();
   
    // if else statements

    // make only alphabet letters from array able to be selected
    if (letterOptions.indexOf(userGuess) > -1) {
        // pushing the user selected letter to the letters guessed
        lettersGuessed.push(userGuess);
    }
    else {
        // don't lose a guess and get an alert of invalid key guess
        guessesLeft++;
        alert("Invalid Key... I'm only psychic with alphabet letters!")
    }

    // if user guess is same a computer guess, then user wins and game resets
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        lettersGuessed = [];
        computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];       
        }  
    // if user guess is not computer guess, then user losses a guess
    if (userGuess !== computerGuess){
        guessesLeft--;   
    }

    // if user runs out of guess, then they lose and game resets
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        lettersGuessed = [];
        computerGuess = letterOptions[Math.floor(Math.random() * letterOptions.length)];        
    }

    // display game results to page
    var html = 
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Loses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses so far: " + lettersGuessed + "</p>";

    document.getElementById("game").innerHTML = html;

    // log choices
    console.log("Your Guess: " + userGuess);
    console.log("Computer Guess: " + computerGuess);

};
