import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    margin: 3,
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 10,
    padding: 10,
    margin: 6,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2.5,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 26,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  instock: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
    marginBottom: 5,
  },
});
