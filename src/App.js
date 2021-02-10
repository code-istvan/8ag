import React from 'react';
import './App.css';
import Navbar8 from './components/Navbar8';
import Footer from './components/Footer';
import Mainimage from './components/Image';
//Router
import { Switch, Route } from 'react-router-dom';
// Import Pages
import Home from './pages/Home';
import EgySzazalek from './pages/EgySzazalek';
import Kapcsolat from './pages/Kapcsolat';
import Projekt from './pages/Projekt';
import Projektjeink from './pages/Projektjeink';
import Uvegzseb from './pages/Uvegzseb';

const App=()=> {
  return (
    <div className="App">
      <Navbar8 />
      <Switch>
        <Route path="/" exact>
          <Mainimage />
          <Home />
        </Route>
        <Route path="/projektjeink">
          <Mainimage />
          <Projektjeink />
        </Route>
        <Route path="/egyszazalek">
          <Mainimage />
          <EgySzazalek />
        </Route>
        <Route path="/projekt">
          <Mainimage />
          <Projekt />
        </Route>
        <Route path="/uvegzseb">
          <Mainimage />
          <Uvegzseb />
        </Route>
        <Route path="/kapcsolat">
          <Kapcsolat />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
