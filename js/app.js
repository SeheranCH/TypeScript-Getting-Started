"use strict";
function startGame() {
    let playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logPlayer(name = 'MultiMath Player') {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName = "MultiMath Player") {
    let logger;
    if (score < 0) {
        logger = logErr;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logErr(message) {
    console.error(message);
}
//# sourceMappingURL=app.js.map