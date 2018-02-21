const Players = Object.freeze({
    X: Symbol('X'),
    Y: Symbol('Y')
});

class PlayerUtils {
    constructor() {
        throw new Error('Static class');
    }    

    static getDescription(player) {
        switch (player) {
        case null:
            return '';
        case Players.X:
            return 'X';
        case Players.Y:
            return 'Y';
        default:
            throw new Error('Unknown player');
        }
    }

    static getOppositePlayer(player) {
        switch (player) {
        case Players.X:
            return Players.Y;
        case Players.Y:
            return Players.X;
        default:
            throw new Error('Unknown player');
        }
    }
}

export default Players;
export { PlayerUtils as PlayerUtils };