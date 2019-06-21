import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="navbar"
        style={{ border: "1px solid red", height: "100px", width: "1500px" }}
      >
        <Link to="/manage">Manage </Link>
        <Link to="/dashboard"> Dashboard</Link>
      </div>
    );
  }
}

export default NavBar;
