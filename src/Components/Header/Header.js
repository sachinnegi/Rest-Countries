import React from 'react';
// import logo from './logo.png';
import logo from './logo_transparent.png';
import './Header.css'

const Header = (changeCardClickState) =>{
    console.log(changeCardClickState(true))
    return(
        <div onClick = { () => changeCardClickState(false)} className="header">
            <img className = 'logo' alt='headerimg' src={logo} />
            <h2>Light</h2> 
        </div>
    )
}

export default Header;