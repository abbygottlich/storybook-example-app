import React from "react";
import "./App.css";
import ShowGoodJob from "./components/GoodJob";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      completed: false
    };
  }

  list = [];

  onAdd = () => {
    this.list.push(document.getElementById("todo").value);
    this.setState({
      todos: this.list
    });
    document.getElementById("todo").value = null;
  };

  onComplete = index => {
    this.state.todos.splice(index);
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
        <input id="todo" placeholder="To do..."></input>
        <button onClick={this.onAdd}>Add</button>
        <ul>
          {this.state.todos.map((item, index) => {
            return (
              <div className="list-item-wrapper">
                <li>{item}</li>
                <button onClick={this.onComplete}>Complete</button>
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
