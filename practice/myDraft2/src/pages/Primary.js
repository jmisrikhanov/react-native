import React, {useState} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';

const Primary = () => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({type: 'ADD_NAME', payload: {name: text}});
  };

  const handleClear = () => {
    dispatch({type: 'CLEAR_LIST'});
  };

  const handleSaveUsername = () => {
    dispatch({type: 'SAVE_USERNAME', payload: {username}});
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Primary</Text>
      <View style={style}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Input your name"
        />
      </View>
      <View style={style}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Input user name"
        />
      </View>
      <Button title="Add" onPress={handleAdd} />
      <Button title="Save" onPress={handleSaveUsername} />
      <Button title="Clear" onPress={handleClear} />
    </SafeAreaView>
  );
};

export default Primary;

const style = {
  borderWidth: 1,
  margin: 10,
  padding: 5,
  borderColor: '#e0e0e0',
};
