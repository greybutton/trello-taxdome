import * as types from '../constants/actionTypes';

export const defaultState = {
  isBoardCreate: false,
  isBoardEdit: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.CREATE_BOARD_START: {
      return {
        ...state,
        isBoardCreate: true,
      };
    }
    case types.CREATE_BOARD_CANCEL: {
      return {
        ...state,
        isBoardCreate: false,
      };
    }
    case types.UPDATE_BOARD_START: {
      return {
        ...state,
        isBoardEdit: true,
      };
    }
    case types.UPDATE_BOARD_CANCEL:
    case types.UPDATE_BOARD_FULFILLED: {
      return {
        ...state,
        isBoardEdit: false,
      };
    }
    default:
      return state;
  }
};
