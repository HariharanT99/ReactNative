import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import SideMenu from './SideMenu';
import stackNav from './stacknav';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Item1"
        drawerContent={(props) => <SideMenu {...props} />}
        screenOptions={{
          drawerStyle: {
            width: Dimensions.get('window').width - 120,
          },
        }}
      >
        <Drawer.Screen
          name="Item1"
          component={stackNav}
          options={{
            // Add screen-specific options here
          }}
        />
        {/* Add more screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;