import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View,ActivityIndicator } from 'react-native';
// import Wallpaper from './styles/Wallpaper.js'
// import Logo from './styles/Logo';
import  { connect } from 'react-redux';
// import LoginStatusMessage from './LoginStatusMessage.js';
import AuthButton from './AuthButton.js';

class HomeScreen extends React.Component {
  constructor(props){
     super(props)
     this.state={
      isLoading:true,
      loggedIn:false
    }
    this.timerHandle = setTimeout(() => {
      this.setState({ isLoading: false })
      this.timerHandle = 0;
    }, 5000);
    
  }
 
  componentWillUnmount(){
    this.setState({ isLoading: true }) 
    if (this.timerHandle) {        
      clearTimeout(this.timerHandle);
      this.timerHandle = 0; 
          
  }   
  }
  // updateLoginState = ()=>{
  //   this.setState({loggedIn:true})
  // }
  render() {

    return (
      // (this.state.isLoading) ? <View style={styles.container}><ActivityIndicator size="large" color="#ff0000" /></View> :
      // <Wallpaper>
      // <Logo/>
        // {/* <LoginStatusMessage /> */}
        <AuthButton />
      // </Wallpaper>
    )
    
      
  }

};

HomeScreen.navigationOptions = {
  title: 'Home Screen',
};
HomeScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state=>({
  isLoggedIn:state.auth.isLoggedIn,
})
export default connect(mapStateToProps, null)(HomeScreen);