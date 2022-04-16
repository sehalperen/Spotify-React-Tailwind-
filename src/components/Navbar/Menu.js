import React from 'react'
import { Icon } from 'image/Icons'

const Menu = () => {
  return (
    <nav className="px-2">
        <ul className="flex flex-col py-6">
            <li> 
                <a href="#" className="h-10 flex gap-4 items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active">
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </a>
                    
            </li>
            <li>
                <a href="#" className="h-10 flex gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                    <span>
                        <Icon name="search"/>
                    </span>
                    Ara
                </a>
            </li>
            <li>
                <a href="#" className="h-10 flex gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
                    <span>
                        <Icon name="book"/>
                    </span>
                    Kitaplığın
                </a>
            </li>
        </ul>    
    </nav>
  )
}

export default Menu