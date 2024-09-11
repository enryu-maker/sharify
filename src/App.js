import React from 'react'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Dash from './pages/home/Dash'
import FileBlockchainWithSignature from './pages/home/Share'
export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dash" element={<Dash />} />
                <Route
                    path="/share"
                    element={<FileBlockchainWithSignature />}
                />
            </Routes>
        </>
    )
}
