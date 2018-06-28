import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import * as BoardSagas from './BoardSagas';

export function* watchCreateBoard() {
  yield takeLatest(types.CREATE_BOARD, BoardSagas.createBoard);
}

export function* watchGetBoard() {
  yield takeLatest(types.GET_BOARD, BoardSagas.getBoard);
}

export function* watchUpdateBoard() {
  yield takeLatest(types.UPDATE_BOARD, BoardSagas.updateBoard);
}

export function* watchDeleteBoard() {
  yield takeLatest(types.DELETE_BOARD, BoardSagas.deleteBoard);
}

export function* watchGetBoards() {
  yield takeLatest(types.GET_BOARDS, BoardSagas.getBoards);
}
