import React from "react";
import SignupPageLayout from "./SignupPageLayout";
import Navbar from "./NavbarComponent";
import SignupForm from "./SignupFormComponent";

export default function SignupPage({ onCreateUser, token, history }) {
  return (
    <SignupPageLayout>
      <Navbar token={token} />
      <SignupForm onCreateUser={onCreateUser} history={history} />
    </SignupPageLayout>
  );
}
