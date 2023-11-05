import React from 'react';
import { View, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SubjectsScreen from './SubjectsScreen';
import CalendarScreen from './CalendarScreen';
import SettingsScreen from './SettingsScreen';

import colors from '../config/colors';

const subjectsName = 'Subjects';
const calendarName = 'Calendar';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

function MainOverlay() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={subjectsName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            size = 42;
            let iconName;

            if (route.name === subjectsName) {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === calendarName) {
              iconName = focused ? 'today' : 'today-outline';
            } else if (route.name === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} color={color} size={size} />;
          },
          headerBackground: () => (
            <View style={{ flex: 1, backgroundColor: colors.background }} />
          ),
          headerLeft: props => (
            <Image
              source={{
                uri: 'https://ih0.redbubble.net/image.5139669085.2272/raf,360x360,075,t,fafafa:ca443f4786.jpg',
              }}
              style={{
                resizeMode: 'center',
                height: 100,
                width: 100,
                flex: 0.9,
              }}
            />
          ),
          headerTitleStyle: {
            color: colors.primary,
            textShadowColor: colors.bright,
            textShadowRadius: 3,
          },
          headerTitleAlign: 'center',

          tabBarBackground: () => (
            <View style={{ flex: 1, backgroundColor: colors.background }} />
          ),
          tabBarStyle: { flex: 0.13 },
          tabBarShowLabel: false,
          title: 'AutoPlecak',
          tabBarActiveTintColor: colors.bright,
          tabBarInactiveTintColor: colors.primary,
        })}
      >
        <Tab.Screen name={subjectsName} component={SubjectsScreen} />
        <Tab.Screen name={calendarName} component={CalendarScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainOverlay;
