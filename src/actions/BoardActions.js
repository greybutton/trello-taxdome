import * as types from '../constants/actionTypes';

export const getBoard = id => ({
  type: types.GET_BOARD,
  payload: id,
});

export const getBoardPending = () => ({
  type: types.GET_BOARD_PENDING,
});

export const getBoardFulfilled = board => ({
  type: types.GET_BOARD_FULFILLED,
  payload: board,
});

export const getBoardRejected = error => ({
  type: types.GET_BOARD_REJECTED,
  payload: error,
  error: true,
});

export const createBoard = board => ({
  type: types.CREATE_BOARD,
  payload: board,
});

export const createBoardPending = () => ({
  type: types.CREATE_BOARD_PENDING,
});

export const createBoardFulfilled = board => ({
  type: types.CREATE_BOARD_FULFILLED,
  payload: board,
});

export const createBoardRejected = error => ({
  type: types.CREATE_BOARD_REJECTED,
  payload: error,
  error: true,
});

export const updateBoard = board => ({
  type: types.UPDATE_BOARD,
  payload: board,
});

export const updateBoardPending = () => ({
  type: types.UPDATE_BOARD_PENDING,
});

export const updateBoardFulfilled = boards => ({
  type: types.UPDATE_BOARD_FULFILLED,
  payload: boards,
});

export const updateBoardRejected = error => ({
  type: types.UPDATE_BOARD_REJECTED,
  payload: error,
  error: true,
});

export const deleteBoard = id => ({
  type: types.DELETE_BOARD,
  payload: id,
});

export const deleteBoardFulfilled = boards => ({
  type: types.DELETE_BOARD_FULFILLED,
  payload: boards,
});

export const deleteBoardRejected = error => ({
  type: types.DELETE_BOARD_REJECTED,
  payload: error,
  error: true,
});

export const getBoards = () => ({
  type: types.GET_BOARDS,
});

export const getBoardsPending = () => ({
  type: types.GET_BOARDS_PENDING,
});

export const getBoardsFulfilled = boards => ({
  type: types.GET_BOARDS_FULFILLED,
  payload: boards,
});

export const getBoardsRejected = error => ({
  type: types.GET_BOARDS_REJECTED,
  payload: error,
  error: true,
});
