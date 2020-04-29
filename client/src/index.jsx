import React from 'react';
import ReactDOM from 'react-dom';
import Papa from 'papaparse';
import axios from 'axios';
import FileInput from './components/FileInput.jsx';
import Visualization from './components/Visualization.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      showChart: false,
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
        this.setState(
          { transactions: resp.data, showChart: !this.state.showChart },
          () => {
            console.log(this.state.transactions);
          }
        );
      })
      .catch((err) => console.log('Error in processing file: ', err));
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
        {this.state.showChart ? (
          <Visualization
            transactions={this.state.transactions}
            filterTransactionsAndUpdate={this.filterTransactionsAndUpdate}
          />
        ) : (
          <section id="banner">
            <div className="inner">
              <header>
                <h1>Having trouble with your Finances?</h1>
                <h2>Let us Help.</h2>
                <FileInput uploadAndUpdate={this.uploadAndUpdate} />
              </header>
            </div>
          </section>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
