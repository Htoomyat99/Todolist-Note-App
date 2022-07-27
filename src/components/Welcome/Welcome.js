import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

import styles from './style';

//Icons
import TrueIcon from '../../../assets/icons/TrueIcon';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <TrueIcon />
          <Text style={styles.iconText}>simpl</Text>
        </View>
        <Text style={styles.text}>
          Manage your daily activities with{' '}
          <Text style={styles.simp}>simpl</Text>
        </Text>
        <Image
          style={styles.image}
          source={require('../../../assets/images/logo.png')}
        />
        <Text style={styles.para}>
          As the name said simpl, we will give you the easiest way to manage
          your day to day activities
        </Text>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.footerText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
