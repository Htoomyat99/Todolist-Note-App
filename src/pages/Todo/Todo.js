import {View, Text, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//components
import TodoContent from '../../components/Todo/TodoContent/TodoContent';
import TodoModal from '../../components/TodoModal/TodoModal';
import * as actionTodo from '../../store/action/Todo';

const Todo = () => {
  const [showTodoModal, setTodoShowModal] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  let TodoData = {
    id: 1,
    title: title,
  };

  const addHandler = () => {
    setTodoShowModal(true);
    setShowIcon(false);
  };

  const cancelHandler = () => {
    setShowIcon(true);
    setTodoShowModal(false);
  };

  const addTodoHandler = () => {
    if (TodoData.title) {
      setShowIcon(true);
      setTodoShowModal(false);
      dispatch(actionTodo.createTodo(TodoData));
    } else {
      ToastAndroid.show('Please fill the input fields', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{flex: 1}}>
      <TodoContent addTodo={addHandler} showIcon={showIcon} />
      {showTodoModal && (
        <TodoModal
          cancel={cancelHandler}
          title={title}
          onChangeTitle={value => setTitle(value)}
          addTodo={addTodoHandler}
        />
      )}
    </View>
  );
};

export default Todo;
