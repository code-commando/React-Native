import React from 'react'
import { Text, Animated, Easing } from 'react-native'
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

const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

const RootNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    Quiz: { screen: QuizScreen },
    Roster: { screen: RosterScreen },
    Random: { screen: RandomScreen },
    Courses: { screen: CoursesScreen },
    CodeRunner: { screen: CodeRunnerScreen },
<<<<<<< HEAD
    Pairs: {screen:PairsScreen},
    Readme: {screen:ReadmeScreen}
  },{transitionConfig: noTransitionConfig});
=======
    Pairs: { screen: PairsScreen }
}, { transitionConfig: noTransitionConfig });
>>>>>>> 5d70076c414b637ee016cc25ac541b35ad032c5c
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };