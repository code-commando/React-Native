import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
const API = 'http://api.commando.ccs.net/api/v1/roster/random';

export default class RandomScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student: ''
  }
}
componentDidMount(){

    fetch(API)
    .then((res) => res.json())
    .then((random) => {
      let student = (random.results);
      this.setState({student});
          })
}

    render() {
        return (
           
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text style={styles.name}>{this.state.student}</Text>
          </View>
        );
      }
  }
  RandomScreen.navigationOptions = {
    title: 'Random',
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    name: {
      fontSize: 24,
      textAlign: 'center',
    }
  });