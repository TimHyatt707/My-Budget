import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

export default class FooterComponent extends Component {
  render() {
    const { pageTitle } = this.props;
    const style = {
      position: 'absolute',
      bottom: 0,
      width: '100%'
    };

    return (
      <Toolbar style={style}>
        <ToolbarTitle text={pageTitle} />
      </Toolbar>
    );
  }
}
