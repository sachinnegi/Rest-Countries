import React from 'react';
import Card from '../Card/Card';
import './CardsArray.css';

const CardsArray = ({countries}) => {
    console.log(countries);
    return (
        <div className='cards_container'>
            {
                countries.map( (country,i) =>{
                    return(
                        <Card 
                            name = {countries[i].name}
                            url = {countries[i].flag}
                            population = {countries[i].population}
                            region = {countries[i].region}
                            capital = {countries[i].capital}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardsArray;