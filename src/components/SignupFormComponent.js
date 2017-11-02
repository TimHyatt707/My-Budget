import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  render() {
    return (
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
    );
  }
  _onSubmitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    if (!email || !username || !password) {
      this.setState({ error: "Please fill out all forms" });
    } else {
      const user = { email, username, password };
      this.setState({ error: null });
      this.props.onCreateUser(user);
      this.props.history.push("/login");
      alert("Account succesfully created");
    }
  };
}
