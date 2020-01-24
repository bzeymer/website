import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header row-wrapper">
      <div className="content row-content">
        <Link to="/" className="logo">breno.dev</Link>
      </div>
    </div>
  );
}

export default Header;