import React from 'react';
import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import Characters from "./containers/Characters";
import Stories from "./containers/Stories";
import Navigation from './components/Nav';
import Main from "./containers/Main";
import Footer from "./components/Footer";


// 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=0fb1dc2e0eeeb965f0977333e073bd40&hash=60b1c058e51daa0303d90a24d75b0631'

function App(props) {
  return (
    <>
      <Navigation>
        <Link className='nav_text' to='/main'>Main</Link>
        <Link className='nav_text' to='/characters'>Characters</Link>
        <Link className='nav_text' to='/stories'>Stories</Link>
      </Navigation>

      <Switch>
        <Route path='/characters'>
          <Characters />
        </Route>
        <Route path='/stories'>
          <Stories />
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
      </Switch>
     <Footer/>
    </>
  )
}

export default App;
