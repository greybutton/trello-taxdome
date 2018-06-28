import * as types from '../constants/actionTypes';

export const defaultState = {
  boards: [],
  board: {},
  loading: false,
  error: null,
  errors: {},
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.GET_BOARD_PENDING: {
      return {
        ...state,
        loading: true,
        board: {},
      };
    }
    case types.GET_BOARD_FULFILLED: {
      return {
        ...state,
        board: action.payload,
        loading: false,
      };
    }
    case types.GET_BOARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.CREATE_BOARD_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.CREATE_BOARD_FULFILLED: {
      return {
        ...state,
        boards: state.boards.concat(action.payload),
        loading: false,
        errors: {},
      };
    }
    case types.CREATE_BOARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.UPDATE_BOARD_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_BOARD_FULFILLED: {
      return {
        ...state,
        board: action.payload,
        loading: false,
        errors: {},
      };
    }
    case types.UPDATE_BOARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.DELETE_BOARD_FULFILLED: {
      return {
        ...state,
        boards: [...action.payload],
        loading: false,
        errors: {},
      };
    }
    case types.DELETE_BOARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.GET_BOARDS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_BOARDS_FULFILLED: {
      return {
        ...state,
        boards: [...action.payload],
        loading: false,
      };
    }
    case types.GET_BOARDS_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    default:
      return state;
  }
};
