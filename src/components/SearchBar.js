import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div>
      <nav className="navbar">
        <div className="btn-group">
        <form action="submit">
            <input className='btn-search' type="text" placeholder='Search Here'/>
            <span className='btn-search search'>🔍Search</span>
            <span className='btn-search search add'>➕</span>
        </form>
        </div>
      </nav>
    </div></>
  )
}

export default SearchBar