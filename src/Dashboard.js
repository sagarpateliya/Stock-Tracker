import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StockItem from "./StockItem";
import "./dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dashboard">
        <p>I am a dashboard</p>
        <nav>Dashboard</nav>

        {this.props.data.map(d => (
          <StockItem data={d} />
        ))}
      </div>
    );
  }
}

export default Dashboard;
