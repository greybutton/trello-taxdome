import * as types from '../constants/actionTypes';

export const getCard = id => ({
  type: types.GET_CARD,
  payload: id,
});

export const getCardPending = () => ({
  type: types.GET_CARD_PENDING,
});

export const getCardFulfilled = card => ({
  type: types.GET_CARD_FULFILLED,
  payload: card,
});

export const getCardRejected = error => ({
  type: types.GET_CARD_REJECTED,
  payload: error,
  error: true,
});

export const createCard = card => ({
  type: types.CREATE_CARD,
  payload: card,
});

export const createCardPending = () => ({
  type: types.CREATE_CARD_PENDING,
});

export const createCardFulfilled = card => ({
  type: types.CREATE_CARD_FULFILLED,
  payload: card,
});

export const createCardRejected = error => ({
  type: types.CREATE_CARD_REJECTED,
  payload: error,
  error: true,
});

export const updateCard = card => ({
  type: types.UPDATE_CARD,
  payload: card,
});

export const updateCardPending = () => ({
  type: types.UPDATE_CARD_PENDING,
});

export const updateCardFulfilled = cards => ({
  type: types.UPDATE_CARD_FULFILLED,
  payload: cards,
});

export const updateCardRejected = error => ({
  type: types.UPDATE_CARD_REJECTED,
  payload: error,
  error: true,
});

export const deleteCard = card => ({
  type: types.DELETE_CARD,
  payload: card,
});

export const deleteCardFulfilled = cards => ({
  type: types.DELETE_CARD_FULFILLED,
  payload: cards,
});

export const deleteCardRejected = error => ({
  type: types.DELETE_CARD_REJECTED,
  payload: error,
  error: true,
});

export const getCards = id => ({
  type: types.GET_CARDS,
  payload: id,
});

export const getCardsPending = () => ({
  type: types.GET_CARDS_PENDING,
});

export const getCardsFulfilled = cards => ({
  type: types.GET_CARDS_FULFILLED,
  payload: cards,
});

export const getCardsRejected = error => ({
  type: types.GET_CARDS_REJECTED,
  payload: error,
  error: true,
});
