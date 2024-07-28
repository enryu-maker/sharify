import React from 'react'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>

  )
}