import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={HomeScreen}/>
        <Stack.Screen  component={WelcomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;