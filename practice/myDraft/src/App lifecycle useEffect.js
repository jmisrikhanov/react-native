// *********************Lifecycle******************
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(100);
  // console.log('render');
  // Component updates (renders) in every change of the state

  useEffect(() => {
    console.log('number updated: ' + number);
  }, [number]);

  useEffect(() => {
    console.log('counter updated');
  }, [counter]);

  useEffect(() => {
    // We fetch data in this mounting section of the useEffect
    // As you can see from the console, the mounting occurs only
    // once, when the component rendered for the first time
    console.log('Mounting...');
  }, []);

  const updateCounter = () => {
    console.log('1.State value: ' + number);
    setNumber(number + 1);
    //                      IMPORTANT NOTES!!!:
    // The number won't be updated in the next line it will be updated in useEffect
    // Here we just declare that number should be updated
    console.log('2.State value: ' + number);
  };

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Text>Number: {number}</Text>
      <Text>Number: {counter}</Text>
      <Button title="Up!" onPress={updateCounter} />
      <Button title="Counter Up!" onPress={() => setCounter(counter + 100)} />
    </SafeAreaView>
  );
};

export default App;
