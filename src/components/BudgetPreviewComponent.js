import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import PieChartComponent from './PieChartComponent';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export default class BudgetPreviewComponent extends Component {
  render() {
    const { ChartData } = this.props;
    const style = {
      height: 500,
      width: 500,
      margin: 40,
      marginBottom: 100,
      textAlign: 'center',
      display: 'inline-block'
    };
    const title = 'Budget at a Glance';
    return (
      <Paper zDepth={4} style={style} className="BudgetPreview">
        <div>
          {title}
        </div>
        <PieChartComponent data={this.props.ChartData} />
        <Link to={'/Budget'}>
          <RaisedButton label="BUDGET" />
        </Link>
      </Paper>
    );
  }
}
