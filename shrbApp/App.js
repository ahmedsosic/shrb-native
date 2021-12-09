import React, {useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './Screens/DrawerScreen';
import HomeStackScreen from './Screens/HomeScreen';
import CardStackScreen from './Screens/CardScreen';
import LoginStackScreen from './Screens/LoginScreen';
import { AuthContext } from './Screens/components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';



const App = () => {

  const Drawer = createDrawerNavigator();

  const [token, setToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: async (newToken) => {
      await AsyncStorage.setItem('token', newToken)
      setToken(newToken)
      console.log(token)
      console.log(newToken)
    }, 
    signOut: () => {
      setToken(null)
      
    },

  }));

console.log({token})
  return (
    <AuthContext.Provider value ={authContext}>
      <NavigationContainer>
        { token ? (
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Cards list" component={HomeStackScreen} />
          <Drawer.Screen name="New card" component={CardStackScreen} />
      </Drawer.Navigator> ) : <LoginStackScreen/>
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