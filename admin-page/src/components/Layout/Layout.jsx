import React from 'react'
import Router from '../Routes/Router'
import SideBar from '../Sidebar/SideBar'
import TopNav from '../TopNav/TopNav'


export default function Layout() {
  return (
    <div className="layout">
      <SideBar />
      <div className="main_layout">
        <TopNav />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  )
}
