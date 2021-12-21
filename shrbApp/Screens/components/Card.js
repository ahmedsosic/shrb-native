import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import deleteCard from "../../api-service/api-deleteard";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = ({card}) => {
    const {date_from, date_to, description, id, setChange} = card
    const [options, showOptions] = useState(false)

    const cardAlert = (id) => {
        Alert.alert(
            "Delete card",
            "Are you sure? Card will be permanently deleted!",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => delCard(id) }
            ]
          )
    }


    const delCard = async (id) => { // delete Card
        const token = await AsyncStorage.getItem('token')
        deleteCard(token, id)
        return () => setChange(false)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onLongPress={() => showOptions(!options)}>
            <Text style={styles.field}>Date from: <Text style={styles.props}>{date_from}</Text></Text>
            <Text style={styles.field}>Date to: <Text style={styles.props}>{date_to}</Text></Text>
            <Text style={styles.field}>Description: <Text style={styles.props}>{description}</Text></Text>
            </TouchableOpacity>
            {options ? (<View style={styles.options}>
                <TouchableOpacity onPress={() => cardAlert(id)}>
                    <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="edit" size={24} color="black" />
                </TouchableOpacity>
            </View>) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 15,
        marginTop: 20,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 16
    },

    options: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-around"
    },

    field: {
        maxWidth: '90%',
        marginLeft: 10,
        color: 'black',
        fontWeight: 'bold',
        padding: 5,
        fontSize: 20,
        flexWrap: "wrap",
    },
    props: {
        fontWeight: "normal",
        padding: 5,
    }
})

export default Card