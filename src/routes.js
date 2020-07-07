import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from './Pages/Login/login'
import Home from './Pages/Home/home'
import Profile from './Pages/Profile/profile'
import Todolist from './Pages/ToDoList/todolist'
import Bills from './Pages/Bills/bills'
import 'react-native-gesture-handler'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{ title: 'Login' }} component={Login} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function DrawerNavigator () {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="List" component={Todolist} />
      <Drawer.Screen name="Bills" component={Bills} />
    </Drawer.Navigator>
  )
}
