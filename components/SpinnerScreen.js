import React, { View, Text } from 'react-native';
 
import Spinner from 'react-native-loading-spinner-overlay';
 
export default class SpinnerScreen extends React.Component {
 
  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }
 
  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 3000);
  }
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </View>
    );
  }
}