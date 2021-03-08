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
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import picSmall from "./pics/landing_img_small.jpg";
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
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Nyolcágú Jóga Alapítvány" />
        <meta
          property="og:description"
          content="Nyolcágú Jóga Alapítvány honlapja Az Alapítvány célja, hogy a jóga elméletét és gyakorlatát minél szélesebb körben és folyamatosan népszerűsítse Magyarországon. Az Indiából eredeztethető jóga már évezredek óta segíti az embereket a testi és lelki egészség elérésében és megőrzésében. "
        />
        <meta property="og:image" content={picSmall} />
        <meta property="og:url" content="https://nyolcag.hu/" />
        <meta property="og:type" content="object" />
        <meta property="fb:app_id" content="1076431962839514" />
      </Helmet>
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
