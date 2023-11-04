
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNavigationContainerRef } from '@react-navigation/native';
import { navigate, navigationRef } from '../navigator/Navigator';

function HomeScreen({navigation}: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "red" }}>
      <Text style={{color: "black"}}>Home Screen</Text>
      <Button
    title="Go to Details"
    onPress={() => navigation.navigate('Details')}
    />
    </View>
  );
}

function DetailsScreen({ navigation }:any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "green" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

const Stack = createNativeStackNavigator();

function Menu({navigation}: any) {
  return (
    <NavigationContainer ref={navigationRef}>
                 <Button
    title="Go to Details"
    onPress={() => navigate('Details')}
    />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Menu;