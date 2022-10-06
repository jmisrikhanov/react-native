// *******************Tab Drawer******************
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from './pages/Favorites';
import Products from './pages/Products';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProductsTab" component={Products} />
        <Tab.Screen name="FavoritesTab" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
