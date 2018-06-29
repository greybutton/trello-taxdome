import { put, call } from 'redux-saga/effects';
import * as api from '../api';
import * as CardActions from '../actions/CardActions';

export function* createCard({ payload }) {
  yield put(CardActions.createCardPending());
  try {
    const card = yield call(api.createCard, payload.card);
    yield put(CardActions.createCardFulfilled(card));
    yield call(payload.resolve);
  } catch (e) {
    yield put(CardActions.createCardRejected(e));
    yield call(payload.reject);
  }
}

export function* getCard({ payload }) {
  yield put(CardActions.getCardPending());
  try {
    const card = yield call(api.getCard, payload);
    yield put(CardActions.getCardFulfilled(card));
  } catch (e) {
    yield put(CardActions.getCardRejected(e));
  }
}

export function* updateCard({ payload }) {
  yield put(CardActions.updateCardPending());
  try {
    const cards = yield call(api.updateCard, payload.card);
    yield put(CardActions.updateCardFulfilled(cards));
    yield call(payload.resolve);
  } catch (e) {
    yield put(CardActions.updateCardRejected(e));
    yield call(payload.reject);
  }
}

export function* deleteCard({ payload }) {
  try {
    const cards = yield call(api.deleteCard, payload);
    yield put(CardActions.deleteCardFulfilled(cards));
  } catch (e) {
    yield put(CardActions.deleteCardRejected(e));
  }
}

export function* getCards({ payload }) {
  yield put(CardActions.getCardsPending());
  try {
    const cards = yield call(api.getCards, payload);
    yield put(CardActions.getCardsFulfilled(cards));
  } catch (e) {
    yield put(CardActions.getCardsRejected(e));
  }
}
