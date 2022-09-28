//*****************Custom Component********************** */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card1';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Ed Stark" text="Winter is coming..." />
      <Card title="John Doe" text="lorem ipsum" />
      <Card title="Jane Doe" text="lorem ipsum" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
