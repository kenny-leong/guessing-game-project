// Our objective for this project is to build a simple game where the user has to guess a secret number that is chosen at random.
// Upon making a guess, the user will receive a hint indicating if their guess is too small or too large.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Enter a number:', (answer) => {

    let bool = checkGuess(answer, secretNumber)

    if (bool) {
    console.log('You win!')
    rl.close();
    } else {
    
    }
});






const secretNumber = 0;



function checkGuess(str, secretNumber) {
    let num = parseInt(str);
    if (num > secretNumber) {
        console.log('Too high.')
        return false;
    } else if (num < secretNumber) {
        console.log('Too low.')
        return false
    } else if (num == undefined) {
        console.log("I don't recognize that input")
        return false;
    }
    else {
        console.log('Correct!')
        return true;
    }
}
