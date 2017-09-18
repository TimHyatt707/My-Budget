import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryPie } from 'victory';

export default class PieChartComponent extends Component {
  render() {
    const { data } = this.props;

    return <VictoryPie data={this.props.data} />;
  }
}
