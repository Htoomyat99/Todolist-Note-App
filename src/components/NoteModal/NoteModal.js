import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

import styles from './style';

//icons
import CancelIcon from '../../../assets/icons/CancelIcon';

const UpdateModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <DatePicker modal date={props.date} />
        <TouchableOpacity style={styles.cancel} onPress={props.cancel}>
          <CancelIcon />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="Title"
            textContentType="name"
            value={props.title}
            onChangeText={props.onChangeTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Write..."
            numberOfLines={10}
            value={props.para}
            onChangeText={props.onChangePara}
          />
        </View>
        <TouchableOpacity style={styles.btnContent} onPress={props.addNote}>
          <Text style={styles.btn}>Add Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateModal;
