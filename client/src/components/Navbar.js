import React, { Component } from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';import Button from '@material-ui/core/Button';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SvgIcon from '@material-ui/core/SvgIcon';

const navStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Potta One cursive'
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {

    float:'right'
  }
});

class NavBar extends Component {
  constructor(){
    super()
  }
  render() {
    // const handleProfileMenuOpen = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    const classes = this.props.classes;
    const menuId = 'primary-mail';
    return (
      <div className={classes.root}>
        <AppBar color='primary' position="static">
          <Toolbar>
            <IconButton href="/" edge="start" className={classes.homeButton} color="inherit" aria-label="home">
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>

            </IconButton>
             <Typography  variant="h6" className={classes.title}>
            </Typography>

            <div className={classes.toolbarButtons}>

            <IconButton
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              color="inherit">
              <AccountCircle />
            </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(navStyles, { withTheme: true })(NavBar);
