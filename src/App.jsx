import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import BlogList from './BlogList'
import CreateBlog from './CreateBlog'
import BlogDetails from './BlogDetails'

function App() {

  return (
    <>
      <Nav />
      <div className="container"><h1>Welcome to my blog page</h1></div>
      <BlogList />
      <CreateBlog />
      <BlogDetails />

    </>
  )
}

export default App
