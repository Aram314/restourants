import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { List } from 'antd';
// import menuContext from '../../contexts/menuContext';
import fetchData from '../../utils/fetchData';
import MenuCard from '../MenuCard';
// import Search from '../Search';

import './style.scss';

// const { Provider } = menuContext;

function Menu() {
  const history = useHistory();
  const [menu, setMenu] = useState([]);
  // const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const path = history.location.pathname.split('/');
    const itemId = path[path.length - 1];
    fetchData(`/data/menus/${itemId}.json`)
      .then(data => setMenu(data))
  }, []);

  return (
    // <Provider value={{ searchValue, setSearchValue }}>
      <div className="menu-container">
        <div className="menu-container-filter">
          {/*<Search />*/}
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 4,
          }}
          dataSource={menu}
          renderItem={item => (
            <List.Item>
              <MenuCard item={item} />
            </List.Item>
          )}
        />
      </div>
    // </Provider>
  )
}

export default Menu
