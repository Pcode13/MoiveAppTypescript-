import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screen/HomeScreen';
import UserScreen from '../screen/UserScreen';

import {BottomTabParamList} from '../type';

const BottomTabs = createBottomTabNavigator<BottomTabParamList>();

const HomeIcon = ({ color }: { color: string }) => (
  <Icon name="home" color={color} size={30} />
);

const UserIcon = ({ color }: { color: string }) => (
  <Icon name="user" color={color} size={30} />
);

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

        name="Home" component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <BottomTabs.Screen
        name="User" component={UserScreen}
        options={{
          tabBarIcon: UserIcon,
        }}
      />
    </BottomTabs.Navigator>
  );
};