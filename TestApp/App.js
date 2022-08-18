/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import Header from './essai/Header';

import { callservice } from '../services/try';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const fonction = () => 
  {
    callservice();
  }
 
  return (
    <View styles={styles.screenContainer}>
      <Header />
      <Text style={styles.text}>I'm a React Native component</Text>
      <Button onPress={fonction}>Essai</Button>
  </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: 'cornflowerblue',
    marginTop: 50,
    alignSelf: 'center'
  }
});

export default App;
