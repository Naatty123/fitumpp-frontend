import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Blog from './pages/Blog'
import Testi from './pages/Testi'

export default function App() {
  return (
    <Router>
    <Header/>
        <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/>} />
          <Route path='/contact' element={ <Contact/>} />
          <Route path='/product' element={ <Products/>} />
          <Route path='/blog' element={ <Blog/>} />
          <Route path='/testi' element={ <Testi/>} />
        </Routes>
        </main>
    <Footer/>
   </Router>
  )
}
