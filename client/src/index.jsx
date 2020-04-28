import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from './components/FileInput.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // handleClick -> send file to the server

  render() {
    return (
      <div>
        <h3>The Only Budgeting App</h3>
        <h3>INSERT FILE HERE</h3>
        <FileInput />
        {/* <input type="file"></input> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
