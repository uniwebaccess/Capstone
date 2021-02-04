import React from "react";
import database from "./Firebase/firebase";
import axios from "axios";
import history from "../history";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import { FormControl } from '@material-ui/core';


const navStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  inputRoot: {
    color: 'inherit',
  },

  margin: {
    labelWidth: 60,
  },
  textField: {
    width: '25ch',
  },

  searchIcon:{
    color: '#bdbdbd',
  }


});

class SearchBar extends React.Component {
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
    console.log("url", this.state.inputUrl);

    //Makes backend call to perform scrape
    const res = await axios.post("/api/url", { url: this.state.inputUrl });

    //Changes input url to firebase key
    const urlKey = this.keyifyUrl(this.state.inputUrl);

    //Adds response data and url to "/scans" in db
    database
      .ref("/scans/" + urlKey)
      .set({ url: this.state.inputUrl, data: res.data })
      .then(history.push(`/testresults/${urlKey}`));
  }

  //Function to change url to characters that Firebase allows
  keyifyUrl(inputUrl) {
    //replace . with ,
    //replace / with =
    let urlKey = inputUrl.replace(/\./g, ",").replace(/\//g, "=");
    return urlKey;
  }

  render() {
    const classes = this.props.classes;
    return (
      <form onSubmit={this.onInput}>
          <TextField
            name="inputUrl"
            placeholder="Search by URL "
            id="standard-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon className={clsx(classes.searchIcon)} />
              </InputAdornment>,
            }}
            variant="outlined"
            value={this.state.inputUrl}
            onChange={this.handleChange}
          />
        <Box>
          <Button
          color="secondary"
          variant="contained"
          id="addBtn"
          type="submit">Primary</Button>
        </Box>
        </form>
    )
  }
}

export default withStyles(navStyles, { withTheme: true })(SearchBar);


/*
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
*/
