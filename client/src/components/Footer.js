import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const navStyles = (theme) => ({
  footer: {
    padding: theme.spacing(2, 1),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[200],

  },
  copyright:{
    color:'#8f8f8f'
  }
});

class Footer extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <footer className={classes.footer}>
        <Box position='sticky'>
          <Typography variant="body1"  className={classes.copyright}>
          Copyright © 2021 Uniweb-Access Inc. United States
          </Typography>
        </Box>
      </footer>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(Footer);
