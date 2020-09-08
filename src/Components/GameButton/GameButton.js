import React from 'react';

let GameButton = ({onAnswerButton}) =>{
    return(
    <div>
        <button onClick = { ()=> onAnswerButton(true)}>
            Guess the Card
        </button>
    </div>
    )
}

export default GameButton;