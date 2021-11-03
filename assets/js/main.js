let playerName;
let cmpName = ''
let body = document.getElementsByTagName('body')[0]
let rivalImgDisplay = document.getElementById('cmp-choice');
let playerChoice;
let playing = true; // if true, the game has still been playing
let score = {
    player: 3,
    cmp: 3
};

document.addEventListener('DOMContentLoaded', () => {
    welcomeMessage();
})

/**
 * display message to player can put their name and start the game
 */
function welcomeMessage() {
    let div = document.createElement('div');
    let modal = `
    <div class="modal-message">
        <p>
            Welcome to play Rock, Paper, Scissors, Lizard, Spock Game
        </p>
        <p>
            Put your 
            <input type="text" class="modal-input" maxlength='15' name="player-name" id="player-name" placeholder="name here">
            and start <span onclick="startGameMessage()">playing</span>.
        </p>
    </div>
    `;
    div.setAttribute('class', 'modal welcome');
    div.innerHTML = modal;
    body.appendChild(div);
}

/**
 * Set the player name.
 */
// when the playerName is set, the chooseRivalModel function is triggered
function startGameMessage() {
    let playerInputName = document.getElementById('player-name').value;
    if (playerInputName === '') {
        let conf = confirm(`If you don't put your name, we'll call you just player.`);
        if (conf) {
            playerName = 'Player';
            chooseRivalModal();
        }
    } else {
        playerName = playerInputName;
        chooseRivalModal();
    }
}

/**
 * displays modal to choose rival
 */
function chooseRivalModal() {
    let rivals = ['bob', 'patrick', 'squidward'];
    let div = document.createElement('div');
    let innerHTML = '';
    let modal = `    
        <form>
            <h2 class="text-center">Choose a rival</h2>
            <div class="rivals">
        `;
    for (let rival of rivals) {
        innerHTML += `
            <div class="rival">
                <label for="${rival}">
                    <div class="icon">
                        <img src="assets/images/icons/${rival}.png" alt="${rival}">
                    </div>
                    <input type="radio" name="rival" id="${rival}" value="${rival}" 
                    ${rival === 'bob' ? 'checked' : ''}
                    >
                    <span>${capitalizeAWord(rival)}</span>
                </label>
            </div>
            `;
    }
    innerHTML += `
        </div>
        <div class="btn">
            <input type="button" value="Choose" onclick="chooseRival()">
        </div>
    </form>
    `;
    modal += innerHTML;
    div.setAttribute('class', 'modal rival');
    div.innerHTML = modal;
    body.appendChild(div);
}

/**
 * allow the player to choose a rival. set cmp player name
 */
// once the rival has been selected, both names of the players are displayed in the screen, the image of the cmp player is shown and the game begin
function chooseRival() {
    let form = document.getElementsByTagName('form')[0].elements['rival'];
    // put the name of the player on the screem
    let playerNameDisplay = document.getElementById('player-chose-name');
    // put the name of the cmp player on the screen
    let rivalNameDisplay = document.getElementById('cmp-chose-name');
    cmpName = form.value;
    playerNameDisplay.innerText = playerName;
    rivalNameDisplay.innerText = capitalizeAWord(cmpName);
    setCmpImage(cmpName);
    startGame();
}

/**
 * set a div with the cmp image and display it
 */
function setCmpImage(cmpPlayer) {
    let innerHTML = `
    <div class="icon" >
        <img id="cmp-choice-img" src="assets/images/icons/${cmpPlayer}.png" alt="cmp choice">
    </div>
    `;
    rivalImgDisplay.innerHTML = innerHTML;
}

/**
 * starts the game
 */
// count down for each game, battle function is triggered after it finished
function startGame() {
    let label = document.getElementById('game-message');
    let labels = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock', ''];
    let modalWelcome = document.getElementsByClassName('modal welcome')[0];
    let modalRival = document.getElementsByClassName('modal rival')[0];
    playerChoice = undefined;

    if (!playing) {
        return false;
    }
    // if there is some modal displayed, hide it
    if (modalWelcome) {
        modalWelcome.remove();
    }
    if (modalRival) {
        modalRival.remove();
    }
    /* 
    I could not use a regular setTimeout here, I had to use a IFEE https://codehandbook.org/understanding-settimeout-inside-for-loop-in-javascript/
    */
    for (let i = 0; i < labels.length; i++) {
        ((i) => {
            setTimeout(() => {
                label.innerText = labels[i];
                if (labels[i] === '') {
                    battle();
                }
            }, 700 * (i + 1));
        })(i)
    }

}


/**
 * assign value to playerChoice variable and pass it to the displayChoice function param
 */
function onPlayerChoice(choice) {
    let btn = document.getElementById(choice);
    // If there is other button selected change its class
    let btnSelected = document.getElementsByClassName('selected')[0];
    if (btnSelected) {
        btnSelected.setAttribute('class', 'icon visible');
    }
    // give selected class to the button
    btn.setAttribute('class', 'icon visible selected');
    playerChoice = choice;
    displayChoice(choice, 'player');
}

/**
 * @returns cmp choice
 */
