import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>; // Adjust the type as needed
}

const MainScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  const navigateToDetail = () => {
    navigation.navigate('Detail' as never);
  };

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <Button
        onPress={navigateToDetail}
        title="Detail Page"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
