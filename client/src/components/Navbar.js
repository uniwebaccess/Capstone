import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";

const navStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Potta One cursive",
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  toolbarButtons: {
    float: "right",
  },
  email: {
    fontSize: "14px",
  },
});

class NavBar extends Component {
  render() {
    // const handleProfileMenuOpen = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    const classes = this.props.classes;
    const menuId = "primary-mail";
    return (
      <div className={classes.root}>
        <AppBar position='sticky' color="primary" position="static">
          <Toolbar>
            <IconButton
              href="/"
              edge="start"
              className={classes.homeButton}
              color="inherit"
              aria-label="home"
            >
              <img alt="uniweb-logo" src="/logo-uniweb-navbar.png" />
            </IconButton>

            <Typography variant="h6" className={classes.title}></Typography>

            <div className={classes.toolbarButtons}>
              <Button component={RouterLink} to={"/about"} color="inherit">
                About
              </Button>

              <Button component={RouterLink} to={"/contactus"} color="inherit">
                Contact Us
              </Button>
              {/*
              <IconButton
                aria-label="send data to email"
                aria-controls="email"
                aria-haspopup="true"
                //onClick={handleProfileMenuOpen}
                color="inherit">
                <Typography className={classes.email}></Typography>
                <MailIcon />
              </IconButton>
              */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(NavBar);
