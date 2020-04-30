import React from 'react';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="txn-row">
        <div className="txn-data">{this.props.transaction.key}</div>
        <div className="txn-data">${this.props.transaction.value}</div>
      </div>
    );
  }
}

export default CategoryItem;
