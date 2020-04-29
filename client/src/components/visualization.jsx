import React from 'react';

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagory: null,
      info: null,
    };
  }

  //create a form to change states of catagory and info
  //use that on button click to call this.props.filterTransactionsAndUpdate(this.catagory, this.info)

  render() {
    return <p></p>;
  }
}

export default Visualization;
