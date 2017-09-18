import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import PieChartComponent from './PieChartComponent';
import RaisedButton from 'material-ui/RaisedButton';

export default class BudgetPreviewComponent extends Component {
  render() {
    const { ChartData } = this.props;
    const style = {
      height: 300,
      width: 300,
      margin: 40,
      marginBottom: 100,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#FAFAFA'
    };
    const title = 'Budget at a Glance';
    return (
      <Paper zDepth={4} style={style} className="BudgetPreview">
        <div
          style={{
            backgroundColor: '#B2EBF2'
          }}>
          {title}
        </div>
        <PieChartComponent data={this.props.ChartData} />
        <RaisedButton label="BUDGET" backgroundColor="#B2EBF2" />
      </Paper>
    );
  }
}
