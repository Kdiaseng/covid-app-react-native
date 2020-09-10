import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {HomeScreen} from './src/pages/Home';




function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>     
      <Text>Settings!</Text>
    </View>
  );
}

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorite!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'overview') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';

            } else if (route.name === 'countries') {
              iconName = focused ? 'ios-list-box' : 'ios-list';

            } 
              else if (route.name === 'favorite') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="overview" options={{
          
        }} component={HomeScreen} initialParams={{algo: 'algo'}}/>
        <Tab.Screen name="countries" component={SettingsScreen} />
        <Tab.Screen name="favorite" component={FavoriteScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}