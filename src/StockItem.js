import React from "react";
import "./stockItem.css";

class StockItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div
        className="stockItem"
        style={{
          float: "left",
          backgroundColor:
            this.props.data.changeInPercent >= 0 ? "green" : "red"
        }}
      >
        <p>{this.props.data.symbol}</p>
        <p>{this.props.data.lastTradePriceOnly}</p>
        <p>{this.props.data.changeInPercent}</p>
      </div>
    );
  }
}

export default StockItem;
