import React, { Component } from 'react';

export default class ReadmeScreen extends Component {
    render() {
        let url = 'https://github.com/codefellows/seattle-javascript-401n5/blob/master/01-node-ecosystem/README.md';
        return (
            <Text>{url}</Text>
        );
    }
}
ReadmeScreen.navigationOptions = {
    title: 'Readme',
  };