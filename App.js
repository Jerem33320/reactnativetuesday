import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home';
import Annonces from './components/Annonces';
import Profile from './components/Profile';
import Item from './components/Item';

const Stack = createStackNavigator();

export default function App() {
  
  return ( 
    <NavigationContainer>  
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Annonces" component={Annonces} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
