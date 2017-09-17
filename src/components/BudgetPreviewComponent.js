import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

export default class BudgetPreviewComponent extends Component {
  render() {
    const { PieChart } = this.props;
    const style = {
      height: 300,
      width: 300,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#FAFAFA'
    };
    const title = 'Budget at a Glance';
    return (
      <div className="BudgetPreview">
        <Paper zDepth={4} style={style}>
          <div
            style={{
              backgroundColor: '#B2EBF2'
            }}>
            {title}
          </div>
          {PieChart}
        </Paper>
      </div>
    );
  }
}
