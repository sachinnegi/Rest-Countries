import React from 'react';
import './SearchBox.css';
import searchIcon from './searchIcon.png';
import Filter from '../Filter/Filter';

const SearchBox = () =>{
    return(
        <div className="container for Box">
        <div className = 'searchbox'>
            
            <div style= {{ paddingTop:'10px',height:'40px', background:'hsl(209, 23%, 22%)'}}><img style= {{height:'20px'}} alt='icon' src={searchIcon} /> </div>
            <input type='text' placeholder="Search for a country.."/>
            
        </div>
        <Filter/>
        </div>
    )
}

export default SearchBox;