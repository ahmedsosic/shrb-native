import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './Screens/DrawerScreen';
import HomeStackScreen from './Screens/HomeScreen';
import CardStackScreen from './Screens/CardScreen';
import LoginStackScreen from './Screens/RootStackScreen';



const Drawer = createDrawerNavigator();



const App = () => {

  // let userToken;
  // userToken = null;


  return (
      <NavigationContainer>
         {/* { userToken !== null ? (
       <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Cards list" component={HomeStackScreen} />
          <Drawer.Screen name="New card" component={CardStackScreen} />
      </Drawer.Navigator> 
         
         )
    : */}
        <LoginStackScreen/>
      {/* } */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e71fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App