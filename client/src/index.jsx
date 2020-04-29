import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from './components/FileInput.jsx';
import Papa from 'papaparse';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
    this.asyncParse = this.asyncParse.bind(this);
  }
  // handleClick -> send file to the server

  asyncParse(file) {
    new Promise(function (complete, error) {
      Papa.parse(file, { complete, error, header: true });
    })
      .then((fileToJson) => {
        //needs to send an axios request to the server(post) with
        //fileToJson.data
        return axios.post('api/transactions', fileToJson.data);
      })
      .then((resp) => {
        console.log(resp);
      });
  }

  render() {
    return (
      <div>
        <h3>The Only Budgeting App</h3>
        <h3>INSERT FILE HERE</h3>
        <FileInput asyncParse={this.asyncParse} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
