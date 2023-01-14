import React from 'react'
import Router from '../Routes/Router'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'


export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main_layout">
        <TopNav />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  )
}
