import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import NoteScreen from '../pages/Note/Note';
import TodoScreen from '../pages/Todo/Todo';

//Icons
import NoteIcon from '../../assets/icons/NoteIcon';
import TodoIcon from '../../assets/icons/TodoIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Note"
        component={NoteScreen}
        options={{
          headerShown: false,
          title: 'Note',
          tabBarActiveTintColor: '#F4A600',
          tabBarInactiveTintColor: '#000',
          tabBarIcon: ({focused, color, size}) => (
            <NoteIcon
              outColor={focused ? '#F4A600' : '#000'}
              inColor={focused ? '#F4A600' : '#000'}
              width={hp(3.5)}
              height={hp(3.5)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: hp(2),
            paddingBottom: wp(0.2),
          },
          tabBarIconStyle: {
            marginTop: wp(0.5),
          },
        }}
      />
      <Tab.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          headerShown: false,
          title: 'To-do',
          tabBarActiveTintColor: '#3F51B5',
          tabBarInactiveTintColor: '#000',
          tabBarIcon: ({focused, color, size}) => (
            <TodoIcon
              outColor={focused ? '#90CAF9' : '#000'}
              inColor={focused ? '#3F51B5' : '#000'}
              width={hp(3.5)}
              height={hp(3.5)}
            />
          ),
          tabBarLabelStyle: {
            fontSize: hp(2),
            paddingBottom: wp(0.2),
          },
          tabBarIconStyle: {
            marginTop: wp(0.5),
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
