import React, { useState, useEffect, useMemo } from 'react';

import { useHistory } from 'react-router-dom';
import { List, Slider } from 'antd';
import filterContext from '../../context';
import fetchData from '../../utils/fetchData';
import MenuCard from '../MenuCard';
import Search from '../Search';

import './style.scss';

const { Provider } = filterContext;

function Menu() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  const minPrice = useMemo(() => Math.min(...data.map(item => item.price)), [data]);
  const maxPrice = useMemo(() => Math.max(...data.map(item => item.price)), [data]);
  const multiplier = useMemo(() => (maxPrice - minPrice) / 100, [maxPrice, minPrice]);

  useEffect(() => {
    let tempData = [];

    const path = history.location.pathname.split('/');
    const itemId = path[path.length - 1];
    // all filter cases goes here....
    fetchData(`/data/menus/${itemId}.json`)
      .then(data => {
        setData(data);
        tempData = data;

        if(searchValue) {
          tempData = tempData.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        tempData = tempData.filter(item => item.price >= min);
        tempData = tempData.filter(item => item.price <= max);
        setMenu(tempData);
      })
      .catch(err => history.push("/notfound"))
  }, [searchValue, history.location.pathname, min, max]);

  const onRangeChange = (value) => {
    setMin(multiplier * value[0] + minPrice);
    setMax(multiplier * value[1] + minPrice);
  }

  return (
    <Provider value={{ searchValue, setSearchValue }}>
      <div className="menu-container">
        <div className="menu-container-filter">
          <Search className="menu-container-filter-search"/>
          <Slider
            marks={{ 0: minPrice, 100: maxPrice }}
            className="menu-container-filter-range"
            range
            defaultValue={[0, 100]}
            onChange={onRangeChange}
            tipFormatter={value => value * multiplier + minPrice}
          />
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
    </Provider>
  )
}

export default Menu
