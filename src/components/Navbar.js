import React, { Component } from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';

const navStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
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
    const menuId = 'primary-search-account-menu';
    return (
      <div className={classes.root}>
        <AppBar color='primary' position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography  variant="h6" className={classes.title}>
              My creative logo can be found here
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
