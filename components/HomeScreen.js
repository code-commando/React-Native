import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage.js';
import AuthButton from './AuthButton.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

HomeScreen.navigationOptions = {
  title: 'Home Screen',
};

export default HomeScreen;