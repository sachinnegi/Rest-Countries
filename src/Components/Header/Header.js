import React from 'react';
import logo from './logo_transparent.png';
import './Header.css'



const Header = ( {onAnswerButton, changeCardClickState} ) =>{
    return(
        <div  className="header">
            <img 
                onClick = {() => {changeCardClickState(false)
                                    onAnswerButton(false)}} 
                 className = 'logo' 
                 alt='headerimg' 
                 src={logo} 
            />
            <div class="earth"></div> 
        </div>
    )
}

export default Header;