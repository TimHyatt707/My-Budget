import React from "react";

export default function IndexPageLayout(props) {
  return (
    <div>
      <header className="Navbar">{props.children[0]}</header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div style={{ maxWidth: 1000, maxHeight: 1000 }}>
          {props.children[1]}
        </div>
        {props.children[2]}
      </div>
    </div>
  );
}
