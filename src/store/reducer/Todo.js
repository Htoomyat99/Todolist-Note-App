import {CREATE_TODO, DELETE_TODO} from '../type';

const initialstate = {
  todo: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case CREATE_TODO:
      let newData = action.addTodo;
      let updateTodo;
      if (state.todo.length > 0) {
        const newTodo = {
          id: state.todo.length + 1,
          title: newData.title,
          date: newData.date,
        };
        updateTodo = [...state.todo, newTodo];
      } else {
        updateTodo = [action.addTodo];
      }
      return {
        ...state,
        todo: updateTodo,
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(item => item.id !== action.delid),
      };
    default:
      return state;
  }
};
