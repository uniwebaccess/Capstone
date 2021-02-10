import React, { Component } from 'react';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const navStyles = (theme) => ({
  header: {
    marginTop: '8%',
    marginBottom: '5%',
    color: '#1D3557',
    fontWeight: 'bold',
  },
})


class ContactUs extends Component {
  render() {
   const classes = this.props.classes;
    return (
      <Container fixed>
        <Box>

        <Typography  variant="h4" className={classes.header}>
          Our Contacts
        </Typography>
        <Typography  gutterBottom>
              So you need to send those files to Heroku. For the purposes of
              this workshop, and in the future with Boilermaker,
        </Typography>
        <Typography  gutterBottom>
              So you need to send those files to Heroku. For the purposes of
              this workshop, and in the future with Boilermaker,
        </Typography>
        <Typography  gutterBottom>
              So you need to send those files to Heroku. For the purposes of
              this workshop, and in the future with Boilermaker,
        </Typography>
        </Box>
        <Typography
          fontWeight="fontWeightBold"
          m={1}
         // className={classes.header}
        >
          Add your URL Link for scanning web page
        </Typography>
        <Box justifyContent="center">

        </Box>
      </Container>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(ContactUs);
