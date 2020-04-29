import React from 'react';
import c3 from 'c3';
//filter by transaction name
class Chart1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {
        bars: [10, 20],
        xAxis: ['test1', 'test2'],
      },
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
              'Bars',
              ...Object.keys(this.state.info).map((key) => {
                return this.state.info[key].total;
              }),
            ],
          ],
          type: 'bar',
        },
        axis: {
          x: {
            type: 'categories',
            categories: Object.keys(this.state.info).map((key) => {
              return key;
            }),
          },
        },
      });
    });
  }

  setInfo(callback) {
    let info = {};
    this.props.transactions.forEach((transaction) => {
      if (info[transaction.category]) {
        info[transaction.category].total += transaction.amount;
      } else {
        info[transaction.category] = { total: transaction.amount };
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

export default Chart1;
