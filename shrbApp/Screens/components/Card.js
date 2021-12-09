import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Card = ({card}) => {
    const {date_from, date_to, description} = card
    return(
        <View style={styles.container}>
            <Text style={styles.field}>Date from: <Text style={styles.props}>{date_from}</Text></Text>
            <Text style={styles.field}>Date to: <Text style={styles.props}>{date_to}</Text></Text>
            <Text style={styles.field}>Description: <Text style={styles.props}>{description}</Text></Text>
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