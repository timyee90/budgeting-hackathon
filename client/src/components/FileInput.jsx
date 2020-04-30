import React from "react";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.uploadAndUpdate(this.fileInput.current.files[0]);
  }

  render() {
    return (
      <div>
        <p>
          By importing your spending for the past year,
          <br />
          We will help you categorize your transaction and identify areas for
          potential savings.
        </p>
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="file" className="form" ref={this.fileInput} />
          <br />
          <br />
          <br />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FileInput;
