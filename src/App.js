import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import BodyContainer from "./Containers/BodyContainer";

class App extends Component {
  state = {
    event: "home"
  };

  handleNavClick = e => {
    this.setState({
      event: e.target.className
    });
    console.log(e.target.className);
  };

  render() {
    return (
      <div className="App">
        <Navbar handleNavClick={this.handleNavClick} />
        <BodyContainer event={this.state.event} />
      </div>
    );
  }
}

export default App;
