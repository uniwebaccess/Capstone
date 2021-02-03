import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from "./Input";

export default class Home extends Component {
  render() {
    return (
      <div>
      <Button color="primary" variant="contained">Primary</Button>
      <Input />
      </div>
    );
  }
}
