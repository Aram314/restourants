import React from 'react';

import { Card, Space, Tag } from 'antd';
import { useHistory } from 'react-router-dom';

import './style.scss';

const { Meta } = Card;

function ItemCard({ item }) {
  const history = useHistory();
  const { kitchenTypes } = item;
  return (
    <Card
      className='item-card'
      hoverable
      cover={<img alt="example" src={item.photoUrl} />}
      onClick={() => history.push(`${item.type}/${item.id}`)}
    >
      <Meta
        title={(<Space><span>{item.name}</span><span className="item-card-place">({item.place})</span></Space>)}
        description={(
          <Space>{kitchenTypes.map(type => (
            <Tag color="geekblue" key={type}>{type}</Tag>
          ))}</Space>
        )} />
    </Card>
  )
}

export default ItemCard
