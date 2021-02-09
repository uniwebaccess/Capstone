import React, { Component } from "react";
import { connect } from "react-redux";

class TestFieldDescription extends Component {
  render() {
    const { selectedField, descriptions } = this.props;
    return (
      <div id="single-test-field">
        <h2>Single Test Field Description:</h2>
        <p id="single-field-description">{descriptions[selectedField]}</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedField: state.data.selectedField,
  };
};

const mapDispatch = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatch)(TestFieldDescription);
