import React from 'react'
import './App.scss'
import Header from './components/Modules/header/Header'
import Footer from './components/Modules/footer/Footer'

import { Route, Routes  } from 'react-router-dom'
import HjemPage from './components/Modules/pages/Hjem'
import HvordanPage from './components/Modules/pages/hvordan'
import FindPage from './components/Modules/pages/findos'
import OmosPage from './components/Modules/pages/omos'
import KontaktPage from './components/Modules/pages/kontakt'



function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
      {/* <Switch> */}
     <Route path='/'element={<HjemPage />} />
     <Route path='/hvordan'element={<HvordanPage />} />
     <Route path='/find'element={<FindPage />} />
     <Route path='/omos'element={<OmosPage />} />
     <Route path='/kontakt'element={<KontaktPage />} />
     <Route path='/hvordan/:faq'element={<HvordanPage/>} />

     </Routes>

     {/* </Switch> */}
     <Footer></Footer>
   
 
    </div>
  )
}

export default App
