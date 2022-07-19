import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

import AddIcon from '../../../assets/icons/AddIcon';

const NoteContent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create just your memories</Text>
        <Text style={styles.text}>What made you laugh today?</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.addIcon}
        onPress={props.addNote}>
        <AddIcon inColor="#F4A600" outColor="#F4A600" />
      </TouchableOpacity>
    </View>
  );
};

export default NoteContent;
