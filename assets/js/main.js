
/**
 * @returns player choice
 */
 function playerChoice() {
    let choices = document.getElementsByTagName('form')[0]
    let choice = choices.elements['played']
    console.log(choice.value)
    return choice.value
}

/**
 * @returns cmp choice
 */
function cmpChoice() {
    let choice;
    let random = Math.floor(Math.random() * 5) + 1;
    switch (random) {
        case 1:
            choice = 'rock';
            break
        case 2:
            choice = 'paper'
            break
        case 3:
            choice = 'scissors'
            break
        case 4:
            choice = 'lizard'
            break
        case 5:
            choice = 'spock'
            break
        default:
            choice = 'rock'
    }
    console.log(choice)
    return choice
}

/**
 * @returns determine who wins between the player and the cmp
 */
 function whoWins() {

 }

/**
 * determine who is the winner of the small game
 */
 function battle() {

 }

 /**
 * @returns total points of each player on the game. 
 */
function totalPoints() {

}

/**
 * display the score on the side
 */
 function displayScore() {

 }

 /**
 * display a message on the screen about game situation
 */
function displayMessageScore() {

} 

/**
 * @returns who obtains the final victory
 */
 function finalWinner() {

 }