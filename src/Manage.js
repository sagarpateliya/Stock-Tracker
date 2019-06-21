import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ManageList from "./ManageList";

class Manage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      value: "",
      data: null
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.requester(event, this.state.value);
    let temp = "";
    this.setState({ value: temp });
  }

  render() {
    return (
      <div className="manage">
        <p> I am manage</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              placeholder="Add Stock"
            />
          </label>
        </form>
        {this.props.data.map((stock, index) => (
          <ManageList
            deleteStock={this.props.deleteStock}
            value={stock}
            i={index}
          />
        ))}
      </div>
    );
  }
}

export default Manage;
