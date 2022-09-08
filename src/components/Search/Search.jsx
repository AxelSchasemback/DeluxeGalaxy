import React from 'react'
import "./Search.css"


const Search = () => {
    // const [buscarProducto, setBuscarProducto] = useState([])
    return (
        <>
            <div className='searchContent' >
                <span className="span-border"></span>
                <input className='search-input' type="search" placeholder="Busqueda"
                    onChange={((busqueda) => console.log(busqueda.target.value.toUpperCase().trim))} />
            </div>
        </>
    )
}

export default Search;

