import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Favourite from '../../Screens/Favourite';
import Category from '../../Screens/Category';
import More from '../../Screens/More';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View, TouchableOpacity } from 'react-native';
import BackNavigation from './BackNavigation';


const Tab = createBottomTabNavigator();


const DownNavigation = () => {



  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if(route.name === 'Favourite'){
                iconName = 'favorite-border';
            } else if(route.name === 'Category'){
                iconName = 'category';
            } else{
                iconName = 'more-vert';
            }
            return <View style={{marginBottom:4}}><MaterialIcons name={iconName} size={25} color={'black'} /></View>
          },
          
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: {
            position: 'absolute', 
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0, 
          },
        }}
      >
        <Tab.Screen name="Home" options={{ headerShown: false }} component={BackNavigation} />
        <Tab.Screen name="Favourite" component={Favourite} />
        <Tab.Screen name="Category" component={Category} />
        <Tab.Screen name="More" component={More} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default DownNavigation;
