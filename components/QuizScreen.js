import React,{Fragment} from 'react';
import { View, StyleSheet,FlatList,SectionList,Text } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  question: {
    fontSize: 18,
    textAlign: 'justify',
  }
});
const API = 'http://api.commando.ccs.net/api/v1/quiz/5';
export default class QuizScreen extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          questions: [],
          answers:[]
      }
    }
    _keyExtractor = (index) => index+'';
    componentDidMount(){
    
        fetch(API)
        .then((res) => res.json())
        .then((quiz) => {
          let questions = quiz.results.map(question=>question.question);
          let answers = quiz.results.map(question=>question.answers);
          this.setState({questions,answers});
              })
    }
    
        render() {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <FlatList 
               data={[...this.state.questions]} 
               keyExtractor={this._keyExtractor}
               renderItem={({item}) => <Text style={styles.question}>{item}</Text>}/>
              </View> 
            );
          }
  }
  QuizScreen.navigationOptions = {
    title: 'Quiz',
  };
 
  /* <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        /> */

         {/* <SectionList 
   renderSectionHeader={({ section: { title } }) => <Text style={{ fontWeight: 'bold' }}>{title}</Text>} 
   sections={[ 
     { title: 'questions', data: this.state.questions, renderItem: ({ item, index, section: { title, data } }) => <Text>{item}</Text> }, 
     { title: 'answers', data: this.state.answers, renderItem: ({ item, index, section: { title, data } }) => <Text>{item}</Text>}, 
    ]} 
   keyExtractor={(item, index) => item + index} 
 /> */}
               {/* <SectionList
  renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
  renderSectionHeader={({section: {question}}) => (
    <Text style={{fontWeight: 'bold'}}>{question}</Text>
  )}
  sections={[...this.state.questions]}
  keyExtractor={(item, index) => item + index}
/> */}