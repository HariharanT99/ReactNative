// RootNavigation.js

import { createNavigationContainerRef } from '@react-navigation/native';
import { Screen } from '../constant/Enum';

export const layoutNavigationRef = createNavigationContainerRef()

export function navigate(name: Screen, params?: any) {
    if (layoutNavigationRef.isReady()) {
        layoutNavigationRef.navigate(name, params);
    }
}

// add other navigation functions that you need and export them