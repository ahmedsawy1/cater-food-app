import {ActionType} from '../types/types';

const initialState = {
  cart: 0,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return {...state, cart: state.cart + action.payload};

    default:
      return state;
  }
};
