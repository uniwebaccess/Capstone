
import './style/App.css';
import React from 'react'
import Routes from './routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import NavBar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello World</h1>
      <Home />
      {/* <Routes /> */}
      <Footer />
      /</div>
  );
}

export default App;
