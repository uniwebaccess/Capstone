import React, { Component } from "react";
import { Container, Typography, Box, Card, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const navStyles = (theme) => ({
  header: {
    marginTop: "8%",
    marginBottom: "5%",
    color: "#1D3557",
    fontWeight: "bold",
  },
  card: {
    marginRight: "10%",
    marginLeft: "10%",
    padding: "4%",
    paddingLeft: "8%",
    paddingLeft: "8%",
  },
  paragraph: {
    textAlign: "left",
    color: "#616161",
    fontSize: "18px",
  },
});

class About extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Container fixed>
        <Box>
          <Typography className={classes.header} variant="h4">
            About Our App
          </Typography>
          <Card className={classes.card}>
            <Typography gutterBottom className={classes.paragraph}>
              Uniweb-Access was created by a group of students at the Grace
              Hopper program at Fullstack Academy.
              <br />
              <br />
              The tests run on each scanned url are based on the web
              accessibility standards outlined by the Worldwide Web Consortium.
              <br />
              <br />
              Learn more about web accessibility through{" "}
              <Link
                href="https://www.a11yproject.com/"
                style={{ fontWeight: "bold" }}
              >
                the a11y project
              </Link>
              .
            </Typography>
          </Card>
        </Box>
      </Container>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(About);
