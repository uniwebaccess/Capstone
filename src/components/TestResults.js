import React, { Component } from "react";
import database from "./Firebase/firebase";

/*
 * Page to render results of tests
 */
//Through the route /testresults/:urlKey
class TestResult extends Component {
  //When TestResult is rendered in another component
  //the single url is passed in as a property
  //{url: inputUrl} -> this.props.url
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      url: "",
    };
    this.retrieveData = this.retrieveData.bind(this);
  }

  componentDidMount() {
    console.log("url key propery is ", this.props.match.params.urlKey);
    this.retrieveData();
  }

  retrieveData() {
    //call the retrieve data function on database retrieving the data where the url is this.props.url
    let resultObject = {};

    //Sets the reference of where in firebase we are pulling data
    // '/scans/' + urlKey property brings us to  scans -> url and returns object of all of the data stored under that url
    const urlKey = this.props.match.params.urlKey;
    const ref = database.ref("/scans/" + urlKey);

    // .once retrieves data once wheras .on would continuously update
    ref.once("value", (snapshot) => {
      if (snapshot.exists()) {
        resultObject = snapshot.val();
        console.log("the snapshot of the data returns ", resultObject);
        this.setState({ data: resultObject.data, url: resultObject.url });
      } else {
        console.log("could not find scrape for the url");
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Showing results for:</h1>
        <p> {this.state.url}</p>
        {this.state.data !== null ? (
          <div>
            <ul>
              <li>Total images: {this.state.data.imgAltScore.allImages}</li>
              <li>
                Images with valid atribute alt:{" "}
                {this.state.data.imgAltScore.imagesWithAlt}
              </li>
              <li>
                Test passed:{" "}
                {this.state.data.imgAltScore.passed
                  ? "Test passed"
                  : "Test failed"}
              </li>
              <li>
                Percent passed images: {this.state.data.imgAltScore.percent}
              </li>
              <li>Total Score: {this.state.data.score}</li>
            </ul>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default TestResult;
