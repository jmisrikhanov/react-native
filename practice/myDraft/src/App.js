// *********************State and Lifecycle******************
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize: 50}}>Counter: {counter}</Text>
      <Button title="Increase Counter" onPress={increaseCounter} />
      <Button title="Decrease Counter" onPress={decreaseCounter} />
      <Button title="Reset Counter" onPress={resetCounter} />
    </SafeAreaView>
  );
};

export default App;
