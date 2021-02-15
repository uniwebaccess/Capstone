import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PieChart from "../../visual/PieChart";
import { fetchData } from "../../store/data";
import {
  Button,
  Icon,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { withStyles } from "@material-ui/core/styles";
import history from "../../history";
import {
  Grid,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
} from "@material-ui/core";
import ImgPieChart from "../../visual/ImgPieChart";
import ImgBarChart from "../../visual/ImgBarChart";
import CheckboxX from "../../visual/animation/CheckboxX";
import CheckboxCheck from "../../visual/animation/CheckboxCheck";
import FrictionGroup from "../../visual/animation/Arrow";
import { failingSuggestions, passingFeedback } from "../../constants";

const navStyles = (theme) => ({
  backButton: {
    marginTop: "5%",
    color: "#0097a7",
  },
  header: {
    marginTop: "2%",
    color: "#1D3557",
    fontWeight: "bold",
    fontSize: "28px",
  },
  graphContainer1: {
    marginTop: "4%",
  },

  tableheader: {
    fontSize: "26px",
    color: "#1D3557",
    fontWeight: "bold",
  },

  tableBody: {
    fontSize: "17px",
    //color: '#ffffff',
    //color: '#1D3557',
    //color:'#0097a7',
    color: "#2c6283",
    fontWeight: "bold",
  },
  card: {
    marginBottom: "5%",
    marginBottom: "5%",
    //background: '#fefae0',
    //background: '#0097a7'
  },

  green: {
    color: "green",
  },
  red: { color: "red" },
  description: {
    color: "#343a40",
  },

  checkmarkContainer: {
    overflow: "hidden",
    width: "30%",
    margin: "auto",
    marginTop: "6%",
  },

  checkmark: {
    position: "relative",
    marginTop: "-3em",
  },
  passing: {
    color: "#1D3557",
  },
  piechart: {
    marginTop: "1.2%",
  },

  barchart: {
    marginTop: "0.5%",
  },
});

class ImagesResult extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  pieData() {
    let data = this.props.data.imagesResult;
    return [
      { title: "Passing pages", value: 453, color: "#2c6283" },
      { title: "Failing pages", value: 123, color: "#fdc500" },
    ];
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
          <Container fixed maxWidth="lg">
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

            <Grid container spacing={1} className={classes.graphContainer1}>
              <Grid item xs={12} md={6}>
                <Typography className={classes.header}>
                  {data.imagesResult.passed ? (
                    <b>
                      Images Category{" "}
                      <span className={classes.green}>Passed</span>
                    </b>
                  ) : (
                    <b>
                      Images Category{" "}
                      <span className={classes.red}>Failed</span>
                    </b>
                  )}{" "}
                  <br />
                </Typography>
                <Typography>
                  <br />
                  All images should have an <i>alt</i> attribute providing
                  textual representation of the picture. Images that are
                  decorative should have an explicit empty alt value. You need
                  to have less than 25% of images without alt attribute to pass.
                </Typography>
                <div className={classes.checkmarkContainer}>
                  <Box className={classes.checkmark}>
                    {data.imagesResult.passed ? (
                      <CheckboxCheck delay="one" />
                    ) : (
                      <CheckboxX delay="one" />
                    )}
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6} className={classes.piechart}>
                <PieChart data={data.imagesResult} />
              </Grid>
            </Grid>
            <Box mt={5}>
              <Grid container>
                <Grid item xs={12}>
                  <Box mb={2}>
                    <Typography className={classes.header}>
                      {" "}
                      Global statistics
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} className={classes.barchart}>
                  <ImgBarChart data={data.imagesResult} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box px={10}>
                    <Typography variant="h5" className={classes.passing}>
                      <b>Passing pages</b>
                    </Typography>
                    <ImgPieChart data={this.pieData()} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={12}>
                  <Card className={classes.card}>
                    <CardContent>
                      <TableContainer className={classes.tableContainer}>
                        <Table aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Total images in a page:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.imagesResult.allImages}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                {" "}
                                Images with valid atribute 'alt':{" "}
                                <Typography
                                  variant="body1"
                                  className={classes.description}
                                >
                                  <br />
                                  {data.imagesResult.imagesWithAlt
                                    ? passingFeedback.alt
                                    : failingSuggestions.alt}
                                </Typography>
                              </TableCell>

                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.imagesResult.imagesWithAlt}&nbsp;/
                                {data.imagesResult.passed ? "Passed" : "Failed"}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Decorative images:
                                <Typography
                                  variant="body1"
                                  className={classes.description}
                                >
                                  <br />
                                  {passingFeedback.emptyAlt}
                                </Typography>
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.imagesResult.withEmptyAlt}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Passed images:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.imagesResult.percent}%
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Test:{" "}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.imagesResult.passed ? "passed" : "failed"}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
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
  ImagesResult
);

export default connect(mapState, mapDispatch)(styledComponent);
