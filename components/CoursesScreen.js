import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Picker, 
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Wallpaper from './styles/Wallpaper.js'
import Logo from './styles/Logo.js'
import Container from './styles/Container';
import Button from './styles/Button';
import Label from './styles/Label';
import SmartPicker from 'react-native-smart-picker'
const url = 'https://github.com/codefellows/seattle-javascript-401n5/blob/master/01-node-ecosystem/README.md';
export default class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '1',
      classCode: '',
      toggleView: true,
      api: 'https://github.com/codefellows/seattle-javascript-401n5/blob/master/01-node-ecosystem/README.md'
      // courseCode: '401n5',
      // courseDay: 'day: 0'
    }
  }

  handleChange = (value) => {
    this.setState({
        selected: value
    });
}

getReadme = () => {
//  let api = 'https://github.com/codefellows/seattle-javascript-401n5/blob/master/01-node-ecosystem/README.md';
 this.setState({toggleView: false});
}
render() {
  
  return(
      <Wallpaper>
        <View>
      {this.state.toggleView ?<ScrollView style={styles.scroll}>
      <Container>
        <Text style={styles.welcome}>
          Courses Screen
        </Text>
      </Container>
    <Container>
      <Label text="Enter Class Code" />
      <TextInput style={styles.textInput} onChangeText={(classCode) => this.setState({classCode})}/>
    </Container>
    
    <View>
      <Text style={styles.welcome}>{this.state.classCode}</Text>
      <SmartPicker
          style={[styles.picker, styles.textLabel]} 
          itemStyle={styles.pickerItem} 
          selectedValue={this.state.selected}
          label='Select the class day' 
          onValueChange={this.handleChange}>
           {Array.from(Array(60), (_,x) => x).map(item => (
          <Picker.Item key={item + 1} label={`${item + 1}`} value={item + 1} />
        ))}
      </SmartPicker>
    </View>
    <Container>
      <Button 
        label="Enter"
        styles={{button: styles.alignRight, label: styles.label}} 
        onPress={this.getReadme.bind(this)} />
    </Container>
    </ScrollView>
    :<TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
  <Text style={{color: 'blue'}}>
    Google
  </Text>
</TouchableOpacity>}
    </View>
    </Wallpaper>
  );
}
}
CoursesScreen.navigationOptions = {
  title: 'Courses',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    color: '#0d8898',
    fontSize: 20
  },
  alignRight: {
    alignSelf: 'flex-end'
  },
  activityIndicator: {
    flex: 1,
    top: 200,
    alignItems: 'center',
    justifyContent: 'flex-start',
 },
  picker: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    width: 100,
    backgroundColor: '#F5FCFF',
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerItem: {
    height: 88,
    color: 'red',
    fontSize: 20
  },
  scroll: {
    //backgroundColor: '#E1D7D8',
    padding: 30,
    flexDirection: 'column'
  },
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF',
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    //fontFamily: 'veranda',
    marginBottom: 10,
    color: '#595856'
},
  welcome: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize:30
  },
});

// const CoursesScreen = () => (
  // <Wallpaper>
  //     <Logo/>
//   <View style={styles.container}>
//     <Text style={styles.welcome}>
//       Courses Screen
//     </Text>
//   </View>
//   </Wallpaper>
// );


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