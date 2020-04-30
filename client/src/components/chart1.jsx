import React from 'react';
import c3 from 'c3';
class Chart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };

    this.setInfo = this.setInfo.bind(this);
    this.sortTransactions.bind(this);
  }

  sortTransactions() {
    return Object.keys(this.state.info).map((key) => {
      return {
        amount: Number(this.state.info[key].total.toFixed(2)),
        name: key,
      };
    });
  }

  componentDidMount() {
    this.setInfo(() => {
      c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            [
              'Spending Totals',
              ...this.sortTransactions()
                .sort((a, b) => b.amount - a.amount)
                .map((ele) => {
                  return ele.amount;
                }),
            ],
          ],
          type: 'bar',
          colors: {
            'Spending Totals': '#00eae4',
          },
        },
        axis: {
          x: {
            type: 'categories',
            categories: this.sortTransactions()
              .sort((a, b) => b.amount - a.amount)
              .map((ele) => {
                return ele.name;
              }),
            tick: {
              rotate: 75,
              multiline: false,
            },
          },
          y: {
            tick: {
              format: function (d) {
                return '$' + d;
              },
            },
          },
        },
        bar: {
          width: {
            ratio: 0.5,
          },
        },
      });
    });
  }

  setInfo(callback) {
    let info = {};
    this.props.transactions.forEach((transaction) => {
      if (info[transaction.category] && transaction.transaction !== 'credit') {
        info[transaction.category].total += transaction.amount;
      } else if (transaction.transaction !== 'credit') {
        info[transaction.category] = { total: transaction.amount };
      }
    });

    this.setState({ info }, () => {
      callback();
    });
  }

  render() {
    return <div id="chart"></div>;
  }
}

export default Chart1;
