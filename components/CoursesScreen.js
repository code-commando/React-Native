import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const CoursesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Courses Screen
    </Text>
  </View>
);

CoursesScreen.navigationOptions = {
  title: 'Courses',
};

export default CoursesScreen;