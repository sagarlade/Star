
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Footer from './Footer';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar />
   <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="about" element={ <About/> } />
        <Route exact path="contact" element={ <Contact/> } />
        <Route exact path="Service" element={ <Service/> } />
      </Routes>
    </div>
    <Footer />
   </>
  );
}

export default App;
