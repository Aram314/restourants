import React, { useState, useEffect, memo } from 'react';

import { useHistory } from 'react-router-dom';
import { List, Spin } from 'antd';
import fetchData from '../../utils/fetchData';
import ItemCard from '../../components/Card';
import Search from '../../components/Search';
import filterContext from '../../context';
import { haveMatchedElements } from '../../utils/helper';
import KitchenTypes from '../../components/KitchenTypes';

import './style.scss';

const { Provider } = filterContext;

function MainList() {
  const defaultItems = [];
  const [items, setItems] = useState(defaultItems);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let tempData = [];
    // all filter cases goes here....
    fetchData('/data/restaurants.json')
      .then(data => {
        if(history.location.pathname === '/') {
          tempData = data;
        } else {
          tempData = data.filter(item => item.type === history.location.pathname.slice(1))
        }
        if(searchValue) {
          tempData = tempData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        tempData = tempData.filter(item => haveMatchedElements(item.kitchenTypes, selectedTags))
        setItems(tempData)
      })
  }, [history.location.pathname, searchValue, selectedTags]);

  return (
    <Spin size="large" spinning={items === defaultItems} tip="Loading...">
      <Provider value={{ searchValue, setSearchValue, selectedTags, setSelectedTags }}>
        <div className="list-container">
          <div className="list-container-filter">
            <Search />
            <KitchenTypes />
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
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <ItemCard item={item} title={item.name}>{item.name}</ItemCard>
              </List.Item>
            )}
          />
        </div>
      </Provider>
    </Spin>
  )
}

export default memo(MainList)
