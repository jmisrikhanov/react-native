import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

const Welcome = ({navigation}) => {
  const goToMemeberSign = () => {
    navigation.navigate('MemberSignScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Fitness Salonu</Text>
      <Button text="Uye Kaydi Olustur" onPress={goToMemeberSign} />
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
});
