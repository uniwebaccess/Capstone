import React, { Component } from "react";
import { connect } from "react-redux";

class SingleTestField extends Component {
  render() {
    return (
      <div id="single-test-field">
        <h1>Single Test Field Component</h1>
      </div>
    );
  }
}

const mapState = (state) => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(SingleTestField);
