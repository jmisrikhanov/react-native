import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';

const First = props => {
  console.log('props', props);
  const navigateToPage = () => {
    props.navigation.navigate('SecondScreen', {
      username: 'Second',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello First</Text>
      <Button title="go to second" onPress={navigateToPage} />
    </SafeAreaView>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
