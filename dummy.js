// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import SideMenu from 'react-native-side-menu';
// import Menu from './components/Menu.js';

// const image = require('./assets/menu.png');

// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     top: 20,
//     padding: 10,
//   },
//   caption: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     alignItems: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);

//     this.state = {
//       isOpen: false,
//       selectedItem: 'About',
//     };
//   }

//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   }

//   updateMenuState(isOpen) {
//     this.setState({ isOpen });
//   }

//   onMenuItemSelected = item =>
//     this.setState({
//       isOpen: false,
//       selectedItem: item,
//     });

//   render() {
//     const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

//     return (
//       <SideMenu
//         menu={menu}
//         isOpen={this.state.isOpen}
//         onChange={isOpen => this.updateMenuState(isOpen)}
//       >
//         <View style={styles.container}>
//           <Text style={styles.welcome}>
//             Welcome to Code Commando
//           </Text>
//           <Text style={styles.instructions}>
//             Please signin to get started
//           </Text>
//           <Text style={styles.instructions}>
//             Slide the sidebar to right to open up Menu
//           </Text>
//           <Text style={styles.instructions}>
//             Current selected menu item is: {this.state.selectedItem}
//           </Text>
//         </View>
//         <TouchableOpacity
//           onPress={this.toggle}
//           style={styles.button}
//         >
//           <Image
//             source={image}
//             style={{ width: 32, height: 32 }}
//           />
//         </TouchableOpacity>
//       </SideMenu>
//     );
//   }
// }