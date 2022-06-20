import React from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Navbar from "./components/Navbar/Navbar";
import  Pictures from "./components/pages/Pictures";
import Footer from "./components/Footer/Footer";
import About from "./components/about/About";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About Us";
// import Event & Exhibitions from "./components/pages/Event & Exhibitions";
// import Gallery from "./components/pages/Gallery";
// import News & Media from "./components/pages/News & Media";
// import Patrons from "./components/pages/Patrons";
// import Training from "./components/pages/Training";



const App = () => {



  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Pictures} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};
export default App;
