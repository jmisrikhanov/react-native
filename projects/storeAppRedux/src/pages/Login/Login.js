import React from 'react';
import {SafeAreaView, Text, View, Image, Alert} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import usePost from '../../hooks/usePost';
import Config from 'react-native-config';

const Login = ({navigation}) => {
  const {data, post, loading, error} = usePost();

  function handleLogin(values) {
    console.log('first', values);
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Store', 'Error');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Store', 'User not found!');
    } else {
      navigation.navigate('ProductsPage');
    }
    console.log('data', data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Input user name..."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Input password..."
              value={values.password}
              onType={handleChange('password')}
              iconName="onepassword"
              isSecure
            />
            <Button text="Login" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
