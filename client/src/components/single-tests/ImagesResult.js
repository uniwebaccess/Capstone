import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import PieChart from "../../visual/PieChart";
import { fetchData } from "../../store/data";
import {
  Button,
  Icon,
  TableRow, TableContainer, TableCell, TableBody, Table} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import history from '../../history';
import {Grid, Typography, Container, Box, Card, CardContent} from '@material-ui/core';
import ImgPieChart from '../../visual/ImgPieChart';
import ImgBarChart from '../../visual/ImgBarChart';
import CheckboxX from '../../visual/animation/CheckboxX'
import CheckboxCheck from '../../visual/animation/CheckboxCheck';

const navStyles = (theme) => ({

  backButton: {
    marginTop: '5%',
    color:'#0097a7'
  },
  header: {
    marginTop: '4%',
    color: '#1D3557',
    fontWeight: 'bold',
    fontSize: '28px',
  },
  graphContainer1: {
    marginTop: '4%',
  },

  tableheader:{
    fontSize: '26px',
    color: '#1D3557',
    fontWeight: 'bold',
  },

  tableBody:{
    fontSize: '17px',
    //color: '#ffffff',
    //color: '#1D3557',
    //color:'#0097a7',
    color: '#2c6283',
    fontWeight: 'bold',
  },
  card: {

    marginBottom: '5%',
    //background: '#fefae0',
    //background: '#0097a7'
  },


})

class ImagesResult extends Component {
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  pieData() {
    let data = this.props.data.imagesResult;
    return [
      { title: 'Images without `alt`', value: data.noAlt, color: '#2c6283'},
      { title: 'Images with `alt`' , value: data.imagesWithAlt, color: '#C13C37' },
      { title: 'Images wit empty `alt`', value: data.withEmptyAlt, color: '#fdc500' },
    ]
  }

  render() {
    const { status, url, data } = this.props;
    const classes = this.props.classes;
    return (
      <div>
        {status === 'loading' && <h1>Loading Results</h1>}
        {status === 'success' && url && data && (
          <Container >
            <Box  position="absolute"  left="1%" zIndex="tooltip">
              <Button
                type="moveback"
                startIcon={<Icon><ArrowBackIosIcon/></Icon>}
                className={classes.backButton}
                onClick={history.goBack}></Button>
            </Box>

            <Typography
               className={classes.header}>Results for images and 'alt' tags</Typography>

            <Grid container spacing={3} className={classes.graphContainer1}>

            <Grid item xs={12} md={6}>
              <ImgBarChart data={data.imagesResult}/>
            </Grid>

            <Grid item xs={12} md={6}>
              <PieChart data={data.imagesResult}/>
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



            <Grid item xs={6} md={4}>
              <Box className={classes.pie}>
                <ImgPieChart data={this.pieData()}/>
              </Box>
            </Grid>


            <Grid item xs={12}  md={12}>
            <Card className={classes.card}>
            <CardContent>
              <TableContainer  className={classes.tableContainer} >
                <Table  aria-label="simple table">
                  <TableBody>

                    <TableRow>
                      <TableCell className={classes.tableBody}>Total images: </TableCell>
                      <TableCell align="right" className={classes.tableBody}>{data.imagesResult.allImages}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className={classes.tableBody}> Images with valid atribute alt:{' '}</TableCell>
                      <TableCell align="right" className={classes.tableBody}>{data.imagesResult.imagesWithAlt}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className={classes.tableBody}>Test: </TableCell>
                      <TableCell align="right" className={classes.tableBody}>{data.imagesResult.passed ? 'passed' : 'failed'}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className={classes.tableBody}>Percent passed images: </TableCell>
                      <TableCell align="right" className={classes.tableBody}>{data.imagesResult.percent}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className={classes.tableBody}>Total Score: </TableCell>
                      <TableCell align="right" className={classes.tableBody}>{data.score.percent}</TableCell>
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


const styledComponent = withStyles(navStyles, { withTheme: true })(ImagesResult);

export default connect(mapState, mapDispatch)(styledComponent);
