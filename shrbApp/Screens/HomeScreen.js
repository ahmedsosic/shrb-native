import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './components/Card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getCards from '../api-service/api-cards';
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

  const [cards, setCards] = useState([])
  const [change, setChange] = useState(false)

  useEffect(() => {
    async function neka_funkcija(){
      const token =  await AsyncStorage.getItem('token')
    getCards(token)
    .then(response => {
      setCards(response)
      // setCards(cards.reverse())
      setChange(true)
      console.log({response})
    })
    .catch(err => console.log(err))
    } 
    neka_funkcija()
  }, [change])
 console.log({cards})
  return (
    <View style={styles.container}>
        <View style={styles.cardList}>
            <FlatList
                keyExtractor={(item, index) =>index}
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