import React from "react";

export default function LoginPageLayout(props) {
  return (
    <div>
      {props.children[0]}
      {props.children[1]}
    </div>
  );
}
