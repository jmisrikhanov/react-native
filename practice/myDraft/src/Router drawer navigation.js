// *******************Tab Drawer******************
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Favorites from './pages/Favorites';
import Products from './pages/Products';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ProductsDrawer" component={Products} />
        <Drawer.Screen name="FavoritesDrawer" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
