import React from 'react';
import { View, Text,StyleSheet,ActivityIndicator } from 'react-native';
import TimerMixin from 'react-timer-mixin';
const API = 'http://api.commando.ccs.net/api/v1/roster/random';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo.js'
export default class RandomScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student: null,
      isLoading: true
  }
}

async componentDidMount(){
 setTimeout(() => {
   this.setState({isLoading: false});
    this.githubCall = fetch(API)
    .then((res) => res.json())
    .then((random) => {
      let student = (random.results);
      this.setState({student});
    })
   }, 5000);
}
    render() {
      
        return (
          this.state.isLoading?<ActivityIndicator style= {styles.activityIndicator} style= {styles.activityIndicator} color="#FA1111" size="large"/>:(
          this.state.student?
           <Wallpaper>
             {/* <Text>And the winner is...</Text> */}
             {/* <Logo/> */}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text style={styles.name}>{this.state.student}</Text>
          </View>
          </Wallpaper>:<ActivityIndicator style= {styles.activityIndicator} style= {styles.activityIndicator} color="#FA1111" size="large"/>)
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
    activityIndicator: {
      flex: 1,
      top: 200,
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
  });