import React from "react";
import Layout from "./layout/Layout";
import { Screen } from "./constant/Enum";
import Login from "./layout/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screen.Login} component={Login} />
        <Stack.Screen name={Screen.Layout} component={Layout} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Layout />
  );
}