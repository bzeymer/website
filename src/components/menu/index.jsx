import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function Menu(props) {
    return (
        <div className='menu'>
            {props.items && props.items.map(item => 
                <Link key={item.path} className='menu-item' to={item.path}>{item.name}</Link>
            )}
        </div>
    )
}

export default Menu
