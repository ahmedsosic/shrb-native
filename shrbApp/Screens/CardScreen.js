import React,{useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CardStack = createNativeStackNavigator();

const CardStackScreen = ({navigation}) => (
  <CardStack.Navigator screenOptions={{
    headerShown: false
  }}>
          <CardStack.Screen name="New card" component={CardScreen} />
  </CardStack.Navigator>
  );


const CardScreen = ({navigation}) => {

    const [description, setDescription] = useState('');
    const [date_from, setDateFrom] = useState('');
    const [date_to, setDateTo] = useState('');

    const resetVal = () => {
        setDescription('')
        setDateFrom('')
        setDateTo('')
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
                    date={date_from} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="Select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2021"
                    maxDate="01-01-2025"
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
                    setDateFrom(date);
                    }}
                />
                
            <Text style={styles.title}>
            Date to :
            </Text>
            <DatePicker
            style={styles.datePickerStyle}
            date={date_to} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="Select date"
            format="DD-MM-YYYY"
            minDate="01-01-2021"
            maxDate="01-01-2025"
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
                setDateTo(date);
            }}
            />
            <TextInput
            style={styles.input}
            placeholder="Description..."
            onChangeText={setDescription}
            value={description}
            
        />
        <TouchableOpacity style={styles.button} onPress={() => {
            console.log(description, date_from, date_to)
            resetVal()
            }}>
            <Text style={{color: 'white', fontSize: 18}}>SAVE</Text>
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
        flex: 1,
        marginBottom: 2,
        backgroundColor: '#5e71fc',
        width: '100%',
        alignItems: 'center',
      },
      
    content: {
        backgroundColor: 'white',
        width: '80%',
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
        margin:20,
        marginTop: 10,
        borderRadius: 15
    },

    input: {
        height: 40,
        marginTop: 50,
        borderWidth: 1,
        padding:5,
        width: 250,
        
      },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        marginTop: 50,
        backgroundColor: '#5e71fc',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 30,
        width: '30%',
        height: '10%',        
      },
})

export default CardStackScreen