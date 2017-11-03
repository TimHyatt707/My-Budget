import React from "react";
import { Redirect } from "react-router";
import LoginPageLayout from "./LoginPageLayout";
import Navbar from "./NavbarComponent";
import LoginForm from "./LoginFormComponent";

export default function LoginPage({
  onLoginUser,
  onLogoutUser,
  token,
  history
}) {
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <LoginPageLayout>
      <Navbar token={token} history={history} />
      <LoginForm onLoginUser={onLoginUser} history={history} />
    </LoginPageLayout>
  );
}
