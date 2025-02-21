import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from './services';
import Community from './community';
import Journal from './journal';
import About from './about';
import {ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#174d38',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: 'white' },
        headerShown: false,
      }}
    >
      <Tab.Screen name="sessions" component={Services} options={{tabBarIcon:()=><ionicons name="person" size={7}/>}}/>
      <Tab.Screen name="community" component={Community} />
      <Tab.Screen name="journal" component={Journal} />
      <Tab.Screen name="about" component={About} />
    </Tab.Navigator>
  );
}