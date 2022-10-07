// Web API takes the data from database, processes it and sends it to Frontend

import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import axios from 'axios';

const App = () => {
  // you cannot use async/await inside useEffect but can use then&catch in it
  // or you can call outside async/await structure
  async function fetchData() {
    try {
      console.log('1');

      const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );
      console.log('3');
      console.log(response);

      console.log('2');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <Text>Web Api</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </SafeAreaView>
  );
};

export default App;
