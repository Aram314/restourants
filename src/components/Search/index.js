import React from 'react';

import { Input } from 'antd';
import { useRestaurantsContext } from '../../contexts/restaurantsContext';

function Search() {
  const { searchValue, setSearchValue } = useRestaurantsContext();

  return (
    <div className="search-container">
      <Input placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
    </div>
  )
}

export default Search
