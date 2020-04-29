import React from 'react';
import TransactionList from './TransactionList.jsx';
import Chart1 from './chart1.jsx';
import Chart2 from './chart2.jsx';
import Chart3 from './chart3.jsx';
class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: 'all',
    };
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  //create a form to change states of catagory and info
  //use that on button click to call this.props.filterTransactionsAndUpdate(this.catagory, this.info)

  handleNavClick(event) {
    this.setState({
      navigation: event.target.name,
    });
  }

  render() {
{/* <Chart1 transactions={this.props.transactions} /> */}
{/* <Chart2 transactions={this.props.transactions} /> */}
{/* <Chart3 transactions={this.props.transactions} /> */}
    let current;
    if (this.state.navigation === 'all') {
      current = <TransactionList transactions={this.props.transactions} />;
    } else if (this.state.navigation === 'cat') {
      current = <div>Category</div>;
    } else if (this.state.navigation === 'type') {
      current = <div>Transaction Type</div>;
    }
    return (
      <div>
        <div className="container level">
          <div className="title">This is the Visualization page</div>
        </div>
        <nav className="navbar level-left">
          <div className="">
            <button className="button" name="all" onClick={this.handleNavClick}>
              All Transactions
            </button>
          </div>
          <div className="">
            <button className="button" name="cat" onClick={this.handleNavClick}>
              Category
            </button>
          </div>
          <div className="">
            <button
              className="button"
              name="type"
              onClick={this.handleNavClick}
            >
              Transaction Type
            </button>
          </div>
        </nav>
        {current}
      </div>
    );
  }
}

export default Visualization;
