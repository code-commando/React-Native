import React from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import AuthHelper from './AuthUtil.js';

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
    }, 3000);
    
  }
 
  componentWillUnmount(){
    this.setState({ isLoading: true }) 
    if (this.timerHandle) {        
      clearTimeout(this.timerHandle);
      this.timerHandle = 0; 
          
  }   
  }
 
  render() {
    return (
        <AuthHelper />
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