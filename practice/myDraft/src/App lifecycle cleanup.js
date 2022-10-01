// *********************Lifecycle part2 clean up******************
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

const App = () => {
  const [helloFlag, setHelloFlag] = useState(true);

  const updateFlag = () => {
    setHelloFlag(!helloFlag);
  };

  return (
    <SafeAreaView>
      <Text>Hello Lifecycle</Text>
      <Button title="Up!" onPress={updateFlag} />
      {helloFlag && <Hello />}
    </SafeAreaView>
  );
};

export default App;

const Hello = () => {
  // Cleanup ===check console=====
  useEffect(() => {
    console.log('Hello World');

    return () => {
      console.log("I'm leaving...");
    };
  }, []);

  return (
    <View style={{backgroundColor: 'aqua', padding: 10}}>
      <Text>I'm Hello Component</Text>
    </View>
  );
};
