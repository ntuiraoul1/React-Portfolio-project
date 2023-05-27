import React from 'react';
import './index.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About' 
import Footer from './components/footer/Footer'
import Experience from './components/Experience/Experience';
// import Services from './components/Services/Services'; 
function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      {/* <Services/>  */}
      <Footer/>
    </>
  );
}

export default App;
