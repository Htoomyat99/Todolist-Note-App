import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './style';

import AddIcon from '../../../assets/icons/AddIcon';

const TodoContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={{marginTop: 50}}>
          <Text style={styles.title}>Hello,</Text>
          <Text style={styles.title}>this is your to-do lists</Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.5} style={styles.addIcon}>
        <AddIcon inColor="#3F51B5" outColor="#3F51B5" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoContent;
