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
      <form onSubmit={this._onSubmitHandler}>
        <h2>{this.state.error}</h2>
        <TextField
          id="email"
          hintText="Email"
          errorText="This field is required"
        />
        <TextField
          id="username"
          hintText="Username"
          errorText="This field is required"
        />
        <TextField
          id="password"
          hintText="Password"
          errorText="This field is required"
        />
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
      this.setState({ error: null });
    }
  };
}
