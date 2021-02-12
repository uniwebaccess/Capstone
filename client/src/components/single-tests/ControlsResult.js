import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../store/data';
import { checkerSuggestions } from '../../constants';
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
  Grid,
  FormRow,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import history from '../../history';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    marginTop: '',
  },
});

class ControlsResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.openAccordion = this.openAccordion.bind(this);
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ selected: evt.target.value });
    this.props.selectField(evt.target.value);
  }

  openAccordion = (panel) => {
    this.setState((oldState) => {
      return {
        ...oldState,
        expanded: panel !== oldState.expanded ? panel : null,
      };
    });
  };

  render() {
    const { status, url, data } = this.props;
    const classes = this.props.classes;
    const expanded = this.state.expanded;
    console.log(data.controlsResult);
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

              <Grid
                container
                spacing={3}
                xs={12}
                className={classes.graphContainer1}
              >
                <Grid container position="static" xs={6}>
                  <Grid item>
                    <HrefChart data={data} />
                  </Grid>
                  <Grid item>
                    <TargetChart data={data} />
                  </Grid>

                  <Grid container>
                    <Grid item>
                      <ButtonsChart data={data} />
                    </Grid>
                    <Grid item>
                      <ControlsScoreChart data={data} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
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
                            {data.controlsResult.hrefPassed ? (
                              ''
                            ) : (
                              <TableRow>{checkerSuggestions.hrefAttr}</TableRow>
                            )}
                            {/* <Accordion
                              xs={6}
                              expanded={expanded === 'panel1'}
                              onChange={() => this.openAccordion('panel1')}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                              >
                                <Typography className={classes.list}>
                                  Learn More{' '}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails className={classes.paragraph}>
                                <Typography>
                                  {checkerSuggestions.hrefAttr}
                                </Typography>
                              </AccordionDetails>
                            </Accordion> */}
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
                            {Math.floor(
                              (data.controlsResult.linksToNewTab /
                                data.controlsResult.allLinks) *
                                100
                            ) < 30 ? (
                              ''
                            ) : (
                              <TableRow>
                                {checkerSuggestions.targetAttr}
                              </TableRow>
                            )}
                            {/* <Accordion
                              expanded={expanded === 'panel2'}
                              onChange={() => this.openAccordion('panel2')}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                              >
                                <Typography className={classes.list}>
                                  Learn More
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails className={classes.paragraph}>
                                <Typography>
                                  {checkerSuggestions.targetAttr}
                                </Typography>
                              </AccordionDetails>
                            </Accordion> */}
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
                            {data.controlsResult.buttonsPassed ? (
                              ''
                            ) : (
                              <TableRow>button feedback</TableRow>
                            )}
                            {/* <Accordion
                              expanded={expanded === 'panel3'}
                              onChange={() => this.openAccordion('panel3')}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                              >
                                <Typography className={classes.list}>
                                  Learn More
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>Text</Typography>
                              </AccordionDetails>
                            </Accordion> */}
                            <TableRow>
                              <TableCell className={classes.tableBody}>
                                Score for this Category:{' '}
                              </TableCell>
                              <TableCell
                                align="right"
                                className={classes.tableBody}
                              >
                                {data.controlsResult.percent}%
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
                                {data.score.percent}%
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
