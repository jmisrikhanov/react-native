import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

const App = () => {
  const alertOutput = label => alert('hey ' + label);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>Hello World</Text>
      </View>
      <View style={styles.center_view_container}>
        <Text>Hello World 2</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>Hello World 3</Text>
      </View>
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
    flex: 1,
    flexDirection: 'column',
  },
  upper_view_container: {
    flex: 3,
    backgroundColor: 'red',
  },
  center_view_container: {
    flex: 6,
    backgroundColor: 'purple',
  },
  bottom_view_container: {
    flex: 10,
    backgroundColor: 'green',
  },
});

export default App;
