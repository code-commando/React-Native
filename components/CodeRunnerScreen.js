import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import MonacoEditor from './MonacoEditor.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const CodeRunnerScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
    CodeRunner Screen
    </Text>
  </View>
);

CodeRunnerScreen.navigationOptions = {
  title: 'CodeRunner',
};

export default CodeRunnerScreen;

/**
 * import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Monaco from './MonacoEditor.js';
import MonacoEditor from 'react-monaco-editor';
class CodeRunnerScreen extends React.Component{
constructor(props) {
      super(props);
      this.state = {
        code: '2*2',
      }
    }
    editorDidMount(editor, monaco) {
      console.log('editorDidMount', editor);
      editor.focus();
    }
    onChange(newValue, e) {
      console.log('onChange', newValue, e);
    }
    render() {
      const code = this.state.code;
      const options = {
        selectOnLineNumbers: true
      };
      return (
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      );
    
  }
}
CodeRunnerScreen.navigationOptions = {
  title: 'CodeRunner',
};

export default CodeRunnerScreen;
 * 
 */