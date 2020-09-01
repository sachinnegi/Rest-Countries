import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Header from './Components/Header/Header';
import SearchBox from './Components/SearchBox/SearchBox';
import Filter from './Components/Filter/Filter';
import CardsArray from './Components/CardsArray/CardsArray';

class App extends Component {
  constructor(){
    super();
    this.state ={
      countries: [],
      searchField: '',
      url : "https://restcountries.eu/rest/v2/all",

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

  filtedredCountries = ()=> {
    console.log(this.state.url)
    this.fetchCountries()
  }

  onFilterChange = (event) =>{
    const newUrl= `https://restcountries.eu/rest/v2/region/${event.target.value}`
    this.setState( { url: newUrl  } )
    setTimeout(this.filtedredCountries  ,1 );
   
  }

  render(){
    console.log('here')
    const filteredCountry = this.state.countries.filter( country => {
      return ( country.name.toLowerCase().includes(this.state.searchField.toLowerCase() ));
    })

    return(
      <div>
        <Header />
        <div className= "search-and-filter">
          <SearchBox onInputChange = {this.onSearchInputChange} />
          <Filter onFilterChange = {this.onFilterChange} />
        </div>
        <CardsArray countries = {filteredCountry.slice(0,100)} />
      </div>
    )
  }


}


export default App;
