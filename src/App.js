import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About';
// import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/home';
import FemmeDept from './pages/femme_dept'
import Kit from './pages/kit'
import DinnerDrinks from './pages/dinner_drinks'
import Work from './pages/work'
import AboutExtended from './pages/about_extended';
import Resume from './pages/resume'

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [page, setPage] = useState('ABOUT')
  function handlePage() {
    switch(page) {
      case 'ABOUT':
        return <About />
      case 'RESUME': 
        return <Resume />
      case 'PORTFOLIO':
        return < Portfolio />
      case 'CONTACT':
        return <Contact />
    }
  }
  
  return (
    <div className="App" id="App">
      <Header />
      <Router id="page-wrap" basename="sophie_homer_portfolio">
        <Routes>
          <Route path="/sophie_homer_portfolio" element={<Home />} />
          <Route path="/about_extended" element={<AboutExtended />} />
          <Route path="/work" element={<Work />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/femme_dept" element={< FemmeDept/>} />
          <Route path="/kit" element={ <Kit /> } />
          <Route path="/dinner_drinks" element={ <DinnerDrinks /> } />
         </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}



export default App;
