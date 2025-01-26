import { useState } from 'react'
import { Outlet } from "react-router-dom";
import './App.css'
import Cards from './Cards'

function App() {

  return (
    <>
      {/* <Cards /> */}
      <Outlet context={{  }} />
    </>
  )
}

export default App
