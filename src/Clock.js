import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentWillMount() {
        this.jsInterval = setInterval(() => this.setState({
            date: new Date()
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.jsInterval);
    }

    render() {
        return <div>{this.state.date.toLocaleTimeString()}</div>;
    }
}

export default Clock;