import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import UserLogin from './pages/userlogin.jsx'
import UserSignup from './pages/usersignup.jsx'
import Captainlogin from './pages/Captainlogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'


const App = () => {
  console.log('App is rendering');
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/captainlogin" element={<Captainlogin/>} />
        <Route path="/captainsignup" element={<CaptainSignup/>} />
      </Routes>
      
    </div>
  )
}

export default App
