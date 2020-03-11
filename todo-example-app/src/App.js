import React from "react";
import "./App.css";
import ShowGoodJob from "./components/GoodJob";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      inputValue: null,
      completed: false
    };

    this.list = [];
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  onAdd = () => {
    this.list.push(this.state.inputValue);
    this.setState({
      todos: this.list
    });
    document.getElementById("todo").value = null;
  };

  onComplete = index => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos,
      completed: true
    });
  };

  showGoodJob = () => {
    if (this.state.completed) {
      return <ShowGoodJob />;
    }
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          id="todo"
          placeholder="To do..."
        ></input>
        <button onClick={this.onAdd}>Add</button>
        <ul>
          {this.list.map((item, index) => {
            return (
              <div key={index} className="list-item-wrapper">
                <li>{item}</li>
                <button
                  onClick={() => {
                    this.onComplete(index);
                  }}
                >
                  Complete
                </button>
              </div>
            );
          })}
        </ul>
        {this.showGoodJob()}
      </div>
    );
  }
}

export default App;
