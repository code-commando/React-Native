import React from 'react'
import { Text,Animated,Easing } from 'react-native'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
  } from 'react-navigation-redux-helpers';
import LoginScreen from '../components/LoginScreen.js'
import HomeScreen from '../components/HomeScreen.js'
import ProfileScreen from '../components/ProfileScreen.js'
import RosterScreen from '../components/RosterScreen.js'
import QuizScreen from '../components/QuizScreen.js'
import RandomScreen from '../components/RandomScreen.js'
import CoursesScreen from '../components/CoursesScreen.js'
import CodeRunnerScreen from '../components/CodeRunnerScreen.js'
import PairsScreen from '../components/PairsScreen.js'
import ReadmeScreen from '../components/ReadmeScreen.js'

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  );
// drawer stack
const DrawerStack = createDrawerNavigator({
  Quiz: { screen: QuizScreen },
  Roster: { screen: RosterScreen },
  Random: { screen: RandomScreen },
},{
  gesturesEnabled: false
})

const drawerButton = (navigation) =>
  <Text
    style={{padding: 5, color: 'white'}}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }
  }>Menu</Text>

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'green'},
    title: 'Logged In to your app!',
    gesturesEnabled: false,
    headerLeft: drawerButton(navigation)
  })
})

// login stack
const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})
const noTransitionConfig = () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
  })

// Manifest of possible screens
// const RootNavigator = createStackNavigator({
//   drawerStack: { screen: DrawerNavigation }
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   title: 'Main',
//   initialRouteName: 'drawerStack',
//   transitionConfig: noTransitionConfig
// })
const RootNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Quiz: { screen: QuizScreen },
    Roster: { screen: RosterScreen },
    Random: { screen: RandomScreen },
    Courses: { screen: CoursesScreen },
    CodeRunner: { screen: CodeRunnerScreen },
    Pairs: {screen:PairsScreen},
    Readme: {screen:ReadmeScreen}
  },{transitionConfig: noTransitionConfig});
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
  });
  
  const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);
  
  export { RootNavigator, AppNavigator, middleware };