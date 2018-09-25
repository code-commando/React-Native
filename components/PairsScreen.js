import React,{Fragment} from 'react';
import { Dimensions,
  Platform,View, Text, Button, FlatList, StyleSheet,ActivityIndicator } from 'react-native';

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
          <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}>
           <FlatList 
           data={[...this.state.studentPairs]} 
           keyExtractor={this._keyExtractor}
           renderItem={({item}) => <Text style={styles.row}>{item[0] + '  '+item[1]}</Text>}/>
          </View>:<ActivityIndicator color="#FA1111" size="large"/>
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

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 95,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    fontSize: 24,
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
  