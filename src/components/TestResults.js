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
    const { status, url, data } = this.props;
    return (
      <div>
        {status === "loading" && <h1>Loading Results</h1>}
        {status === "success" && url && data && (
          <div>
            <h1>Showing results for:</h1>
            <p> {url}</p>
            <ul>
              <li>Total images: {data.imagesResult.allImages}</li>
              <li>
                Images with valid atribute alt:{" "}
                {data.imagesResult.imagesWithAlt}
              </li>
              <li>
                Test passed:{" "}
                {data.imagesResult.passed ? "Test passed" : "Test failed"}
              </li>
              <li>Percent passed images: {data.imagesResult.percent}</li>
              <li>Total Score: {data.score}</li>
            </ul>
          </div>
        )}
        {status === "error" && <h1>There was an error</h1>}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    data: state.data.data,
    url: state.data.url,
    status: state.status,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
  };
};

export default connect(mapState, mapDispatch)(TestResult);
