import React from 'react';
import PropTypes from 'prop-types';
import { Button, TouchableOpacity,StyleSheet, Text,TextInput, View } from 'react-native';
//import { TextField } from 'react-native-material-textfield';
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
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
});

class LoginScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: 'User Name',
      password: 'Password'
    };
  }
  onChange = event => {
    const changedValue = {
      [event.target.name]: event.target.value
    };
    this.setState(changedValue);
  };
  render(){
   
  return(
  <View style={styles.container}>
    <TextInput
        style = {styles.input}
        onChangeText={(username) => this.setState({username})}
        underlineColorAndroid = 'transparent'
        placeholder = 'Username'
        placeholderTextColor = '#9a73ef'
        autoCapitalize = 'none'
      />
      <TextInput
       style = {styles.input}
        onChangeText={(password) => this.setState({password})}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
      />
    {/* <Button
      onPress={() => this.props.navigation.dispatch({ type: 'Login' })}
      title="Login"
    /> */}
    <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                () => this.props.navigation.dispatch({ type: 'Login' })
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
  </View>
  )
  }
};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Login Page',
};

export default LoginScreen;