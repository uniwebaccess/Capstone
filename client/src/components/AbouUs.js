
import React, { Component } from 'react';
import { Container, Typography, Box} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const navStyles = (theme) => ({
  header: {
    marginTop: '8%',
    marginBottom: '5%',
    color: '#1D3557',
    fontWeight: 'bold',
  },
  paragraph: {
    color: '#616161',
    fontSize: '18px'

  }
})


class AboutUs extends Component {
  render() {
   const classes = this.props.classes;
    return (
      <Container fixed>
        <Box>

        <Typography className={classes.header} variant="h4">
            About our web application
        </Typography>
        <Typography  gutterBottom className={classes.paragraph}>
              So you need to send those files to Heroku. For the purposes of
              this workshop, and in the future with Boilermaker, you should use
              npm run deploy. This script creates a deploy branch, runs webpack,
              adds these files to the branch, commits these changes, deploys
              them to Heroku by git push heroku deploy:master and finally
              deletes the deploy branch. For a closer look at what this script
              is doing and how it works, see the seventh Boilermaker review
              video.
              So you need to send those files to Heroku. For the purposes of
              this workshop, and in the future with Boilermaker, you should use
              npm run deploy. This script creates a deploy branch, runs webpack,
              adds these files to the branch, commits these changes, deploys
              them to Heroku by git push heroku deploy:master and finally
              deletes the deploy branch. For a closer look at what this script
              is doing and how it works, see the seventh Boilermaker review
              video.
            </Typography>
        </Box>
      </Container>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(AboutUs);
