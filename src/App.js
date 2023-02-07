import React  from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/skills/Services';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Team/>
        <Contact/>
        <Footer/> 
      </main>
    </>
  );
}

export default App;
