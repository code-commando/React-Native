import React,{Fragment} from 'react';
import { Dimensions,
  Platform,View, Text, Button, FlatList, StyleSheet,ActivityIndicator } from 'react-native';
import Wallpaper from './styles/Wallpaper.js'
  
const API = 'http://api.commando.ccs.net/api/v1/roster/pairs';
// const window = Dimensions.get('window');
export default class PairsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      studentPairs: [],
  }
}
_keyExtractor = (index) => index+'';
async componentDidMount(){

    fetch(API)
    .then((res) => res.json())
    .then((pairs) => {
      let studentPairs = (pairs.results);
      this.setState({studentPairs});
          })
}
    render() {
        return (
          this.state.studentPairs.length>0?
          <Wallpaper>
          <View >
           <FlatList 
           data={[...this.state.studentPairs]} 
           keyExtractor={this._keyExtractor}
           renderItem={({item}) => <Text style={styles.row}>{item[0] + '  '+item[1]}</Text>}/>
          </View> </Wallpaper>:<Wallpaper><ActivityIndicator style= {styles.activityIndicator} color="#FA1111" size="large"/></Wallpaper>
          
        );
      }
  }
  PairsScreen.navigationOptions = {
    title: 'Student Pairs',
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
    alignItems: 'center',
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
  