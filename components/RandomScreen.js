import React from 'react';
import { View, Text,StyleSheet,ActivityIndicator } from 'react-native';
const API = 'http://api.commando.ccs.net/api/v1/roster/random';
import Wallpaper from './styles/Wallpaper.js'
//import Logo from './styles/Logo.js'
export default class RandomScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      student: null,
      isLoading: true
  }
}
randomPhrase = () => {
  let phraseArr = [
    'And the winner is...',
    'The next lucky contestant is:', 
    'A big round of applause for:', 
    'Our next victim is:'
  ];
  let index = Math.floor(Math.random() * (phraseArr.length -1));
  let phrase = phraseArr[index];
  return phrase;
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
   }, 1500);
}


    render() {
      
        return (
          
          <Wallpaper>
            <Text style={styles.randomPhrase}>{randomPhrase()}</Text>
          {this.state.isLoading?<ActivityIndicator style= {styles.activityIndicator} style= {styles.activityIndicator} color="#FA1111" size="large"/>:(
          this.state.student?
           <Wallpaper>
             
             {/* <Logo/> */}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Text style={styles.name}>{this.state.student}</Text>
          </View>
          </Wallpaper>:<ActivityIndicator style= {styles.activityIndicator} style= {styles.activityIndicator} color="#FA1111" size="large"/>)}
          </Wallpaper>
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
   randomPhrase: {
     top: 100,
     color: 'white',
     backgroundColor: 'transparent',
     fontSize:30,
     alignItems: 'center',
     justifyContent: 'flex-start',
     margin: 15
   }
  });