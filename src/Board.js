import React from 'react';
import Square from './Square.js';

class Board extends React.Component {

    renderSquare(squareIndex) {
        var highlightedSquares = this.props.gameState.getHighlightedSquares();

        return (
            <Square index={squareIndex}
                value={this.getSquareValue(squareIndex)}
                onClick={() => this.props.onSquareClick(squareIndex)}
                isLastClicked={highlightedSquares.indexOf(squareIndex) !== -1}/>
        );
    }

    getSquareValue(squareIndex) {
        return this.props.gameState.squares[squareIndex];
    }

    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}  

export default Board;