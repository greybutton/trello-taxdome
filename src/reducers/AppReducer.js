import * as types from '../constants/actionTypes';

export const defaultState = {
  isBoardCreate: false,
  isBoardEdit: false,
  isColumnEdit: {
    isEdit: false,
    column: {},
  },
  isCardCreate: {
    isCreate: false,
    columnId: null,
  },
  isCardEdit: {
    isEdit: false,
    card: {},
  },
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
    case types.UPDATE_COLUMN_START: {
      return {
        ...state,
        isColumnEdit: {
          isEdit: true,
          column: action.payload,
        },
      };
    }
    case types.UPDATE_COLUMN_CANCEL:
    case types.UPDATE_COLUMN_FULFILLED: {
      return {
        ...state,
        isColumnEdit: {
          isEdit: false,
          column: {},
        },
      };
    }
    case types.CREATE_CARD_START: {
      return {
        ...state,
        isCardCreate: {
          isCreate: true,
          columnId: action.payload,
        },
      };
    }
    case types.CREATE_CARD_CANCEL: {
      return {
        ...state,
        isCardCreate: {
          isCreate: false,
          columnId: null,
        },
      };
    }
    case types.UPDATE_CARD_START: {
      return {
        ...state,
        isCardEdit: {
          isEdit: true,
          card: action.payload,
        },
      };
    }
    case types.UPDATE_CARD_CANCEL:
    case types.UPDATE_CARD_FULFILLED: {
      return {
        ...state,
        isCardEdit: {
          isEdit: false,
          card: {},
        },
      };
    }
    default:
      return state;
  }
};
