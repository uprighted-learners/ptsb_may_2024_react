import { useState } from 'react'

import { Routes, Route, Navigate } from "react-router-dom"

import Nav from './components/Nav'
import Welcome from './components/Welcome'
import About from './components/About'
import News from './components/News'

import './App.css'

function App() {


  return (
    <div className="App" >
      <div style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "2em"
      }}>


      <Nav / >

      </div>

      <header className="App-header">

      {/* Routes - other components */}
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome/*" element={<Welcome/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/news/*" element={<News/>} />

      {/* Handle routes that are not available */}
        <Route path="/*" element= {<>ERROR 404 Not Found</>} />
        </Routes>
      </header>
    </div>
  )
}

export default App
