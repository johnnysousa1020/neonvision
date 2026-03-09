import "./Navbar.css"

function Navbar({ searchTerm, setSearchTerm }){
    return(
        <nav className="navbar">
            <h1 className="logo">NeonVision</h1>

            <input 
            type="text" 
            placeholder="Buscar imagens..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </nav>
    )
}

export default Navbar;