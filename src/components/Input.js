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
    this.setState({ scrapeId: "" });
    //url
    console.log("url", this.state.scrapeId)
    const res = await axios.post('/url',
      { url: this.state.scrapeId }
    )
    console.log("res", res)
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
      </div>
    );
  }
}

export default Input;
