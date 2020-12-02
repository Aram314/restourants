import { ADD_ITEM, REMOVE_ITEM, EMPTY_BASKET, INCREASE_COUNT, DECREASE_COUNT} from './basketTypes';
import produce from 'immer';
import { message } from 'antd';

const initialState = new Map();

const basketReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      message.success('Item successfully added!');
      if(state.has(action.payload.item)) {
        state.set(action.payload.item, state.get(action.payload.item) + action.payload.count);
      } else {
        state.set(action.payload.item, action.payload.count);
      }
      return;
    case REMOVE_ITEM:
      message.error('Item removed!');
      state.delete(action.payload)
      return;
    case EMPTY_BASKET:
      message.info(`Basket is empty!`)
      state.clear();
      return;
    case INCREASE_COUNT:
      if(state.get(action.payload.item) === 1 && action.payload.count === -1) {
        return
      }
      state.set(action.payload.item, state.get(action.payload.item) + action.payload.count)
      return;
    case DECREASE_COUNT:
      return state;
    default:
      return state;
  }
})

export default basketReducer
