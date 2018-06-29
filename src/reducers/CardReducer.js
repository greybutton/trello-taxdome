import * as types from '../constants/actionTypes';

export const defaultState = {
  cards: [],
  card: {},
  loading: false,
  error: null,
  errors: {},
};

const mapper = (cards) => {
  const result = cards.reduce((acc, card) => {
    const { columnId } = card;
    const newAcc = acc[columnId]
      ? { ...acc, [columnId]: acc[columnId].concat(card) }
      : { ...acc, [columnId]: [card] };
    return newAcc;
  }, {});
  return result;
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case types.GET_CARD_PENDING: {
      return {
        ...state,
        loading: true,
        card: {},
      };
    }
    case types.GET_CARD_FULFILLED: {
      return {
        ...state,
        card: action.payload,
        loading: false,
      };
    }
    case types.GET_CARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.CREATE_CARD_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.CREATE_CARD_FULFILLED: {
      const { columnId } = action.payload;
      const { cards } = state;
      const columnCards = cards[columnId]
        ? cards[columnId].concat(action.payload)
        : [action.payload];
      const newCards = { ...cards, [columnId]: columnCards };
      return {
        ...state,
        cards: newCards,
        loading: false,
        errors: {},
      };
    }
    case types.CREATE_CARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.UPDATE_CARD_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.UPDATE_CARD_FULFILLED: {
      return {
        ...state,
        cards: mapper(action.payload),
        loading: false,
        errors: {},
      };
    }
    case types.UPDATE_CARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.DELETE_CARD_FULFILLED: {
      return {
        ...state,
        cards: mapper(action.payload),
        loading: false,
        errors: {},
      };
    }
    case types.DELETE_CARD_REJECTED: {
      const { error, payload } = action;
      return {
        ...state,
        error,
        errors: { message: payload.message },
      };
    }
    case types.GET_CARDS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_CARDS_FULFILLED: {
      return {
        ...state,
        cards: mapper(action.payload),
        loading: false,
      };
    }
    case types.GET_CARDS_REJECTED: {
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
