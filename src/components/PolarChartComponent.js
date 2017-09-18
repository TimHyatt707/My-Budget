import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryPolarAxis, VictoryChart, VictoryBar } from 'victory';

export default class PolarChartComponent extends Component {
  render() {
    const { data, tickValues, labels } = this.props;
    return (
      <div>
        <VictoryChart polar startAngle={90} endAngle={450}>
          <VictoryPolarAxis
            labels={labels}
            tickValues={tickValues}
            labelPlacement="vertical"
          />
          <VictoryBar
            style={{ data: { fill: 'tomato', width: 30 } }}
            data={data}
          />
        </VictoryChart>
      </div>
    );
  }
}
