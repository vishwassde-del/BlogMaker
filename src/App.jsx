import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Nav from './Nav'

function App() {

  return (
    <>
      <Nav />
      <div className="container"><h1>Welcome to my blog page</h1></div>
      <Home />
    </>
  )
}

export default App
