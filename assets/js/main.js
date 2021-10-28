let score = {
    player: 3,
    cmp: 3
};
let playing = true;

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
    displayCmpChoice(choice)
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
    let message = document.getElementById('game-message');
    let winner;
    if (player === '') {
        message.textContent = 'You must choose an option'
    } else {
        message.textContent = '';
        winner = whoWins(player, cmp);
        totalPoints(score, winner);
        finalWinner(score);
        if(!playing) {
            document.getElementById('playButton').style.visibility = 'hidden';
        }
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
        displayMessageScore(null, null)
        return null
    }
    displayScore(winner);
    return score
}

/**
 * display the score on the side
 */
 function displayScore(winner) {
    let cmpScore = document.getElementById('score-cmp');
    let playerScore = document.getElementById('score-player');
    if(winner === 'player') {
        cmpScore.children[0].remove()
        displayMessageScore(winner, cmpScore.children.length)
    } else if (winner === 'cmp') {
        playerScore.children[0].remove()
        displayMessageScore(winner, playerScore.children.length)
    } else {
        return null
    }
 }

 /**
 * display a message on the screen about game situation
 */
function displayMessageScore(winner, loserPoints) {
    let message = document.getElementById('game-message');
    if(winner === 'player') {
        switch(loserPoints) {
            case 2:
                message.textContent = 'Well done! 2 more wins and the game is yours';
                break;
            case 1:
                message.textContent ='Almost there!! Just 1 more win';
                break;
            case 0:
                message.textContent = 'Congratulations!!! You are the winner!!!'
                break;
            default:
                ''
        }
    } else if(winner === 'cmp') {
        switch(loserPoints) {
            case 2:
                message.textContent = 'Be carefull...';
                break;
            case 1:
                message.textContent = 'OH... you cannot lose one more time!!';
                break;
            case 0:
                message.textContent = 'That was bad luck, you lose the game';
                break;
            default:
                ''
        }
    } else {
        message.textContent = 'Play again'
    }
} 

/**
 * @returns who obtains the final victory
 */
 function finalWinner(score) {
    if(score.player === 0) {
        playing = false;
        return 'cmp'
    } else if (score.cmp === 0) {
        playing = false;
        return 'player'
    } else {
        return null
    }
 }

/**
 * display the computer choice
 */
function displayCmpChoice(choice) {
    let divToShow = document.getElementById('cmp-choice');
    let icon = `
    <div class="icon">
        <i class="far fa-hand-${choice}"></i>
    </div>
    `;
    console.log(divToShow)
    divToShow.innerHTML = icon
}
