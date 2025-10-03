import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import viteLogo from '/vite.svg'
import Navbar from './navbar'
import Header from './header'
import Fitur from './fitur'
import Layanan from './layanan'
import About from './about'
import Kontak from './kontak'



function App() {

  return (
    <>
      <div className="flex-column" style={{display: 'flex'}}>
        <div className="flex-column" style={{background:"linear-gradient(1deg, rgba(31, 194, 149, 0.2), rgba(37, 128, 213, 0.1)", display: 'flex', paddingLeft: '100px', paddingRight: '100px', paddingTop: '10px'}}>
          <Navbar></Navbar>
          {/* Section Header */}
          <section id="header">
              <Header></Header>
          </section>
        </div>
          {/* Section Layanan */}
          <section id="fitur">
            <Fitur></Fitur>
          </section>

          {/* Section Layanan */}
          <section id="layanan" style={{paddingTop: '20px'}}>
            <Layanan></Layanan>
          </section>

          {/* Section About */}
          <section id="about" style={{marginBottom: '50px'}}>
            <About></About>
          </section>

          {/* Section Kontak */}
          <section id="kontak">
              <Kontak></Kontak>
          </section>
        
        
        
        
      </div>
    </>
  );
}

export default App
