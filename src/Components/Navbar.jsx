import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="mehndi" onClick={this.props.handleNavClick}>
            <a className="mehndi">Mehndi</a>
          </li>
          <li className="sangeet" onClick={this.props.handleNavClick}>
            <a className="sangeet">Sangeet</a>
          </li>
          <li className="wedding" onClick={this.props.handleNavClick}>
            <a className="wedding">Wedding</a>
          </li>
          <li className="reception" onClick={this.props.handleNavClick}>
            <a className="reception">Reception</a>
          </li>
        </ul>
      </div>
    );
  }
}
