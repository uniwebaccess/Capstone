
import './App.css';
import React from 'react'
import Routes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Routes />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
