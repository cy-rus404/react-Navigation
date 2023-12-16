import React from 'react';
import { ScrollView, Text, View, StyleSheet, Box, TouchableOpacity } from 'react-native';

function CourseScreen() {
    return (
        <ScrollView style={styles.contain}>
        <TouchableOpacity style={styles.container}>
            <Text style={{backgroundColor:'#fff',marginTop:80,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',justifyContent:'center',overflow:'hidden'}}>Hello
            </Text>
            
            <Text style={{backgroundColor:'#fff',marginTop:80,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',overflow:'hidden'}}>Hello
            </Text>

        </TouchableOpacity>
        <View style={styles.container}>
            <Text style={{backgroundColor:'#fff',marginTop:30,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',justifyContent:'center',overflow:'hidden'}}>Hello
            </Text>
            <Text style={{backgroundColor:'#fff',marginTop:30,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',overflow:'hidden'}}>Hello
            </Text>

        </View>
        <View style={styles.container}>
            <Text style={{backgroundColor:'#fff',marginTop:30,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',justifyContent:'center',overflow:'hidden'}}>Hello
            </Text>
            <Text style={{backgroundColor:'#fff',marginTop:30,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',alignItems:'center',overflow:'hidden'}}>Hello
            </Text>

        </View>
        <View style={styles.container}>
            <Text style={{backgroundColor:'#fff',marginTop:30,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',justifyContent:'center',overflow:'hidden'}}>Hello
            </Text>
            <Text style={{backgroundColor:'#fff',marginTop:30,width:170,height:150,marginLeft:20,borderRadius:20,textAlign:'center',alignItems:'center',overflow:'hidden'}}>Hello
            </Text>

        </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    contain:{
        flex:1,
        backgroundColor:"#98cff0",
    },
    container:{
        flexDirection:'row',     
    },
})
export default CourseScreen;