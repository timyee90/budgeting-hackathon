import React from "react";

class TransactionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="txn-row">
        <div className="txn-data">{this.props.transaction.date}</div>
        <div className="txn-data">{this.props.transaction.description}</div>
        <div className="txn-data">{this.props.transaction.amount}</div>
        <div className="txn-data">{this.props.transaction.category}</div>
        <div className="txn-data">{this.props.transaction.transaction}</div>
        <div className="txn-data">{this.props.transaction.account_name}</div>
      </div>
    );
  }
}

export default TransactionItem;
