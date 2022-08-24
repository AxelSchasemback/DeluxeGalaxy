import React from 'react'
import "./Search.css"

function Search ({searchProd}) {
    return (
        <div className='searchContent'>
            <span className="span-border"></span>
            <input className='search-input' type="search" placeholder={searchProd} />
        </div>
    )
}

export default Search;

