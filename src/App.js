import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer'
import AboutMe from './components/pages/AboutMe/AboutMe';
import Portfolio from './components/pages/Portfolio/Portfolio'
import Experience from './components/pages/Experience/Experience'
import ContactMe from './components/pages/ContactMe/ContactMe';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
      <Route path='/portfolio-website-v2/' exact component={Home}/>
      <Route path='portfolio-website-v2/about-me' exact component={AboutMe}/>
      <Route path='portfolio-website-v2/portfolio' exact component={Portfolio}/>
      <Route path='portfolio-website-v2/experience' exact component={Experience}/>
      <Route path='portfolio-website-v2/contact-me' exact component={ContactMe}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;