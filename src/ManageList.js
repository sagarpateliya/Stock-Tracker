import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./ManageList.css";
import { thisExpression } from "@babel/types";

class ManageList extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteStock() {
    this.props.deleteStock(this.props.i);
  }

  render() {
    return (
      <div className="ManageList">
        <button onClick={this.deleteStock.bind(this)}>Remove</button>

        <p>{this.props.value.symbol}</p>
      </div>
    );
  }
}

export default ManageList;
