import React from 'react';
import './Card.css';

const Card = ({name,url,population,region,capital})=>{
    return(
        <div className = 'card'>
            <img alt = 'countryimg' src={url} />
            <div className="card-wrapper">
                <h2>{name}</h2>
                <p> <span className='card_bold'>Population:</span>  <span> {population} </span> </p>
                <p> <span className='card_bold'>Region:</span>  <span> {region} </span> </p>
                <p> <span className='card_bold'>Capital:</span>  <span> {capital} </span> </p>
                
            </div>
        </div>
    )
}

export default Card;