import React from "react";
import ReactDOM from "react-dom";
import Papa from "papaparse";
import axios from "axios";
import FileInput from "./components/FileInput.jsx";
import Visualization from "./components/Visualization.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      showChart: false,
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
        return axios.post("api/transactions", fileToJson.data);
      })
      .then((resp) => {
        console.log(resp);
        this.setState({
          showChart: !this.state.showChart,
        });
      })
      .catch((err) => {
        console.log("Error in processing file: ", err);
      });
  }

  render() {
    return (
      <div>
        {this.state.showChart ? (
          <Visualization />
        ) : (
          <section id="banner">
            <div className="inner">
              <header>
                <h1>Having trouble with your Finances?</h1>
                <h2>Let us Help.</h2>
                <FileInput asyncParse={this.asyncParse} />
              </header>
            </div>
          </section>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
