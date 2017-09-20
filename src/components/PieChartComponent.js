import React, { Component } from 'react';
import { VictoryPie } from 'victory';

export default class PieChartComponent extends Component {
  render() {
    return <VictoryPie data={this.props.data} />;
  }
}
