import React from 'react';
import { PlayerUtils } from './Players.js';

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="square" onClick={() => this.handleClick()}>
                { this.getContent() }
            </button>
        );
    }

    getContent() {
        if (this.props.isLastClicked) {
            return <span style={{color: 'red'}}>{this.getDisplayableValue()}</span>;
        }

        return this.getDisplayableValue();
    }

    getDisplayableValue() {
        const player = this.props.value;
        return PlayerUtils.getDescription(player);
    }

    handleClick() {
        this.props.onClick();
    }
}

export default Square;