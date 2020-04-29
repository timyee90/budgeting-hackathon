import React from "react";
import TransactionList from "./TransactionList.jsx";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagory: null,
      info: null,
    };
  }

  //create a form to change states of catagory and info
  //use that on button click to call this.props.filterTransactionsAndUpdate(this.catagory, this.info)

  render() {
    return (
      <div>
        <p>This is the Visualization page</p>
        <TransactionList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default Visualization;
