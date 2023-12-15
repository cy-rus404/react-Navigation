import React from 'react';
import { Button,View,Text, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';

function ClassScreen({navigation}) {
    return (
<ScrollView style={styles.class}>
    <View style={styles.container}>
        <Text style={styles.txt}>
            What Grade Are You
        </Text>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Course')}>
            <Text style={styles.lists}>Grade 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.lists}>Grade 10</Text>
        </TouchableOpacity>
    </View>
</ScrollView>
        );
}
const styles = StyleSheet.create({
    class:{
        backgroundColor:'#89cff0'
    },
    txt:{
        alignSelf:'center',
        marginTop:50,
        fontWeight:'bold',
        fontSize:30,
    },
    list:{
        backgroundColor:'#fff',
        marginTop:30,
        height:80,
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:20,
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },
    lists:{
        fontWeight:'bold',
        fontSize:30,
    }
})

export default ClassScreen;