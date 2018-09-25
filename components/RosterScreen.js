import React,{Fragment} from 'react';
import { Animated,
  Easing,
  Image,
  Dimensions,
  Platform,View, Text, Button, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
const API = 'http://api.commando.ccs.net/api/v1/roster';
const window = Dimensions.get('window');

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
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <FlatList 
           data={[...this.state.allStudents]} 
           keyExtractor={this._keyExtractor}
           renderItem={({item}) => <Text style={styles.row}>{item}</Text>}/>
          </View>:<ActivityIndicator color="#FA1111"  size="large"/>
          
          
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

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    fontSize: 20,
    color: '#222222',


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
  