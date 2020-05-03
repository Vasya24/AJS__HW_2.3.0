class Game {
    start() {
        console.log('Game started');
    }
}

class GameSavingData {

}

function readGameSaving() {

}

function writeGameSaving() {

}


export {
    Game,
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame
}