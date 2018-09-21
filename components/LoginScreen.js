import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity,StyleSheet, Text,TextInput, View,ScrollView } from 'react-native';
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import Icon from 'react-native-vector-icons/FontAwesome';
class LoginScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: 'User Name',
      password: 'Password'
    };
  }
  press() {
    //execute any code here
  }
  onChange = event => {
    const changedValue = {
      [event.target.name]: event.target.value
    };
    this.setState(changedValue);
  };
  render(){
   
  return(
    <ScrollView style={styles.scroll}>
    <Container>
    <Button 
        label="Forgot Login/Pass"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
</Container>
<Container>
    <Label text="Username or Email" />
    <TextInput
        style={styles.textInput}
    />
</Container>
<Container>
    <Label text="Password" />
    <TextInput
        secureTextEntry={true}
        style={styles.textInput}
    />
</Container>
{/* <Container>
    <Button 
        styles={{button: styles.transparentButton}}
        onPress={this.press.bind(this)}
    >
        <View style={styles.inline}>
            <Icon name="facebook-official" size={30} color="#3B5699" />
            <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
            <Text style={styles.buttonBlueText}>with Facebook</Text>
        </View>
    </Button>
</Container> */}
<View style={styles.footer}>
    <Container>
        <Button 
            label="Sign In"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
            onPress={() => this.props.navigation.dispatch({ type: 'Login' })} />
    </Container>
    <Container>
        <Button 
            label="CANCEL"
            styles={{label: styles.buttonBlackText}} 
            onPress={() => this.props.navigation.dispatch({ type: 'Home' })}/>
    </Container>
</View>
    </ScrollView>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
transparentButton: {
  marginTop: 30,
  borderColor: '#3B5699',
  borderWidth: 2
},
buttonBlueText: {
  fontSize: 20,
  color: '#3B5699'
},
textInput: {
  height: 80,
  fontSize: 30,
  backgroundColor: '#FFF'
},
label: {
  color: '#0d8898',
  fontSize: 20
},
alignRight: {
  alignSelf: 'flex-end'
},
scroll: {
  backgroundColor: '#E1D7D8',
  padding: 30,
  flexDirection: 'column'
},
buttonBigText: {
  fontSize: 20,
  fontWeight: 'bold'
},
inline: {
  flexDirection: 'row'
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 75
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
/**
 * <View style={styles.container}>
  
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
    /> 
    <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                () => this.props.navigation.dispatch({ type: 'Login' })
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
  </View>
 * 
 */