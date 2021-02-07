import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {Container, Link, Typography, Menu, Box, Grid} from '@material-ui/core';
import SearchBar from "./Input";
import {makeStyles, withStyles} from '@material-ui/core/styles';


const navStyles = theme =>({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  header: {
    marginTop: '30px',
    marginBottom: '10px',
    color: '#bdbdbd',
    fontFamily: 'Roboto Slab serif',
    fontSize: 20,
  },

  paragraph: {
    color: '#616161',
    fontFamily:'Heebo sans-serif',
    fontSize: 20,
    marginTop: '40px',
    marginBottom: '40px'
  }
});
class Home extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Container fixed>
        <Box>
          <img src= '/logo-uniweb.png' width='21%'/>
        </Box>
        <Typography  fontWeight="fontWeightBold" m={1} className={classes.header}>
          Add your URL Link for scanning web page
        </Typography>
        <Box justifyContent="center"><SearchBar /></Box>
        <Grid container direction="row" spacing={6}>
          <Grid item xs={6}>
            <Typography className={classes.paragraph} gutterBottom>
              So you need to send those files to Heroku. For the purposes of this workshop, and in the future with Boilermaker, you should use npm run deploy. This script creates a deploy branch, runs webpack, adds these files to the branch, commits these changes, deploys them to Heroku by git push heroku deploy:master and finally deletes the deploy branch. For a closer look at what this script is doing and how it works, see the seventh Boilermaker review video.
              </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.paragraph} gutterBottom>
              So you need to send those files to Heroku. For the purposes of this workshop, and in the future with Boilermaker, you should use npm run deploy. This script creates a deploy branch, runs webpack, adds these files to the branch, commits these changes, deploys them to Heroku by git push heroku deploy:master and finally deletes the deploy branch. For a closer look at what this script is doing and how it works, see the seventh Boilermaker review video.
              </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}


export default withStyles(navStyles, { withTheme: true })(Home);
