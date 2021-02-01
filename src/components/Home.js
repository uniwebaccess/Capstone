import React, { Component } from 'react'
import Button from '@material-ui/core/Button';


export default class Home extends Component {
  render() {

    return (
      <div>
      <Button color="primary" variant="contained">Primary</Button>
      <Button color="secondary" >Secondary</Button>
        <input placeholder="URL here"></input>
      </div>
    )
  }
}

