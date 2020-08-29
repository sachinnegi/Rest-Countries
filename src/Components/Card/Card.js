import React from 'react';
import './Card.css';

const Card = ({name,url,population,region,capital})=>{
    return(
        <div className = 'card'>
            <div style = {{background : `url("${url}")`, backgroundSize: "cover"}} className= 'image-container'>
    
            </div>
            <div className="card-wrapper">
                <h3>{name}</h3>
                <div className="line_height">
                    <p> <span className='card_bold'>Population:</span>  <span> {population} </span> </p>
                    <p> <span className='card_bold'>Region:</span>  <span> {region} </span> </p>
                    <p> <span className='card_bold'>Capital:</span>  <span> {capital} </span> </p>
                </div>
                
            </div>
        </div>
    )
}

export default Card;