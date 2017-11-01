import React from "react";
import LoginPageLayout from "./LoginPageLayout";
import Navbar from "./NavbarComponent";
import LoginForm from "./LoginFormComponent";

export default function LoginPage({ onLoginUser }) {
  return (
    <LoginPageLayout>
      <Navbar />
      <LoginForm onLoginUser={onLoginUser} />
    </LoginPageLayout>
  );
}
