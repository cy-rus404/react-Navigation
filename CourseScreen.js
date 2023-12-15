import React from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';

function CourseScreen() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.list}>
            <Text style={styles.txt}>Hi</Text>
            <Text style={styles.txt}>Hi</Text>



        </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#89cff0'
    },
    list:{
        flexDirection:'row',
        justifyContent:'center',
        
    },
    txt:{
        marginTop:80,
        margin:20,
        backgroundColor:"#fff",
        height:120,
        width:160,
        textAlign:'center',
        
    }
})
export default CourseScreen;