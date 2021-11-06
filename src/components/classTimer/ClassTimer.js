import React from "react";

class ClassTimer extends React.Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    console.log("timer start");
    this.myTimer = setInterval(() => {
      let timer = this.state.time;
      timer++;
      this.setState({ time: timer });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("timer stoped");
    clearInterval(this.myTimer);
  }

  render() {
    return <div className="badge-pill badge-info ml-3">{this.state.time}</div>;
  }
}

export default ClassTimer;
