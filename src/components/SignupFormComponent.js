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
      console.log(createdUser);
      if (createdUser.id && createdUser.email && createdUser.username) {
        alert("Account succesfully created");
        this.props.history.push("/login");
      } else if (createdUser === "Invalid email") {
        this.setState({ error: "Email already exists" });
      } else {
        this.setState({ error: "Signup Failed" });
      }
    }
  };
}
