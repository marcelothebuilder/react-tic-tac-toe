import Players from './Players.js';
import {PlayerUtils} from './Players.js';

class GameState {
    constructor(squares, currentPlayer, _lastClickedSquare) {
        this.squares = squares;
        this.currentPlayer = currentPlayer;
        this._lastClickedSquare = _lastClickedSquare;
    }

    static buildInitialState() {
        return new GameState(Array(9).fill(null), Players.X);
    }

    _clone() {
        const newState = new GameState(
            this.squares.slice(),
            this.currentPlayer,
            this._lastClickedSquare);

        return newState;
    }

    isSquareClicked(squareNumber) {
        return Boolean(this.squares[squareNumber]);
    }

    withSquareClicked(squareNumber) {
        const newState = this._clone();
        newState._lastClickedSquare = squareNumber;
        newState.squares[squareNumber] = this.currentPlayer;
        newState.currentPlayer = PlayerUtils.getOppositePlayer(this.currentPlayer);
        return newState;
    }

    getHighlightedSquares() {
        if (!this.hasSomebodyWonTheGame()) {
            return [this._lastClickedSquare];
        }

        return calculateWinningData(this.squares).winningSquares;
    }

    hasSomebodyWonTheGame() {
        return Boolean(calculateWinningData(this.squares));
    }

    getWinnerDescription() {
        const winner = calculateWinningData(this.squares).winner;
        return PlayerUtils.getDescription(winner);
    }

    getCurrentPlayerDescription() {
        const player = this.currentPlayer;
        return PlayerUtils.getDescription(player);
    }

}


/**
 * Copy/paste from https://reactjs.org/tutorial/tutorial.html.
 * Modified a little to return more data.
 * 
 * @param {Array<Players>} squares 
 */
function calculateWinningData(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                winningSquares: lines[i]
            };
        }
    }
    return null;
}
  


export default GameState;