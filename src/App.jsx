import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/NavbarContributor/NavbarContributor.component'
import Profile from './page/Goal/Goal.component'
import Home from './page/Home/Home.component'

import { Route, Routes } from 'react-router-dom'

function App() {

  
  const NavbarHover = () => {
    const goalBG = document.querySelector('.goal .bg2');
    goalBG.classList.add('bg2Active');
  }
  const NavbarHover2 = () => {
    const goalBG = document.querySelector('.goal .bg2');
    goalBG.classList.remove('bg2Active');
  }

  return (
    <Routes>
      <Route path='/' element={ <Home /> } ></Route>
      <Route path='/contributor' element={<Navbar Hover={NavbarHover} NotHover={NavbarHover2} />}>
        <Route index element={<Profile />}></Route>
        <Route path=':id' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default App
