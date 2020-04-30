import React from 'react';
import TransactionList from './TransactionList.jsx';
import CategoryList from './CategoryList.jsx';

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagory: null,
      info: null,
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
    let current;
    if (this.state.navigation === 'all') {
      current = <TransactionList transactions={this.props.transactions} />;
    } else if (this.state.navigation === 'cat') {
      current = <CategoryList transactions={this.props.transactions} />;
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
