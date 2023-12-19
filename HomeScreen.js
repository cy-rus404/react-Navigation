import React from 'react';
import { Text, Button, StyleSheet, View, Image } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100,top:20,left:20,borderRadius:20,transform:[
                    {translateX: 20},{translateY:50},{rotate:'-15deg'}
                ] }} source={require('../react-Navigation/assets/hero1.jpg')} />
                <Image source={require('../react-Navigation/assets/hero2.jpg')}
        style={{
          width: 100,
          height: 100,
          left: 100,
          borderRadius: 20,
          position: 'absolute',
          transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-5deg" }

          ]
        }}
      />
      <Image source={require('../react-Navigation/assets/hero2.jpg')}
        style={{
          width: 100,
          height: 100,
          top: 170,
          left: -40,
          borderRadius: 20,
          position: 'absolute',
          transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "15deg" }

          ]
        }}
      />
      <Image source={require('../react-Navigation/assets/hero3.jpg')}
        style={{
          width: 200,
          height: 200,
          left: 100,
          top: 130,
          borderRadius: 20,
          position: 'absolute',
          transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-15deg" }

          ]
        }}
      />

<View style={{flex:1}}>
        <Text style={{
          fontSize: 50,
          fontWeight: 800,
          color: '#fff',
          left: 20,
          top: 430,
        }}>Let's Get</Text>
        <Text style={{
          fontSize: 46,
          fontWeight: 800,
          color: '#fff',
          left: 20,
          top: 430,
        }}>Started</Text>
        <Text
        style={{
          color:'#fff',
          left:20,
          top:480,
          fontSize:20
        }}
        >Connect with each other with chatting</Text>
         <Text
        style={{
          color:'#fff',
          left:20,
          top:490,
          fontSize:20
        }}
        >Calling, Enjoy Safe and private texting</Text>
      </View>
      <View style={{ height: 50, width:300, alignSelf:'center' }}>
                <Button title="LOG IN" color="#000" onPress={()=>navigation.navigate('Welcome')}/>
       </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#89cff0',
        flex: 1,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',

    }
})

export default HomeScreen;