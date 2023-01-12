import React from 'react'
import "./SearchBar.scss"
export default function SearchBar({searchTerm, setSearchTerm}) {
  
  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }
  
    return (
    <div>
        
        <input className="searchBar" 
        placeholder="Search by Name"
        value={searchTerm}
        onChange={updateSearchTerm}
        />

    </div>
  )
}
