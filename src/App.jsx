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

  const [formState, setFormState] = useState("Signup");

  return (
    <div className='w-screen h-screen flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} {...{setFormState}}/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Login' element = {<Login setIsLoggedIn={setIsLoggedIn} {...{formState}}/>}/>
        <Route path='/Signup' element = {<Signup {...{formState}}/>}/>
        <Route  path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
