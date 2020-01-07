import React from 'react';



export default class Bomb extends React.Component {

    checkSecondsLeft = () => {
        return this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"
    }
    
    state = {
        secondsLeft: this.props.initialCount
    }
    render() {
        return this.checkSecondsLeft()
    }
}
