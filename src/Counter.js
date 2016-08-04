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
                <h1>Fard</h1>
                <h3>Fard2</h3>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }); }}>
                Count: {this.state.count}
                </button>
                <p />
                <p />
                <p />
                <div>{this.state.count}</div>
            </div>
        );
    }
}
export default Counter;