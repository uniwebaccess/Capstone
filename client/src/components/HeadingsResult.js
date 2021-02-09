import React from 'react'
import { Component } from 'react';
import { connect } from "react-redux";
import BarChart from '../visual/BarChart';
import { fetchData } from "../store/data";


class HeadingsResult extends Component{
  // console.log("props", props.data)
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }
  render(){
    const { status, url, data, error } = this.props;
    console.log(data)
  return (
    <div>
    {status === "loading" && <h1>Loading Results</h1>}
        {status === "success" && url && data && (
          <div><p>This is HeadingsResult Component:</p>
            <BarChart data={data.headingsResult} /></div>
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

export default connect(mapState, mapDispatch)(HeadingsResult);
