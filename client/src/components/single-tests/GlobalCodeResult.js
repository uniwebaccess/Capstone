import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
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
import FrictionGroup from "../../visual/animation/Arrow";
import CheckboxX from "../../visual/animation/CheckboxX";
import CheckboxCheck from "../../visual/animation/CheckboxCheck";

import { failingSuggestions, passingFeedback } from '../../constants';

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
  graphContainer1: {},
  checkboxes: {
    marginTop: "10%",
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
    marginTop: "10%",
    marginBottom: '5%',
    //background: '#fefae0',
    //background: '#0097a7'
  },
  green: {
    color: 'green'
  },
  red: { color: "red" },
  description: {
    color: '#343a40'
  }
});

class GlobalCodeResult extends Component {
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
              {data.globalCodeResult.passed ? <b>Global Code Category <span className={classes.green}>Passed</span></b> : <b>Global Code Category <span className={classes.red}>Failed</span></b>} <br />
            </Typography>

            <Grid container spacing={3} className={classes.graphContainer1}>
              <Grid item xs={12} >
                <Box
                  className={classes.checkboxes}
                  display="flex"
                  flexDirection="row"
                >
                  <div>
                    {data.globalCodeResult.autofocusAttr ? (
                      <CheckboxCheck delay="one" />
                    ) : (
                        <CheckboxX delay="one" />
                      )}
                    <Typography className="checkbox-label">
                      Autofocus
                    </Typography>
                  </div>
                  <div>
                    {data.globalCodeResult.useListElement ? (
                      <CheckboxCheck delay="two" />
                    ) : (
                        <CheckboxX delay="two" />
                      )}
                    <Typography className="checkbox-label">
                      List Element
                    </Typography>
                  </div>
                  <div>
                    {data.globalCodeResult.langAttr ? (
                      <CheckboxCheck delay="three" />
                    ) : (
                        <CheckboxX delay="three" />
                      )}
                    <Typography className="checkbox-label">
                      Language Attribute
                    </Typography>
                  </div>
                  <div>
                    {data.globalCodeResult.isMainTag.mainTag ? (
                      <CheckboxCheck delay="four" />
                    ) : (
                        <CheckboxX delay="four" />
                      )}
                    <Typography className="checkbox-label">Main Tag</Typography>
                  </div>
                  <div>
                    {data.globalCodeResult.passed ? (
                      <CheckboxCheck delay="five" />
                    ) : (
                        <CheckboxX delay="five" />
                      )}
                    <Typography className="checkbox-label">Overall</Typography>
                  </div>
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
                              Auto Focus:{" "}
                              <Typography variant="body1" className={classes.description}>
                                <br />
                                {data.globalCodeResult.autofocusAttr ? (passingFeedback.sectionTag) :
                                  (failingSuggestions.sectionTag
                                  )}
                              </Typography>
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableBody}
                            >
                              {data.globalCodeResult.autofocusAttr
                                ? "Passed"
                                : "Failed"}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.tableBody}>
                              List Elements:{" "}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableBody}
                            >
                              {data.globalCodeResult.useListElement
                                ? "Passed"
                                : "Failed"}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.tableBody}>
                              {" "}
                              Language:{" "}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableBody}
                            >
                              {data.globalCodeResult.langAttr
                                ? "Passed"
                                : "Failed"}
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}>
                              Main Tag:{" "}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableBody}
                            >
                              {data.globalCodeResult.isMainTag.mainTag
                                ? "Passed"
                                : "Failed"}
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}>
                              Overall:{" "}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableBody}
                            >
                              {data.globalCodeResult.passed
                                ? "Passed"
                                : "Failed"}
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}>
                              Overall Score:{" "}
                            </TableCell>
                            <TableCell
                              align="right"
                              className={classes.tableBody}
                            >
                              {data.globalCodeResult.percent}%
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
  GlobalCodeResult
);

export default connect(mapState, mapDispatch)(styledComponent);
