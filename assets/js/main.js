let score = {
    player: 3,
    cmp: 3
};
let playerChoice;
let playing = true;

document.addEventListener('DOMContentLoaded', () => {

    startGame()

})

/* 
I could not use a regular setTimeout here, I had to use a IFEE https://codehandbook.org/understanding-settimeout-inside-for-loop-in-javascript/
*/
let label = document.getElementById('game-message')
let labels = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock', '']
/**
 * starts the game
 */
function startGame() {
    if(!playing) {
        return false
    }
    for (let i = 0; i < labels.length; i++) {
        ((i) => {
            setTimeout(() => {
                label.innerText = labels[i]
                console.log(labels[i])
                if (labels[i] === '') {
                    battle()
                }
            }, 700 * (i + 1))
        })(i)
    }

}


/**
 * assign value to playerChoice variable
 */
function onPlayerChoice(choice) {
    let btn = document.getElementById(choice)
    // If there is other button selected change its class
    let btnSelected = document.getElementsByClassName('selected')[0]
    if (btnSelected) {
        btnSelected.setAttribute('class', 'icon visible')
    }
    // give selected class to the button
    btn.setAttribute('class', 'icon visible selected')
    playerChoice = choice
    displayChoice(choice, 'player')
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
    displayChoice(choice, 'cmp')
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
    let player = playerChoice;
    let message = document.getElementById('game-message');
    let winner;
    let showPlayer = document.getElementById('player-choice');
    let showCmp = document.getElementById('cmp-choice');
    if (player === undefined) {
        message.textContent = 'You must choose an option'
        if (playing) {
            setTimeout(() => {
                startGame()
            }, 2000)
        }
    } else {
        noDisplayButtons()
        setTimeout(() => {
            showPlayer.setAttribute('class', 'fight visible moveUp')
            showCmp.setAttribute('class', 'fight visible moveDown')
        })
        let cmp = cmpChoice();
        message.textContent = '';
        setTimeout(() => {
            winner = whoWins(player, cmp);
            totalPoints(score, winner);
            finalWinner(score);
            // if (!playing) {
            //     document.getElementById('play-button').style.visibility = 'hidden';
            // }
        }, 1500)
        setTimeout(() => {
            displayButtons()
            showPlayer.setAttribute('class', 'fight disappear')
            showCmp.setAttribute('class', 'fight disappear')
        }, 3000)
        if (playing) {
            setTimeout(() => {
                startGame()
            }, 2000)
        }
    }
}

/**
* @returns total points of each player on the game. 
*/
function totalPoints(score, winner) {
    if (winner === 'player') {
        score.cmp = score.cmp - 1
    } else if (winner === 'cmp') {
        score.player = score.player - 1
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
    if (winner === 'player') {
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
    if (winner === 'player') {
        switch (loserPoints) {
            case 2:
                message.textContent = 'Well done! 2 more wins and the game is yours';
                break;
            case 1:
                message.textContent = 'Almost there!! Just 1 more win';
                break;
            case 0:
                message.textContent = 'Congratulations!!! You are the winner!!!'
                break;
            default:
                ''
        }
    } else if (winner === 'cmp') {
        switch (loserPoints) {
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
    if (score.player === 0) {
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
 * display selected choice
 */
function displayChoice(choice, player) {
    let divToShow = document.getElementById(`${player}-choice`);
    let icon = `
        <i class="far fa-hand-${choice}"></i>
    `;
    divToShow.innerHTML = icon
}

/**
 * change class to not display buttons
 */
function noDisplayButtons() {
    let btns = document.getElementsByTagName('button')
    for (let btn of btns) {
        btn.setAttribute('class', 'icon disappear')
    }
}

/**
 * change class to not display buttons
 */
function displayButtons() {
    let btns = document.getElementsByTagName('button')
    for (let btn of btns) {
        btn.setAttribute('class', 'icon visible')
    }
}