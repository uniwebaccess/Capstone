import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData, selectField } from "../store/data";
import { checkerDescriptions } from "../constants";
import TestFieldDescription from "./single-tests/TestFieldDescription";
import MainResultsChart from "../visual/MainResultsChart";
import Divider from "@material-ui/core/Divider";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const navStyles = (theme) => ({
  root: {
    marginTop: "20px",
    alignItems: "center",
  },

  header: {
    text: "bold",
    variant: "outlined",
    color: "#1D3557",
    marginTop: "20px",
  },

  paragraph: {
    fontSize: "5px",
  },

  list: {
    color: "#3a7ca5",
    fontWeight: "bold",
    fontSize: "20px",
  },
  link: {
    color: "#d90429",
    fontSize: "16px",
  },
});
/*
 * Page to render results of tests
 */
//Through the route /testresults/:urlKey
class TestResult extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ selected: evt.target.value });
    this.props.selectField(evt.target.value);
  }

  render() {
    const classes = this.props.classes;
    const { status, url, data, error, avgData } = this.props;
    const urlKey = this.props.match.params.urlKey;
    return (
      <div>
        {status === "loading" && <h1>Loading Results</h1>}
        {status === "success" && url && data && avgData && (
          <Container fixed>
            <Typography
              variant="h4"
              fontWeight="fontWeightBold"
              m={1}
              className={classes.header}
            >
              <br />
              <b>Showing results for website: </b>
              <Typography variant="body1">
                <span className={classes.link}>{url}</span>
              </Typography>
            </Typography>

            <MainResultsChart
              newScan={data}
              averages={avgData}
              selectField={this.props.selectField}
            />
            <TestFieldDescription descriptions={checkerDescriptions} />
            <Grid
              container
              direction="row"
              justify="center"
              className={classes.root}
            >
              <Grid item xs={12} lg={8}>
                <Box
                  borderRadius="borderRadius"
                  borderColor="#e0e0e0"
                  bgcolor="background.paper"
                  border={1}
                >
                  <List component="nav" aria-label="list of checking">
                    <ListItem
                      button
                      component={RouterLink}
                      to={"/imagesresult/" + urlKey}
                    >
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Checking images. Images are a very common part of most websites. Help make sure they can be enjoyed by all."
                      />
                    </ListItem>
                    <Divider />
                    <ListItem
                      button
                      component={RouterLink}
                      to={"/headingresult/" + urlKey}
                    >
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Checking headings. Headings are incredibly important for helping people who use assistive technology to understand the meaning of a page or view."
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Checking controls. Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action."
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Percent passed images: "
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Checking tables. Tables are a structured set of data that help people understand the relationships between different types of information."
                      />
                    </ListItem>
                    {/* <Divider />
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Test: "
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        disableTypography
                        className={classes.list}
                        primary="Some other test..."
                      />
                    </ListItem> */}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
        {status === "error" && (
          <div>
            <h1>There was an error</h1>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    //data = results from most recent scan
    data: state.data.data,
    //avgData = average results object (all previous scans)
    avgData: state.data.avgData,
    url: state.data.url,
    status: state.status,
    error: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
    selectField: (selectedField) => dispatch(selectField(selectedField)),
  };
};

const styledComponent = withStyles(navStyles, { withTheme: true })(TestResult);

export default connect(mapState, mapDispatch)(styledComponent);
