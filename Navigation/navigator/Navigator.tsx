// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export type RootStackParamList = {
    YourScreen: { id: number } | undefined;
};

export function navigate(name: string, params?: any) {
    console.log("navigate -----")
    if (navigationRef.isReady()) {
        console.log("Inside -----")
        navigationRef.navigate(name, params);
    }
    console.log("Outside -----")
}

// add other navigation functions that you need and export them