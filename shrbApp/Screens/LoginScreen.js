import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState(false);

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

    return (
    <TouchableWithoutFeedback onPress={ () => {
        Keyboard.dismiss()
    }}>
    <View style={styles.container} >
        {(!keyboardStatus) ? <Image style={styles.image} source ={require("../assets/sablogo.png")}/> : null}
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}/>
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    )}




const styles = StyleSheet.create({
    container: {
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
        backgroundColor: "#FFF",
        borderRadius: 30,
        width: "60%",
        height: 45,
        marginBottom: 20,
      },
    
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        width: '40%'
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

export default LoginScreen