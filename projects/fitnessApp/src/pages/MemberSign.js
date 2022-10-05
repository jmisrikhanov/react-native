import React, {useState} from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const MemberSign = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userAddress, setUserAddress] = useState(null);

  const handleSubmit = () => {
    if (!username || !userSurname || !userAge || !userMail || !userAddress) {
      Alert.alert('Fitness Center', 'All inputs must be filled!');
      return;
    }

    const user = {
      username,
      userSurname,
      userAge,
      userMail,
      userAddress,
    };

    // console.log('user ', user);
    navigation.navigate('MemberResultScreen', {user});
  };

  return (
    <SafeAreaView>
      <Input
        label="Name"
        placeholder="Please enter your name..."
        // onChangeText={text => setUsername(text)}
        // same as above
        onChangeText={setUsername}
      />
      <Input
        label="Surname"
        placeholder="Please enter your surname..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Age"
        placeholder="Please enter your age..."
        onChangeText={setUserAge}
      />
      <Input
        label="e-mail"
        placeholder="Please enter your e-mail..."
        onChangeText={setUserMail}
      />
      <Input
        label="Address"
        placeholder="Please enter your address..."
        onChangeText={setUserAddress}
      />
      <Button text="Complete Registration" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default MemberSign;
