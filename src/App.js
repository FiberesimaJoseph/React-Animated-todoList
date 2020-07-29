import React from "react";
import "./App.scss";
import ListItem from "./ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      curentItem: {
        text: "",
        key: "",
      },
    };
    this.HandleInput = this.HandleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  HandleInput(e) {
    this.setState({
      curentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.curentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        curentItem: {
          text: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              // placeholder="Enter text"
              value={this.state.curentItem.text}
              onChange={this.HandleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItem items={this.state.items}></ListItem>
      </div>
    );
  }
}

export default App;
