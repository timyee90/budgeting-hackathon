import React from 'react';
import Chart1 from './chart1.jsx';
import Chart2 from './chart2.jsx';
import Chart3 from './chart3.jsx';
class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //create a form to change states of catagory and info
  //use that on button click to call this.props.filterTransactionsAndUpdate(this.catagory, this.info)

  render() {
    return (
      <div>
        <Chart1 transactions={this.props.transactions} />
        {/* <Chart2 transactions={this.props.transactions} /> */}
        {/* <Chart3 transactions={this.props.transactions} /> */}
      </div>
    );
  }
}

export default Visualization;
