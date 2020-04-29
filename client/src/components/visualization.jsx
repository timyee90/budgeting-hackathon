import React from 'react';
import c3 from 'c3';
import Chart1 from './chart1.jsx';

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //create a form to change states of catagory and info
  //use that on button click to call this.props.filterTransactionsAndUpdate(this.catagory, this.info)

  render() {
    return <Chart1 transactions={this.props.transactions} />;
  }
}

export default Visualization;
