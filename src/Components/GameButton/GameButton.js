import React from 'react';

let GameButton = ({onAnswerButton}) =>{
    return(
    <div>
        <button onClick = { ()=> onAnswerButton(true)}>
            Guess the Flag!!
        </button>
    </div>
    )
}

export default GameButton;