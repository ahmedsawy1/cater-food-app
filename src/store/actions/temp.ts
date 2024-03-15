import {ActionType} from '../types/types';

export const addToCart = (payload: number) => ({
  type: ActionType.ADD_TO_CART,
  payload,
});
