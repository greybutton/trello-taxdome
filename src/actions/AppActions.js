import * as types from '../constants/actionTypes';

export const createBoardStart = columnId => ({
  type: types.CREATE_BOARD_START,
  payload: columnId,
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
