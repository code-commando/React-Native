import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,AsyncStorage,ActivityIndicator,
} from 'react-native';

const window = Dimensions.get('window');
//const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';
//const uri = `https://avatars0.githubusercontent.com/u/24405156?v=4`

class Menu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isLoading:true,
      uri:'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png'
    }
  }
    async componentDidMount(){
      alert('I am here')
     if(this.props.isLoggedIn){
    this.retrieveToken().then((githubToken)=>{
      fetch(`https://api.github.com/user?access_token=${githubToken}`)
      .then(response => response.json())
      .then(user=>{
        console.log('user',user.avatar_url)
        let uri = user.avatar_url;
        this.setState({uri})
        console.log('uri',this.state.uri)
        this.setState({isLoading:false})
      });
    })
  }
  }
  retrieveToken= async()=>{
      //const authToken = await AsyncStorage.getItem('authToken');
      const githubToken = await AsyncStorage.getItem('gitHubToken');
      //console.log('githubtoken outside',githubToken)
      return githubToken;
    }
  dispathBoth=(item)=>{
    this.props.onItemSelected(item)
    this.props.dispatch(NavigationActions.navigate({ routeName: item }))
  }
  
  render(){
  if (!this.props.isLoggedIn) {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
      <Text
        onPress={()=>this.dispathBoth('Home')}
        style={styles.home}
      >Home
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Login')}
        style={styles.item}
      >Login
      </Text>
      </ScrollView>
    )
  }
  // if(this.state.isLoading){
  //   return <ActivityIndicator size="large"/>
  // }
  // if(!this.state.isLoading && this.props.isLoggedIn){
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{uri:this.state.uri}}
        />
        <Text style={styles.name}>Your name</Text>
      </View>
      <Text
        onPress={()=>this.dispathBoth('Home')}
        style={styles.item}
      >
        Home
      </Text>
      <Text
       onPress={()=>this.dispathBoth('Courses')}
        style={styles.item}
      >
        Courses
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Roster')}
        
        style={styles.item}
      >
        Roster
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Pairs')}
        
        style={styles.item}
      >
        Pairs
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Random')}
        style={styles.item}
      >
        Random
      </Text>
      <Text
        onPress={()=>this.dispathBoth('Quiz')}
        style={styles.item}
      >
        Quiz
      </Text>

      <Text
        onPress={()=>this.dispathBoth('CodeRunner')}
        style={styles.item}
      >
        CodeRunner
      </Text>

      {/* <Text
        onPress={this.navigateToScreen('About')}
        style={styles.item}
      >
        About
      </Text> */}
    </ScrollView>
  );
    }
    
    
}

Menu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(Menu);
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 30,
    fontWeight: '400',
    paddingTop: 5,
  },
  home: {
    fontSize: 30,
    fontWeight: '400',
    paddingTop: 50,
  },
});