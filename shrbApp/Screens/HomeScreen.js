import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';
import Card from './components/Card';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
  }} >
          <HomeStack.Screen name="Cards" component={HomeScreen} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardList: {
    marginTop: 30,
    flex: 1,
    overflow: 'hidden',

  },
});

export default HomeStackScreen