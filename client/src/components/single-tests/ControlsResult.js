import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../store/data';

import {
  HrefChart,
  TargetChart,
  ButtonsChart,
  ControlsScoreChart,
} from '../../visual/ControlsChart';
import {
  Button,
  Icon,
  TableRow,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import history from '../../history';
import {
  Grid,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const navStyles = (theme) => ({
  backButton: {
    marginTop: '5%',
    color: '#0097a7',
  },
  header: {
    marginTop: '4%',
    marginBottom: '3%',
    color: '#1D3557',
    fontWeight: 'bold',
    fontSize: '28px',
  },
  graphContainer1: {},

  tableheader: {
    fontSize: '26px',
    color: '#1D3557',
    fontWeight: 'bold',
  },

  tableBody: {
    fontSize: '17px',
    color: '#2c6283',
    fontWeight: 'bold',
  },
  card: {
    marginTop: '10%',
  },
});

class ControlsResult extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }
  render() {
    const { status, url, data } = this.props;
    const classes = this.props.classes;

    return (
      <div>
        {status === 'loading' && <h1>Loading Results</h1>}
        {status === 'success' && url && data && (
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
                Results for Controls (Links & Buttons)
              </Typography>

              <Grid container spacing={3} className={classes.graphContainer1}>
                <Grid item xs={12} md={7}>
                  <Box>
                    <HrefChart data={data} />
                  </Box>
                  <Box>
                    <TargetChart data={data} />
                  </Box>
                  <Box>
                    <ButtonsChart data={data} />
                  </Box>
                  <Box>
                    <ControlsScoreChart data={data} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Card className={classes.card}>
                    <CardContent>
                      <TableContainer className={classes.tableContainer}>
                        <Table aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Total links:{' '}
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
                                {' '}
                                Links with href attribute:{' '}
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
                                Links that open in a new tab or window:{' '}
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
                                Total buttons:{' '}
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
                                Buttons that include a type attribute:{' '}
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
                                Score for this Category:{' '}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.percent}
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Total Score:{' '}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.score.percent}
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
