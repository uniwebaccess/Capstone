import React from 'react';
import database from './Firebase/firebase';
import history from '../history';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrapeId: '',
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

  onAdd(evt) {
    evt.preventDefault();
    const urlKey = this.substituteUrl(this.state.scrapeId);
    database.ref('/scans/' + urlKey).set({ url: this.state.scrapeId });
    history.push('/testResults');
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
      </div>
    );
  }
}

export default Input;
