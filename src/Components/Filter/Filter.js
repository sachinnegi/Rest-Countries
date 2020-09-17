import React from 'react';
import './Filter.css'

const Filter = ({onFilterChange})=>{
    return(
        <div className='filter-container'>
            <select id='selection' onChange={onFilterChange}>
                <option value = 'Filter'> Filter By Region</option>
                <option value = 'Asia'> Asia</option>
                <option value = 'Americas'> Americas</option>
                <option value = 'Africa'> Africa</option>
                <option value = "Europe"> Europe</option>
                <option value = "Oceania"> Oceania</option>

            </select>
        </div>
    )
}

export default Filter;