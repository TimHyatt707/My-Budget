import React from 'react';

export default function IndexPageLayout(props) {
  return (
    <div>
      <header className="Navbar">
        {props.children[0]}
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
        {props.children[1]}
        {props.children[2]}
      </div>
    </div>
  );
}
