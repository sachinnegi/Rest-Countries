import React from 'react';
import './Card.css';



const Card = ({click, country, name,url,population,region,capital})=>{
    return(
        <div onClick = { () => click(country) } className = 'card'>
            <div style = {{backgroundImage : `url("${url}")`, backgroundSize: "cover",backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}} className= 'image-container'>
    
            </div>
            <div className="card-wrapper">
                <h2>{name}</h2>
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