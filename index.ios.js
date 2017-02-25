import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import Header from './src/components/Header';
import StoriesList from './src/components/StoriesList';

// Create a component
const App = () => (
  <ScrollView style={{ flex: 1 }}>
    <Header headerText={'HN Top Stories'} />
    <StoriesList />
  </ScrollView>
);

// Render it to the device
AppRegistry.registerComponent('HNReader', () => App);