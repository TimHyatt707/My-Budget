import React, { Component } from "react";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: null,
      login: null
    };
  }
  render() {
    let title = "My Budget";
    return (
      <Toolbar>
        <ToolbarTitle text={title} />
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            anchorOrigin={{ horizontal: "left", vertical: "top" }}
            targetOrigin={{ horizontal: "left", vertical: "top" }}
          >
            <Link to={"/"}>
              <MenuItem primaryText={"Home"} />
            </Link>
            <Link to={"/Budget"}>
              <MenuItem primaryText={"Budget"} />
            </Link>
            <Link to={"/Transactions"}>
              <MenuItem primaryText={"Transactions"} />
            </Link>
            <Link to={"/Signup"}>
              <MenuItem primaryText={this.state.signup} />
            </Link>
            <Link to={"/Login"}>
              <MenuItem primaryText={this.state.login} />
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
