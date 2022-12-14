import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Products = ({navigation}) => {
  //   const [error, setError] = useState(null);
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     try {
  //       // here we extract data as ProductData
  //       const {data: ProductData} = await axios.get(
  //         'https://fakestoreapi.com/products',
  //       );
  //       setData(ProductData);
  //       setLoading(false);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  const {loading, data, error} = useFetch(Config.API_URL);
  console.log('render');
  console.log({loading, data: data.length, error});
  console.log('----------------------------');

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
