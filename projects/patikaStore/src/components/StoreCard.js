import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({store}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: store.imgURL}} />
      <View>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        {!store.inStock && <Text style={styles.instock}>{'Out Of Stock'}</Text>}
      </View>
    </View>
  );
};

export default StoreCard;
