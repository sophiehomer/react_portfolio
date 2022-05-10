import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      {handlePage()}
      <Footer />
    </div>
  );
}



export default App;
