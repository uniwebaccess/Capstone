import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, selectField } from '../store/data';
import { checkerDescriptions } from '../constants';
import TestFieldDescription from './single-tests/TestFieldDescription';
import MainResultsChart from '../visual/MainResultsChart';
import {
  Grid,
  Typography,
  Container,
  Box,
  LinearProgress,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Icon,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const navStyles = (theme) => ({
  header: {
    text: 'bold',
    color: '#1D3557',
    marginTop: '2%',
    marginBottom: '5%',
  },

  link: {
    fontSize: '20px',
    '&:hover': {
      color: '#3a7ca5',
    },
  },

  list: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#3a7ca5',
    textDecoration: 'none',
    '&:hover': {
      color: '#2c6283',
      textDecoration: 'underline',
    },
  },
  paragraph: {
    color: '#757575',
  },

  boxList: {
    marginBottom: '4%',
    marginTop: '2%',
  },
  checkIcon: {
    color: '#388e3c',
  },
});
/*
* Page to render results of tests
*/
//Through the route /testresults/:urlKey
class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.openAccordeon = this.openAccordeon.bind(this);
  }
  componentDidMount() {
    this.props.fetchData(this.props.match.params.urlKey);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({ selected: evt.target.value });
    this.props.selectField(evt.target.value);
  }

  openAccordeon = (panel) => {
    this.setState((oldState) => {
      return {
        ...oldState,
        expanded: panel != oldState.expanded ? panel : null,
      };
    });
  };

  render() {
    const classes = this.props.classes;
    const { status, url, data, error, avgData } = this.props;
    const urlKey = this.props.match.params.urlKey;

    const expanded = this.state.expanded;

    return (
      <div>
        {
          status === 'loading' && <h1>Loading Results</h1>
          //  <LinearProgress />
        }
        {status === 'success' && url && data && avgData && (
          <Container maxWidth="md">
            <Typography
              variant="h4"
              fontWeight="fontWeightBold"
              m={1}
              className={classes.header}
            >
              <br />
              <b>Analyzed page: </b>
              <span className={classes.link}>{url}</span>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MainResultsChart
                  newScan={data}
                  averages={avgData}
                  selectField={this.props.selectField}
                />
              </Grid>

              <Grid item xs={12} className={classes.boxList}>
                <Box className={classes.boxList} boxShadow={2}>

                  <Accordion
                    expanded={expanded === 'panel1'}
                    onChange={() => this.openAccordeon('panel1')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                    >
                      <Typography
                        className={classes.list}
                        component={RouterLink}
                        to={'/controlresult/' + urlKey}
                      >
                        <Icon className={classes.checkIcon}>
                          <CheckIcon />
                        </Icon>{' '}
                       Controls
                     </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{checkerDescriptions.controls}</Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === 'panel2'}
                    onChange={() => this.openAccordeon('panel2')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                    >
                      <Typography
                        className={classes.list}
                        component={RouterLink}
                        to={'/globalcode/' + urlKey}
                      >
                        <Icon className={classes.checkIcon}>
                          <CheckIcon />
                        </Icon>{' '}
                       Global Code
                     </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>{checkerDescriptions.globalCode}</Typography>
                    </AccordionDetails>
                  </Accordion>


                  <Accordion
                    expanded={expanded === 'panel3'}
                    onChange={() => this.openAccordeon('panel3')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                    >
                      <Typography
                        className={classes.list}
                        component={RouterLink}
                        to={'/headingresult/' + urlKey}
                      >
                        <Icon className={classes.checkIcon}>
                          <CheckIcon />
                        </Icon>{' '}
                       Headings
                     </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.paragraph}>
                      <Typography>{checkerDescriptions.headings}</Typography>
                    </AccordionDetails>
                  </Accordion>



                  <Accordion
                    expanded={expanded === 'panel4'}
                    onChange={() => this.openAccordeon('panel4')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                    >
                      <Typography
                        className={classes.list}
                        component={RouterLink}
                        to={'/imagesresult/' + urlKey}
                      >
                        <Icon className={classes.checkIcon}>
                          <CheckIcon />
                        </Icon>{' '}
                       Images{' '}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.paragraph}>
                      <Typography>{checkerDescriptions.images}</Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === 'panel5'}
                    onChange={() => this.openAccordeon('panel5')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                    >
                      <Typography
                        className={classes.list}
                        component={RouterLink}
                        to={"/structuralresult/" + urlKey}><Icon className={classes.checkIcon}><CheckIcon /></Icon> Structural HTML</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {checkerDescriptions.structuralHTML}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
        {status === 'error' && (
          <div>
            <h1>There was an error</h1>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    //data = results from most recent scan
    data: state.data.data,
    //avgData = average results object (all previous scans)
    avgData: state.data.avgData,
    url: state.data.url,
    status: state.status,
    error: state.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchData: (urlKey) => dispatch(fetchData(urlKey)),
    selectField: (selectedField) => dispatch(selectField(selectedField)),
  };
};

const styledComponent = withStyles(navStyles, { withTheme: true })(TestResult);

export default connect(mapState, mapDispatch)(styledComponent);

//<TestFieldDescription descriptions={checkerDescriptions} />

