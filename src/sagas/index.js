import { fork, all } from 'redux-saga/effects';
import * as Watchers from './watchers';

export default function* root() {
  yield all([
    fork(Watchers.watchCreateBoard),
    fork(Watchers.watchGetBoard),
    fork(Watchers.watchUpdateBoard),
    fork(Watchers.watchDeleteBoard),
    fork(Watchers.watchGetBoards),
  ]);
}
