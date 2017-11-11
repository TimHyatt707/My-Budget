import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import Dialog from "material-ui/Dialog";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, open: false };
  }
  render() {
    const action = (
      <FlatButton label="OK" primary={true} onClick={this._handleClose} />
    );
    return (
      <div>
        <form
          onSubmit={this._onSubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "grey"
          }}
        >
          <h1>Signup</h1>
          <h2>{this.state.error}</h2>
          <TextField id="email" hintText="Email" />
          <TextField id="username" hintText="Username" />
          <TextField id="password" type="password" hintText="Password" />
          <RaisedButton type="submit">SUBMIT</RaisedButton>
        </form>
        <Dialog
          title="Signup successful"
          modal={false}
          actions={action}
          open={this.state.open}
          onRequestClose={this._handleClose}
        >
          Your account was successfully created! Select OK to be taken to the
          login page
        </Dialog>
      </div>
    );
  }

  _handleOpen = () => {
    this.setState({ open: true });
  };

  _handleClose = () => {
    this.setState({ open: false });
    this.props.history.push("/login");
  };

  _onSubmitHandler = async e => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (!email || !username || !password) {
      this.setState({ error: "Please fill out all forms" });
    } else {
      const user = { email, username, password };
      const createdUser = await this.props.onCreateUser(user);
      if (createdUser.id && createdUser.email && createdUser.username) {
        this._handleOpen();
      } else if (createdUser === "Invalid email") {
        this.setState({ error: "Email already exists" });
      } else {
        this.setState({ error: "Signup Failed" });
      }
    }
  };
}
