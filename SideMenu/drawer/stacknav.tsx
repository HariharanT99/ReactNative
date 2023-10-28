import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={({ navigation }) => ({
        title: 'Main',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="ios-menu" size={30} />
          </TouchableOpacity>
        ),
        headerStyle: { paddingRight: 10, paddingLeft: 15 },
      })}
    />
  </Stack.Navigator>
);

const stackNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Main"
        component={MainStack}
        options={{ title: 'Main' }}
      />
      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detail' }}
      />
    </Drawer.Navigator>
  );
};

export default stackNav;
