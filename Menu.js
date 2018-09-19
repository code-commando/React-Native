import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import MainScreen from './MainScreen.js';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 30,
    fontWeight: '400',
    paddingTop: 5,
  },
});

export default class Menu extends Component {
    constructor(props){
        super(props)
    }
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
    
    render(){
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View>
      <Text
        onPress={this.navigateToScreen('Login')}
        style={styles.item}
      >
        Login
      </Text>
      <Text
        onPress={this.navigateToScreen('Dashboard')}
        style={styles.item}
      >
        Dashboard
      </Text>
      <Text
        onPress={this.navigateToScreen('Courses')}
        style={styles.item}
      >
        Courses
      </Text>
      <Text
        onPress={this.navigateToScreen('Roster')}
        style={styles.item}
      >
        Roster
      </Text>
      <Text
        onPress={this.navigateToScreen('Random')}
        style={styles.item}
      >
        Random
      </Text>
      <Text
        onPress={this.navigateToScreen('Quiz')}
        style={styles.item}
      >
        Quiz
      </Text>

      <Text
        onPress={this.navigateToScreen('CodeRunner')}
        style={styles.item}
      >
        CodeRunner
      </Text>

      <Text
        onPress={this.navigateToScreen('About')}
        style={styles.item}
      >
        About
      </Text>
    </ScrollView>
  );
}
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};