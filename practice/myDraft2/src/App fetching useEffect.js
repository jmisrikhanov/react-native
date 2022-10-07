// Web API takes the data from database, processes it and sends it to Frontend

import React, {useState, useEffect} from 'react';
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
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  async function fetchData() {
    // const response = await axios.get(URL);
    // setLoading(false);
    // setUserList(response.data);

    // above with then&catch:

    axios.get(URL).then(response => {
      setLoading(false);
      setUserList(response.data);
    });
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}
    </SafeAreaView>
  );
};

export default App;
