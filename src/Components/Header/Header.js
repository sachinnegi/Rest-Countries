import React from 'react';
// import logo from './logo.png';
import logo from './logo_transparent.png';
import './Header.css'

const Header = ( {changeCardClickState} ) =>{
    return(
        <div  className="header">
            <img onClick = {() => changeCardClickState(false)} className = 'logo' alt='headerimg' src={logo} />
            <h2>Light</h2> 
        </div>
    )
}

export default Header;