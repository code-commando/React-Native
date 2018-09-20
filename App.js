import React from 'react'
import { StyleSheet, View,Image, StatusBar,AppRegistry,TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './reducer/index.js';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu'
import {AppNavigator,middleware} from './navigation/AppNavigation'
import image from './assets/menu.png'
// create store
const store = createStore(AppReducer, applyMiddleware(middleware));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'Home',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    
  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected}/>
    return (
      <Provider store={store}>
      <SideMenu
        menu={menu}
        menuPosition='right'
        isOpen={this.state.isOpen}
        openMenuOffset={250}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
        <StatusBar barStyle='light-content' />
          <AppNavigator />
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
        </SideMenu>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    position: 'absolute',
    top: 20,
    right:10,
    padding: 10,
  },
})
AppRegistry.registerComponent('CodeCommando', () => App);

export default App;









