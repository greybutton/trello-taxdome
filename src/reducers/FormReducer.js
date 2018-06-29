import {
  CREATE_BOARD_FULFILLED,
  CREATE_COLUMN_FULFILLED,
  CREATE_CARD_FULFILLED,
} from '../constants/actionTypes';

export default {
  board: (state, action) => {
    switch (action.type) {
      case CREATE_BOARD_FULFILLED:
        return undefined;
      default:
        return state;
    }
  },
  column: (state, action) => {
    switch (action.type) {
      case CREATE_COLUMN_FULFILLED:
        return undefined;
      default:
        return state;
    }
  },
  card: (state, action) => {
    switch (action.type) {
      case CREATE_CARD_FULFILLED:
        return undefined;
      default:
        return state;
    }
  },
};
