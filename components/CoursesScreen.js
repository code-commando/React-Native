import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo.js'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcome: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:30
  },
});

const CoursesScreen = () => (
  <Wallpaper>
      <Logo/>
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Courses Screen
    </Text>
  </View>
  </Wallpaper>
);

CoursesScreen.navigationOptions = {
  title: 'Courses',
};

export default CoursesScreen;