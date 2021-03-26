import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {useEffect} from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Portugal from './pages/portugal';
import Angola from './pages/angola';
import Brasil from './pages/brasil';
import CaboVerde from './pages/cabo-verde';
import GuineBissau from './pages/guine-bissau';
import Macau from './pages/macau';
import Mocambique from './pages/mocambique';
import SaoTomePrincipe from './pages/sao-tome-principe';
import TimorLeste from './pages/timor-leste';
import Home from './pages/home';
import About from './pages/about';


function App({hideLoader}) {
  useEffect(hideLoader, []);

  return (
  <Router> 
  <div>
    <Header />
    <div className="body">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Portugal" component={Portugal} />
        <Route path="/Angola" component={Angola} />
        <Route path="/Brasil" component={Brasil} />
        <Route path="/Cabo-verde" component={CaboVerde} />
        <Route path="/Guine-bissau" component={GuineBissau} />
        <Route path="/Macau" component={Macau} />
        <Route path="/Mocambique" component={Mocambique} />
        <Route path="/Sao-tome-principe" component={SaoTomePrincipe} />
        <Route path="/Timor-leste" component={TimorLeste} />
      </Switch>
    </div>
     <Footer />
   </div>
   </Router>
   );
}

export default App;
