import React, {useMemo, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './Screens/DrawerScreen';
import HomeStackScreen from './Screens/HomeScreen';
import CardStackScreen from './Screens/CardScreen';
import LoginStackScreen from './Screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './Screens/components/context';



const App = () => {

  const Drawer = createDrawerNavigator();

  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken(AsyncStorage.getItem('token'))
      
    }, 
    signOut: () => {
      setUserToken(null)
      AsyncStorage.removeItem('token');
      
    } 

  }));


  return (
    <AuthContext.Provider value ={authContext}>
      <NavigationContainer>
        { userToken !== null ? (
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Cards list" component={HomeStackScreen} />
          <Drawer.Screen name="New card" component={CardStackScreen} />
      </Drawer.Navigator> )
         
         :   
        <LoginStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider> 
  
  )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e71fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App