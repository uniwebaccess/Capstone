import React from "react";
import database from "./Firebase/firebase";
import axios from 'axios';
import history from '../history';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrapeId: "https://en.wikipedia.org/wiki/Penguin",
      data: null
    };
    this.onAdd = this.onAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.substituteUrl = this.substituteUrl.bind(this);
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
    /*
    const urlKey = this.substituteUrl(this.state.scrapeId);
    database.ref('/scans/' + urlKey).set({ url: this.state.scrapeId });
    history.push('/testResults');
    */
  }

  //Change url to make it only characters that Firebase allows
  //Temporarily in the component, but this function should be moved higher up in component tree and passed down as a property
  substituteUrl(inputUrl) {
    //replace . with ,
    //replace / with \
    let subbedUrl = inputUrl.replace(/\./g, ',').replace(/\//g, '\\');
    return subbedUrl;
  }

  render() {

    return (
      <div className="Input">
        <form onSubmit={this.onAdd}>
          <label className="scrapeId">Scrape Id</label>
          <input
            type="text"
            name="scrapeId"
            id="scrapeId"
            value={this.state.scrapeId}
            onChange={this.handleChange}
          />
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
