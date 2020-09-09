import React from 'react';
import './FlagGame.css'

// selecting random flags from countries
var flagNumbers = [];
var flagName = '';
var answerFlag = 0;
var countries = [];

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

let fetchCountries = async () =>{
      const resp = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await resp.json();
      countries = data;
    }
fetchCountries();
numberGenerator();

// handling the answer by user
function optionClick(event){
    
    if (event.target.textContent === flagName){
        event.target.className = "right";
        document.getElementById("detail-x").style.display = "block"
        
    }
    else{
        event.target.className = "wrong";
        event.target.textContent = 'X';
    }
}


const FlagGame = ({onbuttonClick, changeCardClickState, onAnswerButton}) =>{
    
    numberGenerator();
    flagName = countries[answerFlag].name
    if (countries.length===0){
        return(
            <div>you got blank haha</div>
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
                    <div className ="detail-n-image">
                        
                        <div className = "flag-image-container" style ={{backgroundImage: `url("${countries[answerFlag].flag}")`}} >
                        </div>
                    </div>
                    <div className="answer-header">
                        <div id='detail-x' className='detail-box' >
                            <button onClick = { () => onbuttonClick(countries[answerFlag])} > Click for Flag Detail</button>
                        </div>
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