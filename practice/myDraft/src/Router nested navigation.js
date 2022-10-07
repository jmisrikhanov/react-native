// *******************Nested Navigation******************
// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Member from './pages/member/Member';
import MemberDetail from './pages/member/MemberDetail';
import MemberEdit from './pages/member/MemberEdit';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MemberStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberEditScreen" component={MemberEdit} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Profile">
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
