import React from 'react';
import {View, Text, Image} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import styles from './Detail.style';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, data, error} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} EUR</Text>
      </View>
    </View>
  );
};

export default Detail;
