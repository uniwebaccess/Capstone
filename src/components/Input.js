import React from "react";
import database from "./Firebase/firebase";
import axios from "axios";
import history from "../history";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: "",
    };
    this.onAdd = this.onAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyifyUrl = this.keyifyUrl.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async onAdd(evt) {
    evt.preventDefault();
    console.log("url", this.state.inputUrl);
    const res = await axios.post("/api/url", { url: this.state.inputUrl });
    const urlKey = this.keyifyUrl(this.state.inputUrl);
    database
      .ref("/scans/" + urlKey)
      .set({ url: this.state.inputUrl, data: res.data })
      .then(history.push(`/testresults/${urlKey}`));
    // this.setState({ inputUrl: "" });
    // console.log("our state:", this.state);
    // console.log("res", res.data);
  }

  //Change url to make it only characters that Firebase allows
  //Temporarily in the component, but this function should be moved higher up in component tree and passed down as a property
  keyifyUrl(inputUrl) {
    //replace . with ,
    //replace / with \
    let urlKey = inputUrl.replace(/\./g, ",").replace(/\//g, "\\");
    return urlKey;
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.onAdd}>
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
            Add
          </button>
        </form>
        {/* {this.state.data !== null ? (<div>
          <ul>
            <li>
              Total images: {this.state.data.imgAltScore.allImages}
            </li>
            <li>
              Images with valid atribute alt: {this.state.data.imgAltScore.imagesWithAlt}
            </li>
            <li>
              Test passed: {this.state.data.imgAltScore.passed ? "Test passed":"Test failed"}
            </li>
            <li>
              Percent passed images: {this.state.data.imgAltScore.percent}
            </li>
            <li>
              Total Score: {this.state.data.score}
            </li>
          </ul>
        </div>): (<div/>)} */}
      </div>
    );
  }
}

export default Input;
