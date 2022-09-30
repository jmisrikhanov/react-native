import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import StoreCard from './components/StoreCard';
import store_data from './data.json';

const App = () => {
  const renderStore = ({item}) => <StoreCard store={item} />;
  const keyExtractorStore = (item, index) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        onChangeText={''}
        value={'Search...'}
        inlineImageRight="search_icon"
      />
      <FlatList
        horizontal={false}
        numColumns={'2'}
        data={store_data}
        keyExtractor={keyExtractorStore}
        renderItem={renderStore}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#800080',
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: '#ECEFF1',
    marginBottom: 10,
    borderRadius: 10,
    color: 'gray',
  },
});
