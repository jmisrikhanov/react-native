import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  //   console.log('route :>> ', route);
  const {user} = route.params;

  return (
    <SafeAreaView>
      <Text style={styles.message}>Registration Successful</Text>
      <Text style={styles.label}>Name: {user.username}</Text>
      <Text style={styles.label}>Surname: {user.userSurname}</Text>
      <Text style={styles.label}>Age: {user.userAge}</Text>
      <Text style={styles.label}>e-mail: {user.userMail}</Text>
      <Text style={styles.label}>Address: {user.userAddress}</Text>
    </SafeAreaView>
  );
};

export default MemberResult;

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 50,
    textAlign: 'center',
  },
});
