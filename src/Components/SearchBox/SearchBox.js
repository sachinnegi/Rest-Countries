import React from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBox = ({clickState, onInputChange}) =>{
    
    return(
        
        <div className = 'searchbox'>
            
            <input
                id = 'inputbox' 
                type='text' 
                placeholder="Search for a country.."
                onChange = {onInputChange}    
                
            />
            <FontAwesomeIcon icon={faSearch} color={''} size='lg' />
            
        </div>
    )
}

export default SearchBox;