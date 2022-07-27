import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styles from './style';

//components
import * as actionTodo from '../../../store/action/Todo';

//Icons
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import TodoIcon from '../../../../assets/icons/TodoIcon';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const NoteBody = () => {
  const todoResult = useSelector(state => state.todoList.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('data >>>', todoResult);
  }, [todoResult]);

  const deleteHandler = value => {
    dispatch(actionTodo.DeleteTodo(value.id));
  };
  return todoResult.length > 0 ? (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={todoResult}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.container}>
          <View style={{width: widthPercentageToDP(76)}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <TouchableOpacity
            onPress={() => deleteHandler(item)}
            style={styles.iconBox}>
            <DeleteIcon width={23} height={23} inColor="#000" outColor="#000" />
          </TouchableOpacity>
        </View>
      )}
    />
  ) : (
    <View style={styles.emptyContainer}>
      <TodoIcon width={50} height={50} inColor="#90CAF9" outColor="#90CAF9" />
      <Text style={styles.alertText}>No tasks here yet</Text>
    </View>
  );
};

export default NoteBody;
