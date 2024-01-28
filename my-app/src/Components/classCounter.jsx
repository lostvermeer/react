import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            likes: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ likes: this.state.likes + 1 });
      }
    
    decrement() {
        this.setState({ likes: this.state.likes - 1 });
    }

    render() {
        return (
            <div>
            <h1>Class Counter</h1>
            <h4>Class Component</h4>
            <h1>{this.state.likes}</h1>
            <button count={this.state.likes} onClick={this.increment}>Increment</button>
            <button count={this.state.likes} onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}

export default ClassCounter;