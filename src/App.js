import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  //handle reset
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };
  //handle increment
  handleIncrement = (id) => {
    // console.log("clicked");
    const counters = this.state.counters.map((element) => {
      if (element.id === id) element.value++;
      return element;
    });
    this.setState({ counters: counters });
  };

  //handle delete
  handleDelete = (id) => {
    // console.log("delete clicked");
    const newCounters = this.state.counters.filter((data) => {
      return data.id !== id;
    });

    this.setState({ counters: newCounters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
