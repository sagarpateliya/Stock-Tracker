import React from "react";
import NavBar from "./NavBar";
import "./fetchData.css";
import Manage from "./Manage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

class FetchData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myData: []
    };
  }

  deleteItem(inx) {
    console.log(inx);
    let temp = this.state.myData.slice();
    temp.splice(inx, 1);
    console.log(temp);
    this.setState({ myData: temp });
  }

  makeCall(event, userInput) {
    event.preventDefault();

    fetch(
      "https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=" +
        userInput
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(
          { value: "", myData: [...this.state.myData, data[0]] },
          () => {
            console.log(this.state.myData);
          }
        );
      });
  }

  render() {
    return (
      <div className="main">
        <Router>
          <NavBar />
          <Route
            path="/manage"
            exact
            render={() => (
              <Manage
                requester={this.makeCall.bind(this)}
                data={this.state.myData}
                deleteStock={this.deleteItem.bind(this)}
              />
            )}
          />

          <Route
            path="/dashboard"
            exact
            render={() => <Dashboard data={this.state.myData} />}
          />
        </Router>
      </div>
    );
  }
}

export default FetchData;
