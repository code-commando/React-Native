import React,{Fragment} from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import Menu from './Menu.js'
export default class RandomScreen extends React.Component {
    static navigationOptions = {
      title: 'Random',
    };
    render() {
        return (
           
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Random Student Selector</Text>
          </View>
         
          
        );
      }
  }
  RandomScreen.navigationOptions = {
    title: 'Random',
  };