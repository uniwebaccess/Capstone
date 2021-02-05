import React from 'react'
import { connect } from "react-redux";
import PieChart from '../visual/PieChart'

function HeadingsResult(props) {
  // console.log("props", props.data)
  const imagesData = props.data.imagesResult
  return (
    <div>
      <p>This is ImagesResult Component:</p>
      <PieChart data={imagesData} />

    </div>
  )
}


const mapState = (state) => {
  return {
    data: state.data.data,
  };
};



export default connect(mapState, null)(HeadingsResult);
