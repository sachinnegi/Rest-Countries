import React from 'react';
import './FlagDetails.css'


const FlagDetails = ({changeCardClickState, country}) => {
    
    return (
        <div className='cardsdetail-container'>

            <div onClick = { () => changeCardClickState(false)} className='back-button'>
                <span>&larr;</span> <span>Back</span> 
            </div>

            <div className = "image-detail-container">
                <div style ={{backgroundImage: `url("${country.flag}")`}} className = "flag-image-container">
                </div>
                <div className = "detail-container">
                    <h1 className='country-header'> {country.name} </h1>
                    <div className= 'card-detail-1'>
                        <p>Native Name : {country.nativeName}</p>
                        <p>Population : <span className="right-part" >{country.population}</span></p>
                        <p>Numeric Code : <span className="right-part">{country.numericCode}</span></p>
                        <p>Capital : <span className="right-part">{country.capital}</span></p>
                        <p>Currency : <span className="right-part">{country.currencies[0].name}</span></p>
                        <p>Currency Symbol : <span className="right-part">{country.currencies[0].symbol}</span></p>
                        <p>Region : <span className="right-part">{country.region}</span></p>
                        <p>Sub Region : <span className="right-part">{country.subregion}</span></p>

                         
                    </div>
                    <div className="card-detail-2"> 
                        
                        <div className = 'b-card-1'>
                            <div>
                                <div className='left-part'>Languages :</div>
                                <div className="small-card-bottom">
                                {
                                    country.languages.map((value,i)=>{
                                        
                                        return (<span className='b-card' key={i.toString()}>{value.name} </span>)
                                    })
                                }
                                </div>
                            </div>
                        </div>
                        <div className = 'b-card-2'>
                            <div>
                                <div className='left-part'>Border Countries :</div>
                                <div className="small-card-bottom">
                                {
                                    country.borders.map((value,i)=>{
                                        
                                        return (<span className="b-card" key={i.toString()}>{value}</span>)
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default FlagDetails;