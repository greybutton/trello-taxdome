import * as localStorage from './localStorage';

const boardsUrl = 'boards';
const columnsUrl = 'columns';
const cardsUrl = 'cards';

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

  // delete relative columns
  const columns = JSON.parse(localStorage.getItem(columnsUrl)) || [];
  const columnsToStay = columns.filter(column => column.boardId !== id);
  localStorage.setItem(columnsUrl, JSON.stringify(columnsToStay));

  // delete relative cards
  const cards = JSON.parse(localStorage.getItem(cardsUrl)) || [];
  const cardsToStay = cards.filter(card => card.boardId !== id);
  localStorage.setItem(cardsUrl, JSON.stringify(cardsToStay));

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

  // delete relative cards
  const cards = JSON.parse(localStorage.getItem(cardsUrl)) || [];
  const cardsToStay = cards.filter(card => card.columnId !== id);
  localStorage.setItem(cardsUrl, JSON.stringify(cardsToStay));

  return boardColumns;
};

// Card
export const createCard = (item) => {
  const card = {
    id: hash(),
    ...item,
  };
  const cards = JSON.parse(localStorage.getItem(cardsUrl)) || [];
  const newCards = [...cards, card];
  const value = JSON.stringify(newCards);
  localStorage.setItem(cardsUrl, value);
  return card;
};

export const getCard = (id) => {
  const cards = JSON.parse(localStorage.getItem(cardsUrl));
  const card = cards.filter(item => item.id === id)[0];
  return card;
};

export const getCards = (boardId) => {
  const allCards = JSON.parse(localStorage.getItem(cardsUrl)) || [];
  const cards = allCards.filter(card => card.boardId === boardId);
  return cards;
};

export const updateCard = (card) => {
  const { id, boardId } = card;
  const cards = JSON.parse(localStorage.getItem(cardsUrl));
  const index = cards.findIndex(item => item.id === id);
  const start = cards.slice(0, index);
  const end = cards.slice(index + 1);
  const newCards = [...start, card, ...end];
  const value = JSON.stringify(newCards);
  localStorage.setItem(cardsUrl, value);
  const boardCards = getCards(boardId);
  return boardCards;
};

export const deleteCard = (card) => {
  const { id, boardId } = card;
  const cards = JSON.parse(localStorage.getItem(cardsUrl));
  const newCards = cards.filter(item => item.id !== id);
  const value = JSON.stringify(newCards);
  localStorage.setItem(cardsUrl, value);
  const boardCards = getCards(boardId);
  return boardCards;
};

// Drag and Drop
export const movingCard = (column, card) => {
  const { id } = column;
  const newCard = {
    ...card,
    columnId: id,
  };
  updateCard(newCard);
};

export const sortingCard = (dragIndex, hoverIndex, dragCard, hoverCard) => {
  const { columnId } = dragCard;
  const cards = JSON.parse(localStorage.getItem(cardsUrl));
  const columnCards = cards.filter(card => card.columnId === columnId);
  const otherCards = cards.filter(card => card.columnId !== columnId);
  if (hoverIndex > dragIndex) {
    const start = columnCards.slice(0, dragIndex);
    const rest = columnCards.slice(dragIndex, hoverIndex + 1);
    const end = columnCards.slice(hoverIndex + 1);
    const restWithoutDragCard = rest.filter(card => card.id !== dragCard.id);
    const newRest = [...restWithoutDragCard, dragCard];
    const newColumnCards = [...start, ...newRest, ...end];
    const value = JSON.stringify([...newColumnCards, ...otherCards]);
    localStorage.setItem(cardsUrl, value);
  }
  if (dragIndex > hoverIndex) {
    const start = columnCards.slice(0, hoverIndex);
    const rest = columnCards.slice(hoverIndex, dragIndex + 1);
    const end = columnCards.slice(dragIndex + 1);
    const restWithoutDragCard = rest.filter(card => card.id !== dragCard.id);
    const newRest = [dragCard, ...restWithoutDragCard];
    const newColumnCards = [...start, ...newRest, ...end];
    const value = JSON.stringify([...newColumnCards, ...otherCards]);
    localStorage.setItem(cardsUrl, value);
  }
};

export const sortingCardColumn = (dragIndex, hoverIndex, dragCard, hoverCard) => {
  const { columnId } = hoverCard;
  const cards = JSON.parse(localStorage.getItem(cardsUrl));
  const columnCards = cards.filter(card => card.columnId === columnId);
  const otherCards = cards
    .filter(card => card.columnId !== columnId)
    .filter(card => card.id !== dragCard.id);
  const newDragCard = {
    ...dragCard,
    columnId,
  };
  const start = columnCards.slice(0, hoverIndex);
  const end = columnCards.slice(hoverIndex);
  const newCards = [...start, newDragCard, ...end];
  const value = JSON.stringify([...newCards, ...otherCards]);
  localStorage.setItem(cardsUrl, value);
};

