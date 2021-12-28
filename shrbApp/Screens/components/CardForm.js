import React, {useState} from "react";
import {Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateCard from "../../api-service/api-updatecard";

const CardForm = ({card, setShowPop, onRefresh}) => {
    const {date_from, date_to, description, id} = card
    const [udescription, setUDescription] = useState(description);
    const [udate_from, setUDateFrom] = useState(date_from);
    const [udate_to, setUDateTo] = useState(date_to);


    const update = async() => {
        const token = await AsyncStorage.getItem('token')
        await updateCard(token, udate_from, udate_to, udescription, id)
    }

    return(
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss()
        }}>
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.content}>
                <Text style={styles.title}>
                    Date from :
                </Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={udate_from} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="Select date"
                    format="YYYY-MM-DD"
                    minDate="2021-01-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        //display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                    },
                    dateInput: {
                        marginLeft: 36,
                    },
                    }}
                    onDateChange={(date) => {
                        setUDateFrom(date)
                    }}
                />
                
            <Text style={styles.title}>
            Date to :
            </Text>
            <DatePicker
            style={styles.datePickerStyle}
            date={udate_to} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="2021-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
                },
                dateInput: {
                marginLeft: 36,
                },
            }}
            onDateChange={(date) => {
                setUDateTo(date)
            }}
            />
            <TextInput
            style={styles.input}
            placeholder="Description..."
            value={udescription}
            onChangeText={(text) => {
                setUDescription(text)    
            }}
        />

            <TouchableOpacity style={styles.button} onPress={() => {
                update()
                setShowPop(false)
                setTimeout(() => {onRefresh()}, 1000)
                }}>
                <Text style={styles.textbutton}>Save</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
)
}

const styles= StyleSheet.create({
    container: {
        marginTop: 0,
        width: '100%',
        alignItems: 'center',
      },
      
    content: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center'
    },

    title: {
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 3,

    },

    datePickerStyle: {
        width: 250,
        marginTop: 10,
        borderRadius: 15
    },

    input: {
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        padding:5,
        width: 250,
        
      },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#5e71fc',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 30,
        width: 100,
        height: 45        
      },
      textbutton: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
})

export default CardForm