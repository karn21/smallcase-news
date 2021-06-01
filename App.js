import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from './components/Header';
import Main from './components/Main';
import theme from './theme';

const App = () => {
  return (
    <SafeAreaView style={[theme.container]}>
      <Main />
    </SafeAreaView>
  );
};

export default App;
