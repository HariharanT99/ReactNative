import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Open Side Menu" onPress={() => navigation.openDrawer()} />

    <Text>Home Screen</Text>
  </View>
);

export default HomeScreen;
