import React from 'react';

const RefreshButton = ( {refreshClick}) => {
  return (
    <div className="pa2 dib"> 
      <button
        className="pa3 link dim ba b--green bg-white"
        onClick={refreshClick}
      >Refresh</button>
    </div>
  )
}

export default RefreshButton;