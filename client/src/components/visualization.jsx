import React from 'react';
import TransactionList from './TransactionList.jsx';
import CategoryList from './CategoryList.jsx';
import HeaderVisual from './HeaderVisual.jsx';
import Chart1 from './chart1.jsx';
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
        <h2 className="reports">Here's our 2cents</h2>
        <div className="container level">
          {' '}
          <HeaderVisual transactions={this.props.transactions} />
        </div>
        <nav id="nav" className="navbar">
          <div className="">
            <button
              className="button nav"
              name="all"
              onClick={this.handleNavClick}
            >
              All Transactions
            </button>
          </div>
          <div className="">
            <button
              className="button nav"
              name="cat"
              onClick={this.handleNavClick}
            >
              Category
            </button>
          </div>
          <div className="">
            <button
              className="button nav"
              name="inc"
              onClick={this.handleNavClick}
            >
              Income/Expenses
            </button>
          </div>
        </nav>
        <div className="txn">{chart}</div>
        {current}
      </div>
    );
  }
}

export default Visualization;
