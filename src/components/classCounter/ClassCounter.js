import React from "react";

class ClassCounter extends React.Component {
  state = {
    name: "",
    count: 0,
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

  componentDidMount() {
    console.log("this is component did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("this is component did update");
    }
  }

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
          className="btn btn-outline-primary mt-3"
          onClick={this.changeCountHandler}
        >
          Increment
        </button>
        <div className="d-flex justify-content-center align-items-center ml-5 mt-3">
          <div className="ml-2">name: {this.state.name}</div>
          <div className="badge-pill badge-info ml-3">{this.state.count}</div>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
