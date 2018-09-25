import React from 'react';
import { View, Text,StyleSheet,ActivityIndicator } from 'react-native';
const API = 'http://api.commando.ccs.net/api/v1/roster/random';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo.js'
export default class RandomScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student: null
  }
}
async componentDidMount(){

    this.githubCall = fetch(API)
    .then((res) => res.json())
    .then((random) => {
      let student = (random.results);
      this.setState({student});
          })
}
    render() {
        return (
          this.state.student?
           <Wallpaper>
             <Logo/>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text style={styles.name}>{this.state.student}</Text>
          </View>
          </Wallpaper>:<ActivityIndicator color="#FA1111" size="large"/>
        );
      }
  }
  RandomScreen.navigationOptions = {
    title: 'Random',
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: -95,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    name: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize:30
    },
  });