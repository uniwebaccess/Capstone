import React from 'react';
import ReactDOM from 'react-dom';
import {
  VictoryArea, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryStack
} from 'victory';
import _ from 'lodash'


//npm install victory in client folder



class HomeAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.getData() };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({ data: this.getData() });
    }, 4000);
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

  render() {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{ duration: 1000 }}
      >
        <VictoryStack
          colorScale={["#e63946", "#ffb703", "#a8dadc", "#457b9d",]}
        >
          {this.state.data.map((data, i) => {
            return (
              <VictoryArea
                key={i}
                data={data}
                interpolation={"basis"}
              />
            );
          })}
        </VictoryStack>
      </VictoryChart>
    );
  }
}

export default HomeAnimation
