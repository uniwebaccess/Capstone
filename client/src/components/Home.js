import React, { Component } from 'react';
import { Container, Typography, Box, Grid } from "@material-ui/core";
import SearchBar from './Input';
import { withStyles } from '@material-ui/core/styles';
import HomeAnimation from './../visual/animation/HomeAnimation';

const navStyles = (theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },
  header: {
    marginTop: "30px",
    marginBottom: "10px",
    color: "#bdbdbd",
    fontFamily: "Roboto Slab serif",
    fontSize: 20,
  },

  paragraph: {
    color: "#616161",
    fontFamily: "Heebo sans-serif",
    fontSize: 20,
    marginTop: "40px",
    marginBottom: "40px",
  },
});
class Home extends Component {

  render() {
    const classes = this.props.classes;
    return (
      <Container fixed>
        <Box>
          <img alt="uniweb-logo" src="/logo-uniweb.png" width="21%" />
        </Box>
        <Typography
          fontWeight="fontWeightBold"
          m={1}
          className={classes.header}
        >
          Add your URL Link for scanning web page
        </Typography>
        <Box justifyContent="center">
          <SearchBar />
        </Box>
        <Grid container direction="row" >
          <Grid item xs={5}>
            <Typography className={classes.paragraph} gutterBottom width="50%">
              Welcome to Uniweb-Access! Our tool tests websites against
              standards of web accessibility. Simply input a url above to get
              started. You'll be taken to another page where you can explore
              visualizations that demonstrates how your site measures up, and
              you can learn more about some of the most important qualities of a
              website that anyone and everyone can use. Let's work together to
              create more inclusive world!
                At Uniweb-Access, we believe that accommodating disabled users
              should be a priority for every website. In the United States,
              there are approximately 57 million people with disabilities.
              That's nearly one in every five people. Web accessibility is
              legally required under the protection of the Americans with
              Disabilities act, and there were 11,053 federal lawsuits filed on
              this basis in 2019 alone.
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Box width="90%"><HomeAnimation/></Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(Home);
