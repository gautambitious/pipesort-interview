import React from 'react';

const Seach_Bar= ({textUpdated}) => {
  return (
    <div>
      <input className="br2 p2"
        placeholder="Search for Robots"
        type="search"
        onChange={textUpdated}/>
    </div>
  )
}
export default Seach_Bar;
