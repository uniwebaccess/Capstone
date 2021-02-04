import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Container, Breadcrumbs, Link, Typography, Menu} from '@material-ui/core';
import SearchBar from "./Input";
import Box from '@material-ui/core/Box';


export default class Home extends Component {
  render() {
    return (
      <Container fixed>
          <p>https://en.wikipedia.org/wiki/Penguin</p>
        <Box><SearchBar /></Box>
      </Container>
    );
  }
}
