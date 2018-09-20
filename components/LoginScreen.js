import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text,TextInput, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
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

class LoginScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: 'User Name',
      password: 'Password'
    };
  }

  render(){
    let { username } = this.state;
    let { password } = this.state;
  return(
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to login Screen
    </Text>
    <TextField
        label='User Name'
       
        onChangeText={ (username) => this.setState({ username }) }
      />
      <TextField
        label='Password'
        defaultValue={password}
        onChangeText={ (password) => this.setState({ password }) }
      />
    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        // onChangeText={(text) => this.setState({text})}
        value='  User Name        '
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        // onChangeText={(text) => this.setState({text})}
        value='  Password          '
      />
    <Button
      onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
      title="Login"
    />
  </View>
  )
  }
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

export default LoginScreen;