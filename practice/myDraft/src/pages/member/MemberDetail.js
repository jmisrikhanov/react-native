import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const MemberDetail = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Hello MemberDetail</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('MemberEditScreen')}
      />
    </SafeAreaView>
  );
};

export default MemberDetail;
