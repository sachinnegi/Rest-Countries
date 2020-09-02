import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Header from './Components/Header/Header';
import SearchBox from './Components/SearchBox/SearchBox';
import Filter from './Components/Filter/Filter';
import CardsArray from './Components/CardsArray/CardsArray';
import FlagDetails from './Components/FlagDetails/FlagDetails';

class App extends Component {
  constructor(){
    super();
    this.state ={
      countries: [],
      searchField: '',
      url : "https://restcountries.eu/rest/v2/all",
      flagDetail : false,
      isFlagClicked : 'no',

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


  componentDidMount(){

    this.fetchCountries();
    
  }


// Handling input changes

  onSearchInputChange = (event) =>{
    this.setState( {searchField : event.target.value} )
  }

// Handling Filtered Component

  filtedredCountries = ()=> {
    console.log(this.state.url)
    this.fetchCountries()
  }

  onFilterChange = (event) =>{
    const newUrl= `https://restcountries.eu/rest/v2/region/${event.target.value}`
    this.setState( { url: newUrl  } )
    setTimeout(this.filtedredCountries  ,1 );
   
  }

  // handling card clicks

  onCardClicked = (key) =>{
   console.log('clickedd')
   console.log(key)
  }

  
// Render method

  render(){
    
    
    const filteredCountry = this.state.countries.filter( country => {
        return ( country.name.toLowerCase().includes(this.state.searchField.toLowerCase() ));
    })

    return(
      <div>
          <Header />
          {/*conditional rendering of compoenents*/}

          {this.state.flagDetail===false
            ?<div> 
                <div className= "search-and-filter">
                  <SearchBox onInputChange = {this.onSearchInputChange} />
                  <Filter onFilterChange = {this.onFilterChange} />
                </div>
          <CardsArray countries = {filteredCountry.slice(0,50)} onCardClicked ={this.onCardClicked} />   {/*sliced some countries for faster page load*/}
            </div>
            :<FlagDetails onCardClicked ={this.onCardClicked} /> 
          }
      </div>
    )
  }


}


export default App;
