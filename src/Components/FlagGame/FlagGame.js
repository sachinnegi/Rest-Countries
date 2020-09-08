import React from 'react';
import './FlagGame.css'
// selecting random flags from countries

    var flagNumbers = [];
    while (flagNumbers.length<4){
        var idx = Math.floor(Math.random()*200);
        if (!flagNumbers.includes(idx))
            flagNumbers.push(idx)
        }
    const answerFlag = flagNumbers[Math.floor(Math.random()*4)]


const FlagGame = ({onAnswerButton,countries}) =>{
    
    
    // console.log(countries);
    if (countries.length===0){
        return(
            <div></div>
        )
    }
    else{
        return(
            <div className="cardsdetail-container">
                <div onClick = { () => onAnswerButton(false) } 
                    className='back-button'>
                    <span>&larr;</span> <span>Back</span> 
                </div>

                <div className = "image-option-container">
                    <div className = "flag-image-container" style ={{backgroundImage: `url("${countries[answerFlag].flag}")`}} >
                    </div>
                    <div className="answer-header">
                        <div className='guess'>Guess the Flag!</div>
                        <div className = "options">
                            <div>{countries[flagNumbers[0]].name}</div>
                            <div>{countries[flagNumbers[1]].name}</div>
                            <div>{countries[flagNumbers[2]].name}</div>
                            <div>{countries[flagNumbers[3]].name}</div>
                        </div>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default FlagGame;