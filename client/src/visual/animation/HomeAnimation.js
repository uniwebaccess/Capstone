import React from 'react';
import ReactDOM from 'react-dom';
import {
  VictoryArea, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryStack
} from 'victory';
import _ from 'lodash'
import { Button } from '@material-ui/core';


//npm install victory in client folder



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
    return (
      <div>
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
      >
        <VictoryStack
          colorScale={this.colors()}
        >
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
      <Button onClick={this.toggleBw}>change </Button>
      </div>
    );
  }
}

export default HomeAnimation
