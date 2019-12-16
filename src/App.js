//imported React
import React from "react";

//imported components from src folder
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";

// Basic Routing from React
import {Route, Link} from 'react-router-dom';
// import { Button } from 'reactstrap';


export default function App() {
  return (
    <main>
      <Header />
      <Link to ='/'>Home</Link>
      <Link to ='/characters'>Characters</Link>

      <Route exact path='/' component={WelcomePage}/>
      <Route path='/characters' component ={CharacterList}/> 
    </main>
  );
}
