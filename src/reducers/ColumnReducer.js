import * as types from '../constants/actionTypes';

export const defaultState = {
  columns: [],
  column: {},
  loading: false,
  error: null,
  errors: {},
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.GET_COLUMN_PENDING: {
      return {
        ...state,
        loading: true,
        column: {},
      };
    }
    case types.GET_COLUMN_FULFILLED: {
      return {
        ...state,
        column: action.payload,
        loading: false,
      };
    }
    case types.GET_COLUMN_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.CREATE_COLUMN_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.CREATE_COLUMN_FULFILLED: {
      return {
        ...state,
        columns: state.columns.concat(action.payload),
        loading: false,
        errors: {},
      };
    }
    case types.CREATE_COLUMN_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.UPDATE_COLUMN_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_COLUMN_FULFILLED: {
      return {
        ...state,
        columns: [...action.payload],
        loading: false,
        errors: {},
      };
    }
    case types.UPDATE_COLUMN_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.DELETE_COLUMN_FULFILLED: {
      return {
        ...state,
        columns: [...action.payload],
        loading: false,
        errors: {},
      };
    }
    case types.DELETE_COLUMN_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.GET_COLUMNS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_COLUMNS_FULFILLED: {
      return {
        ...state,
        columns: [...action.payload],
        loading: false,
      };
    }
    case types.GET_COLUMNS_REJECTED: {
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
