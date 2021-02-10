import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PieChart from "../../visual/PieChart";
import { fetchData } from "../../store/data";
import {Button, Icon} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import history from '../../history';

const navStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  backButton:{
    marginTop: '5%',
  }
})

class ImagesResult extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  render() {
    const { status, url, data } = this.props;
    const classes = this.props.classes;
    return (
      <div>
        {status === 'loading' && <h1>Loading Results</h1>}
        {status === 'success' && url && data && (
          <div>
          <Button
                color="secondary"
                variant="contained"
                id="addBtn"
                type="submit"
                startIcon={<Icon><ArrowBackIosIcon/></Icon>}
                className={classes.backButton}
                onClick={history.goBack}
                >
                back
              </Button>
            <p>This is ImagesResult Component:</p>
            <PieChart data={data.imagesResult} />
            <h1>Showing results for:</h1>
            <p> {url}</p>
            <ul>
              <li>Total images: {data.imagesResult.allImages}</li>
              <li>
                Images with valid atribute alt:{' '}
                {data.imagesResult.imagesWithAlt}
              </li>
              <li>Test: {data.imagesResult.passed ? ' passed' : ' failed'}</li>
              <li>Percent passed images: {data.imagesResult.percent}</li>
              <li>Total Score: {data.score.percent}</li>
            </ul>
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
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
  };
};


const styledComponent = withStyles(navStyles, { withTheme: true })(ImagesResult);

export default connect(mapState, mapDispatch)(styledComponent);
