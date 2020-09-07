import React from 'react';
import './SearchBox.css';

const SearchBox = ({clickState, onInputChange}) =>{
    
    return(
        
        <div className = 'searchbox'>
            
            <input
                id = 'inputbox' 
                type='text' 
                placeholder="Search for a country.."
                onChange = {onInputChange}    
            />
            
        </div>
    )
}

export default SearchBox;