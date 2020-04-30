import React from 'react';
import c3 from 'c3';
//filter by transaction name
class Chart2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };

    this.setInfo = this.setInfo.bind(this);
  }

  //create a form to change states of catagory and info
  //use that on button click to call this.props.filterTransactionsAndUpdate(this.catagory, this.info)

  componentDidMount() {
    this.setInfo(() => {
      c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            [
              'Spending Totals',
              ...Object.keys(this.state.info).map((key) => {
                return this.state.info[key].total.toFixed(2);
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
            categories: Object.keys(this.state.info).map((key) => {
              return key;
            }),
            tick: {
              rotate: 75,
              multiline: false,
            },
            y: {
              tick: {
                format: function (d) {
                  return '$' + d;
                },
              },
            },
          },
        },
        bar: {
          width: {
            ratio: 0.3,
          },
        },
      });
    });
  }

  setInfo(callback) {
    let info = {};
    this.props.transactions.forEach((transaction) => {
      if (
        info[transaction.account_name] &&
        transaction.transaction !== 'credit'
      ) {
        info[transaction.account_name].total += transaction.amount;
      } else if (transaction.transaction !== 'credit') {
        info[transaction.account_name] = { total: transaction.amount };
      }
    });
    console.log(info);
    this.setState({ info }, () => {
      callback();
    });
  }

  render() {
    return <div id="chart"></div>;
  }
}

export default Chart2;
