import React from "react";
import ClassTimer from "../classTimer/ClassTimer";

class ClassCounter extends React.Component {
  state = {
    name: "",
    count: 0,
    showTimer: true,
  };

  changeNameHandler = (e) => {
    const changedName = e.target.value;
    this.setState({ name: changedName });
  };

  changeCountHandler = () => {
    let changedCount = this.state.count;
    changedCount++;
    this.setState({
      count: changedCount,
    });
  };

  showTimerHandler = () => {
    this.setState({ showTimer: !this.state.showTimer });
  };

  render() {
    return (
      <div className="d-flex justify-content-start align-items-center p-5">
        <div className="form-group mr-5">
          <label className="form-label">name</label>
          <input
            type="text"
            className="form-control"
            onChange={this.changeNameHandler}
          />
        </div>
        <button
          className="btn btn-outline-primary mt-3 mr-3"
          onClick={this.changeCountHandler}
        >
          Increment
        </button>
        <button
          className="btn btn-outline-primary mt-3"
          onClick={this.showTimerHandler}
        >
          {this.state.showTimer ? "hide" : "show"}
        </button>
        <div className="d-flex justify-content-center align-items-center ml-5 mt-3">
          <div className="ml-2">name: {this.state.name}</div>
          <div className="badge-pill badge-info ml-3">{this.state.count}</div>
          {this.state.showTimer && <ClassTimer />}
        </div>
      </div>
    );
  }
}

export default ClassCounter;
