import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity,StyleSheet, Text,TextInput, View,ScrollView } from 'react-native';
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants, WebBrowser, AuthSession, Linking } from 'expo';
class LoginScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: 'User Name',
      password: 'Password',
      result:'',
      cookie:null,
      redirectData: null,
    };
  }
  render(){
   
    return(
      <ScrollView style={styles.scroll}>
   <Container>
      <Button 
          styles={{button: styles.transparentButton}}
          onPress={this._handlePressAsync}
      >
          <View style={styles.inline}>
              <Icon name="github" size={30} color="#3B5699" />
              <Text style={[styles.buttonBlueText, styles.buttonBigText]}>  Connect </Text> 
              <Text style={styles.buttonBlueText}>with Github</Text>
          </View>
      </Button>
  </Container> 
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
      {this._maybeRenderRedirectData()}
  </View>
      </ScrollView>
    )
    }

  _handleRedirect = event => {
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    console.log('data',data)
    this.setState({ redirectData: data });
  };

  _handlePressAsync = async () => { 
  let githubURL = 'https://github.com/login/oauth/authorize';
  let options = {
    client_id: 'c85c8afdfbb3457405cd',
    scope: 'read:user repo',
    state: 'autumn',
    allow_signup: 'true',
  };
  let QueryString = Object.keys(options).map((key) => {
    return `${key}=` + encodeURIComponent(options[key]);
  }).join('&');
  let AUTH_URL = `${githubURL}?${QueryString}`;
    this._addLinkingListener();
    let result = await WebBrowser.openBrowserAsync(
      `${AUTH_URL}?linkingUri=${Linking.makeUrl('/')}`
    );
    this._removeLinkingListener();
    this.setState({ result });
}
_addLinkingListener = () => {
  Linking.addEventListener('url', this._handleRedirect);
};

_removeLinkingListener = () => {
  Linking.removeEventListener('url', this._handleRedirect);
};

_maybeRenderRedirectData = () => {
  if (!this.state.redirectData) {
    return;
  }
  //{this.props.navigation.dispatch({ type: 'Login' })} 
  return <Text>{JSON.stringify(this.state.redirectData)}</Text>;
};
  
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