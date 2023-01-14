import { BrowserHistory, Routes, Route } from '@remix-run/router'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Login from '../../pages/Login'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
