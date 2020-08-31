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



  onSearchInputChange = (event) =>{
    this.setState( {searchField : event.target.value} )
  }

  render(){

    const filteredCountry = this.state.countries.filter( country => {
      return ( country.name.toLowerCase().includes(this.state.searchField.toLowerCase() ));
    })

    return(
      <div>
        <Header />
        <div className= "search-and-filter">
          <SearchBox onInputChange = {this.onSearchInputChange} />
          <Filter />
        </div>
        <CardsArray countries = {filteredCountry} />
      </div>
    )
  }


}


export default App;
