import React from 'react'
import logo from 'image/logo.svg'
import Menu from './Navbar/Menu'
import { Icon } from 'image/Icons'
import Playlists from './Navbar/Playlists'
import DownloadApp from './Navbar/DownloadApp'


const Sidebar = () => {
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
        <a href="#" className="px-6 mb-5">
            <img src={logo} alt="logo" className="h-10"/>
        </a>
        <Menu />
      
      <nav className="mt-0">
        <ul>
          <li>
            <a href="#" className="flex items-center py-2 px-6 group  text-sm text-link font-semibold hover:text-white">
              <span className=" w-6 h-6 opacity-70 flex items-center justify-center mr-4 bg-white group-hover:opacity-100 rounded-sm text-black">
                <Icon name="plus"  size={16}/>
              </span>
                Çalma Listesi Oluştur
            </a>
            <a href="#" className="flex items-center py-2 px-6 text-sm text-link font-semibold hover:text-white group">
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 rounded-sm text-white to-blue-200 opacity-70 group-hover:opacity-100">
                <Icon name="heart" size={16}/>
              </span>
                Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <Playlists />

      <DownloadApp />

    </aside>
  )
}

export default Sidebar