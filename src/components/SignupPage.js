import React from "react";
import { Redirect } from "react-router";
import SignupPageLayout from "./SignupPageLayout";
import Navbar from "./NavbarComponent";
import SignupForm from "./SignupFormComponent";

export default function SignupPage({
  onCreateUser,
  onLogoutUser,
  token,
  history
}) {
  if (token) {
    return <Redirect to="/" />;
  }
  return (
    <SignupPageLayout>
      <Navbar token={token} onLogoutUser={onLogoutUser} history={history} />
      <SignupForm onCreateUser={onCreateUser} history={history} />
    </SignupPageLayout>
  );
}
