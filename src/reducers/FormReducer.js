import { CREATE_BOARD_FULFILLED } from '../constants/actionTypes';

export default {
  board: (state, action) => {
    switch (action.type) {
      case CREATE_BOARD_FULFILLED:
        return undefined;
      default:
        return state;
    }
  },
};
