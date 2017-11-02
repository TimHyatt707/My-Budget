import React from "react";
import LoginPageLayout from "./LoginPageLayout";
import Navbar from "./NavbarComponent";
import LoginForm from "./LoginFormComponent";

export default function LoginPage({ onLoginUser, token }) {
  return (
    <LoginPageLayout>
      <Navbar token={token} />
      <LoginForm onLoginUser={onLoginUser} token={token} />
    </LoginPageLayout>
  );
}
