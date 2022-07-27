import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

import styles from './style';

//icons
import CancelIcon from '../../../assets/icons/CancelIcon';
import CalendarIcon from '../../../assets/icons/CalendarIcon';

const TodoModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={props.remider}>
            <CalendarIcon style={styles.remider} />
          </TouchableOpacity>
          <DatePicker
            modal
            open={props.open}
            date={props.date}
            onConfirm={props.onConfirm}
            onCancel={props.onCancel}
          />
          <TouchableOpacity style={styles.cancel} onPress={props.cancel}>
            <CancelIcon />
          </TouchableOpacity>
        </View>
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
