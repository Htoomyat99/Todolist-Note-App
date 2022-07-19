import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

import TaskReducer from './reducer/Task';
import TodoReducer from './reducer/Todo';

const rootReducer = combineReducers({
  taskList: TaskReducer,
  todoList: TodoReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
