import React, { Component } from 'react';
import database from './Firebase/firebase';
/*
 * Page to render results of tests
 */

//This component is displayed after the user inputs their url
//It retrieves the data of the url that was input into the database
//Render object retrieved

class TestResult extends Component {
  //When TestResult is rendered in another component
  //the single url is passed in as a property
  //{url: inputUrl} -> this.props.url
  constructor(props) {
    super(props);
    this.retrieveData = this.retrieveData.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    //call the retrieve data function on database retrieving the data where the url is this.props.url
    let resultObject = {};

    //Sets the reference of where in firebase we are pulling data
    // '/scans/' + this.props.url brings us to  scans -> url and returns object of all of the data stored under that url
    var ref = database.ref('scans');

    // .once retrieves data once wheras .on would continuously update
    ref.once('value', (snapshot) => {
      if (snapshot.exists()) {
        resultObject = snapshot.val();
        console.log('the snapshot of the data returns ', resultObject);
      } else {
        console.log('could not find scrape for the url');
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Test result page</h1>
      </div>
    );
  }
}

export default TestResult;
