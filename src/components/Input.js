import React from "react";
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
import { Icon } from '@material-ui/core';
import { clearStatus } from "../store/status";
import { FormControl } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';


const navStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "inherit",
  },

  margin: {
    width:'60%',
    height: '15%'
  },
  textField: {
    widthItem: '25ch',
  },

  searchIcon:{
    color: '#bdbdbd',
  },

});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: "https://en.wikipedia.org/wiki/Penguin",
    };
    this.onInput = this.onInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.keyifyUrl = this.keyifyUrl.bind(this);
    this.props.clearStatus();
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
    await this.props.runData(urlKey, this.state.inputUrl);
    if (this.props.status === "success") {
      history.push(`/testresults/${urlKey}`);
    }
  }

  //Function to change url to characters that Firebase allows
  keyifyUrl(inputUrl) {
    //replace . with ,
    //replace / with =
    let urlKey = inputUrl.replace(/\./g, ",").replace(/\//g, "=");
    return urlKey;
  }

  render() {
    const { status, error, classes } = this.props;
    return (
      <div>
        {!status && (
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
        <Box mt={5}>
          <Button
          color="secondary"
          variant="contained"
          id="addBtn"
          type="submit"
          endIcon={<Icon>send</Icon>}
          >Scan</Button>
        </Box>
    </form>
        )}
        {status === "loading" && <LinearProgress />}
        {status === "error" && (
          <div>
            <p>There was an error</p>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    data: state.data.data,
    url: state.data.url,
    status: state.status,
    error: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    runData: (urlKey, url) => dispatch(runData(urlKey, url)),
    clearStatus: () => dispatch(clearStatus()),
  };
};

const styledComponent = withStyles(navStyles, { withTheme: true })(SearchBar);
export default connect(mapState, mapDispatch)(styledComponent);
