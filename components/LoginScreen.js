import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,  View, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';
import Container from './styles/Container';
import Button from './styles/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebBrowser, Linking } from 'expo';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo';
import spinner from './images/loading.gif';
import {dispatchLogin} from '../reducer/auth.js'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 80;
class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirectData: null,
      isLoading: false
    };

    this.buttonAnimated = new Animated.Value(0);
    this.growAnimated = new Animated.Value(0);
    this._onPress = this._onPress.bind(this);
  }

  componentDidUpdate() {
    if (this.state.redirectData !== null) {
      return this.props.navigation.dispatch({ type: 'Login' })
    }
  }
  _onPress() {
    if (this.state.isLoading) return;

    this.setState({isLoading: true});
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this._onGrow();
    }, 2000);

    setTimeout(() => {
      this._handlePressAsync()
      this.setState({isLoading: false});
      this.buttonAnimated.setValue(0);
      this.growAnimated.setValue(0);
    }, 2300);
  }

  _onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }
  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    });
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    });

    return (
      <Wallpaper>
        <Logo/>
        <View style={styles.container}>
        <Animated.View style={{width: changeWidth}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
            {this.state.isLoading ? (
              <Image source={spinner} style={styles.image} />
            ) : (
              <View style={styles.inline} >
              <Icon name="github" size={50} color="#3B5699" /><Text style={styles.text}>LOGIN WITH GITHUB</Text></View>
            )}
          </TouchableOpacity>
          <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          />
        </Animated.View>
      </View>
      {/* <ScrollView style={styles.scroll}>
        <Container>
          <Button
            styles={{ button: styles.transparentButton }}
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
              styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
              onPress={() => this.props.navigation.dispatch({ type: 'Login' })} />
          </Container>
          <Container>
            <Button
              label="CANCEL"
              styles={{ label: styles.buttonBlackText }}
              onPress={() => this.props.navigation.dispatch({ type: 'Home' })} />
          </Container>
          {this._maybeRenderRedirectData()}
        </View>
      </ScrollView> */}
      </Wallpaper>
    )
  }
  _handleRedirect = async(event) => {
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    try {
      await AsyncStorage.setItem('authToken',data.queryParams.authToken );
      await AsyncStorage.setItem('gitHubToken',data.queryParams.gitHubToken );
      const authToken = await AsyncStorage.getItem('authToken');
      const gitHubToken = await AsyncStorage.getItem('gitHubToken');
      console.log(`authToken: ${authToken} githubToken: ${gitHubToken}`)
      const TOKENS = {}
    TOKENS.authToken = authToken
    TOKENS.gitHubToken = gitHubToken
    this.setState({ redirectData: TOKENS });
    } catch (error) {
      console.log('Error retrieving Tokens',error)
    }
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
    await WebBrowser.openBrowserAsync(
      `${AUTH_URL}?linkingUri=${Linking.makeUrl('/')}`
    );
    this._removeLinkingListener();
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
     this.state.isLoading? <View style={styles.container}><ActivityIndicator size="large" colro="#ff0000" /></View>: null;
  };

};

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Login Page',
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});
//const mapDispatchToProps = {dispatchLogin}

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // buttonWhiteText: {
  //   fontSize: 20,
  //   color: '#FFF',
  // },
  // transparentButton: {
  //   marginTop: 30,
  //   borderColor: '#3B5699',
  //   borderWidth: 2
  // },
  // buttonBlueText: {
  //   fontSize: 20,
  //   color: '#3B5699'
  // },
  // textInput: {
  //   height: 80,
  //   fontSize: 30,
  //   backgroundColor: '#FFF'
  // },
  // label: {
  //   color: '#0d8898',
  //   fontSize: 20
  // },
  // alignRight: {
  //   alignSelf: 'flex-end'
  // },
  // scroll: {
  //   backgroundColor: '#E1D7D8',
  //   padding: 30,
  //   flexDirection: 'column'
  // },
  // buttonBigText: {
  //   fontSize: 20,
  //   fontWeight: 'bold'
  // },
  // inline: {
  //   flexDirection: 'row'
  // },
  // buttonBlackText: {
  //   fontSize: 20,
  //   color: '#595856'
  // },
  // primaryButton: {
  //   backgroundColor: '#34A853'
  // },
  // footer: {
  //   marginTop: 75
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // input: {
  //   margin: 15,
  //   height: 40,
  //   borderColor: '#7a42f4',
  //   borderWidth: 1
  // },
  // submitButton: {
  //   backgroundColor: '#7a42f4',
  //   padding: 10,
  //   margin: 15,
  //   height: 40,
  // },
  // submitButtonText: {
  //   color: 'white'
  // }
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inline: {
      flexDirection: 'column',
      alignItems: 'center',
    justifyContent: 'center',
    },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    height: MARGIN,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
});