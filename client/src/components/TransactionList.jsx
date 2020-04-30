import React from "react";
import TransactionItem from "./TransactionItem.jsx";

class TransactionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="txn">
        <h3>Transactions</h3>
        <div className="txn-table">
          <div className="txn-header txn-row">
            <div className="txn-data">Date</div>
            <div className="txn-data">Description</div>
            <div className="txn-data">Amount</div>
            <div className="txn-data">Category</div>
            <div className="txn-data">Transaction</div>
            <div className="txn-data">Account Name</div>
          </div>
          {this.props.transactions.map((transaction, i) => {
            return <TransactionItem transaction={transaction} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default TransactionList;
