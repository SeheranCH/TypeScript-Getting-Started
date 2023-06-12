"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
class Scoreboard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
    }
    updateScoreboard() {
        let output = '<h2>Scoreboard</h2>';
        for (let i = 0; i < this.results.length; i++) {
            const result = this.results[i];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        const scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }
}
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map