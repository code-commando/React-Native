import React,{Fragment} from 'react';
import { View, StyleSheet,Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import Menu from './Menu.js'
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
export default class QuizScreen extends React.Component {
    static navigationOptions = {
      title: 'Quiz',
    };
    render() {
        return (
           
          <View style={styles.container}>
    <Text style={styles.welcome}>
      Quiz Screen
    </Text>
  </View>
          
        );
      }
  }
  QuizScreen.navigationOptions = {
    title: 'Quiz',
  };
 
  /* <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        /> */