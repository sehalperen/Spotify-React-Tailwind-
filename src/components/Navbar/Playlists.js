function Playlists() {
    return(
        <nav className="mx-6 mt-2 flex-auto overflow-auto py-2  border-t border-white border-opacity-10">
            <ul>
                {new Array(45).fill(<li>
                
                <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                    22.Çalma Listesi
                </a>
            </li>)}
                
            </ul>
        </nav>
    )
    
}

export default Playlists;