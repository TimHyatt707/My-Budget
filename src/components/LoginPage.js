import React from "react";
import LoginPageLayout from "./LoginPageLayout";
import Navbar from "./NavbarComponent";
import LoginForm from "./LoginFormComponent";

export default function LoginPage({ onLoginPage }) {
  return (
    <LoginPageLayout>
      <Navbar />
      <LoginForm onLoginPage={onLoginPage} />
    </LoginPageLayout>
  );
}
