import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import * as BoardSagas from './BoardSagas';
import * as ColumnSagas from './ColumnSagas';

// Board
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

// Column
export function* watchCreateColumn() {
  yield takeLatest(types.CREATE_COLUMN, ColumnSagas.createColumn);
}

export function* watchGetColumn() {
  yield takeLatest(types.GET_COLUMN, ColumnSagas.getColumn);
}

export function* watchUpdateColumn() {
  yield takeLatest(types.UPDATE_COLUMN, ColumnSagas.updateColumn);
}

export function* watchDeleteColumn() {
  yield takeLatest(types.DELETE_COLUMN, ColumnSagas.deleteColumn);
}

export function* watchGetColumns() {
  yield takeLatest(types.GET_COLUMNS, ColumnSagas.getColumns);
}
