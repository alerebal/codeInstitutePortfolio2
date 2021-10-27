let score = {
    player: 3,
    cmp: 3
};

/**
 * @returns player choice
 */
 function playerChoice() {
    let choices = document.getElementsByTagName('form')[0]
    let choice = choices.elements['played']
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
    return choice
}

/**
 * @returns determine who wins between the player and the cmp
 */
 function whoWins(player, cmp) {
    if (player === cmp) {
        return null
    } else if (player === 'rock') {
        switch (cmp) {
            case 'paper':
                return 'cmp'
            case 'scissors':
                return 'player'
            case 'lizard':
                return 'player'
            case 'spock':
                return 'cmp'
        }
    } else if (player === 'paper') {
        switch (cmp) {
            case 'rock':
                return 'player'
            case 'scissors':
                return 'cmp'
            case 'lizard':
                return 'cmp'
            case 'spock':
                return 'player'
        }
    } else if (player === 'scissors') {
        switch (cmp) {
            case 'paper':
                return 'player'
            case 'rock':
                return 'cmp'
            case 'lizard':
                return 'player'
            case 'spock':
                return 'cmp'
        }
    } else if (player === 'lizard') {
        switch (cmp) {
            case 'paper':
                return 'player'
            case 'scissors':
                return 'cmp'
            case 'rock':
                return 'cmp'
            case 'spock':
                return 'player'
        }
    } else if (player === 'spock') {
        switch (cmp) {
            case 'paper':
                return 'cmp'
            case 'scissors':
                return 'player'
            case 'lizard':
                return 'cmp'
            case 'rock':
                return 'player'
        }
    }
 }

/**
 * determine who is the winner of the small game
 */
 function battle() {
    let player = playerChoice();
    let cmp = cmpChoice();
    let label = document.getElementById('game-message');
    let winner;
    if (player === '') {
        label.textContent = 'You must choose an option'
    } else {
        label.textContent = '';
        winner = whoWins(player, cmp);
        totalPoints(score, winner)

    }
 }

 /**
 * @returns total points of each player on the game. 
 */
function totalPoints(score, winner) {
    if(winner === 'player') {
        score.cmp = score.cmp - 1
    } else if (winner === 'cmp') {
        score.player = score.player -1
    } else {
        return null
    }
    console.log(score)
    return score
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