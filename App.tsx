import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './src/pages/Home';
import { Countries } from './src/pages/Countries'


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
            let iconName: string = "";

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
          activeTintColor: '#0cd387',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="overview" component={HomeScreen} />
        <Tab.Screen name="countries" component={Countries} />
        <Tab.Screen name="favorite" component={FavoriteScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}