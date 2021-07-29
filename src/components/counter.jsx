import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };
  //defining style this way not recomanded
  // styles = {
  //   color: "black",
  //   fontSize: "5px",
  // };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement = (product) => {
  //   // console.log("button clicked!", this); //here this is not representing the object counter
  //   this.setState({ value: this.props.counter.value + 1 });
  // };
  render() {
    console.log("props", this.props);
    return (
      <div>
        {/* <h4>counter #{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}> {tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2  bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    // return this.state.value===0?"zero":this.state.value;
    //distructing
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
