// Web API takes the data from database, processes it and sends it to Frontend

import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import axios from 'axios';

const App = () => {
  const fetchData = () => {
    console.log('1');
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      // then block works when there is a response
      .then(response => {
        console.log(response.data);
        console.log('3');
      })
      .catch(error => console.log(error));

    console.log('2');
  };

  return (
    <SafeAreaView>
      <Text>Web Api</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </SafeAreaView>
  );
};

export default App;
