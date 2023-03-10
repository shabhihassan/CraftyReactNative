import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image} from 'react-native';

import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Ionicons';
import AdminDashboard from './Screens/Admin/AdminDashboard';
import OrderHistory from './Screens/Admin/OrderHistory';
import ProductList from './Screens/Admin/ProductList';
import Profile from './Screens/Admin/Profile';
const Tab = createBottomTabNavigator();
const AdminBottomNavigator= () => {

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: {height: 75,backgroundColor:'#62442B'},
      headerShown:false,
      activeTintColor: 'white',
      labelStyle:{fontSize:12,paddingBottom:5},
    }}
    
    >
      <Tab.Screen name="AdminDashboard" component={AdminDashboard} options={{
        tabBarIcon: ({focused,size}) => (<Icon name="home" size={size} color={focused ? '#FDF4E7' : '#9F845A'}/>),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="OrderHistory" component={OrderHistory} options={{
        tabBarIcon: ({focused,size}) => (<Icon2 name="text-document" size={size} color={focused ? '#FDF4E7' : '#9F845A'}/>),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="ProductList" component={ProductList} options={{
        tabBarIcon: ({focused,size}) => (<Icon1 name="box" size={size} color={focused ? '#FDF4E7' : '#9F845A'}/>),
        tabBarShowLabel: false
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({focused,size}) => (<Icon3 name="person-outline" size={size} color={focused ? '#FDF4E7' : '#9F845A'}/>),
        tabBarShowLabel: false
      }}/>
      
      
    </Tab.Navigator>
     
  );
}

export {AdminBottomNavigator};