// import React,{Fragment} from 'react';
// import { View, Text,Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
// //import Menu from './Menu.js'
// class HomeScreen extends React.Component {
//     static navigationOptions = {
//       title: 'Welcome',
//     };
//     render() {
//         return (
           
//           <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Welcome to code commando</Text>
//             <Button
//           title="Go to Login"
//           onPress={() => this.props.navigation.navigate('Login')}
//         />
//           </View>
         
          
//         );
//       }
//   }
//   export default createStackNavigator({
//     Home: {
//       screen: HomeScreen
//     },
//   })
import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage.js';
import AuthButton from './AuthButton.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
  </View>
);

HomeScreen.navigationOptions = {
  title: 'Home Screen',
};

export default HomeScreen;