import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Screen } from "../constant/Enum";
import Checklist from "../screen/Checklist";
import Dashboard from "../screen/Dashboard";
import Inspection from "../screen/Inspection";
import ObjectScreen from "../screen/ObjectScreen";
import { layoutNavigationRef } from "./Navigator";


const Stack = createNativeStackNavigator();

const NavigationOutlet = () => {
    return (
        <NavigationContainer ref={layoutNavigationRef} independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Screen.ObjectScreen}>
                <Stack.Screen name={Screen.Dashboard} component={Dashboard} />
                <Stack.Screen name={Screen.ObjectScreen} component={ObjectScreen} />
                <Stack.Screen name={Screen.Inspection} component={Inspection} />
                <Stack.Screen name={Screen.Checklist} component={Checklist} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationOutlet