import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //to get rid off header for all pages
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          // to get rid off header for this particular page
          // options={{headerShown: false}}
        />
        <Stack.Screen name="MemberSignScreen" component={MemberSign} />
        <Stack.Screen name="MemberResultScreen" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
