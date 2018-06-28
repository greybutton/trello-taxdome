import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as BoardActions from '../actions/BoardActions';

export function* createBoard({ payload }) {
  yield put(BoardActions.createBoardPending());
  try {
    const board = yield call(api.createBoard, payload.board);
    yield put(BoardActions.createBoardFulfilled(board));
    yield call(payload.resolve);
  } catch (e) {
    yield put(BoardActions.createBoardRejected(e));
    yield call(payload.reject);
  }
}

export function* getBoard({ payload }) {
  yield put(BoardActions.getBoardPending());
  try {
    const board = yield call(api.getBoard, payload);
    yield put(BoardActions.getBoardFulfilled(board));
  } catch (e) {
    yield put(BoardActions.getBoardRejected(e));
  }
}

export function* updateBoard({ payload }) {
  yield put(BoardActions.updateBoardPending());
  try {
    const boards = yield call(api.updateBoard, payload.board);
    yield put(BoardActions.updateBoardFulfilled(boards));
    yield call(payload.resolve);
  } catch (e) {
    yield put(BoardActions.updateBoardRejected(e));
    yield call(payload.reject);
  }
}

export function* deleteBoard({ payload }) {
  try {
    const boards = yield call(api.deleteBoard, payload);
    yield put(BoardActions.deleteBoardFulfilled(boards));
  } catch (e) {
    yield put(BoardActions.deleteBoardRejected(e));
  }
}

export function* getBoards() {
  yield put(BoardActions.getBoardsPending());
  try {
    const boards = yield call(api.getBoards);
    yield put(BoardActions.getBoardsFulfilled(boards));
  } catch (e) {
    yield put(BoardActions.getBoardsRejected(e));
  }
}
