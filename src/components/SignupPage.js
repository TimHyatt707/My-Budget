import React from "react";
import SignupPageLayout from "./SignupPageLayout";
import Navbar from "./NavbarComponent";
import SignupForm from "./SignupFormComponent";

export default function SignupPage({ onCreateUser }) {
  return (
    <SignupPageLayout>
      <Navbar />
      <SignupForm onCreateUser={onCreateUser} />
    </SignupPageLayout>
  );
}
