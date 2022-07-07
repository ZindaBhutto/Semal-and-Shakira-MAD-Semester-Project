import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import icons from './icons';
import SemalScreen from '../screens/Semal';
import ShakiraScreen from '../screens/Shakira';
import Home from '../screens/Home';
import bottomNavigatorStyle from '../styles/bottomNavigator';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={bottomNavigatorStyle}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.IC_HOME}
              style={{ height: 24, width: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Semal'}
        component={SemalScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.IC_USER}
              style={{ height: 24, width: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Shakira'}
        component={ShakiraScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.IC_USER}
              style={{ height: 24, width: 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
