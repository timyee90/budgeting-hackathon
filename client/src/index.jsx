import React from 'react';
import ReactDOM from 'react-dom';
import FileInput from './components/FileInput.jsx';
import Papa from 'papaparse';
import axios from 'axios';
import Visualization from './components/visualization.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
    this.uploadAndUpdate = this.uploadAndUpdate.bind(this);
    this.filterTransactionsAndUpdate = this.filterTransactionsAndUpdate.bind(
      this
    );
  }
  // handleClick -> send file to the server
  uploadAndUpdate(file) {
    new Promise(function (complete, error) {
      Papa.parse(file, { complete, error, header: true });
    })
      .then((fileToJson) => {
        //needs to send an axios request to the server(post) with
        //fileToJson.data
        return axios.post('api/transactions', fileToJson.data);
      })
      .then((resp) => {
        return axios.get('api/transactions');
      })
      .then((resp) => {
        this.setState({ transactions: resp.data }, () => {
          console.log(this.state.transactions);
        });
      })
      .catch((err) => console.log(err));
  }

  //create a filter function change state based on selected filter
  filterTransactionsAndUpdate(tableField, searchValue) {
    axios
      .get('api/transactions/field', {
        params: {
          tableField,
          searchValue,
        },
      })
      .then((resp) => console.log(resp.data));
  }

  render() {
    return (
      <div>
        <h3>The Only Budgeting App</h3>
        <h3>INSERT FILE HERE</h3>
        <FileInput uploadAndUpdate={this.uploadAndUpdate} />
        <Visualization
          transactions={this.state.transactions}
          filterTransactionsAndUpdate={this.filterTransactionsAndUpdate}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
