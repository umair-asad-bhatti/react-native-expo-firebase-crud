
import * as React from 'react';
import { Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import AddRecord from './screens/AddRecord';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle={'auto'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddRecord" component={AddRecord} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

export default App;