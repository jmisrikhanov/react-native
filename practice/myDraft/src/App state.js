// *********************State******************
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, FlatList, Switch} from 'react-native';

const data = [
  {id: 0, name: 'cafe.exe', isFavourite: true},
  {id: 1, name: 'KafaKage', isFavourite: false},
  {id: 2, name: 'BugG', isFavourite: false},
  {id: 3, name: 'Rock`n Code', isFavourite: true},
  {id: 4, name: 'do(drink)', isFavourite: false},
  {id: 5, name: 'esc', isFavourite: false},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);

  const onFavsChange = isFavouriteSelected => {
    setShowOnlyFavs(isFavouriteSelected);
    isFavouriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavourite))
      : setCafeList(data);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{margin: 10, textAlign: 'right'}}>
          Show Only Favorites
        </Text>
        <Switch value={showOnlyFavs} onValueChange={onFavsChange} />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
