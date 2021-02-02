import React from "react";
import database from "./Firebase/firebase";
//import main from '../scripts'

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

  onAdd(evt) {
    evt.preventDefault();
    database.ref("/scans/").push({
      url: this.state.scrapeId,
    });
    this.setState({ scrapeId: "" });
   // main("https://en.wikipedia.org/wiki/Penguin")
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
