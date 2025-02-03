import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    // Ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/signup`, userData)

      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.error("Error signing up", error)
      alert("Failed to sign up, please try again")
    }
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="Logo" />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">First Name</h3>
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg"
            type="text"
            placeholder="First Name"
          />

          <h3 className="text-lg font-medium mb-2">Last Name</h3>
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg"
            type="text"
            placeholder="Last Name"
          />

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg"
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Create Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
          />

          <h3 className="text-lg font-medium mb-2">Confirm Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            type="password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center">
          Already have an account? <Link to="/login" className="text-blue-600">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default UserSignup
