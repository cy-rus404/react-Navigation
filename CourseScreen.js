import React from 'react';
import { ScrollView, Text, View,StyleSheet } from 'react-native';

function CourseScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.course}>
                <Text>Hello</Text>
                
                  </View>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#89cff0',
    },
    course:{
        flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff',marginTop:70,height:150,width:170,marginLeft:20,
    }
})
export default CourseScreen;