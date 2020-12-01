import React from 'react';

import { Card, Space, Tag } from 'antd';
import { useHistory } from 'react-router-dom';
import { EllipsisOutlined, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';

import './style.scss';

const { Meta } = Card;
function InputField() {
  return (
    <input type="text"/>
  )
}

function MenuCard({ item }) {
  const { name, photoUrl, price } = item;

  const history = useHistory();
  const { kitchenTypes } = item;
  return (
    <Card
      className='menu-card'
      hoverable
      cover={<img alt="example" src={photoUrl} />}
      actions={[
        <MinusSquareOutlined key="minus" />,
        <InputNumber min={1} max={1000} defaultValue={1} />,
        <PlusSquareOutlined key="plus" />,
        <img src="/img/basket-black.png" alt="basket" className="menu-card-basket" style={{width: '25px'}}/>,
      ]}
    >
      <Meta
        title={(<Space><span>{name}</span><span className="item-card-place">({price})</span></Space>)}
        description={price} />
    </Card>
  )
}

export default MenuCard
