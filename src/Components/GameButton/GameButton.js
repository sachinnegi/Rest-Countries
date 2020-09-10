import React from 'react';
import './GameButton.css';

let GameButton = ({onAnswerButton}) =>{
    return(
    <div>
        <button className = 'buttonClass'  onClick = { ()=> onAnswerButton(true)}>
            Guess the Flag!!
        </button>
    </div>
    )
}

export default GameButton;