// get a random number between 1 and 5 and give an option to every one of them. Then the displayChoice function is triggered and the choice is returned
function cmpChoice() {
    let choice;
    let random = Math.floor(Math.random() * 5) + 1;
    switch (random) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
        case 4:
            choice = 'lizard';
            break;
        case 5:
            choice = 'spock';
            break;
        default:
            choice = 'rock';
    }
    displayChoice(choice, 'cmp');
    return choice;
}

/**
 * @returns determine who wins between the player and the cmp
 */
function whoWins(player, cmp) {
    if (player === cmp) {
        return null;
    } else if (player === 'rock') {
        switch (cmp) {
            case 'paper':
                return 'cmp';
            case 'scissors':
                return 'player';
            case 'lizard':
                return 'player';
            case 'spock':
                return 'cmp';
        }
    } else if (player === 'paper') {
        switch (cmp) {
            case 'rock':
                return 'player';
            case 'scissors':
                return 'cmp';
            case 'lizard':
                return 'cmp';
            case 'spock':
                return 'player';
        }
    } else if (player === 'scissors') {
        switch (cmp) {
            case 'paper':
                return 'player';
            case 'rock':
                return 'cmp';
            case 'lizard':
                return 'player';
            case 'spock':
                return 'cmp';
        }
    } else if (player === 'lizard') {
        switch (cmp) {
            case 'paper':
                return 'player';
            case 'scissors':
                return 'cmp';
            case 'rock':
                return 'cmp';
            case 'spock':
                return 'player';
        }
    } else if (player === 'spock') {
        switch (cmp) {
            case 'paper':
                return 'cmp';
            case 'scissors':
                return 'player';
            case 'lizard':
                return 'cmp';
            case 'rock':
                return 'player';
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

    // if the player didn't get an option, show the message to ask him to do it
    if (player === undefined) {
        message.textContent = 'You must choose an option';
        if (playing) {
            setTimeout(() => {
                startGame();
            }, 2000);
        }
    } else {
        // hide option buttons and show both options on screen
        noDisplayButtons()
        setTimeout(() => {
            showPlayer.setAttribute('class', 'fight visible moveUp');
            showCmp.setAttribute('class', 'fight visible moveDown');
        })
        // get the cmp choice
        let cmp = cmpChoice();
        message.textContent = '';
        // get the winner of the battle, show messages and points on the screen and find out if there is a final winner
        setTimeout(() => {
            winner = whoWins(player, cmp);
            totalPoints(score, winner);
            finalWinner(score);
        }, 2000);
        // if there is not a final winner, the game continues
        setTimeout(() => {
            if (playing) {
                setTimeout(() => {
                    startGame();
                }, 2000);
            };
        }, 2000);
        // display the option buttons and the cmp image again and hide the player option. If the game is over, show an alert to start it again
        setTimeout(() => {
            displayButtons();
            showPlayer.setAttribute('class', 'fight disappear');
            setCmpImage(cmpName.toLowerCase());
            setTimeout(() => {
                if (!playing) {
                    if (confirm('play again?')) {
                        location.reload();
                    }
                }
            }, 2000)
        }, 3000);
    }
}

/**
* @returns total points of each player on the game. 
*/
function totalPoints(score, winner) {
    if (winner === 'player') {
        score.cmp = score.cmp - 1;
    } else if (winner === 'cmp') {
        score.player = score.player - 1;
    } else {
        displayMessageScore(null, null);
        return null;
    }
    displayScore(winner);
    return score;
}

/**
 * display the score on the sides
 */
// remove one point if there is a winner of a battle and trigger the displayMessageScore function
function displayScore(winner) {
    let cmpScore = document.getElementById('score-cmp');
    let playerScore = document.getElementById('score-player');
    if (winner === 'player') {
        cmpScore.children[0].remove();
        displayMessageScore(winner, score.cmp);
    } else if (winner === 'cmp') {
        playerScore.children[0].remove();
        displayMessageScore(winner, score.player);
    } else {
        return null;
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
                message.textContent = 'Congratulations!!! You are the winner!!!';
                break;
            default:
                '';
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
                '';
        }
    } else {
        message.textContent = 'Play again';
    }
}

/**
 * @returns who obtains the final victory
 */
// if some of the players lose all the points, the other player is the winner
function finalWinner(score) {
    if (score.player === 0) {
        playing = false;
        return 'cmp';
    } else if (score.cmp === 0) {
        playing = false;
        return 'player';
    } else {
        return null;
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
    divToShow.innerHTML = icon;
}

/**
 * change class to display buttons
 */
function noDisplayButtons() {
    let btns = document.getElementsByTagName('button');
    for (let btn of btns) {
        btn.setAttribute('class', 'icon disappear');
    }
}

/**
 * change class to not display buttons
 */
function displayButtons() {
    let btns = document.getElementsByTagName('button');
    for (let btn of btns) {
        btn.setAttribute('class', 'icon visible');
    }
}

/**
 * @returns a capitalized word
 */
function capitalizeAWord(word) {
    let firstLetter = word.substr(0, 1);
    let firstCapital = firstLetter.toUpperCase();
    let wordCapitalized = word.replace(firstLetter, firstCapital);

    return wordCapitalized;
}
