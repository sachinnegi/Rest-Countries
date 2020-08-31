import React from 'react';
import './SearchBox.css';

const SearchBox = ({onInputChange}) =>{
    return(
        
        <div className = 'searchbox'>
            
            <input 
                type='text' 
                placeholder="Search for a country.."
                onChange = {onInputChange}    
            />
            
        </div>
    )
}

export default SearchBox;