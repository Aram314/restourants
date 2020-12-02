import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET, INCREASE_COUNT, DECREASE_COUNT } from './basketTypes';

export const addItem = (item, count) => {
  return {
    type: ADD_ITEM,
    payload: { item, count }
  }
}

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item
  }
}

export const emptyBasket = () => {
  return {
    type: EMPTY_BASKET
  }
}

export const increaseCount = (item, count) => {
  return {
    type: INCREASE_COUNT,
    payload: { item, count }
  }
}

export const decreaseCount = (id) => {
  return {
    type: DECREASE_COUNT,
    payload: { id }
  }
}
