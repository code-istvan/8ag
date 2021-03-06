import React, { useEffect } from "react";
import "./App.css";
import Navbar8 from "./components/Navbar8";
import Footer from "./components/Footer";
//Router
import { Switch, Route } from "react-router-dom";
// Import Pages
import Fooldal from "./pages/Fooldal";
import EgySzazalek from "./pages/EgySzazalek";
import Kapcsolat from "./pages/Kapcsolat";
// import Blog from "./pages/Blog";
import BlogNew from "./pages/BlogNew";
import BlogAuth from "./pages/BlogAuth";
import Projekt from "./pages/Projekt";
import Projektjeink from "./pages/Projektjeink";
import Adatvedelem from "./pages/Adatvedelem";
import Blog1 from "./blogposts/Blog1";
import Uvegzseb from "./pages/Uvegzseb";
import ReactGA from "react-ga";
import NotFound from "./components/NotFound";
import ViewBlog from "./pages/ViewBlog";
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
        <Route path="/" exact component={Fooldal}></Route>
        <Route path="/projektjeink" component={Projektjeink}></Route>
        <Route path="/egyszazalek" component={EgySzazalek}></Route>
        <Route path="/projekt" component={Projekt}></Route>
        <Route path="/uvegzseb" component={Uvegzseb}></Route>
        <Route path="/kapcsolat" component={Kapcsolat}></Route>
        <Route path="/blog" component={BlogNew}></Route>
        <Route path="/createblog" component={BlogAuth}></Route>
        <Route path="/post/:title" component={ViewBlog}></Route>
        <Route path="/adatvedelem" component={Adatvedelem}></Route>
        <Route path="/indul-a-blogunk" component={Blog1}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
