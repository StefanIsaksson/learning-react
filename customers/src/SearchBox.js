import React from 'react';
import './index.css';

const SearchBox = ( {searchChange}) => {
  return (
    <div id="searchBox" className="pa2 dib"> 
      <input 
        className="pa3 ba b--green bg-white"
        type="search" 
        placeholder="filter by name"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;