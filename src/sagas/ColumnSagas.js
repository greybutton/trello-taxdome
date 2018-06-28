import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as ColumnActions from '../actions/ColumnActions';

export function* createColumn({ payload }) {
  yield put(ColumnActions.createColumnPending());
  try {
    const column = yield call(api.createColumn, payload.column);
    yield put(ColumnActions.createColumnFulfilled(column));
    yield call(payload.resolve);
  } catch (e) {
    yield put(ColumnActions.createColumnRejected(e));
    yield call(payload.reject);
  }
}

export function* getColumn({ payload }) {
  yield put(ColumnActions.getColumnPending());
  try {
    const column = yield call(api.getColumn, payload);
    yield put(ColumnActions.getColumnFulfilled(column));
  } catch (e) {
    yield put(ColumnActions.getColumnRejected(e));
  }
}

export function* updateColumn({ payload }) {
  yield put(ColumnActions.updateColumnPending());
  try {
    const columns = yield call(api.updateColumn, payload.column);
    yield put(ColumnActions.updateColumnFulfilled(columns));
    yield call(payload.resolve);
  } catch (e) {
    yield put(ColumnActions.updateColumnRejected(e));
    yield call(payload.reject);
  }
}

export function* deleteColumn({ payload }) {
  try {
    const columns = yield call(api.deleteColumn, payload);
    yield put(ColumnActions.deleteColumnFulfilled(columns));
  } catch (e) {
    yield put(ColumnActions.deleteColumnRejected(e));
  }
}

export function* getColumns({ payload }) {
  yield put(ColumnActions.getColumnsPending());
  try {
    const columns = yield call(api.getColumns, payload);
    yield put(ColumnActions.getColumnsFulfilled(columns));
  } catch (e) {
    yield put(ColumnActions.getColumnsRejected(e));
  }
}
