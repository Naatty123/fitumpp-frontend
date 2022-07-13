import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
export default function App() {
  return (
    <Router>
    <Header/>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/>} />
        </Routes>
    <Footer/>
   </Router>
  )
}
