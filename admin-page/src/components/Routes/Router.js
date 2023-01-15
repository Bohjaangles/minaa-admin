import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Dashboard from '../../pages/Dashboard'
import Login from '../../pages/Login'
import Admin from '../../pages/Admin'

const Router = () => {
  return (
    
    <Routes>
    <Route path="/" element={<Navigate to='/dashboard' element={Dashboard}/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Admin />} />
    </Routes>
  )
}

export default Router
