// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './menu/Menu';


const Stack = createNativeStackNavigator();

function App({ navigation }: any) {
  return (
    // <ScrollView>
    // {/* <Button
    // title="Go to Details"
    // onPress={() => navigation.navigate('Details')}
    // /> */}
    // </ScrollView>
    <Menu />

  );
}

export default App;