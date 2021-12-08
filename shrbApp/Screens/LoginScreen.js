import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import getToken from '../api-service/api-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './components/context';



const LoginStack = createNativeStackNavigator();

const LoginStackScreen = ({navigation}) => (
  <LoginStack.Navigator screenOptions={{
    headerShown: false
  }} >
          <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
  </LoginStack.Navigator>
  );



const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [token, setToken] = useState('')

    const { signIn } = React.useContext(AuthContext);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardStatus(false);
        });

        return () => {
        showSubscription.remove();
        hideSubscription.remove();
        };
    }, []);

    const submitForm = () => {
      getToken(username, password)
      .then(response => {
        setToken(response.access)
      })
      .then(console.log(token))
      AsyncStorage.setItem('token', token)
      signIn()
    }
    


    return (
    <TouchableWithoutFeedback onPress={ () => {
        Keyboard.dismiss()
    }}>
    <View style={styles.container} >
        {(!keyboardStatus) ? <Image style={styles.image} source ={require("../assets/sablogo.png")}/> : null}
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}/>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}/>
        <TouchableOpacity style={styles.loginBtn} onPress={submitForm}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    )}




const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#5e71fc',
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      image: {
        
        marginBottom: 70,
        width: 150,
        height: 150,
        
      },
    
      inputView: {
      
      },
    
      TextInput: {
        backgroundColor: "#FFF",
        borderRadius: 30,
        width: "60%",
        height: 45,
        marginBottom: 20,
        height: 50,
        // flex: 1,
        padding: 10,
        paddingLeft: 20,
        
      },
      
      loginBtn: {
        width: "40%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FFF",
      },
})

export default LoginStackScreen