import React from 'react'
import './App.scss'
import Header from './components/Modules/header/Header'
import Footer from './components/Modules/footer/Footer'
import { Route, Routes  } from 'react-router-dom'
import HjemPage from './components/Modules/pages/HjemPage'
import HvordanPage from './components/Modules/pages/HvordanPage'
import FindPage from './components/Modules/pages/FindPage'
import OmosPage from './components/Modules/pages/OmosPage'
import KontaktPage from './components/Modules/pages/KontaktPage'
import { HowFaq } from './components/Modules/heros2/heroFaq'

import ScrollToTop from './ScrollToTop'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <ScrollToTop/>
      <Routes>
     <Route path='/'element={<HjemPage />} />
     <Route path='/hvordan'element={<HvordanPage />} />
     <Route path='/find'element={<FindPage />} />
     <Route path='/omos'element={<OmosPage />} />
     <Route path='/kontakt'element={<KontaktPage />} />
     <Route path='/faq'element={( <>< HowFaq/> </> )} />
     </Routes>
     <Footer></Footer>
    </div>
  )
}

export default App
