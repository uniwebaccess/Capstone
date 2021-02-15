import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../store/data";
import { failingSuggestions, passingFeedback } from "../../constants";
import {
  HrefChart,
  TargetChart,
  ButtonsChart,
  ControlsScoreChart,
} from "../../visual/ControlsChart";

import {
  Button,
  Icon,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Grid,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import FrictionGroup from "../../visual/animation/Arrow";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import history from "../../history";
import { withStyles } from "@material-ui/core/styles";

const navStyles = (theme) => ({
  backButton: {
    marginTop: "5%",
    color: "#0097a7",
  },
  header: {
    marginTop: "4%",
    marginBottom: "3%",
    color: "#1D3557",
    fontWeight: "bold",
    fontSize: "28px",
  },
  graphContainer1: {
    alignItems: "center",
    align: "center",
    justifyContent: "center",
    marginTop: "5%",
  },

  tableheader: {
    fontSize: "26px",
    color: "#1D3557",
    fontWeight: "bold",
  },

  tableBody: {
    fontSize: "17px",
    color: "#2c6283",
    fontWeight: "bold",
  },
  card: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  messageCell: {
    align: "left",
  },
  green: {
    color: "green",
  },
  red: { color: "red" },
  description: {
    color: "#343a40",
  },
});

class ControlsResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  render() {
    const { status, url, data } = this.props;
    const classes = this.props.classes;

    return (
      <div>
        {status === "loading" && (
          <div className="single-page-loading">
            <FrictionGroup />
          </div>
        )}
        {status === "success" && url && data && (
          <div>
            <Container>
              <Box position="absolute" left="1%" zIndex="tooltip">
                <Button
                  type="moveback"
                  startIcon={
                    <Icon>
                      <ArrowBackIosIcon />
                    </Icon>
                  }
                  className={classes.backButton}
                  onClick={history.goBack}
                ></Button>
              </Box>

              <Typography className={classes.header}>
                <br />
                {data.controlsResult.passed ? (
                  <b>
                    Controls (Links & Buttons) Category{" "}
                    <span className={classes.green}>Passed</span>
                  </b>
                ) : (
                  <b>
                    Controls (Links & Buttons) Category{" "}
                    <span className={classes.red}>Failed</span>
                  </b>
                )}{" "}
                <br />
              </Typography>

              <Grid
                container
                item={true}
                className={classes.graphContainer1}
                xs={12}
              >
                <Grid container item={true} xs={12}>
                  <Grid item xs={3}>
                    <HrefChart data={data} />
                  </Grid>
                  <Grid item xs={3}>
                    <TargetChart delay="one" data={data} />
                  </Grid>
                  <Grid item xs={3}>
                    <ButtonsChart delay="two" data={data} />
                  </Grid>
                  <Grid item xs={3}>
                    <ControlsScoreChart delay="three" data={data} />
                  </Grid>
                </Grid>

                <Grid item xs={8} align="center">
                  <Card className={classes.card} align="center">
                    <CardContent align="center">
                      <TableContainer className={classes.tableContainer}>
                        <Table aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Total links:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.allLinks}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                {" "}
                                Links with href attribute:{" "}
                                <Typography
                                  variant="body1"
                                  className={classes.description}
                                >
                                  <br />

                                  {data.controlsResult.hrefPassed
                                    ? passingFeedback.hrefAttr
                                    : failingSuggestions.hrefAttr}
                                </Typography>
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.linksWithHref}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Links that open in a new tab or window:{" "}
                                <Typography
                                  variant="body1"
                                  className={classes.description}
                                >
                                  <br />
                                  {Math.floor(
                                    (data.controlsResult.linksToNewTab /
                                      data.controlsResult.allLinks) *
                                      100
                                  ) < 30
                                    ? passingFeedback.targetAttr
                                    : failingSuggestions.targetAttr}
                                </Typography>
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.linksToNewTab}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Total buttons:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.allButtons}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Buttons that include a type attribute:
                                <Typography
                                  variant="body1"
                                  className={classes.description}
                                >
                                  <br />
                                  {data.controlsResult.buttonsPassed
                                    ? passingFeedback.buttons
                                    : failingSuggestions.buttons}
                                </Typography>
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.buttonsWithType}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Total score for this test:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.percent.toFixed(1)}%
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                {" "}
                                Overall:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.passed
                                  ? "Passed"
                                  : "Failed"}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    data: state.data.data,
    url: state.data.url,
    status: state.status,
    error: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
  };
};

const styledComponent = withStyles(navStyles, { withTheme: true })(
  ControlsResult
);

export default connect(mapState, mapDispatch)(styledComponent);
