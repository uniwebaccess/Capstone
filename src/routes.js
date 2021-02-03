import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TestResults from "./components/TestResults";

class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/testresults/:urlKey" component={TestResults} />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id,
//     user: state.user
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes;
