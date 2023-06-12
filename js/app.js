"use strict";
let newGame;
document.getElementById('startGame').addEventListener('click', () => {
    console.log('Update');
    const player = new Player();
    player.name = Utility.getInputValue('playername');
    let playerName = Utility.getInputValue('playername');
    console.log(playerName);
    const problemCount = Number(Utility.getInputValue('problemCount'));
    const factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', () => {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map