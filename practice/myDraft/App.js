import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const alertOutput = label => alert('hey ' + label);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box_1}></View>
      <View style={styles.box_2}></View>
      <View style={styles.box_3}></View>
      <View style={styles.box_4}></View>
      {/* <Button
        onPress={() => alertOutput('Jack')}
        title="press"
        disabled={false}
        color="blue"
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly' /*for x-direction in row*/,
    alignItems: 'center' /*for y-direction in row*/,
  },
  box_1: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
  },
  box_2: {
    width: 75,
    height: 75,
    backgroundColor: 'blue',
  },
  box_3: {
    width: 75,
    height: 75,
    backgroundColor: 'aqua',
  },
  box_4: {
    width: 75,
    height: 75,
    backgroundColor: 'orange',
  },
});

export default App;
