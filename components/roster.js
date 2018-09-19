import React, { Component, Fragment } from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
const API = 'http://api.commando.ccs.net/api/v1/roster';

export default class  Roster extends Component {
  constructor(props){
    super(props);
    this.state = {
      student: '',
      allStudents: [],
  }
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

  _getAllStudents = () => {
    fetch(API)
      .then((res) => res.json())
      .then((roster) => {
        let allStudents = JSON.stringify(roster.results);
        console.log('ALL STUDENTS', allStudents);
        this.setState({allStudents});

            })
        }

    render() {
        return (
          <Fragment>
            <View style={styles.container}>
              <Button onPress={this._getAllStudents} title="click this" color="red"/>
              <Text style={styles.name}>{this.state.allStudents}</Text>
              <Button onPress={this.removeRoster} title="then that" color="blue"/>
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
      backgroundColor: '#558C8F',
    },
    name: {
      fontSize: 14,
      textAlign: 'center',
    }
  });