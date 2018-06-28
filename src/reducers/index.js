import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FormReducer from './FormReducer';
import AppReducer from './AppReducer';
import BoardReducer from './BoardReducer';

const reducers = {
  form: formReducer.plugin(FormReducer),
  appStore: AppReducer,
  boardStore: BoardReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
