import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };

        setInterval(function() {
            this.setState({ count : this.state.count+1 })
        }.bind(this), 2000)

    }

    render() {
        return (
            <div>
                <h1>FARD</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }); }}>
                Count: {this.state.count}
                </button>
                <p />
                <p />
                <p />
                <div>{this.state.count}</div>
        <h1>FARD</h1>
        <h1>FARD</h1>
        <h1>FARD</h1>
        <h1>FARD</h1>
        <h1>FARD</h1>
            </div>
        );
    }
}
export default Counter;