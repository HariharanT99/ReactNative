import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface SideMenuProps {
  state: any; // Replace with the correct type if necessary
  navigation: any; // Replace with the correct type if necessary
}

const SideMenu: React.FC<SideMenuProps> = ({ state, navigation }) => {
  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View>
      {state.routes.map((route: any, index: number) => (
        <TouchableOpacity key={index} onPress={() => navigateToScreen(route.name)}>
          <Text>{route.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SideMenu;
