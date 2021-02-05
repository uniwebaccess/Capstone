import React, { Component } from "react";
import { connect } from "react-redux";

class TestFieldDescription extends Component {
  render() {
    return (
      <div id="single-test-field">
        <h2>Single Test Field Description:</h2>
        <p id="single-field-description">{this.props.descriptions["images"]}</p>
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

export default connect(mapState, mapDispatch)(TestFieldDescription);
