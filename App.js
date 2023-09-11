
import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'
import Detail from './screens/detail'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ title: "Home Page" }} />
          <Stack.Screen name="Detail" component={Detail} options={{ title: "Detail Page" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;