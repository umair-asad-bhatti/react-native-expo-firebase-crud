
import * as React from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Home Page" }} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: "Detail Page" }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Text style={{ fontSize: 40 }}>Global text</Text>
    </>
  );
}

export default App;