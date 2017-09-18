import React, { Component } from 'react';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

export default class FooterComponent extends Component {
  render() {
    const { pageTitle } = this.props;
    const style = {};

    return (
      <Toolbar style={style}>
        <ToolbarTitle text={pageTitle} />
      </Toolbar>
    );
  }
}
