import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { List } from 'antd';
import fetchData from '../../utils/fetchData';
import ItemCard from '../Card';
import Search from '../Search';

import './style.scss';

function MainList() {
  const [items, setItems] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData('/data/restaurants.json')
      .then(data => {
        if(history.location.pathname === '/') {
          setItems(data)
        } else {
          setItems(data.filter(item => item.type === history.location.pathname.slice(1)))
        }
      })
  }, [history.location.pathname]);

  return (
    <div className="list-container">
      <Search />
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
        dataSource={items}
        renderItem={item => (
          <List.Item>
            <ItemCard item={item} title={item.name}>{item.name}</ItemCard>
          </List.Item>
        )}
      />
    </div>
  )
}

export default MainList
