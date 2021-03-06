import React from "react";

export default function BudgetPageLayout(props) {
  return (
    <div>
      <header className="Navbar">{props.children[0]}</header>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center"
        }}
      >
        <div style={{ maxHeight: 500, maxWidth: 1000 }}>
          {props.children[1]}
        </div>
        <div>{props.children[2]}</div>
        <div
          style={{
            width: "80%",
            marginBottom: 40
          }}
        >
          {props.children[3]}
        </div>
      </div>
    </div>
  );
}
