import React, { useState } from 'react';

import { List, Avatar, InputNumber, Button, Modal } from 'antd';
import { DeleteOutlined, MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import {emptyBasket, increaseCount, removeItem} from '../../redux';

import './style.scss';

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

  console.log(basket)
  let totalPrice = 0;

  const data = [];
  for (let entry of basket) {
    totalPrice += Number(entry[0].price) * entry[1];
    data.push({
      item: entry[0],
      count: entry[1],
      name: entry[0].name,
      photoUrl: entry[0].photoUrl,
      price: entry[0].price
    })
  }

  const onCountChange = (isPlus, item) => {
    dispatch(increaseCount(item, isPlus ? 1 : -1))
  }

  const makeOrder = () => {
    Modal.info({
      title: 'Your order was successfully made.',
      content: (
        <div>
          <p>Total Price ${totalPrice}.</p>
        </div>
      ),
      onOk() {
        dispatch(emptyBasket())
      },
    });
  }
  console.log(basket.size, 'size size size')
  return (
    <List
      className="basket"
      itemLayout="horizontal"
      dataSource={data}
      footer={<div className="basket-footer">
        <span className="basket-footer-total-price">Total Price: ${totalPrice}</span>
        <Button type="primary" onClick={makeOrder} disabled={!basket.size}>Order</Button>
      </div>}
      renderItem={item => (
        <List.Item
          actions={[<DeleteOutlined
            style={{color: 'white', cursor: 'pointer'}}
            onClick={() => dispatch(removeItem(item.item))}
          />]}
        >
          <List.Item.Meta
            avatar={<Avatar shape='square' src={item.photoUrl} />}
            title={<span>{item.name}</span>}
            description={'$' + item.price}
          />
          <div>
            <MinusSquareOutlined onClick={() => onCountChange(false, item.item)}/>
            <InputNumber readOnly min={1} max={1000} className="basket-count-input" value={item.count} />
            <PlusSquareOutlined onClick={() => onCountChange(true, item.item)}/>
          </div>
        </List.Item>
      )}
    />
  )
}

export default Basket
