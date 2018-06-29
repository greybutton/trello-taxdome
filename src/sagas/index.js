import { fork, all } from 'redux-saga/effects';
import * as Watchers from './watchers';

export default function* root() {
  yield all([
    fork(Watchers.watchCreateBoard),
    fork(Watchers.watchGetBoard),
    fork(Watchers.watchUpdateBoard),
    fork(Watchers.watchDeleteBoard),
    fork(Watchers.watchGetBoards),
    fork(Watchers.watchCreateColumn),
    fork(Watchers.watchGetColumn),
    fork(Watchers.watchUpdateColumn),
    fork(Watchers.watchDeleteColumn),
    fork(Watchers.watchGetColumns),
    fork(Watchers.watchCreateCard),
    fork(Watchers.watchGetCard),
    fork(Watchers.watchUpdateCard),
    fork(Watchers.watchDeleteCard),
    fork(Watchers.watchGetCards),
  ]);
}
