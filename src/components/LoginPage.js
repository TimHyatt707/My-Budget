import React from "react";
import LoginPageLayout from "./LoginPageLayout";
import Navbar from "./NavbarComponent";
import LoginForm from "./LoginFormComponent";

export default function LoginPage({ onLoginUser, token, history }) {
  return (
    <LoginPageLayout>
      <Navbar token={token} />
      <LoginForm onLoginUser={onLoginUser} history={history} />
    </LoginPageLayout>
  );
}
