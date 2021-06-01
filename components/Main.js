import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './Header';

class Main extends Component {
  render() {
    return (
      <View>
        <Header heading="Smallcase News" />
      </View>
    );
  }
}

export default Main;
