import React from "react";
import database from "./Firebase/firebase";
import axios from "axios";
import history from "../history";
import { connect } from "react-redux";
import { runData } from "../store/data";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: "",
    };
    this.onInput = this.onInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyifyUrl = this.keyifyUrl.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  //Function for onSubmit
  async onInput(evt) {
    evt.preventDefault();

    //Changes input url to firebase key
    const urlKey = this.keyifyUrl(this.state.inputUrl);

    this.props.runData(urlKey, this.state.inputUrl);
    history.push(`/testresults/${urlKey}`);
  }

  //Function to change url to characters that Firebase allows
  keyifyUrl(inputUrl) {
    //replace . with ,
    //replace / with =
    let urlKey = inputUrl.replace(/\./g, ",").replace(/\//g, "=");
    return urlKey;
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.onInput}>
          <label className="inputUrl">Url to Test</label>
          <input
            type="text"
            name="inputUrl"
            id="inputUrl"
            value={this.state.inputUrl}
            onChange={this.handleChange}
          />
          <br />
          <button id="addBtn" type="submit">
            Test Url
          </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    data: state.data.data,
    url: state.data.url,
  };
};

const mapDispatch = (dispatch) => {
  return {
    runData: (urlKey, url) => dispatch(runData(urlKey, url)),
  };
};

export default connect(mapState, mapDispatch)(Input);
