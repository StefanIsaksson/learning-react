import React from 'react';

const SearchBox = ( {searchChange}) => {
  return (
    <div className="pa2 dib"> 
      <input 
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="filter by name"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;