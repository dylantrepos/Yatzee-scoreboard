import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './views'
import Game from './views/Game';
import AddResult from './views/AddResult';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="AddResult" component={AddResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
