import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation';
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
  item2: {
    fontSize: 30,
    fontWeight: '400',
    paddingTop: 50,
  },
});

const Menu = ({ isLoggedIn, dispatch,onItemSelected }) => {
  if (!isLoggedIn) {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
      <Text
        onPress={() =>{
          dispatch(NavigationActions.navigate({ routeName: 'Login' }))}
        }
        style={styles.item2}
      >
        Login
      </Text>
      </ScrollView>
    )
  }
  
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
        onPress={() =>{
          dispatch(NavigationActions.navigate({ routeName: 'Home' }))}
        }
        style={styles.item}
      >
        Home
      </Text>
      <Text
       onPress={() =>
        dispatch(NavigationActions.navigate({ routeName: 'Courses' }))}
        style={styles.item}
      >
        Courses
      </Text>
      <Text
        onPress={() =>
        dispatch(NavigationActions.navigate({ routeName: 'Roster' }))}
        
        style={styles.item}
      >
        Roster
      </Text>
      <Text
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Random' }))}
        style={styles.item}
      >
        Random
      </Text>
      <Text
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'Quiz' }))}
        style={styles.item}
      >
        Quiz
      </Text>

      <Text
        onPress={() =>
          dispatch(NavigationActions.navigate({ routeName: 'CodeRunner' }))}
        style={styles.item}
      >
        CodeRunner
      </Text>

      {/* <Text
        onPress={this.navigateToScreen('About')}
        style={styles.item}
      >
        About
      </Text> */}
    </ScrollView>
  );

}

Menu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Menu);