import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio'
import Experience from './components/pages/Experience/Experience'
import ContactMe from './components/pages/ContactMe/ContactMe';
import TESTING from './components/pages/TESTING_GROUND/TESTING';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about-me' exact component={AboutMe}/>
      <Route path='/portfolio' exact component={Portfolio}/>
      <Route path='/experience' exact component={Experience}/>
      <Route path='/contact-me' exact component={ContactMe}/>
      <Route path='/testing-ground' exact component={TESTING}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;