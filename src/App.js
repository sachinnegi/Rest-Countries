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
    }
  }

  componentDidMount(){
    const url = "https://restcountries.eu/rest/v2/all";
    const fetchCountries = async () =>{
      const resp = await fetch(url);
      const data = await resp.json();
      this.setState({countries: data});
      console.log(this.state.countries[0].name);
    }
    fetchCountries();

    // fetch('https://restcountries.eu/rest/v2/all')
    //   .then(response => response.json())
    //     .then(data => console.log(data[0].name,data[0].currencies[0].name))
  }

  render(){
    return(
      <div>
        <Header />
        <SearchBox/>
        <Filter/>
        <CardsArray countries = {this.state.countries} />
      </div>
    )
  }


}


export default App;
