import store from './store';
import { movingCard, sortingCard, sortingCardColumn } from './api';
import { getCards } from './actions/CardActions';

const emitChange = (id) => {
  store.dispatch(getCards(id));
};

export const moveCard = (column, card) => {
  const { boardId } = column;
  movingCard(column, card);
  emitChange(boardId);
};

export const sortCard = (dragIndex, hoverIndex, dragCard, hoverCard) => {
  const { boardId } = dragCard;
  sortingCard(dragIndex, hoverIndex, dragCard, hoverCard);
  emitChange(boardId);
};

export const sortCardColumn = (dragIndex, hoverIndex, dragCard, hoverCard) => {
  const { boardId } = dragCard;
  sortingCardColumn(dragIndex, hoverIndex, dragCard, hoverCard);
  emitChange(boardId);
};
