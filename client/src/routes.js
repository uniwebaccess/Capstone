import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import TestResults from './components/TestResults';
import ImagesResult from './components/single-tests/ImagesResult';
import HeadingsResult from './components/single-tests/HeadingsResult';
import AboutUs from './components/AbouUs';
import ContactUs from './components/ContactUs';
import TestFieldDescription from './components/single-tests/TestFieldDescription';
import GlobalCodeResult from './components/single-tests/GlobalCodeResult';
import ControlsResult from './components/single-tests/ControlsResult.js';
import AccessResult from './components/single-tests/AccessibilityResult.js';
class Routes extends Component {
  // componentDidMount() {
  //   this.props.loadInitialData()
  // }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/testresults/:urlKey" component={TestResults} />
        <Route path="/imagesresult/:urlKey" component={ImagesResult} />
        <Route path="/headingresult/:urlKey" component={HeadingsResult} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contactus" component={ContactUs} />
        <Route
          path="/testfielddescription/:urlKey"
          component={TestFieldDescription}
        />
        <Route path="/globalcode/:urlKey" component={GlobalCodeResult} />
        <Route path="/controlresult/:urlKey" component={ControlsResult} />
        <Route path="/accesresult/:urlKey" component={AccessResult} />
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
