import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const alertOutput = label => alert('hey ' + label);

  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'red'}}>
        <Text>Hello World</Text>
        <Text>Hello World 2</Text>
      </View>
      <Text style={{color: 'blue'}}>Hello World 3</Text>
      <Button
        onPress={() => alertOutput('Jack')}
        title="press"
        disabled={false}
        color="blue"
      />
    </SafeAreaView>
  );
};

export default App;
