import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Button, Text, FlatList, ListItem } from 'react-native';
// import GiftedListView from 'react-native-gifted-listview';
// import GiftedSpinner from 'react-native-gifted-spinner';

const API = 'http://api.commando.ccs.net/api/v1/roster';

export default class  Roster extends Component {
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


  getRandom = () => {
    let student = 'Michael';
    this.setState({student});
  }

  removeStudent = () => {
    let student = '';
    this.setState({student});
  }

  removeRoster = () => {
    let allStudents = [];
    this.setState({allStudents});
  }

//   _getAllStudents = () => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((roster) => {
//         let allStudents = (roster.results);
      
//         this.setState({allStudents});
//         //console.log('STUDENTS', this.state.allStudents)
//         //let students = [...this.state.allStudents];
//         //console.log('NEW STUDENT ARRAY', students);
//             })
//         }

    render() {
        return (
          <Fragment>
            <View style={styles.container}>
              {/* <Button onPress={this._getAllStudents} title="click this" color="red"/> */}
              {/* <Text style={styles.name}>{this.state.allStudents}</Text> */}

              <FlatList data={[...this.state.allStudents]} renderItem={({item}) => <Text style={styles.name}>{item}</Text>}/>

              {/* <FlatList data={[{key: this.state.allStudents}]} renderItem={({item}) => <Text>{item.key}</Text>}/> */}
              {/* <Button onPress={this.removeRoster} title="then that" color="blue"/> */}
            </View>
          </Fragment>
        );
    }
}
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