import React from 'react'
import logo from 'image/logo.svg'
import Menu from './Navbar/Menu'

const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex flex-col">
        <a href="#" className="px-6 mb-5">
            <img src={logo} alt="logo" className="h-10"/>
        </a>
        <Menu />


    </aside>
  )
}

export default Sidebar