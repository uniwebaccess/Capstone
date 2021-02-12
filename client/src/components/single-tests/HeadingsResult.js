import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import BarChart from '../../visual/BarChart';
import { fetchData } from "../../store/data";
import {
  Button,
  Icon,
  TableRow, TableContainer, TableCell, TableBody, Table
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import history from '../../history';
import { Grid, Typography, Container, Box, Card, CardContent } from '@material-ui/core';

const navStyles = (theme) => ({

  backButton: {
    marginTop: '5%',
    color: '#0097a7'
  },
  header: {
    marginTop: '4%',
    marginBottom: '3%',
    color: '#1D3557',
    fontWeight: 'bold',
    fontSize: '28px',
  },
  graphContainer1: {

  },

  tableheader: {
    fontSize: '26px',
    color: '#1D3557',
    fontWeight: 'bold',
  },

  tableBody: {
    fontSize: '17px',
    //color: '#ffffff',
    //color: '#1D3557',
    //color:'#0097a7',
    color: '#2c6283',
    fontWeight: 'bold',
  },
  card: {
    marginTop: '10%',
    //background: '#fefae0',
    //background: '#0097a7'

  }
})

class HeadingsResult extends Component {

  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
    console.log("this is dtaa in headings", this.props.data.headingsResult.onlyOneH1.h1OnlyOne)
  }

  render() {

    const { status, url, data } = this.props;
    const classes = this.props.classes;
    return (
      <div>
        {status === 'loading' && <h1>Loading Results</h1>}
        {status === 'success' && url && data && (
          <Container >
            <Box position="absolute" left="1%" zIndex="tooltip">
              <Button
                type="moveback"
                startIcon={<Icon><ArrowBackIosIcon /></Icon>}
                className={classes.backButton}
                onClick={history.goBack}></Button>
            </Box>

            <Typography
              className={classes.header}>Results for Headings Test</Typography>

            <Grid container spacing={3} className={classes.graphContainer1}>

              <Grid item xs={12} md={7}>
                <Box> <BarChart data={data.headingsResult} /></Box>
              </Grid>

              <Grid item xs={12} md={5}>
                <Card className={classes.card}>
                  <CardContent>
                    <TableContainer className={classes.tableContainer} >
                      <Table aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell className={classes.tableBody}>Total sub-tests performed: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>3</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> Has only 1 H1 Tag : </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.onlyOneH1.h1OnlyOne}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> Pass this test (minimun 70%)  </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.passed ? 'passed' : 'failed'}</TableCell>
                          </TableRow>

                          {/* <TableRow>
                            <TableCell className={classes.tableBody}>: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.score.percent}</TableCell>
                          </TableRow> */}

                          <TableRow>
                            <TableCell className={classes.tableBody}>Total score for this Test: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.percent}</TableCell>
                          </TableRow>

                          {/*
                          <TableRow>
                            <TableCell className={classes.tableBody}>Total Score: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.score.percent}</TableCell>
                          </TableRow> */}

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


const styledComponent = withStyles(navStyles, { withTheme: true })(HeadingsResult);

export default connect(mapState, mapDispatch)(styledComponent);



