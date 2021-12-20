import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import getToken from '../api-service/api-login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from './components/context';
import checkCredentials from '../api-service/credentials';
import { Feather } from '@expo/vector-icons';



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
    const [show, setShow] = useState(false)
    

    const { signIn, throwAlert } = useContext(AuthContext);

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
      if(username === '' || password === ''){
        Alert.alert(
          "Credentials required!",
          "Enter username and password.."
        ),
        [{text: "Okay"}]
      }
      else{
        getToken(username, password)
        .then(response => {
          let truth = checkCredentials(response.access)
          if(truth === true){
            signIn(response.access)
          }
          else{
            Alert.alert(
              "Wrong credentials!",
              "Check username or password.."
            ),
            [{
              text: "Okay"
            }]
          }
        })
      }
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
          value={username}
          placeholderTextColor="#003f5c"
          autoCapitalize = 'none'
          onChangeText={(username) => setUsername(username)}
          />
            
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry={!show}
          onChangeText={(password) => setPassword(password)}  
        />
        <TouchableOpacity onPress={() => setShow(!show)}>
        <Feather name={!show ? 'eye' : 'eye-off'} color='#fff' size={20} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn} onPress={submitForm}>
            <Text sty5le={styles.loginText}>LOGIN</Text>
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