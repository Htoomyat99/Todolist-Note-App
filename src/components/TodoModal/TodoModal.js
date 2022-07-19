import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

//icons
import CancelIcon from '../../../assets/icons/CancelIcon';

const TodoModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.cancel} onPress={props.cancel}>
          <CancelIcon />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Todo..."
            textContentType="name"
            value={props.title}
            onChangeText={props.onChangeTitle}
          />
        </View>
        <TouchableOpacity style={styles.btnContent} onPress={props.addTodo}>
          <Text style={styles.btn}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoModal;
