import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import styles from './style';

//components
import * as actionText from '../../../store/action/Task';

//Icons
import DeleteIcon from '../../../../assets/icons/DeleteIcon';
import NoteIcon from '../../../../assets/icons/NoteIcon';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const NoteBody = () => {
  const result = useSelector(state => state.taskList.text);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('data >>>', result);
  }, [result]);

  const deleteHandler = value => {
    dispatch(actionText.DeleteText(value.id));
  };

  return result.length > 0 ? (
    <View style={{height: heightPercentageToDP(52)}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.para}>{item.para}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <TouchableOpacity onPress={() => deleteHandler(item)}>
              <DeleteIcon
                width={23}
                height={23}
                style={styles.icon}
                inColor="#fff"
                outColor="#fff"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  ) : (
    <View style={styles.emptyContainer}>
      <NoteIcon width={50} height={50} inColor="#ffefcd" outColor="#ffefcd" />
      <Text style={styles.alertText}>No Note here yet</Text>
    </View>
  );
};

export default NoteBody;
