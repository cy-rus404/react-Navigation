import React from 'react';
import { useState } from 'react';
import { Text, Button,StyleSheet,View, TextInput, Image } from 'react-native';

function WelcomeScreen({navigation}) {
    const [email, setEmail]=useState('')
    const [password, setPassword]= useState('')
    const handleSubmit = async () =>{
        if(email && password){
            try{

            }catch(err){
                console.log('got error', err.message);
            }
        }
    }
    
    return (
        <View style={styles.container}>
                        <Image style={{alignSelf:'center',width:170,height:170,bottom:70}} source={require('../assets/login.png')}/>
            <View style={styles.form}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder='Enter Username' value={email} onChangeText={value=>setEmail(value)}/>
                <Text style={styles.label}secureTextEntry>Password</Text>
                <TextInput style={styles.input} placeholder='Enter Password' value={password} onChangeText={value=>setPassword(value)} secureTextEntry></TextInput>
                <Button title='Login' onPress={()=>{navigation.navigate('Class')}}/>
            </View>
        </View>
        
    
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:20,
        backgroundColor:"#89cff0",
    },
    text:{
        fontSize:30,
        fontWeight:'bold',

    },
    form:{
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold',
    },
    input:{
        height:40,
        borderColor:"#ddd",
        borderWidth:1,
        marginBottom:15,
        padding:10,
        borderRadius:5,
    }
})

export default WelcomeScreen;

