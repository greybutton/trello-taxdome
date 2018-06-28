import * as localStorage from './localStorage';

const boardsUrl = 'boards';
const columnsUrl = 'columns';

const hash = () => (+new Date()).toString(36);

// Boards
export const getBoard = (id) => {
  const boards = JSON.parse(localStorage.getItem(boardsUrl));
  const board = boards.filter(item => item.id === id)[0];
  return board;
};

export const createBoard = (item) => {
  const board = {
    id: hash(),
    ...item,
  };
  const boards = JSON.parse(localStorage.getItem(boardsUrl)) || [];
  const newBoards = [...boards, board];
  const value = JSON.stringify(newBoards);
  localStorage.setItem(boardsUrl, value);
  return board;
};

export const updateBoard = (board) => {
  const boards = JSON.parse(localStorage.getItem(boardsUrl));
  const index = boards.findIndex(item => item.id === board.id);
  const start = boards.slice(0, index);
  const end = boards.slice(index + 1);
  const newBoards = [...start, board, ...end];
  const value = JSON.stringify(newBoards);
  localStorage.setItem(boardsUrl, value);
  return board;
};

export const deleteBoard = (id) => {
  const boards = JSON.parse(localStorage.getItem(boardsUrl));
  const newBoards = boards.filter(board => board.id !== id);
  const value = JSON.stringify(newBoards);
  localStorage.setItem(boardsUrl, value);
  return newBoards;
};

export const getBoards = () => {
  const boards = JSON.parse(localStorage.getItem(boardsUrl)) || [];
  return boards;
};

// Columns
export const createColumn = (item) => {
  const column = {
    id: hash(),
    ...item,
  };
  const columns = JSON.parse(localStorage.getItem(columnsUrl)) || [];
  const newColumns = columns.concat(column);
  const value = JSON.stringify(newColumns);
  localStorage.setItem(columnsUrl, value);
  return column;
};

export const getColumn = (id) => {
  const columns = JSON.parse(localStorage.getItem(columnsUrl));
  const column = columns.filter(item => item.id === id)[0];
  return column;
};

export const getColumns = (boardId) => {
  const allColumns = JSON.parse(localStorage.getItem(columnsUrl)) || [];
  const columns = allColumns.filter(column => column.boardId === boardId);
  return columns;
};

export const updateColumn = (column) => {
  const { id, boardId } = column;
  const columns = JSON.parse(localStorage.getItem(columnsUrl));
  const index = columns.findIndex(item => item.id === id);
  const start = columns.slice(0, index);
  const end = columns.slice(index + 1);
  const newColumns = [...start, column, ...end];
  const value = JSON.stringify(newColumns);
  localStorage.setItem(columnsUrl, value);
  const boardColumns = getColumns(boardId);
  return boardColumns;
};

export const deleteColumn = (column) => {
  const { id, boardId } = column;
  const columns = JSON.parse(localStorage.getItem(columnsUrl));
  const newColumns = columns.filter(item => item.id !== id);
  const value = JSON.stringify(newColumns);
  localStorage.setItem(columnsUrl, value);
  const boardColumns = getColumns(boardId);
  return boardColumns;
};
