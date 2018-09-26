import React,{Fragment} from 'react';
import { Animated,
  Easing,
  Image,
  Dimensions,
  Platform,View, Text, Button, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo.js'
const API = 'http://api.commando.ccs.net/api/v1/roster';
//const window = Dimensions.get('window');

export default class RosterScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allStudents: [],
  }
}

_keyExtractor = (index) => index+'';
async componentDidMount(){

    this.githubCall = fetch(API)
    .then((res) => res.json())
    .then((roster) => {
      let allStudents = (roster.results);
      this.setState({allStudents});
          })
}
    render() {
        return (
         this.state.allStudents.length>0?

        <Wallpaper>
        <View >
        <FlatList 
        data={[...this.state.allStudents]} 
        keyExtractor={this._keyExtractor}
        renderItem={({item}) => <Text style={styles.row}>{item}</Text>}/>
       </View></Wallpaper>:<Wallpaper><ActivityIndicator style= {styles.activityIndicator} color="#FA1111"  size="large"/></Wallpaper>
      
          
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
      ...Platform.select({
        ios: {
          paddingTop: 20,
        },
      }),
    },
    name: {
      fontSize: 18,
      textAlign: 'center',
    },
    activityIndicator: {
      flex: 1,
      top: 200,
      alignItems: 'center',
      justifyContent: 'flex-start',
   },
  row: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#660066',
    padding: 10,
    height: 95,
    flex: 1,
    marginTop: 2,
    marginBottom: 5,
    borderRadius: 4,
    fontSize: 24,
    color: '#FFFFFF',


    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    })
  },
  });
  