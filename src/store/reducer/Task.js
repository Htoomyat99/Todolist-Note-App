import {CREATE, DELETE} from '../type';

const initialstate = {
  text: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case CREATE:
      let newData = action.addText;
      let updateNote;
      if (state.text.length > 0) {
        const newNote = {
          id: state.text.length + 1,
          title: newData.title,
          para: newData.para,
        };
        updateNote = [...state.text, newNote];
      } else {
        updateNote = [action.addText];
      }
      return {
        ...state,
        text: updateNote,
      };
    case DELETE:
      return {
        ...state,
        text: state.text.filter(item => item.id !== action.delid),
      };
    default:
      return state;
  }
};
