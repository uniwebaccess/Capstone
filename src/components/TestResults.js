import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/data";

/*
 * Page to render results of tests
 */
//Through the route /testresults/:urlKey
class TestResult extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  render() {
    return (
      <div>
        {!this.props.data ? (
          <h1>Loading Results</h1>
        ) : (
          <div>
            <h1>Showing results for:</h1>
            <p> {this.props.url}</p>
          </div>
        )}

        {this.props.data !== null ? (
          <div>
            <ul>
              <li>Total images: {this.props.data.imgAltScore.allImages}</li>
              <li>
                Images with valid atribute alt:{" "}
                {this.props.data.imgAltScore.imagesWithAlt}
              </li>
              <li>
                Test passed:{" "}
                {this.props.data.imgAltScore.passed
                  ? "Test passed"
                  : "Test failed"}
              </li>
              <li>
                Percent passed images: {this.props.data.imgAltScore.percent}
              </li>
              <li>Total Score: {this.props.data.score}</li>
            </ul>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
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
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
  };
};

export default connect(mapState, mapDispatch)(TestResult);
