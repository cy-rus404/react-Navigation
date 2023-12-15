import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import ClassScreen from './ClassScreen';
import CourseScreen from './CourseScreen';


function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Welcome'  component={WelcomeScreen}/>
        <Stack.Screen name='Class' component={ClassScreen}/>
        <Stack.Screen name='Course' component={CourseScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;