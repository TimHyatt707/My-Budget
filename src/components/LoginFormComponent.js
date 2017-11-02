import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      redirectToHome: false
    };
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
        <h1>Login</h1>
        <h2>{this.state.error}</h2>
        <TextField id="email" hintText="Email" />
        <TextField id="password" type="password" hintText="Password" />
        <RaisedButton type="submit">SUBMIT</RaisedButton>
      </form>
    );
  }
  _onSubmitHandler = async e => {
    try {
      e.preventDefault();
      const email = e.target.email.value || "";
      const password = e.target.password.value || "";
      if (!email || !password) {
        this.setState({ error: "Please fill out both fields" });
      } else {
        const credentials = { email, password };
        await this.props.onLoginUser(credentials);
        this.props.history.push("/");
        alert("Logged in");
      }
    } catch (error) {
      return null;
    }
  };
}
