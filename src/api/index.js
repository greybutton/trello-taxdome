import * as localStorage from './localStorage';

const boardsUrl = 'boards';

const hash = () => (+new Date()).toString(36);

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
