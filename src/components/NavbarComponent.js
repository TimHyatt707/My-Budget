import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this._onSubmitHandler = this._onSubmitHandler.bind(this);
  }
  render() {
    let title = 'My Budget';
    let pages;
    if (!this.props.pages) {
      pages = ['', '', ''];
    } else {
      pages = this.props.pages;
    }

    return (
      <Toolbar>
        <ToolbarTitle text={title} />
        <ToolbarGroup>
          <form onSubmit={this._onSubmitHandler}>
            <TextField
              style={{ marginRight: 20 }}
              id="SearchBar"
              hintText="Search for transaction by name"
            />
            <RaisedButton
              type="submit"
              label="GO"
              style={{
                width: '20px',
                marginTop: '10px'
              }}
            />
          </form>
          <IconMenu
            iconButtonElement={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
            <Link to={'/'}>
              <MenuItem primaryText={pages[0]} />
            </Link>
            <Link to={'/Budget'}>
              <MenuItem primaryText={pages[1]} />
            </Link>
            <Link to={'/Transactions'}>
              <MenuItem primaryText={pages[2]} />
            </Link>
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
  _onSubmitHandler(event) {
    event.preventDefault();
    const $form = event.target;
    let query = $form.SearchBar.value;
    let pattern = new RegExp(query);
    let listOfTransactions = this.props.transactions;
    if (!listOfTransactions) {
      listOfTransactions = [];
    }
    for (let i = 0; i < listOfTransactions.length; i++) {
      if (listOfTransactions[i].name.search(pattern) !== -1) {
        this.props.onSelectTransaction(listOfTransactions[i].id);
      }
    }
  }
}
