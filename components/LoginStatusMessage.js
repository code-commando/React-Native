import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return (<View style={styles.container}>
    <Text>Welcome to Code Commando!!</Text></View>);
  }
  return (
    <View>
      <Text style={styles.welcome}>
        {'You are "logged in" right now!! Click on hamburger menu or pull the screen right to left'}
      </Text>
      {/* <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Random' }))}
        title="Random"
      />
       <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Quiz' }))}
        title="Quiz"
      />
       <Button
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Roster' }))}
        title="Roster"
      /> */}
    </View>
  );
};

LoginStatusMessage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);