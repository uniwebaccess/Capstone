import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import BarChartTotal from '../../visual/HeadingsBarChartTotal'
import HeadingsBarChart from '../../visual/HeadingsBarChart'
import { fetchData } from "../../store/data";

import CheckboxCheck from '../../visual/animation/CheckboxCheck'
import CheckboxX from '../../visual/animation/CheckboxX'
import FrictionGroup from '../../visual/animation/Arrow'


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
    marginBottom: '5%',
    //background: '#fefae0',
    //background: '#0097a7'

  }
})

class HeadingsResult extends Component {

  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);

  }

  render() {

    const { status, url, data, average } = this.props;
    const classes = this.props.classes;
    return (
      <div>
        {status === 'loading' && (
          <div className="single-page-loading">
            <FrictionGroup />
          </div>
        )}
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
              className={classes.header}>Headings Test</Typography>

            <Grid container spacing={4} className={classes.graphContainer1}>

              <Grid item xs={12} md={6}>
                <Box>
                  <HeadingsBarChart data={data.headingsResult} average={average} />
                </Box>

              </Grid>

              <Grid item xs={12} md={6}>

                <Box>
                  <BarChartTotal data={data.headingsResult} average={average} />
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  className={classes.checkboxes}
                  display="flex"
                  flexDirection="row"
                >
                  <div>
                    {(data.headingsResult.h1OnlyOne.h1OnlyOne === "Passed") ? (
                      <CheckboxCheck delay="one" />
                    ) : (
                        <CheckboxX delay="one" />
                      )}
                    <Typography className="checkbox-label">
                      H1 Tag
                    </Typography>
                  </div>
                  <div>
                    {(data.headingsResult.logicSequence.logicSequence === "Passed") ? (
                      <CheckboxCheck delay="two" />
                    ) : (
                        <CheckboxX delay="two" />
                      )}
                    <Typography className="checkbox-label">
                      Logic Sequence
                    </Typography>
                  </div>
                  <div>
                    {(data.headingsResult.hTagSkip.hTagSkip === "Passed") ? (
                      <CheckboxCheck delay="three" />
                    ) : (
                        <CheckboxX delay="three" />
                      )}
                    <Typography className="checkbox-label">
                      Skip H Tag
                    </Typography>
                  </div>

                  <div>
                    {data.headingsResult.passed ? (
                      <CheckboxCheck delay="four" />
                    ) : (
                        <CheckboxX delay="four" />
                      )}
                    <Typography className="checkbox-label">Overall</Typography>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={12} md={12}>
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
                            <TableCell className={classes.tableBody}> App follows Logic Sequence for H tags : </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.logicSequence.logicSequence}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> Has only 1 H1 Tag : </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.h1OnlyOne.h1OnlyOne}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> Don't skip order of H Tags : </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.hTagSkip.hTagSkip}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> Pass this test (minimun 70%)  </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.passed ? 'Passed' : 'Failed'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.tableBody}>Total score for this Test: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.headingsResult.percent}%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        )
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    data: state.data.data,
    average: state.data.avgData,
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



