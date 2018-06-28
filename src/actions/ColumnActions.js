import * as types from '../constants/actionTypes';

export const getColumn = id => ({
  type: types.GET_COLUMN,
  payload: id,
});

export const getColumnPending = () => ({
  type: types.GET_COLUMN_PENDING,
});

export const getColumnFulfilled = column => ({
  type: types.GET_COLUMN_FULFILLED,
  payload: column,
});

export const getColumnRejected = error => ({
  type: types.GET_COLUMN_REJECTED,
  payload: error,
  error: true,
});

export const createColumn = column => ({
  type: types.CREATE_COLUMN,
  payload: column,
});

export const createColumnPending = () => ({
  type: types.CREATE_COLUMN_PENDING,
});

export const createColumnFulfilled = column => ({
  type: types.CREATE_COLUMN_FULFILLED,
  payload: column,
});

export const createColumnRejected = error => ({
  type: types.CREATE_COLUMN_REJECTED,
  payload: error,
  error: true,
});

export const updateColumn = column => ({
  type: types.UPDATE_COLUMN,
  payload: column,
});

export const updateColumnPending = () => ({
  type: types.UPDATE_COLUMN_PENDING,
});

export const updateColumnFulfilled = columns => ({
  type: types.UPDATE_COLUMN_FULFILLED,
  payload: columns,
});

export const updateColumnRejected = error => ({
  type: types.UPDATE_COLUMN_REJECTED,
  payload: error,
  error: true,
});

export const deleteColumn = column => ({
  type: types.DELETE_COLUMN,
  payload: column,
});

export const deleteColumnFulfilled = columns => ({
  type: types.DELETE_COLUMN_FULFILLED,
  payload: columns,
});

export const deleteColumnRejected = error => ({
  type: types.DELETE_COLUMN_REJECTED,
  payload: error,
  error: true,
});

export const getColumns = id => ({
  type: types.GET_COLUMNS,
  payload: id,
});

export const getColumnsPending = () => ({
  type: types.GET_COLUMNS_PENDING,
});

export const getColumnsFulfilled = columns => ({
  type: types.GET_COLUMNS_FULFILLED,
  payload: columns,
});

export const getColumnsRejected = error => ({
  type: types.GET_COLUMNS_REJECTED,
  payload: error,
  error: true,
});
