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
  //Lifecycle --> Update

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);

  //   //we can do following operation//
  //   if (prevProps.counter.value !== this.counter.value) {
  //     //make ajax call and get new data from server

  //   }
  // }

  //Unmounting phase
  componentWillUnmount() {
    console.log("a counter is unmounted");
  }
  render() {
    //console.log("props", this.props);
    console.log("rendered");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        </div>

        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter.id)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>

          <button
            onClick={() => this.props.onDecrement(this.props.counter.id)}
            className="btn btn-secondary btn-sm m-2 "
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>

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
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
