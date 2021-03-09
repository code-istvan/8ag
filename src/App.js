import React, { useEffect } from "react";
import "./App.css";
import Navbar8 from "./components/Navbar8";
import Footer from "./components/Footer";
import Mainimage from "./components/Image";
//Router
import { Switch, Route } from "react-router-dom";
// Import Pages
import Fooldal from "./pages/Fooldal";
import EgySzazalek from "./pages/EgySzazalek";
import Kapcsolat from "./pages/Kapcsolat";
import Projekt from "./pages/Projekt";
import Projektjeink from "./pages/Projektjeink";
import Adatvedelem from "./pages/Adatvedelem";
import Uvegzseb from "./pages/Uvegzseb";
import ReactGA from "react-ga";
// import RouteChangeTracker from './components/RouteChangeTracker';

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-190644138-1");
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Navbar8 />
      <Switch>
        <Route path="/" exact>
          <Mainimage />
          <Fooldal />
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
        <Route path="/adatvedelem">
          <Mainimage />
          <Adatvedelem />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
