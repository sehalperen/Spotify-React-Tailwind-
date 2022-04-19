import React from 'react'
import logo from 'image/logo.svg'
import Menu from './Navbar/Menu'
import { Icon } from 'image/Icons'

const Sidebar = () => {
  return (
    <aside className="w-60 py-6 flex flex-col bg-black">
        <a href="#" className="px-6 mb-5">
            <img src={logo} alt="logo" className="h-10"/>
        </a>
        <Menu />
      
      <nav className="mt-0">
        <ul>
          <li>
            <a href="#" className="flex py-2 px-6 text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-2 bg-white rounded-sm text-black">
                <Icon name="plus"  size={16}/>
              </span>
                Çalma Listesi Oluştur
            </a>
            <a href="#" className="flex py-2 px-6 text-sm text-link font-semibold hover:text-white">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <Icon name="heart" size={16}/>
              </span>
                Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

    </aside>
  )
}

export default Sidebar