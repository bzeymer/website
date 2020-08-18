import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styles.css';

function Header(props) {
  return (
    <div className="header">
      <div>
        <FontAwesomeIcon className="icon" icon={faBars} onClick={props.toggleMenu}/>
        <Link to="/" className="logo">breno.dev</Link>
      </div>
      <div className='theme-select'>
        <span>Dark-mode?</span>
        <input type='checkbox' checked={props.theme === 'dark'} onChange={props.toggleTheme}/>
      </div>
    </div>
  );
}

export default Header;