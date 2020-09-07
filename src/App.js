import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Header from './Components/Header/Header';
import SearchBox from './Components/SearchBox/SearchBox';
import Filter from './Components/Filter/Filter';
import CardsArray from './Components/CardsArray/CardsArray';
import FlagDetails from './Components/FlagDetails/FlagDetails';

import anime from 'animejs/lib/anime.es.js';

class App extends Component {
  constructor(){
    super();
    this.state ={
      countries: [],
      searchField: '',
      url : "https://restcountries.eu/rest/v2/all",
      isFlagClicked : false,
      clickedCardCountry : '',

    }
  }


  // Fetching Data from the Api

  fetchCountries = async () =>{
    try{
      const resp = await fetch(this.state.url);
      const data = await resp.json();
      if (resp.status === 200){
        this.setState({countries: data});

      }
      else{
        this.setState( { url:"https://restcountries.eu/rest/v2/all"} )
        this.fetchCountries();
      }
    }
    catch(error){
      console.log('THIS IS THE ERROR',error);
    }
  }

  componentDidUpdate(){
    

    anime({
      targets: '.country-header',
      translateX: 250,
      direction: 'reverse',
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.card',
      translateX: anime.stagger(10, {grid: [4, 5], from: 'center', axis: 'x'}),
      translateY: anime.stagger(10, {grid: [4, 5], from: 'center', axis: 'y'}),
      rotateZ: anime.stagger([0, 10], {grid: [4, 5], from: 'center', axis: 'x'}),
      delay: anime.stagger(200, {grid: [4, 5], from: 'center'}),
      easing: 'easeInOutQuad'
    });

  }

  componentDidMount(){
  
    this.fetchCountries();

    anime({
      targets: '.logo',
      translateX: 250,
      direction: 'alternate',
      loop: true,
      duration: 4000,
      easing: function(el, i, total) {
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    
  }


// Handling input changes

  onSearchInputChange = (event) =>{
    this.setState( {searchField : event.target.value} )
  }

// Handling Filtered Component

  filtedredCountries = ()=> {
    this.fetchCountries()
  }

  onFilterChange = (event) =>{
    const newUrl= `https://restcountries.eu/rest/v2/region/${event.target.value}`
    this.setState( { url: newUrl  } )
    setTimeout(this.filtedredCountries  ,1 );
   
  }

  // handling card clicks

  changeCardClickState = (value) =>{
    if (value === true){
      this.setState({isFlagClicked: true})
    }
    else{
      this.setState({isFlagClicked: false})
    }
  }

  onCardClicked = (country) =>{
    this.setState({searchField:''});
    this.changeCardClickState(true);
    this.setState( {clickedCardCountry: country});
  }

  
// Render method

  render(){
    
    
    const filteredCountry = this.state.countries.filter( country => {
        return ( country.name.toLowerCase().includes(this.state.searchField.toLowerCase() ));
    })

    return(
      <div>
          <Header changeCardClickState = {this.changeCardClickState} />
          {/*conditional rendering of compoenents*/}

          {this.state.isFlagClicked===false
            ?<div> 
                <div className= "search-and-filter">
                  <SearchBox clickState = {this.state.isFlagClicked} onInputChange = {this.onSearchInputChange} />
                  <Filter onFilterChange = {this.onFilterChange} />
                </div>
          <CardsArray countries = {filteredCountry.slice(0,130)} onCardClicked ={this.onCardClicked} />   {/*sliced some countries for faster page load*/}
            </div>
            :<FlagDetails changeCardClickState = {this.changeCardClickState} country ={this.state.clickedCardCountry} /> 
          }
      </div>
    )
  }


}


export default App;
