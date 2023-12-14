import React from 'react';
import { Text, Button,StyleSheet,View } from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome</Text>
            <Button title='click me' onPress={()=> navigation.navigate('Home')}/>
        </View>
        
    
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:30,
        fontWeight:'bold',

    }
})

export default WelcomeScreen;