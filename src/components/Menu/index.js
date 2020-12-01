import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { List, Card } from 'antd';
import fetchData from '../../utils/fetchData';
import MenuCard from '../MenuCard';

function Menu() {
  const history = useHistory();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const path = history.location.pathname.split('/');
    const itemId = path[path.length - 1];
    console.log(itemId, 'idididid')
    fetchData(`/data/menus/${itemId}.json`)
      .then(data => setMenu(data))
  }, []);
  // console.log(menu)
  return (
    <div>
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
  )
}

export default Menu
