import React, { Component } from "react";
import Counter from "./counter.jsx";
class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 },
  //   ],
  // };
  // //handle reset
  // handleReset = () => {
  //   const counters = this.state.counters.map((counter) => {
  //     counter.value = 0;
  //     return counter;
  //   });

  //   this.setState({ counters });
  // };
  // //handle increment
  // handleIncrement = (id) => {
  //   // console.log("clicked");
  //   const counters = this.state.counters.map((element) => {
  //     if (element.id === id) element.value++;
  //     return element;
  //   });
  //   this.setState({ counters: counters });
  // };

  // //handle delete
  // handleDelete = (id) => {
  //   // console.log("delete clicked");
  //   const newCounters = this.state.counters.filter((data) => {
  //     return data.id !== id;
  //   });

  //   this.setState({ counters: newCounters });
  // };

  render() {
    const { onDelete, onIncrement, onReset, counters } = this.props; //object distructing to clean code
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>

        {counters.map((counter) => (
          // <Counter
          //   key={counter.id}
          //   value={counter.value}
          //   onDelete={() => this.handleDelete(counter.id)}
          //   id={counter.id}
          // />
          <Counter
            //we can use this.props.onDelete or this.props.onIncrement
            // but we allready converted this.props.onDelete-->onDelete in object distructing to make code cleaner
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
