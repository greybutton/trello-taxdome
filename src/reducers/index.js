import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import FormReducer from './FormReducer';
import AppReducer from './AppReducer';
import BoardReducer from './BoardReducer';
import ColumnReducer from './ColumnReducer';
import CardReducer from './CardReducer';

const reducers = {
  form: formReducer.plugin(FormReducer),
  appStore: AppReducer,
  boardStore: BoardReducer,
  columnStore: ColumnReducer,
  cardStore: CardReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
