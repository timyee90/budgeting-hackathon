import React from 'react';
import CategoryItem from './CategoryItem.jsx';
import * as d3 from 'd3';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let aggregatedTransaction = d3
      .nest()
      .key((d) => d.category)
      .rollup((v) => d3.sum(v, (d) => d.amount))
      .entries(this.props.transactions);

    aggregatedTransaction = aggregatedTransaction
      .sort((a, b) => {
        return b.value - a.value;
      })
      .map((item, i) => {
        return { key: item.key, value: item.value.toFixed(2) };
      });

    return (
      <div>
        <div className="txn">
          <div className="txn-table">
            <div className="txn-header txn-row">
              <div className="txn-data">Amount</div>
              <div className="txn-data">Category</div>
            </div>
            {aggregatedTransaction.map((transaction, i) => {
              return <CategoryItem transaction={transaction} key={i} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
