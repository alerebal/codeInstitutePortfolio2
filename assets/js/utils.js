/**
 * @returns a capitalized word
 */
function capitalizeAWord(word) {
    const firstLetter = word.substr(0, 1);
    const firstCapital = firstLetter.toUpperCase();
    const wordCapitalized = word.replace(firstLetter, firstCapital);

    return wordCapitalized;
}

/**
 * change theme of the game according to the rival chosen
 */
function changeTheme(rival) {
    const gameArea = document.getElementById('game-area');
    gameArea.setAttribute('class', `${rival}-theme`)
}

/**
 * change class to display buttons
 */
function noDisplayButtons() {
    const btns = document.getElementsByTagName('button');
    for (let btn of btns) {
        btn.setAttribute('class', 'icon disappear');
    }
}

/**
 * change class to not display buttons
 */
function displayButtons() {
    const btns = document.getElementsByTagName('button');
    for (let btn of btns) {
        btn.setAttribute('class', 'icon visible');
    }
}
