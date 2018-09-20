import React,{Fragment} from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import Menu from './Menu.js'
export default class RosterScreen extends React.Component {
    static navigationOptions = {
      title: 'Roster',
    };
    render() {
        return (
           
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Roster Component display here</Text>
          </View>
         
          
        );
      }
  }
  RosterScreen.navigationOptions = {
    title: 'Roster',
  };