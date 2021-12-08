import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './components/Card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';



const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }} >
          <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
  );


const HomeScreen = () => {

    const [cards, setCards] = useState([
    {date_from: '12-12-2021', date_to: '13-12-2021', description: 'odmor', key: 1},
    {date_from: '22-10-2021', date_to: '23-10-2021', description: 'bolovanje', key: 2},
    {date_from: '12-12-2021', date_to: '13-12-2021', description: 'odmor', key: 3},
    {date_from: '22-10-2021', date_to: '23-10-2021', description: 'bolovanje', key: 4},
    {date_from: '12-12-2021', date_to: '13-12-2021', description: 'odmor', key: 5},
    {date_from: '22-10-2021', date_to: '23-10-2021', description: 'bolovanje', key: 6},
    {date_from: '12-12-2021', date_to: '13-12-2021', description: 'odjhkjh hkjhkjh jhkjhkj jkhmor', key: 7},
    {date_from: '22-10-2021', date_to: '23-10-2021', description: 'bolovanje', key: 8},
    {date_from: '12-12-2021', date_to: '13-12-2021', description: 'odmor', key: 9},
    {date_from: '22-10-2021', date_to: '23-10-2021', description: 'bolovanje', key: 10},
  ])

  const token = AsyncStorage.getItem('token')
  console.log("tokeeeeeen", token)

  return (
    <View style={styles.container}>
        <View style={styles.cardList}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cards}
                renderItem={({item}) => (
                    <Card card={item} />
                )} 
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e71fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardList: {
    flex: 1,
    overflow: 'hidden',

  },
});

export default HomeStackScreen