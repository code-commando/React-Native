import React,{Fragment} from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import Menu from './Menu.js'
const API = 'http://api.commando.ccs.net/api/v1/roster';

export default class RosterScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student: '',
      allStudents: [],
  }
}
componentDidMount(){

    fetch(API)
    .then((res) => res.json())
    .then((roster) => {
      let allStudents = (roster.results);
      this.setState({allStudents});
          })
}
    static navigationOptions = {
      title: 'Roster',
    };
    render() {
        return (
           
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <FlatList data={[...this.state.allStudents]} renderItem={({item}) => <Text style={styles.name}>{item}</Text>}/>
          </View>
         
          
        );
      }
  }
  RosterScreen.navigationOptions = {
    title: 'Roster',
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    name: {
      fontSize: 18,
      textAlign: 'center',
    }
  });