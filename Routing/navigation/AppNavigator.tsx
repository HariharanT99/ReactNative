import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';

// import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator<ParamListBase>();
// const Stack = createStackNavigator();


const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
        {/* <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator> */}
    </NavigationContainer>
);

export default AppNavigator;
