// Web API takes the data from database, processes it and sends it to Frontend

import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'http://jsonplaceholder.typicode.com/users';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    setLoading(true);
    const response = await axios.get(URL);
    setLoading(false);
    setUserList(response.data);
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
      <Button title="Fetch Data" onPress={fetchData} />
    </SafeAreaView>
  );
};

export default App;
