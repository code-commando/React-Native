import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Picker, 
  ScrollView, 
} from 'react-native';
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import DropdownMenu from 'react-native-dropdown-menu';

export default class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      classCode: '',
      courseCode: '401n5',
      day: 1
    }
  }

render() {
  //let courseDay = [[1,2,3,4,5],[6,7,8,9,10]];

  return(
    <ScrollView style={styles.scroll}>
      <Container>
        <Text style={styles.welcome}>
          Courses Screen
        </Text>
      </Container>
    <Container>
      <Label text="Enter Class Code" />
      <TextInput style={styles.textInput} onChangeText={(classCode) => this.setState({classCode})}/>
    </Container>
    <Container>
      <Button 
        label="Enter"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.press.bind(this)} />
    </Container>

    </ScrollView>
  );
}
}
CoursesScreen.navigationOptions = {
  title: 'Courses',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  scroll: {
    backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



// const CoursesScreen = () => (
//   <View style={styles.container}>
//     <Text style={styles.welcome}>
//       Courses Screen
//     </Text>
//   </View>
// );
// <Picker
// selectedValue={this.state.day}
// style={{ height: 50, width: 100 }}
// onValueChange={(itemValue, i) => this.setState({day: courseDay[itemValue][i]})}>
// <Picker.Item label="Day" value={courseDay[i] }/>

// </Picker> 
      /* <DropdownMenu 
        style={{flex: 1}}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
        handler={(selection, row) => this.setState({day: courseDay[selection][row]})} courseDay={courseDay}>
        <View style={{flex: 1}}>
          <Text>Day: {this.state.day}</Text>
        </View>
      </DropdownMenu> */