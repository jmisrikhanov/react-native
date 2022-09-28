import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
// FlatList is something like loading="lazy"
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import NewsCard from './components/NewsCard';

const App = () => {
  // with renderNews it won't create the same function many times but use already created function
  // moreover it enhances the performance
  const renderNews = ({item}) => <NewsCard news={item} />;
  const keyExtractorNews = (item, index) => item.u_id.toString();
  const scrollViewNews = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {news_banner_data.map(data => (
        <Image
          style={styles.banner_image}
          key={data.id}
          source={{uri: data.imageUrl}}
        />
      ))}
    </ScrollView>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>News</Text>
      <FlatList
        // IF u don't want the header to stick at the top of FlatList use ListHeaderComponent and add the header inside the callback
        ListHeaderComponent={scrollViewNews}
        keyExtractor={keyExtractorNews}
        data={news_data}
        // renderItem={data => <Text>{data.item}</Text>}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});

export default App;
