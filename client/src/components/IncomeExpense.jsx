import React from 'react';
import * as d3 from 'd3';
import CategoryItem from './CategoryItem.jsx';

const IncomeExpense = (props) => {
  let aggregatedTransaction = d3
    .nest()
    .key((d) => d.transaction)
    .rollup((v) => d3.sum(v, (d) => d.amount))
    .entries(props.transactions);

  let income;
  let expense;
  aggregatedTransaction.forEach((item) => {
    if (item.key === 'credit') {
      income = item.value;
    } else if (item.key === 'debit') {
      expense = item.value;
    }
  });
  aggregatedTransaction.push({
    key: 'remaining',
    value: income - expense,
  });

  aggregatedTransaction = aggregatedTransaction
    .sort((a, b) => {
      return b.value - a.value;
    })
    .map((item, i) => {
      return { key: item.key, value: item.value.toFixed(2) };
    });

  aggregatedTransaction.forEach((item) => {
    if (item.key === 'debit') {
      item.key = 'Expense';
    } else if (item.key === 'credit') {
      item.key = 'Income';
    } else {
      item.key = 'Savings';
    }
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
};

export default IncomeExpense;
