import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Caption, Drawer} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function DrawerContent (props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView { ... props}>
                <View style={styles.drawerContent}>



                        <View style={{flexDirection:'row', margin: 10}}>
                          <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Caption style={styles.caption}>@saburlyteam</Caption>
                          </View>
                        
                        
                        </View>

                        <Drawer.Section style={styles.bottomDrawerSection}>
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                     name="home-outline"
                                     color={color}
                                     size={size}
                                    />
                                     )}
                                label="Show Cards"
                                onPress={() => {props.navigation.navigate('Cards list')}}
                              />
                            <DrawerItem
                                icon={({color, size}) => (
                                    <Icon
                                     name="card-outline"
                                     color={color}
                                     size={size}
                                     />
                                  )}
                                label="New Card"
                                onPress={() => {props.navigation.navigate('New card')}}
                              />
                      
                        </Drawer.Section>
                  </View>                
                
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                icon={({color, size}) => (
                    <Icon
                    name="exit-to-app"
                    color={color}
                    size={size}
                    />
                    )}
                    label="Logout"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      marginLeft: '35%',
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });