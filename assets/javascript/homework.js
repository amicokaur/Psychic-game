//Letter choices available

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



//Setting all to zero

var wins = 0;

var losses = 0;

var guesses = 9;


var guessedLetters = [];

var letterToGuess = null;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
console.log(computerGuess)




//When key is released it becomes the users guess

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    if(userGuess === computerGuess){
        wins++;
        console.log (wins)
        alert("you win")
    }
    else{
        guesses--;
        console.log (guesses)
    }

    if(guesses===0){
        losses++;
        alert ("you loose")

}







}
