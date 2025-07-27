import React from 'react'
import Navbar from './components/nav/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Login from './components/Pages/Login'
import Sign from './components/Pages/Sign'

function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Sign-up' element={<Sign/>}></Route>
   </Routes>
   </>
  )
}

export default App
