import React, { useState, useEffect, useMemo, memo, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { List, Slider, Spin } from 'antd';
import filterContext from '../../context';
import fetchData from '../../utils/fetchData';
import MenuCard from '../../components/MenuCard';
import Search from '../../components/Search';

import './style.scss';

const { Provider } = filterContext;

function Menu() {
  const history = useHistory();
  const defaultData = [];
  const [data, setData] = useState(defaultData);
  const [menu, setMenu] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(Infinity);

  const minPrice = useMemo(() => Math.min(...data.map(item => item.price)), [data]);
  const maxPrice = useMemo(() => Math.max(...data.map(item => item.price)), [data]);
  const multiplier = useMemo(() => (maxPrice - minPrice) / 100, [maxPrice, minPrice]);
  const pathname = history.location.pathname;

  useEffect(() => {
    let tempData = [];

    const path = pathname.split('/');
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
  }, [searchValue, pathname, min, max, history]);

  const onRangeChange = useCallback((value) => {
    setMin(multiplier * value[0] + minPrice);
    setMax(multiplier * value[1] + minPrice);
  }, [multiplier, minPrice]);

  const formatTip = useCallback((value) => {
    return value * multiplier + minPrice
  }, [multiplier, minPrice]);

  return (
    <Spin size="large" spinning={defaultData === data} tip="Loading...">
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
              tipFormatter={formatTip}
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
    </Spin>
  )
}

export default memo(Menu)
