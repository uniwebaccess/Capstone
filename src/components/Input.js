import React from "react";
import database from "./Firebase/firebase";
import axios from 'axios'
//import puppeteer from 'puppeteer';
//import main from '../scripts/index.js'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrapeId: "",
      data: null
    };
    this.onAdd = this.onAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async onAdd(evt) {
    evt.preventDefault();
    database.ref("/scans/").push({
      url: this.state.scrapeId,
    });
    //url
    console.log("url", this.state.scrapeId)
    const res = await axios.post('/api/url',
      { url: this.state.scrapeId }
    )
    this.setState({...this.state, data: res.data});
    console.log("our state:",this.state.data.score)
    //console.log("res", res.data);
  }
  render() {

    return (
      <div className="Input">
        <form onSubmit={this.onAdd} onChange={this.handleChange}>
          <label className="scrapeId">Scrape Id</label>
          <input type="text" name="scrapeId" id="scrapeId" />
          <br />
          <button id="addBtn" type="submit">
            Add
          </button>
        </form>
        {this.state.data !== null ? (<div>
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
        </div>): (<div/>)}
      </div>
    );
  }
}

export default Input;
