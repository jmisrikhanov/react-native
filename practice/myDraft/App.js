import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const alertOutput = label => alert('hey ' + label);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Text>Hello World 2</Text>
      </View>
      <Text>Hello World 3</Text>
      <Button
        onPress={() => alertOutput('Jack')}
        title="press"
        disabled={false}
        color="blue"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
