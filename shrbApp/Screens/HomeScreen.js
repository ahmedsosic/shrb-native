import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl, FlatList, StyleSheet, View, ScrollView } from 'react-native';
import Card from './components/Card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getCards from '../api-service/api-cards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }} >
          <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
  );


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  


const HomeScreen = () => {

  const [cards, setCards] = useState([])
  const [change, setChange] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(1500).then(() => setRefreshing(false));
      setChange(false)
    }, []); 


  useFocusEffect(useCallback(() => {
    async function fetchCards(){
      const token =  await AsyncStorage.getItem('token')
    await getCards(token)
    .then(response => {
      setCards(response.reverse())
      setChange(true)
    })
    .catch(err => console.log(err))
    } 
    fetchCards()
  }, [change]))


  // useEffect(() => {
  //   async function fetchCards(){
  //     const token =  await AsyncStorage.getItem('token')
  //   await getCards(token)
  //   .then(response => {
  //     setCards(response.reverse())
  //     // setCards(cards.reverse())
  //     setChange(true)
  //   })
  //   .catch(err => console.log(err))
  //   } 
  //   fetchCards()
  // }, [change])



  return (
    <View style={styles.container}>
      <ScrollView
        style={{flex: 1, width: '80%'}}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
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
        </ScrollView>
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