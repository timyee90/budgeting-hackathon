import React from 'react';
import TransactionList from './TransactionList.jsx';
import CategoryList from './CategoryList.jsx';
import HeaderVisual from './HeaderVisual.jsx';
import Chart1 from './chart1.jsx';
import Chart2 from './chart2.jsx';
import Chart3 from './chart3.jsx';
import IncomeExpense from './IncomeExpense.jsx';
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
    let chart;
    let current;
    if (this.state.navigation === 'all') {
      current = <TransactionList transactions={this.props.transactions} />;
      chart = <div></div>;
    } else if (this.state.navigation === 'cat') {
      current = <CategoryList transactions={this.props.transactions} />;
      chart = <Chart1 transactions={this.props.transactions} />;
    } else if (this.state.navigation === 'inc') {
      current = <IncomeExpense transactions={this.props.transactions} />;
      chart = <Chart3 transactions={this.props.transactions} />;
    }
    return (
      <div>
        <div className="container level">
          <HeaderVisual transactions={this.props.transactions} />
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
            <button className="button" name="inc" onClick={this.handleNavClick}>
              Income/Expenses
            </button>
          </div>
        </nav>
        {chart}
        {current}
      </div>
    );
  }
}

export default Visualization;
