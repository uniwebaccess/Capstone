import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, selectField } from "../store/data";
import { checkerDescriptions } from "../constants";
import TestFieldDescription from "./single-tests/TestFieldDescription";

import HeadingsResult from "../components/HeadingsResult";
import ImagesResult from "../components/ImagesResult";

/*
 * Page to render results of tests
 */
//Through the route /testresults/:urlKey
class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "images",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ selected: evt.target.value });
    this.props.selectField(evt.target.value);
  }

  render() {
    const { status, url, data, error } = this.props;
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
            <p id="test-results-description">
              This site was measured by a variety of fields. Select a test to
              learn more
            </p>
            <form>
              <select
                name="testField"
                id="field-select"
                value={this.state.selected}
                onChange={this.handleChange}
              >
                <option value="images">Images</option>
                <option value="globalCode">Global Code</option>
                <option value="headings">Headings</option>
              </select>
            </form>
            <TestFieldDescription descriptions={checkerDescriptions} />
            <ImagesResult />
            <HeadingsResult />
          </div>
        )}
        {status === "error" && (
          <div>
            <h1>There was an error</h1>
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
    avgData: state.data.avgData,
    url: state.data.url,
    status: state.status,
    error: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
    selectField: (selectedField) => dispatch(selectField(selectedField)),
  };
};

export default connect(mapState, mapDispatch)(TestResult);
