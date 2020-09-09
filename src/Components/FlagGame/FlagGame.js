import React, {useState} from 'react';
import './FlagGame.css'

// selecting random flags from countries
var flagNumbers = [];
var flagName = '';
var answerFlag = 0;
function numberGenerator(){
    flagNumbers = [];
    answerFlag = 0;
    while (flagNumbers.length<4){
        var idx = Math.floor(Math.random()*200);
        if (!flagNumbers.includes(idx))
            flagNumbers.push(idx)
        }
    answerFlag = flagNumbers[Math.floor(Math.random()*4)]
}
numberGenerator();

// handling the answer by user
function optionClick(event){
    console.log(event.target.textContent,flagName);
    
    console.log(event.target.style)
    console.log(event.target.style.backgroundColor)
    
    if (event.target.textContent === flagName){
        event.target.className = "right";
        console.log('true')
    }
    else{
        event.target.className = "wrong";
    }
}


const FlagGame = ({countries,onAnswerButton}) =>{
    
    numberGenerator();
    flagName = countries[answerFlag].name
    if (countries.length===0){
        return(
            <div>you got blanck haha</div>
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
                            <div onClick={optionClick} className="">{countries[flagNumbers[0]].name}</div>
                            <div onClick={optionClick} className=''>{countries[flagNumbers[1]].name}</div>
                            <div onClick={optionClick} className=''>{countries[flagNumbers[2]].name}</div>
                            <div onClick={optionClick} className=''>{countries[flagNumbers[3]].name}</div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default FlagGame;