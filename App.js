import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Main from './components/Main';
import MainWithHooks from './components/MainWithHooks';
import theme from './theme';

const App = () => {
  return (
    <SafeAreaView style={[theme.container]}>
      <MainWithHooks />
    </SafeAreaView>
  );
};

export default App;
