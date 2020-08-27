import React from 'react';
import './Card.css';

const Card = ({name,url,population,region,capital})=>{
    return(
        <div className = 'card'>
            <img alt = 'countryimg' src={url} />
            <div className="card-wrapper">
                <h1>{name}</h1>
                <h4>{ `Population: ${population}` }</h4>
                <h4>{ `Region: ${region}` }</h4>
                <h4>{ `Capital: ${capital}` }</h4>
            </div>
        </div>
    )
}

export default Card;