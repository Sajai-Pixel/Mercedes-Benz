import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Vehicle from './components/Vehicle'
import Drive from './components/Drive'

function App() {
  return (
    <div>
      <Header />
      <About/>
      <Vehicle/>
      <Drive />
    </div>
  )
}

export default App
