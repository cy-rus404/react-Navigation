import React from 'react';
import { Text, Button,StyleSheet,View } from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button title='Click Me' onPress={()=>navigation.navigate('Welcome')}/>
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

export default HomeScreen;