import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import styles from './SideMenu.style';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const SideMenu = ({ navigation }: any) => {
  const navigateToScreen = (route: string) => () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.sectionHeadingStyle}>
            Section 1
          </Text>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={navigateToScreen('Page1')}>
              Page1
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.sectionHeadingStyle}>
            Section 2
          </Text>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={navigateToScreen('Page2')}>
              Page2
            </Text>
            <Text style={styles.navItemStyle} onPress={navigateToScreen('Page3')}>
              Page3
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.sectionHeadingStyle}>
            Section 3
          </Text>
          <View style={styles.navSectionStyle}>
            <Text style={styles.navItemStyle} onPress={navigateToScreen('Page4')}>
              Page4
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Text>This is my fixed footer</Text>
      </View>
    </View>
  );
};

SideMenu.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SideMenu;
