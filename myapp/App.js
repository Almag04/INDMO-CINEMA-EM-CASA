import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DestaquesScreen from './src/DestaquesScreen';
import BuscaScreen from './src/BuscaScreen';
import IndicacaoScreen from './src/IndicacaoScreen';
import ContatoScreen from './src/ContatoScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'DestaquesScreen') {
              iconName = 'star';
            } else if (route.name === 'BuscaScreen') {
              iconName = 'search';
            } else if (route.name === 'IndicacaoScreen') {
              iconName = 'thumbs-up';
            } else if (route.name === 'ContatoScreen') {
              iconName = 'info';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="DestaquesScreen" component={DestaquesScreen} />
        <Tab.Screen name="BuscaScreen" component={BuscaScreen} />
        <Tab.Screen name="IndicacaoScreen" component={IndicacaoScreen} />
        <Tab.Screen name="ContatoScreen" component={ContatoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;