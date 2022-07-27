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
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dateString = `${day}-${month}-${year}`;

  let TodoData = {
    id: 1,
    title: title,
    date: dateString,
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
      setTitle('');
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
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          remider={() => setOpen(true)}
        />
      )}
    </View>
  );
};

export default Todo;
