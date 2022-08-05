import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './pages/home';
import Femme_Dept from './pages/femme_dept'

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
    <div className="App">
      <Header setPage={setPage} />
      <Router>
        <Routes>
          <Route path="/sophie_homer_portfolio" element={<Home />} />
          <Route path="/femme_dept" element={<Femme_Dept />} />
         </Routes>
      </Router>
      <Footer /> 
    </div>
  );
}



export default App;
