import React from 'react';
import { useState } from 'react';
import Header from '../header';
import Menu from '../menu';
import './styles.css';

function Structure(props) {
    const [showMenu, setShowMenu] = useState(true);
    const [theme, setTheme] = useState('light');

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    function toggleTheme() {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
    }

    return (
        <div className={`structure ${theme}-mode`} >
            <div className='structure-header'>
                <Header
                    toggleMenu={toggleMenu}
                    toggleTheme={toggleTheme}
                    theme={theme}
                />
            </div>
            <div className={`structure-menu ${!showMenu && 'hide-menu'}`}><Menu items={props.menu}/></div>
            <div className='structure-body'>{props.children}</div>
        </div>
    )
}

export default Structure
