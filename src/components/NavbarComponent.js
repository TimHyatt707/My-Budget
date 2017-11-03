import React, { Component } from "react";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import { Link } from "react-router-dom";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";

export default class NavbarComponent extends Component {
  render() {
    let title = "My Budget";
    let signup = null;
    let login = null;
    let logout = null;
    if (!this.props.token) {
      signup = (
        <Link to={"/Signup"}>
          <MenuItem primaryText={"Signup"} />
        </Link>
      );
      login = (
        <Link to={"/Login"}>
          <MenuItem primaryText={"Login"} />
        </Link>
      );
    }
    if (this.props.token) {
      login = null;
      signup = null;
      logout = <MenuItem primaryText={"Logout"} onClick={this._handleLogout} />;
    }
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
            {signup}
            {login}
            {logout}
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
  _handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.props.onLogoutUser();
    this.props.history.push("/");
    window.location.reload();
  };

  _onSubmitHandler = e => {
    e.preventDefault();
    const $form = e.target;
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
  };
}
