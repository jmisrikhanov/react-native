import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const MemberEdit = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello MemberEdit</Text>
      <Button
        title="ProfileEditScreen"
        onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </SafeAreaView>
  );
};

export default MemberEdit;
