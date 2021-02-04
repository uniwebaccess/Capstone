import React from "react";
import database from "./Firebase/firebase";
import axios from "axios";
import history from "../history";
import { connect } from "react-redux";
import { runData } from "../store/data";
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

const styledComponent = withStyles(navStyles, { withTheme: true })(SearchBar);
export default connect(mapState, mapDispatch)(styledComponent);

