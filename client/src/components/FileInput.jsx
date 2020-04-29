import React from 'react';
import Papa from 'papaparse';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  asyncParse(file) {
    return new Promise(function (complete, error) {
      Papa.parse(file, { complete, error, header: true });
    });
  }

  handleSubmit(event) {
    this.asyncParse(this.fileInput.current.files[0]).then((fileToJson) => {
      console.log(fileToJson.data);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileInput;
