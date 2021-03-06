import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Card, Space, InputNumber } from 'antd';
import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { addItem } from '../../redux';

import './style.scss';

const { Meta } = Card;

function MenuCard({ item }) {
  const { name, photoUrl, price } = item;
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const onChangeCount = (isPlus) => {
    if(count === 1 && !isPlus) return;
    setCount(isPlus ? count + 1 : count - 1)
  }

  return (
    <Card
      className='menu-card'
      hoverable
      cover={<img alt="example" src={photoUrl} />}
      actions={[
        <MinusSquareOutlined key="minus" onClick={() => onChangeCount(false)}/>,
        <InputNumber className="menu-card-count-input" readOnly min={1} max={1000} value={count}/>,
        <PlusSquareOutlined key="plus" onClick={() => onChangeCount(true)}/>,
        <img
          src="/img/basket-black.png"
          alt="basket"
          className="menu-card-basket"
          onClick={() => {
            setCount(1);
            dispatch(addItem(item, count))
          }}
        />,
      ]}
    >
      <Meta
        title={(<Space>
          <span>{name}</span>
          <span className="item-card-place">({price})</span>
        </Space>)}
        description={price} />
    </Card>
  )
}

export default MenuCard
