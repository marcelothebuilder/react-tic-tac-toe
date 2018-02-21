import React from 'react';
import Board from './Board.js';
import GameState from './GameState.js';
import Clock from './Clock.js';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.history = [];
        this.state.history.push(GameState.buildInitialState());
        this.state.currentGameState = 0;
    }

    getDisplayableStatus() {
        const gameState = this.getCurrentGameState();

        if (gameState.hasSomebodyWonTheGame()) {
            return `Winner: ${gameState.getWinnerDescription()}`;
        }

        return `Next Player: ${gameState.getCurrentPlayerDescription()}`;
    }

    getCurrentGameState() {
        const stateNumber = this.state.currentGameState;
        const gameState = this.state.history[stateNumber];
        if (!gameState) {
            throw new Error(`Empty game state! stateNumber: ${stateNumber} historySize: ${this.state.history.length}`);
        }
        return gameState;
    }

    handleHistoryClick(historyNumber) {
        this.setState({
            history: this.state.history,
            currentGameState: historyNumber
        });
    }

    render() {
        const moves = this.state.history.map((gameState, moveNumber) => {
            const buttonText = moveNumber === 0 ? 'Start' : `Move ${moveNumber}`;
            return (
                <li key={moveNumber}>
                    <button onClick={() => this.handleHistoryClick(moveNumber)}>
                        {buttonText}
                    </button>
                </li>
            );
        });

        return (
            <div className="game">
                <div>
                    <Clock />
                </div>
                <div className="game-board">
                    <Board 
                        gameState={this.getCurrentGameState()}
                        onSquareClick={(squareIndex) => this.handleSquareClick(squareIndex)}
                    />
                </div>
                <div className="game-info">
                    <div>{this.getDisplayableStatus()}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    handleSquareClick(squareIndex) {
        const gameState = this.getCurrentGameState();

        if(gameState.hasSomebodyWonTheGame()) {
            alert('Game already ended!');
            return;
        }

        if (gameState.isSquareClicked(squareIndex)) {
            alert('Square already used!');
            return;
        }

        const newHistory = this.state.history.slice(0, this.state.currentGameState + 1);
        newHistory.push(gameState.withSquareClicked(squareIndex));

        this.setState({
            history: newHistory,
            currentGameState: this.state.currentGameState + 1
        });
    }
}



export default Game;