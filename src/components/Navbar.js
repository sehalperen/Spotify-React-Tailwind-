import React from 'react'
import { Icon } from 'image/Icons'
import  Navigation from './Topbar/Navigation'
import Auth from './Topbar/Auth'

const Navbar = () => {
  return (
    <div className="h-[3.75rem] flex items-center justify-between px-8">
        <Navigation/>
        <Auth/>
    </div>
  )
}

export default Navbar