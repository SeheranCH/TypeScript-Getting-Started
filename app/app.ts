/// <reference path="player.ts" />

function startGame() {
    // starting a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);

}

function logPlayer(name: string = 'MultiMath Player') {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = "MultiMath Player"):void {
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logErr;
    } else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`)
}

// sendGreeting();
// sendGreeting('Good evening');

// function sendGreeting(greeting: string = 'Good morning'): void {
//     console.log(greeting);
// }



// function dullFunc(value1, value1) {
//     return "I'm boring and difficult. Don't be like me."
// }

// function funFunc(score: number, message?: string): string {
//     return "";
// }



document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message);

function logErr (message: string): void {
    console.error(message);
}

// let myResult: Result = {
//     playName: "Rudolf",
//     score: 5,
//     problemCount: 10,
//     factor: 12
// }

// let player: Person = {
//     name: 'Daniel',
//     formatName: () => 'Dan'
// }

// const firstPlayer: Player = new Player();
// firstPlayer.name = 'Roger';
// console.log(firstPlayer.formatName());