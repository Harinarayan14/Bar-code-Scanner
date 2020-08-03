
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScanScreen from './screens/scanScreen'

export default function App() {
  return (
    
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  Scan: ScanScreen
})

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
