import * as types from '../constants/actionTypes';

export const createBoardStart = () => ({
  type: types.CREATE_BOARD_START,
});

export const createBoardCancel = () => ({
  type: types.CREATE_BOARD_CANCEL,
});

export const updateBoardStart = () => ({
  type: types.UPDATE_BOARD_START,
});

export const updateBoardCancel = () => ({
  type: types.UPDATE_BOARD_CANCEL,
});

export const updateColumnStart = column => ({
  type: types.UPDATE_COLUMN_START,
  payload: column,
});

export const updateColumnCancel = () => ({
  type: types.UPDATE_COLUMN_CANCEL,
});

export const createCardStart = columnId => ({
  type: types.CREATE_CARD_START,
  payload: columnId,
});

export const createCardCancel = () => ({
  type: types.CREATE_CARD_CANCEL,
});

export const updateCardStart = card => ({
  type: types.UPDATE_CARD_START,
  payload: card,
});

export const updateCardCancel = () => ({
  type: types.UPDATE_CARD_CANCEL,
});
