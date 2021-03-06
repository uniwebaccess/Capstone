import React from 'react';
import ReactDOM from 'react-dom';
import {
  VictoryArea, VictoryChart,
  VictoryTheme, VictoryStack
} from 'victory';
import _ from 'lodash'
import { Button, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/';


const navStyles = (theme) => ({
  button:{

  }

})



class HomeAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData(), isBw: false };
    this.toggleBw = this.toggleBw.bind(this);
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState(oldState => ({
        ...oldState,
        data: this.getData()
      }));
    }, 4000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval)
  }

  toggleBw() {
    this.setState(oldState => ({
      ...oldState,
      isBw: !oldState.isBw
    }));
  }

  getData() {
    return _.range(7).map(() => {
      return [
        { x: 1, y: _.random(1, 5) },
        { x: 2, y: _.random(1, 10) },
        { x: 3, y: _.random(2, 10) },
        { x: 4, y: _.random(2, 10) },
        { x: 5, y: _.random(2, 15) }
      ];
    });
  }
  colors() {
    if(this.state.isBw) {
      return ["#6c757d", "#fff","#adb5bd", "#343a40", ]
    }
    return ["#e63946", "#ffb703", "#a8dadc", "#457b9d"]
  }
  render() {
    const classes = this.props.classes;
    return (
      <div>
      <Box display="flex" justifyContent="flex-end" zIndex="tooltip" pr={11}>
        <Button style={{color:'#1D3557'}} onClick={this.toggleBw} right='2%' position='sticky'>
        Click to see Colorblind view</Button>
      </Box>
      <Box>
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{duration: 1000}}>

        <VictoryStack
          colorScale={this.colors()}>
          {this.state.data.map((data, i) => {
            return (
              <VictoryArea
                key={i}
                data={data}
                interpolation={"basis"}/>
            );
          })}
        </VictoryStack>
      </VictoryChart>
      </Box>
      </div>
    );
  }
}

export default withStyles(navStyles, { withTheme: true })(HomeAnimation);
