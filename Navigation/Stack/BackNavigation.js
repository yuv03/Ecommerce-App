import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../Screens/Home';
import Product from '../../Screens/Product';
import Cart from '../../Screens/Cart';

const Stack = createStackNavigator();

const BackNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="Product" options={{ headerShown: false }} component={Product} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BackNavigation;
