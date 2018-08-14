import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import StarCard from './components/starCard'
import ExtraInfo from './components/extraInfo.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      starGuys: [{
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "url": "https://swapi.co/api/people/1/"
      },
      {
        "name": "C-3PO",
        "height": "167",
        "mass": "75",
        "hair_color": "n/a",
        "skin_color": "gold",
        "eye_color": "yellow",
        "birth_year": "112BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.co/api/planets/1/",
        "url": "https://swapi.co/api/people/2/"
      },
      {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "hair_color": "n/a",
        "skin_color": "white, blue",
        "eye_color": "red",
        "birth_year": "33BBY",
        "gender": "n/a",
        "homeworld": "https://swapi.co/api/planets/8/",
        "url": "https://swapi.co/api/people/3/"
      },
      {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hair_color": "none",
        "skin_color": "white",
        "eye_color": "yellow",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "url": "https://swapi.co/api/people/4/"
      },
      {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female",
        "homeworld": "https://swapi.co/api/planets/2/",
        "url": "https://swapi.co/api/people/5/"
      },
      {
        "name": "Owen Lars",
        "height": "178",
        "mass": "120",
        "hair_color": "brown, grey",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "52BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "url": "https://swapi.co/api/people/6/"
      },
      {
        "name": "Beru Whitesun lars",
        "height": "165",
        "mass": "75",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "blue",
        "birth_year": "47BBY",
        "gender": "female",
        "homeworld": "https://swapi.co/api/planets/1/",
        "url": "https://swapi.co/api/people/7/"
      },
      {
        "name": "Biggs Darklighter",
        "height": "183",
        "mass": "84",
        "hair_color": "black",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "24BBY",
        "gender": "male",
        "homeworld": "https://swapi.co/api/planets/1/",
        "url": "https://swapi.co/api/people/9/"
      }],
      cardID: null
    }
    this.chooseCard = this.chooseCard.bind(this)
  }

  chooseCard(id) {
    this.setState({cardID: id})
  }

  render() {
    console.log(this.state.cardID)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>

        {this.state.cardID &&
          <ExtraInfo closeExtra={this.chooseCard} hero={this.state.starGuys[this.state.cardID]}/>
        }
        <div className='guyMap'>
          {this.state.starGuys.map((starGuy, index)=> {
            return <StarCard starGuy={starGuy} key={index} index={index} selectHero={this.chooseCard}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
