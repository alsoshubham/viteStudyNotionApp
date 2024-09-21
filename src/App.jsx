import './App.css'
import Navbar from "./Components/Navbar"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Login' element = {<Login/>}/>
        <Route path='/Signup' element = {<Signup/>}/>
        <Route  path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
