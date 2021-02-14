import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import StructuralPieChart from '../../visual/StructuralPieChart'
import StructuralBarChart from '../../visual/StructuralBarChart'
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
    marginBottom: '5%',
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
    marginTop: '5%',
    marginBottom: '5%'
    //background: '#fefae0',
    //background: '#0097a7'

  },
  checkboxes: {

  }
})

class StructuralResult extends Component {

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
              className={classes.header}>Structural HTML Test</Typography>

            <Grid container spacing={4} className={classes.graphContainer1}>

              <Grid item xs={12} md={6}>
                <Box>
                  <StructuralBarChart data={data.structuralResult} average={average} />

                </Box>

              </Grid>

              <Grid item xs={12} md={6}>
                <Box>
                  <StructuralPieChart data={data.structuralResult} average={average} />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  className={classes.checkboxes}
                  display="flex"
                  flexDirection="row"
                  mx={45}>
                  <div>
                    {data.structuralResult.sectionTag.sectionTag ? (
                      <CheckboxCheck delay="one" />
                    ) : (
                        <CheckboxX delay="one" />
                      )}
                    <Typography className="checkbox-label">
                      Section Tag
                    </Typography>
                  </div>
                  <div>
                    {data.structuralResult.headerTag.headerTag ? (
                      <CheckboxCheck delay="two" />
                    ) : (
                        <CheckboxX delay="two" />
                      )}
                    <Typography className="checkbox-label">
                      Header Tag
                    </Typography>
                  </div>
                  <div>
                    {data.structuralResult.inputAndLabel.inputAndLabel ? (
                      <CheckboxCheck delay="three" />
                    ) : (
                        <CheckboxX delay="three" />
                      )}
                    <Typography className="checkbox-label">
                      Input and Label Tags
                    </Typography>
                  </div>

                  <div>
                    {data.structuralResult.passed ? (
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
                            <TableCell className={classes.tableBody}> HTML includes Section Tag: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.structuralResult.sectionTag.sectionTag ? 'Passed' : 'Failed'}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> HTML includes Header Tag: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.structuralResult.headerTag.headerTag ? 'Passed' : 'Failed'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.tableBody}> Forms with Input Tags contain Matching Label Tags </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.structuralResult.inputAndLabel.inputAndLabel ? 'Passed' : 'Failed'}</TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell className={classes.tableBody}> Pass this test (minimun 70%)  </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.structuralResult.passed ? 'Passed' : 'Failed'}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className={classes.tableBody}>Total score for this Test: </TableCell>
                            <TableCell align="right" className={classes.tableBody}>{data.structuralResult.percent}%</TableCell>
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


const styledComponent = withStyles(navStyles, { withTheme: true })(StructuralResult);

export default connect(mapState, mapDispatch)(styledComponent);
