import {CREATE_TODO, DELETE_TODO} from '../type';

export const createTodo = data => {
  return {
    type: CREATE_TODO,
    addTodo: data,
  };
};

export const DeleteTodo = id => {
  return {
    type: DELETE_TODO,
    delid: id,
  };
};
