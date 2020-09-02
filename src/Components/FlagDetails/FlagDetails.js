import React from 'react';
import './FlagDetails.css'

const FlagDetails = ({country}) => {
    console.log(country)

    return (
        <div className='cardsdetail-container'>

            <div className='back-button'>
                <span>&larr;</span> <span>Back</span> 
            </div>

            <div className = "image-detail-container">
                <div style ={{backgroundImage: `url("${country.flag}")`}} className = "flag-image-container"> </div>
                <div className = "detail-container">
                    <div className= 'card-detail-1'>hi
                    </div>
                    <div className="card-detail-2"> hey</div>
                </div>
            </div>
            
            {country.name}
        </div>
    )
}
export default FlagDetails;