import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button} from 'react-native';

const Second = props => {
  console.log('props2 :>> ', props);

  const backToFirst = () => {
    props.navigation.goBack();
  };

  const user = props.route.params.username;
  // const {username} = props.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello {user}</Text>
      {/* <Text style={styles.text}>Hello {username}</Text> */}
      <Button title="Go Back" onPress={backToFirst} />
    </SafeAreaView>
  );
};

export default Second;

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
