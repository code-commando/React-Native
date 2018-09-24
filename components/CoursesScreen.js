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
//import ScrollPicker from 'react-native-wheel-scroll-picker';

export default class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      classCode: '',
      courseCode: '401n5',
      courseDay: 'day: 0'
    }
  }
press = () => {
  //add classCode to github path
}
render() {
  //let setCourseDay = /[1-50]/;

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
    <View  style={styles.container}>
      <Picker
          style={[styles.picker]} 
          itemStyle={styles.pickerItem} 
          selectedValue={this.props.courseDay} //should be: {this.state.courseDay} but it breaks
          onValueChange={(itemValue) => this.setState({courseDay: itemValue})}>
          <Picker.Item label="day: 1" value="day: 1" />
          <Picker.Item label="day: 2" value="day: 2" />
      </Picker>
      </View>
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
    flexDirection: 'column',
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
  picker: {
    width: 200,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerItem: {
    height: 88,
    color: 'red'
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