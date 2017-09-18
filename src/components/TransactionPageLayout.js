import React from 'react';

export default function TransactionPageLayout(props) {
  return (
    <div>
      <header className="Navbar">
        {props.children[0]}
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <div style={{ marginTop: 40 }}>
          {props.children[1]}
        </div>
        <div style={{ width: '80%', marginBottom: '20' }}>
          {props.children[2]}
        </div>
      </div>
      <footer className="Footer">
        {props.children[3]}
      </footer>
    </div>
  );
}
