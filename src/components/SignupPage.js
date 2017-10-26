import React from "react";
import SignupPageLayout from "./SignupPageLayout";
import Navbar from "./NavbarComponent";
import SignupForm from "./SignupFormComponent";

export default function SignupPage() {
  return (
    <SignupPageLayout>
      <Navbar />
      <SignupForm />
    </SignupPageLayout>
  );
}
