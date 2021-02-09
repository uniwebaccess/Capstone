import React from 'react'
import { Component } from 'react';
import { connect } from "react-redux";
import PieChart from '../visual/PieChart'
import { fetchData } from "../store/data";

class ImagesResult extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }
 render(){
  const { status, url, data, error } = this.props;
  return (
    <div>
        {status === "loading" && <h1>Loading Results</h1>}
        {status === "success" && url && data && (
        <div>
          <p>This is ImagesResult Component:</p>
          <PieChart data={data.imagesResult} />
          <h1>Showing results for:</h1>
            <p> {url}</p>
            <ul>
              <li>Total images: {data.imagesResult.allImages}</li>
              <li>
                Images with valid atribute alt:{" "}
                {data.imagesResult.imagesWithAlt}
              </li>
              <li>
                Test:{" "}
                {data.imagesResult.passed ? " passed" : " failed"}
              </li>
              <li>Percent passed images: {data.imagesResult.percent}</li>
              <li>Total Score: {data.score}</li>
            </ul>
      </div>
    )}

    </div>
  )
 }
}


const mapState = (state) => {
  return {
    data: state.data.data,
    url: state.data.url,
    status: state.status,
    error: state.error,
  };
};


const mapDispatch = (dispatch) => {
  return {
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
  };
};

export default connect(mapState, mapDispatch)(ImagesResult);
