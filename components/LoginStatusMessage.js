import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  status:{
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:20
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:30
  },
});

const LoginStatusMessage = ({ isLoggedIn, dispatch }) => {
  if (!isLoggedIn) {
    return (<View style={styles.container}>
    <Text style={styles.text}>Welcome to Code Commando!!</Text></View>);
  }
//  updateState()
  return (
    <View style={styles.container}>
      <Text style={styles.status}>
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
  // updateState:PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(LoginStatusMessage);