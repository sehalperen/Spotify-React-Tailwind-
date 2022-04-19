import React from 'react'
import { Icon } from 'image/Icons'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="px-2">
        <ul className="flex flex-col py-6">
            <li> 
                <NavLink to={"/"} className={({ isActive }) => 
                    isActive ? 'bg-active text-white h-10 flex gap-4 items-center text-sm font-semibold rounded hover:text-white px-4' : 'h-10 flex gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'
                }
                >
                    
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </NavLink>
                    
            </li>
            <li>
                <NavLink to={"/search"} className={({ isActive }) => 
                    isActive ? 'bg-active text-white h-10 flex gap-4 items-center text-sm font-semibold rounded hover:text-white px-4' : 'h-10 flex gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'
                }>
                    <span>
                        <Icon name="search"/>
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink to={"/collection"} className={({ isActive }) => 
                    isActive ? 'bg-active text-white h-10 flex gap-4 items-center text-sm font-semibold rounded hover:text-white px-4' : 'h-10 flex gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4'
                }>
                    <span>
                        <Icon name="book"/>
                    </span>
                    Kitaplığın
                </NavLink>
            </li>
        </ul>    
    </nav>
  )
}

export default Menu