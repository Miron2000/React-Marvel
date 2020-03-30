import React from 'react';
import {Spinner, Form, Button} from 'react-bootstrap';

import '../App.css';
import { apiKey, hash } from '../config';
import Character from '../components/Character';

const api = 'http://gateway.marvel.com/v1/public/';

// 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0fb1dc2e0eeeb965f0977333e073bd40&hash=60b1c058e51daa0303d90a24d75b0631'

class Characters extends React.Component {
 
state ={
characters:[],
search: '',
};

componentDidMount(){
 
this.fetchCharacters()
}

// Викликаєтся при завантаженні сторінки, і при натиску на кнопку
fetchCharacters = async (character) => {
  const query = character ? `nameStartsWith=${character}&`: '';
const data = await fetch(`${api}characters?${query}ts=1&apikey=${apiKey}&hash=${hash}`);
const json = await data.json();
console.log(json);
this.setState({
  characters:json.data.results,
});
}

handleInputChange = (e) =>{
  this.setState({
    search:e.target.value.toUpperCase()
  });
};

handleCharacterSearch = () =>{
  this.fetchCharacters(this.state.search)
};


// <Spinner animation="border" role="status">
// <span className="sr-only">Loading...</span>
// </Spinner>

render(){
  return(
    <div>
      <Form className="row_hero">
      <Form.Control className="input_hero" onChange={this.handleInputChange} value={this.state.search}/>
      <Button className="btn_hero" type="button" variant="secondary" onClick={this.handleCharacterSearch}>Search</Button>
      </Form>
      {this.state.characters.length ? this.state.characters.map(item => <Character character={item} key={item.id}/>)
:'No such character available. Please? check your spelling'}

    </div>
  )
}
  
}

export default Characters;
