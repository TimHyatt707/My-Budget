import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import CircularProgress from 'material-ui/CircularProgress';

export default class PieChartComponent extends Component {
  render() {
    let defaultData = [{ x: 'No Categories', y: 50 }];
    let chartData = defaultData;
    if (!this.props.categories) {
      return <CircularProgress />;
    } else {
      chartData = this.props.categories.map(category => {
        return { x: category.category, y: category.limit };
      });
    }
    const colors = [
      'orange',
      'red',
      'maroon',
      'fuchsia',
      'purple',
      'pink',
      'yellow',
      'lime'
    ];
    return (
      <VictoryPie
        data={chartData}
        colorScale={colors}
        width={this.props.width}
      />
    );
  }
}
