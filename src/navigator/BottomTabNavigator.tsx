import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomePage from '../../HomePage';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigation: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', height: 70},
        tabBarInactiveTintColor: '#6366f1',
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 20,
          
          
        },
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#e0f2fe'
        },
        headerShown: false

      }}
    >
      <BottomTabs.Screen

        name="Home" component={HomePage}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="User" component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="user" color={color} size={30} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="groups" component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="groups" color={color} size={30} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="sticky_note_2" component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="note" color={color} size={30} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="person" component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={30} />
          ),
        }}
      />

    </BottomTabs.Navigator>
  );
};