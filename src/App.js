import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Header from './Components/Header/Header';
import SearchBox from './Components/SearchBox/SearchBox';
import Filter from './Components/Filter/Filter';
import CardsArray from './Components/CardsArray/CardsArray';
import FlagDetails from './Components/FlagDetails/FlagDetails';
import FlagGame from './Components/FlagGame/FlagGame';
import GameButton from './Components/GameButton/GameButton';

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
      flagGame : false,
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
    }
    catch(error){
      console.log('THIS IS THE ERROR',error);
    }
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);

    anime({
      targets: '.country-header',
      translateX: 50,
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
      translateX: 150,
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

  onAnswerButton = (value) =>{
    this.setState({flagGame:value})
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
          <Header onAnswerButton = {this.onAnswerButton} changeCardClickState = {this.changeCardClickState} />
          
          
          {/*conditional rendering of compoenents*/}
          {this.state.isFlagClicked===false
            ? (
              this.state.flagGame === false
              ? <div> 
                  <div className= "search-and-filter">
                    <SearchBox clickState = {this.state.isFlagClicked} onInputChange = {this.onSearchInputChange} />
                    <GameButton onAnswerButton = {this.onAnswerButton} /> 
                    <Filter onFilterChange = {this.onFilterChange} />
                  </div>
                  <CardsArray countries = {filteredCountry.slice(0,130)} onCardClicked ={this.onCardClicked} />   {/*sliced some countries for faster page load*/}
                </div>
              : <FlagGame countries ={this.state.countries} onAnswerButton = {this.onAnswerButton} />
              )
            : <FlagDetails changeCardClickState = {this.changeCardClickState} country ={this.state.clickedCardCountry} /> 
          }
      
      </div>
    )
  }


}


export default App;
