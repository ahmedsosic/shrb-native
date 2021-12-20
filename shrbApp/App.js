import React, {useMemo, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './Screens/DrawerScreen';
import HomeStackScreen from './Screens/HomeScreen';
import CardStackScreen from './Screens/CardScreen';
import LoginStackScreen from './Screens/LoginScreen';
import { AuthContext } from './Screens/components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';



const App = () => {

  const Drawer = createDrawerNavigator();

  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [truth, setTruth] = useState(true)

  const authContext = useMemo(() => ({
    signIn: async (newToken) => {
      await AsyncStorage.setItem('token', newToken)
      setToken(newToken)
      setIsLoading(true)
    }, 
    signOut: () => {
      setToken(null)
      setIsLoading(true)  
    },
    throwAlert: () => {
        if (token == null) {
          setTruth(false)
        }
      return truth
    }

  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [isLoading])

    if (isLoading){
      return(
        <View style={{flex:1, backgroundColor: '#5e71fc', justifyContent:"center", alignItems:"center"}}>
          <ActivityIndicator size="large" color='#fff'/>
        </View>
      )
    }

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