"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor() {
        this.name = "Default";
        this.age = 0;
        this.highScore = 0;
    }
    formatName() {
        return this.name.toUpperCase();
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map