import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PieChart from "../../visual/PieChart";
import { fetchData } from "../../store/data";
import {
  Button,
  Icon,
  TableRow,Paper, TableHead, TableContainer, TableCell, TableBody, Table} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import history from '../../history';
import {Grid, Typography, Container, Box} from '@material-ui/core';

const navStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  backButton: {
    marginTop: '5%',
    color:'#0097a7'
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
  result: {
    fontWeight: 'bold',
    fontSize: '26px',
    color: '#3a7ca5',
    marginBottom: '3%',
  },
  resultList: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  table: {
    minWidth: 100,
  },
})

class ImagesResult extends Component {
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
          <Container fixed>
            <Box  position="absolute"  left="1%" zIndex="tooltip">
              <Button
                id="addBtn"
                type="moveback"
                startIcon={<Icon><ArrowBackIosIcon/></Icon>}
                className={classes.backButton}
                onClick={history.goBack}></Button>
            </Box>

            <Typography
               className={classes.header}>Results for images and 'alt' tags</Typography>

            <Grid container alignItems='flex-start' className={classes.graphContainer1}>

            <Grid item xs={6}>
              <PieChart data={data.imagesResult}/>
            </Grid>

            <Grid item xs={6}>
              <Typography className={classes.result}>The results of statistic:</Typography>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">

                  <TableHead>
                    <TableRow>
                    </TableRow>
                  </TableHead>

                  <TableBody className={classes.tableBody}>
                    <TableRow>
                      <TableCell>Total images: </TableCell>
                      <TableCell align="right">{data.imagesResult.allImages}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell> Images with valid atribute alt:{' '}</TableCell>
                      <TableCell align="right">{data.imagesResult.imagesWithAlt}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Test: </TableCell>
                      <TableCell align="right">{data.imagesResult.passed ? ' passed' : ' failed'}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Percent passed images: </TableCell>
                      <TableCell align="right">{data.imagesResult.percent}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Total Score: </TableCell>
                      <TableCell align="right">{data.score.percent}</TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>
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


const styledComponent = withStyles(navStyles, { withTheme: true })(ImagesResult);

export default connect(mapState, mapDispatch)(styledComponent);


/*
<Typography variant='overline' className={classes.resultList}>
                <ul>
                  <li>Total images: {data.imagesResult.allImages}</li>
                  <li>
                    Images with valid atribute alt:{' '}
                    {data.imagesResult.imagesWithAlt}
                  </li>
                  <li>Test: {data.imagesResult.passed ? ' passed' : ' failed'}</li>
                  <li>Percent passed images: {data.imagesResult.percent}</li>
                  <li>Total Score: {data.score.percent}</li>
                </ul>
              </Typography>


            */
