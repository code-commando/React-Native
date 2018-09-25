import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,ActivityIndicator,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image, View
} from 'react-native';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo';
import { NavigationActions } from 'react-navigation';
import Dimensions from 'Dimensions';
import Button from './styles/Button.js'
import spinner from './images/loading.gif';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 80;
class AuthButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    };
   
  
    // this.buttonAnimated = new Animated.Value(0);
    // this.growAnimated = new Animated.Value(0);
    // this._onPress = this._onPress.bind(this);
  }
  componentDidUpdate(){
    setTimeout(() => {
      this.setState({ isLoading: false })
      this.timerHandle = 0;
    }, 3000);
  }

  // _onPress() {
  //   this.props.isLoggedIn ? this.props.logout : this.props.loginScreen
  //   // if (this.state.isLoading) return;

  //   // this.setState({isLoading: true});
  //   // Animated.timing(this.buttonAnimated, {
  //   //   toValue: 1,
  //   //   duration: 200,
  //   //   easing: Easing.linear,
  //   // }).start();

  //   // setTimeout(() => {
  //   //   this._onGrow();
  //   // }, 2000);

  //   // setTimeout(() => {
  //   //   this.callNextScreen()
  //   //   this.setState({isLoading: false});
  //   //   this.buttonAnimated.setValue(0);
  //   //   this.growAnimated.setValue(0);
  //   // }, 10);
  // }
  // callNextScreen=()=>{
  //   this.props.isLoggedIn ? this.props.logout : this.props.loginScreen
  // }

  // _onGrow() {
  //   Animated.timing(this.growAnimated, {
  //     toValue: 1,
  //     duration: 200,
  //     easing: Easing.linear,
  //   }).start();
  // }
  render() {
    // const changeWidth = this.buttonAnimated.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    // });
    // const changeScale = this.growAnimated.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [1, MARGIN],
    // });
    
  if(this.props.isLoggedIn){
    return (
      (this.state.isLoading) ? <Wallpaper><ActivityIndicator style= {styles.activityIndicator}size="large" color="#FA1111" /></Wallpaper> : 
      <Wallpaper>
      <Logo/>
      <View style={styles.container}>

      <View style={styles.container}>
      <Text style={styles.status}>
        {'You are "logged in" right now!! Click on hamburger menu or pull the screen right to left'}
      </Text>
      </View>
      <View style={styles.container}>
        <Button styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
          // label={this.props.isLoggedIn ? 'SIGN OUT' : 'Go TO LOGIN SCREEN'}
          label= 'SIGN OUT'
          onPress={this.props.isLoggedIn ? this.props.logout : this.props.loginScreen}
        />
        {/* <TouchableOpacity
            style={styles.button}
            onPress={this._onPress}
            activeOpacity={1}>
              <Text style={styles.text}>{this.props.isLoggedIn ? 'SIGN OUT' : 'SIGNIN HERE'}</Text>
            
          </TouchableOpacity> */}
        {/* <Animated.View
            style={[styles.circle, {transform: [{scale: changeScale}]}]}
          /> */}

      </View>
      </View>
      </Wallpaper>

    )
        }
        return (
          <Wallpaper>
      <Logo/>
          <View style={styles.container}>
          <View style={styles.container}>
             <Text style={styles.welcome}>Welcome to Code Commando!!</Text>
             </View>
             <View style={styles.container}>
            <Button styles={{ button: styles.primaryButton, label: styles.buttonWhiteText }}
              // label={this.props.isLoggedIn ? 'SIGN OUT' : 'Go TO LOGIN SCREEN'}
              label= 'GO TO LOGIN SCREEN'
              onPress={this.props.isLoggedIn ? this.props.logout : this.props.loginScreen}
            />
          </View>
          </View>
          </Wallpaper>
        )
       
  }
};

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -85,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },   
  activityIndicator: {
    flex: 1,
    top: 200,
    alignItems: 'center',
    justifyContent: 'flex-start',
 },
  inline: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWhiteText: {

    color: 'white',
    backgroundColor: 'transparent'
  },
  status:{
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:20
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    borderRadius: 20,
    zIndex: 100,
    backgroundColor: '#F035E0'
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
  welcome: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:30
  },
  image: {
    width: 24,
    height: 24,
  },
});