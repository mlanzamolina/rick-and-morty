import React from 'react';
import './App.css';
import Header from './common/header';
import ClasesCharacter from './components/ClasesCharacter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DetallesCharacters from './components/DetallesCharacters';


function App() {
  return (
    <Router>
        <Header></Header>
    <div className="container">
    <Switch>
      <Route exact path="/">
      <ClasesCharacter />
      </Route>
      <Route path="/DetallesCharacters/:id">
      <DetallesCharacters />
      </Route>
      </Switch>
    </div>
 
   </Router>
  );
}

export default App;
