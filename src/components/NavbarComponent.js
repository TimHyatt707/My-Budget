import React, { Component } from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class NavbarComponent extends Component {
  render() {
    const { pageTitle, pages } = this.props;
    let title = this.props.pageTitle;
    !this.props.pageTitle
      ? (title = 'Home Page')
      : (title = this.props.pageTitle);
    return (
      <Toolbar>
        <ToolbarTitle text={title} />
        <ToolbarGroup>
          <TextField hintText="Search for transaction by name" />
          <RaisedButton
            label="GO"
            backgroundColor="#B2EBF2"
            style={{
              width: '20px',
              marginTop: '10px'
            }}
          />
          <IconMenu
            iconButtonElement={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
            <MenuItem
              style={{ backgroundColor: '#B2EBF2' }}
              primaryText={this.props.pages[0]}
              onClick={this._handleClick(this.props.pages[0])}
            />
            <MenuItem
              style={{ backgroundColor: '#B2EBF2' }}
              primaryText={this.props.pages[1]}
              onClick={this._handleClick(this.props.pages[1])}
            />
            <MenuItem
              style={{ backgroundColor: '#B2EBF2' }}
              primaryText={this.props.pages[2]}
              onClick={this._handleClick(this.props.pages[2])}
            />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }

  _handleClick = page => console.log(page);
}
