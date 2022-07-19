import {CREATE, DELETE} from '../type';

export const createText = data => {
  return {
    type: CREATE,
    addText: data,
  };
};

export const DeleteText = id => {
  return {
    type: DELETE,
    delid: id,
  };
};
