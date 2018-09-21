import React,{Fragment} from 'react';
import { View, StyleSheet,FlatList,SectionList,Text, Platform } from 'react-native';

const API = 'http://api.commando.ccs.net/api/v1/quiz/10';
export default class QuizScreen extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          oQList: [],
         
      }
    }
    _keyExtractor = (index) => index+'';
    componentDidMount(){
    
        fetch(API)
        .then((res) => res.json())
        .then((quiz) => {
          let questions = quiz.results.map(question=>question.question);
          let answers = quiz.results.map(question=>question.answers ? question.answers : '_______________');
          let oQList = questions.map((q,i) => q + '\n\n' + answers[i]);
          console.log(oQList, oQList.length);
          console.log('answers',answers);

          this.setState({oQList});
              })
    }
    
        render() {
            return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
               <FlatList 
               data={[...this.state.oQList]} 
               keyExtractor={this._keyExtractor}
               renderItem={({item}) => <Text style={styles.row}>{item}</Text>}/>
              </View> 
            );
          }
  }
  QuizScreen.navigationOptions = {
    title: 'Quiz',
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      ...Platform.select({
        ios: {
          paddingTop: 20,
        },
      }),
    },
    name: {
      fontSize: 18,
      textAlign: 'center',
    },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 180,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    fontSize: 20,
    color: '#222222',


    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    })
  },
  });
  
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