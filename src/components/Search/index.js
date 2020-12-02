import React from 'react';

import { Input } from 'antd';
import { useFilterContext } from '../../context';

function Search({ className }) {
  const { searchValue, setSearchValue } = useFilterContext();

  return (
    <div className={`search-container ${className}`}>
      <Input placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Search
