import React from 'react'
import { connect } from "react-redux";
import BarChart from '../visual/BarChart'

function HeadingsResult(props) {
  // console.log("props", props.data)
  const headingsData = props.data.headingsResult
  return (
    <div>
      <p>This is HeadingsResult Component:</p>
      <BarChart data={headingsData} />

    </div>
  )
}


const mapState = (state) => {
  return {
    data: state.data.data,
  };
};



export default connect(mapState, null)(HeadingsResult);
