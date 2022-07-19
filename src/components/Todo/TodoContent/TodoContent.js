import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

//components
import TodoBody from '../TodoBody/TodoBody';

//icons
import AddIcon from '../../../../assets/icons/AddIcon';

const TodoContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={{marginTop: 50}}>
          <Text style={styles.title}>Hello,</Text>
          <Text style={styles.title}>this is your to-do lists</Text>
        </View>
      </View>

      <TodoBody />

      {props.showIcon && (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.addIcon}
          onPress={props.addTodo}>
          <AddIcon inColor="#3F51B5" outColor="#3F51B5" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TodoContent;
