import React, { Component } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Card,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BethHS from "../visual/headshots/Beth.png";
import KseniaHS from "../visual/headshots/Ksenia.png";
import KhrystynaHS from "../visual/headshots/Khrystyna.png";
import ElijahHS from "../visual/headshots/Elijah.png";

const navStyles = (theme) => ({
  header: {
    marginTop: "8%",
    marginBottom: "2%",
    color: "#1D3557",
    fontWeight: "bold",
  },
  bio: {
    marginLeft: "20%",
    marginRight: "20%",
    marginBottom: "5%",
    padding: "5%",
  },
  headshots: {
    width: "80%",
    borderRadius: "10%",
  },
  name: {
    color: "black",
    fontSize: "18px",
  },
  linkedin: {
    color: "#616161",
    fontSize: "14px",
  },
});

class ContactUs extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <Container fixed>
        <Box>
          <Typography variant="h4" className={classes.header}>
            Our Team
          </Typography>
          <Card className={classes.bio}>
            <Grid container direction="row" justify="center" spacing={3}>
              <Grid item xs={6}>
                <img
                  src={KseniaHS}
                  className={classes.headshots}
                  alt="Ksenia's headshot"
                />
                <Typography gutterBottom className={classes.name}>
                  Ksenia Rozhdestvenskaya
                </Typography>
                <Typography className={classes.linkedin}>
                  <Link
                    href="https://www.linkedin.com/in/ksenia-ro/"
                    color="inherit"
                  >
                    Find Ksenia on Linkedin
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={BethHS}
                  className={classes.headshots}
                  alt="Beth's headshot"
                />
                <Typography gutterBottom className={classes.name}>
                  Elizabeth Howell
                </Typography>
                <Typography className={classes.linkedin}>
                  <Link
                    href="https://www.linkedin.com/in/e-m-howell/"
                    color="inherit"
                  >
                    Find Elizabeth on Linkedin
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={KhrystynaHS}
                  className={classes.headshots}
                  alt="Khrystyna's headshot"
                />

                <Typography gutterBottom className={classes.name}>
                  Khrystyna Tsiupa
                </Typography>
                <Typography className={classes.linkedin}>
                  <Link
                    href="https://www.linkedin.com/in/christidev/"
                    color="inherit"
                  >
                    Find Khrystyna on Linkedin
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <img
                  src={ElijahHS}
                  className={classes.headshots}
                  alt="Elijah's headshot"
                />

                <Typography gutterBottom className={classes.name}>
                  Elijah Meshnick
                </Typography>
                <Typography className={classes.linkedin}>
                  <Link
                    href="https://www.linkedin.com/in/elijah-meshnick/"
                    color="inherit"
                  >
                    Find Elijah on Linkedin
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box justifyContent="center"></Box>
      </Container>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(ContactUs);
