import React from 'react';
import './Popup.css';

function Popup() {
  return (
    <div className="Popup">
      <header className="Popup-header">
        <p>
          Edit <code>src/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="Popup-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Popup;

