import React from 'react';
import './IndexPageLayout.css';

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
      <footer className="Footer">
        {props.children[3]}
      </footer>
    </div>
  );
}
